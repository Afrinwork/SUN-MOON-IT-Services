"use client";

import { useEffect, useRef, useState } from "react";
import type { FaqItem } from "@/components/ui/faq/FaqList";
import { siteConfig } from "@/config/site.config";
import { topicQuestions } from "@/content/solution-finder/quick-questions";
import { solutions } from "@/content/solution-finder/solutions";
import { AskAnything } from "@/features/solution-finder/components/AskAnything";
import { AssistantBubble, TypingIndicator, UserBubble } from "@/features/solution-finder/components/ChatBubbles";
import { ChoiceList } from "@/features/solution-finder/components/ChoiceList";
import { FinderProgress } from "@/features/solution-finder/components/FinderProgress";
import { QuickQuestions } from "@/features/solution-finder/components/QuickQuestions";
import { SolutionResult } from "@/features/solution-finder/components/SolutionResult";
import { buildConversation, SKIP, undoLast, type Answers, type Step } from "@/features/solution-finder/conversation";
import { findAnswer } from "@/features/solution-finder/search";

type Thinking = "flow" | "qa" | null;
const fallback = `Dazu habe ich keine feste Antwort hinterlegt – das klären wir am besten persönlich. Schreiben Sie uns per WhatsApp oder rufen Sie an: ${siteConfig.phone}.`;

/** Geführter Lösungs-Assistent: fest hinterlegte Antworten, keine externe KI, keine Datenübertragung. */
export function SolutionFinder() {
  const [needId, setNeedId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [asked, setAsked] = useState<FaqItem[]>([]);
  const [thinking, setThinking] = useState<Thinking>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const solution = solutions.find((s) => s.id === needId) ?? null;
  const { messages, pendingStep, selection, progress } = buildConversation(needId, answers);
  const visibleMessages = thinking === "flow" ? messages.slice(0, -1) : messages;

  const pause = (kind: Exclude<Thinking, null>) => {
    setThinking(kind);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setThinking(null), reduced ? 0 : 850);
  };

  const chooseNeed = (id: string) => { setNeedId(id); pause("flow"); };
  const answer = (step: Step, id: string) => { setAnswers((prev) => ({ ...prev, [step.id]: id })); pause("flow"); };
  const back = () => { const result = undoLast(solution, answers); setAnswers(result.answers); if (result.clearNeed) setNeedId(null); };
  const restart = () => { setNeedId(null); setAnswers({}); setAsked([]); setThinking(null); };
  const askItem = (item: FaqItem) => { setAsked((prev) => [...prev, item]); pause("qa"); };
  const askText = (question: string) => askItem({ question, answer: findAnswer(question)?.answer ?? fallback });

  useEffect(() => {
    if (needId || asked.length) endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [needId, answers, asked.length, thinking]);

  return (
    <div className="space-y-4" aria-live="polite">
      {needId && <FinderProgress done={progress.done} total={progress.total} onBack={back} onRestart={restart} />}
      {visibleMessages.map((message, index) =>
        message.from === "user"
          ? <UserBubble key={index}>{message.text}</UserBubble>
          : <AssistantBubble key={index}>{message.text} {message.question && <strong>{message.question}</strong>}</AssistantBubble>,
      )}

      {thinking === "flow" && <TypingIndicator />}
      {!thinking && !needId && <ChoiceList choices={solutions} onSelect={chooseNeed} />}
      {!thinking && pendingStep && <ChoiceList choices={pendingStep.choices} onSelect={(id) => answer(pendingStep, id)} onSkip={() => answer(pendingStep, SKIP)} />}
      {selection && thinking !== "flow" && <SolutionResult selection={selection} />}

      {asked.map((item, index) => (
        <div key={`${item.question}-${index}`} className="space-y-4">
          <UserBubble>{item.question}</UserBubble>
          {thinking === "qa" && index === asked.length - 1 ? <TypingIndicator label="Assistent schreibt …" /> : <AssistantBubble>{item.answer}</AssistantBubble>}
        </div>
      ))}

      {selection && !thinking && (
        <QuickQuestions items={topicQuestions(selection.solution.serviceHref, selection.main?.packageId ?? selection.solution.packageId)} askedQuestions={asked.map((a) => a.question)} onAsk={askItem} />
      )}
      {thinking !== "qa" && <AskAnything onAsk={askText} />}
      <div ref={endRef} />
    </div>
  );
}
