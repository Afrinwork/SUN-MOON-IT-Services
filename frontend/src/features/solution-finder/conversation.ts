import { budgetQuestion, budgets, careOptions, careQuestion } from "@/content/solution-finder/budget-care";
import { solutions } from "@/content/solution-finder/solutions";
import { teamQuestion, teamSizes } from "@/content/solution-finder/team-sizes";
import { timingQuestion, timings } from "@/content/solution-finder/timings";
import { detectFeatures } from "@/features/solution-finder/estimate";
import type { Budget, CareOption, FollowUpAnswer, Solution, TeamSize, Timing } from "@/features/solution-finder/types";

export const SKIP = "skip";
/** Antwort bei der Mehrfachauswahl, wenn nichts dazukommen soll. */
export const NONE = "none";
export type Choice = { id: string; label: string; reply?: string };
/** single = eine Antwort, multi = mehrere Bereiche (Ids mit Komma), text = Freitext. */
export type Step = { id: string; question: string; choices: Choice[]; kind: "single" | "multi" | "text" };
export type Message = { from: "bot" | "user"; text: string; question?: string };
export type Answers = Record<string, string>;

/** Abwechslung, damit sich der Assistent nicht wie ein Formular anfühlt. */
const acknowledgements = ["Verstanden.", "Alles klar.", "Danke für die Info!", "Sehr gut.", "Okay.", "Notiert."];
const skipReplies = ["Kein Problem, das klären wir später.", "Gern, dann überspringen wir das.", "Alles klar, weiter geht's."];

export const greeting = "Hallo! Ich bin der Sun & Moon Assistent und helfe Ihnen, die passende Lösung zu finden.";
export const firstQuestion = "Womit fangen wir an?";

export function stepsFor(solution: Solution): Step[] {
  const [first, second] = solution.followUps;
  return [
    { id: first.id, question: first.question, choices: first.answers, kind: "single" },
    { id: second.id, question: second.question, choices: second.answers, kind: "single" },
    { id: "extras", question: "Soll noch etwas dazukommen? Sie können mehrere Bereiche antippen.", choices: solutions.filter((s) => s.id !== solution.id), kind: "multi" },
    { id: "wishes", question: "Haben Sie besondere Wünsche? Schreiben Sie einfach, was Ihnen wichtig ist.", choices: [], kind: "text" },
    { id: "team", question: teamQuestion, choices: teamSizes, kind: "single" },
    { id: "budget", question: budgetQuestion, choices: budgets, kind: "single" },
    { id: "care", question: careQuestion, choices: careOptions, kind: "single" },
    { id: "timing", question: timingQuestion, choices: timings, kind: "single" },
  ];
}

export type Selection = {
  solution: Solution;
  main?: FollowUpAnswer;
  detail?: FollowUpAnswer;
  /** Weitere gewählte Bereiche (Mehrfachauswahl). */
  extras: Solution[];
  /** Freitext mit besonderen Wünschen – bleibt im Browser. */
  wishes: string;
  team?: TeamSize;
  budget?: Budget;
  care?: CareOption;
  timing?: Timing;
  /** Alle beantworteten Fragen als Stichworte – z. B. für die WhatsApp-Nachricht. */
  summary: string[];
};

const extrasFrom = (value: string | undefined) => (value && value !== NONE && value !== SKIP ? value.split(",") : [])
  .map((id) => solutions.find((s) => s.id === id)).filter((s) => s !== undefined);

/** Was der Besucher „sagt“ und was der Assistent darauf antwortet. */
function exchange(step: Step, value: string, index: number): { user: string; reply: string; tags: string[] } {
  const ack = acknowledgements[index % acknowledgements.length];
  if (step.kind === "multi") {
    const extras = extrasFrom(value);
    if (extras.length === 0) return { user: "Nein, das reicht", reply: `${ack} Dann bleiben wir bei einem Thema.`, tags: [] };
    const labels = extras.map((s) => s.label);
    return { user: labels.join(" + "), reply: `${ack} ${extras.length === 1 ? "Ein weiterer Bereich kommt" : `${extras.length} weitere Bereiche kommen`} mit in die Übersicht und in den Preis.`, tags: labels };
  }
  if (step.kind === "text") {
    const found = detectFeatures(value).map((f) => f.label);
    const reply = found.length
      ? `Danke! Herausgelesen habe ich: ${found.join(", ")}. Das rechne ich ungefähr mit ein.`
      : "Danke, das nehme ich mit. Den Aufwand dafür schätzen wir im Gespräch genauer.";
    return { user: value, reply, tags: found };
  }
  const choice = step.choices.find((c) => c.id === value);
  return { user: choice?.label ?? value, reply: [ack, choice?.reply].filter(Boolean).join(" "), tags: choice ? [choice.label] : [] };
}

/** Baut Gesprächsverlauf, offene Frage, Fortschritt und – wenn fertig – die Auswahl. */
export function buildConversation(needId: string | null, answers: Answers) {
  const solution = solutions.find((s) => s.id === needId) ?? null;
  const messages: Message[] = [{ from: "bot", text: greeting, question: firstQuestion }];
  if (!solution) return { messages, pendingStep: null, selection: null, progress: { done: 0, total: 9 } };

  messages.push({ from: "user", text: solution.label });
  const steps = stepsFor(solution);
  const total = steps.length + 1;
  const summary: string[] = [];
  let reply = solution.reply;
  for (const [index, step] of steps.entries()) {
    messages.push({ from: "bot", text: reply, question: step.question });
    const value = answers[step.id];
    if (!value) return { messages, pendingStep: step, selection: null, progress: { done: index + 1, total } };
    if (value === SKIP) {
      messages.push({ from: "user", text: "Überspringen" });
      reply = skipReplies[index % skipReplies.length];
      continue;
    }
    const turn = exchange(step, value, index);
    messages.push({ from: "user", text: turn.user });
    summary.push(...turn.tags);
    reply = turn.reply;
  }
  messages.push({ from: "bot", text: reply, question: "Hier ist Ihre persönliche Übersicht:" });

  const pick = <T extends { id: string }>(list: T[], stepId: string) => list.find((item) => item.id === answers[stepId]);
  const [first, second] = solution.followUps;
  const selection: Selection = {
    solution,
    main: pick(first.answers, first.id),
    detail: pick(second.answers, second.id),
    extras: extrasFrom(answers.extras),
    wishes: answers.wishes && answers.wishes !== SKIP ? answers.wishes : "",
    team: pick(teamSizes, "team"),
    budget: pick(budgets, "budget"),
    care: pick(careOptions, "care"),
    timing: pick(timings, "timing"),
    summary,
  };
  return { messages, pendingStep: null, selection, progress: { done: total, total } };
}

/** Entfernt die zuletzt gegebene Antwort (für „Zurück“). */
export function undoLast(solution: Solution | null, answers: Answers): { answers: Answers; clearNeed: boolean } {
  if (!solution) return { answers, clearNeed: false };
  const answered = stepsFor(solution).filter((s) => answers[s.id]);
  if (answered.length === 0) return { answers: {}, clearNeed: true };
  const next = { ...answers };
  delete next[answered[answered.length - 1].id];
  return { answers: next, clearNeed: false };
}
