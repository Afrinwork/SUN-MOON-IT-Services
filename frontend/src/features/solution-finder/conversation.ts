import { budgetQuestion, budgets, careOptions, careQuestion } from "@/content/solution-finder/budget-care";
import { solutions } from "@/content/solution-finder/solutions";
import { teamQuestion, teamSizes } from "@/content/solution-finder/team-sizes";
import { timingQuestion, timings } from "@/content/solution-finder/timings";
import type { Budget, CareOption, FollowUpAnswer, Solution, TeamSize, Timing } from "@/features/solution-finder/types";

export const SKIP = "skip";
export type Choice = { id: string; label: string; reply?: string };
export type Step = { id: string; question: string; choices: Choice[] };
export type Message = { from: "bot" | "user"; text: string; question?: string };
export type Answers = Record<string, string>;

/** Abwechslung, damit sich der Assistent nicht wie ein Formular anfühlt. */
const acknowledgements = ["Verstanden.", "Alles klar.", "Danke für die Info!", "Sehr gut.", "Perfekt.", "Notiert."];
const skipReplies = ["Kein Problem, das klären wir später.", "Gern – überspringen wir.", "Alles klar, weiter geht's."];

export const greeting = "Hallo! Ich bin der Sun & Moon Assistent und helfe Ihnen, die passende Lösung zu finden.";
export const firstQuestion = "Was brauchen Sie?";

export function stepsFor(solution: Solution): Step[] {
  const [first, second] = solution.followUps;
  return [
    { id: first.id, question: first.question, choices: first.answers },
    { id: second.id, question: second.question, choices: second.answers },
    { id: "team", question: teamQuestion, choices: teamSizes },
    { id: "budget", question: budgetQuestion, choices: budgets },
    { id: "care", question: careQuestion, choices: careOptions },
    { id: "timing", question: timingQuestion, choices: timings },
  ];
}

export type Selection = {
  solution: Solution;
  main?: FollowUpAnswer;
  detail?: FollowUpAnswer;
  team?: TeamSize;
  budget?: Budget;
  care?: CareOption;
  timing?: Timing;
  /** Alle beantworteten Fragen als Text – z. B. für die WhatsApp-Nachricht. */
  summary: string[];
};

/** Baut Gesprächsverlauf, offene Frage, Fortschritt und – wenn fertig – die Auswahl. */
export function buildConversation(needId: string | null, answers: Answers) {
  const solution = solutions.find((s) => s.id === needId) ?? null;
  const messages: Message[] = [{ from: "bot", text: greeting, question: firstQuestion }];
  if (!solution) return { messages, pendingStep: null, selection: null, progress: { done: 0, total: 7 } };

  messages.push({ from: "user", text: solution.label });
  const steps = stepsFor(solution);
  const total = steps.length + 1;
  let reply = solution.reply;
  for (const [index, step] of steps.entries()) {
    messages.push({ from: "bot", text: reply, question: step.question });
    const id = answers[step.id];
    if (!id) return { messages, pendingStep: step, selection: null, progress: { done: index + 1, total } };
    if (id === SKIP) {
      messages.push({ from: "user", text: "Überspringen" });
      reply = skipReplies[index % skipReplies.length];
      continue;
    }
    const choice = step.choices.find((c) => c.id === id);
    messages.push({ from: "user", text: choice?.label ?? id });
    reply = [acknowledgements[index % acknowledgements.length], choice?.reply].filter(Boolean).join(" ");
  }
  messages.push({ from: "bot", text: reply, question: "Hier ist Ihre persönliche Übersicht:" });

  const pick = <T extends { id: string }>(list: T[], stepId: string) => list.find((item) => item.id === answers[stepId]);
  const [first, second] = solution.followUps;
  const summary = steps.flatMap((step) => {
    const choice = step.choices.find((c) => c.id === answers[step.id]);
    return choice ? [choice.label] : [];
  });
  const selection: Selection = {
    solution,
    main: pick(first.answers, first.id),
    detail: pick(second.answers, second.id),
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
