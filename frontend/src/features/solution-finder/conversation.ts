import { solutions } from "@/content/solution-finder/solutions";
import { teamQuestion, teamSizes } from "@/content/solution-finder/team-sizes";
import { timingQuestion, timings } from "@/content/solution-finder/timings";
import type { FollowUpAnswer, Solution, TeamSize, Timing } from "@/features/solution-finder/types";

export type Choice = { id: string; label: string; reply?: string };
export type Step = { id: "followUp" | "team" | "timing"; question: string; choices: Choice[] };
export type Message = { from: "bot" | "user"; text: string; question?: string };
export type Answers = Partial<Record<Step["id"], string>>;

/** Abwechslung, damit sich der Assistent nicht wie ein Formular anfühlt. */
const acknowledgements = ["Verstanden.", "Alles klar.", "Danke für die Info!", "Sehr gut."];

export const greeting = "Hallo! Ich bin der Sun & Moon Assistent und helfe Ihnen, die passende Lösung zu finden.";
export const firstQuestion = "Was brauchen Sie?";

export function stepsFor(solution: Solution): Step[] {
  return [
    { id: "followUp", question: solution.followUp.question, choices: solution.followUp.answers },
    { id: "team", question: teamQuestion, choices: teamSizes },
    { id: "timing", question: timingQuestion, choices: timings },
  ];
}

export type Selection = { solution: Solution; followUp: FollowUpAnswer; team: TeamSize; timing: Timing };

/** Baut den sichtbaren Gesprächsverlauf aus den bisherigen Antworten. */
export function buildConversation(needId: string | null, answers: Answers) {
  const solution = solutions.find((s) => s.id === needId) ?? null;
  const messages: Message[] = [{ from: "bot", text: greeting, question: firstQuestion }];
  if (!solution) return { messages, pendingStep: null, selection: null };

  messages.push({ from: "user", text: solution.label });
  const steps = stepsFor(solution);
  let reply = solution.reply;
  for (const [index, step] of steps.entries()) {
    messages.push({ from: "bot", text: reply, question: step.question });
    const choice = step.choices.find((c) => c.id === answers[step.id]);
    if (!choice) return { messages, pendingStep: step, selection: null };
    messages.push({ from: "user", text: choice.label });
    reply = [acknowledgements[index % acknowledgements.length], choice.reply].filter(Boolean).join(" ");
  }
  messages.push({ from: "bot", text: reply, question: "Hier ist Ihre persönliche Übersicht:" });

  const selection: Selection = {
    solution,
    followUp: solution.followUp.answers.find((a) => a.id === answers.followUp)!,
    team: teamSizes.find((t) => t.id === answers.team)!,
    timing: timings.find((t) => t.id === answers.timing)!,
  };
  return { messages, pendingStep: null, selection };
}
