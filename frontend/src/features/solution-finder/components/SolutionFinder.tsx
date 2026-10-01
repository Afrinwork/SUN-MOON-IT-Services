"use client";

import { useEffect, useRef, useState } from "react";
import type { FaqItem } from "@/components/ui/faq/FaqList";
import { solutions } from "@/content/solution-finder/solutions";
import { AssistantBubble, TypingIndicator, UserBubble } from "@/features/solution-finder/components/ChatBubbles";
import { ChoiceList } from "@/features/solution-finder/components/ChoiceList";
import { QuickQuestions } from "@/features/solution-finder/components/QuickQuestions";
import { SolutionResult } from "@/features/solution-finder/components/SolutionResult";
import { buildConversation, type Answers, type Step } from "@/features/solution-finder/conversation";

type Thinking = "flow" | "qa" | null;

/** Geführter Lösungs-Assistent: fest hinterlegte Antworten, keine externe KI, keine Datenübertragung. */
export function SolutionFinder() {
  const [needId, setNeedId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [asked, setAsked] = useState<FaqItem[]>([]);
  const [thinking, setThinking] = useState<Thinking>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const { messages, pendingStep, selection } = buildConversation(needId, answers);
  const visibleMessages = thinking === "flow" ? messages.slice(0, -1) : messages;

  const pause = (kind: Exclude<Thinking, null>) => {
    setThinking(kind);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setThinking(null), reduced ? 0 : 850);
  };

  const chooseNeed = (id: string) => { setNeedId(id); pause("flow"); };
  const answer = (step: Step, id: string) => { setAnswers((prev) => ({ ...prev, [step.id]: id })); pause("flow"); };
  const ask = (item: FaqItem) => { setAsked((prev) => [...prev, item]); pause("qa"); };
  const restart = () => { setNeedId(null); setAnswers({}); setAsked([]); setThinking(null); };

  useEffect(() => {
    if (needId) endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [needId, answers, asked.length, thinking]);

  return (
    <div className="space-y-4" aria-live="polite">
      {visibleMessages.map((message, index) =>
        message.from === "user"
          ? <UserBubble key={index}>{message.text}</UserBubble>
          : <AssistantBubble key={index}>{message.text} {message.question && <strong>{message.question}</strong>}</AssistantBubble>,
      )}

      {thinking === "flow" && <TypingIndicator />}
      {!thinking && !needId && <ChoiceList choices={solutions} onSelect={chooseNeed} />}
      {!thinking && pendingStep && <ChoiceList choices={pendingStep.choices} onSelect={(id) => answer(pendingStep, id)} />}

      {selection && thinking !== "flow" && (
        <>
          <SolutionResult selection={selection} onRestart={restart} />
          {asked.map((item, index) => (
            <div key={item.question} className="space-y-4">
              <UserBubble>{item.question}</UserBubble>
              {thinking === "qa" && index === asked.length - 1 ? <TypingIndicator label="Assistent schreibt …" /> : <AssistantBubble>{item.answer}</AssistantBubble>}
            </div>
          ))}
          {!thinking && <QuickQuestions asked={asked} onAsk={ask} />}
        </>
      )}
      <div ref={endRef} />
    </div>
  );
}
