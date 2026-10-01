"use client";

import { useEffect, useRef, useState } from "react";
import { solutions } from "@/content/solution-finder/solutions";
import { timings } from "@/content/solution-finder/timings";
import { AssistantBubble, TypingIndicator, UserBubble } from "@/features/solution-finder/components/ChatBubbles";
import { ChoiceList } from "@/features/solution-finder/components/ChoiceList";
import { SolutionResult } from "@/features/solution-finder/components/SolutionResult";
import type { Solution, Timing } from "@/features/solution-finder/types";

type Phase = "need" | "thinking-need" | "timing" | "thinking-timing" | "result";

/** Geführter Lösungs-Assistent: fest hinterlegte Antworten, keine externe KI, keine Datenübertragung. */
export function SolutionFinder() {
  const [phase, setPhase] = useState<Phase>("need");
  const [solution, setSolution] = useState<Solution | null>(null);
  const [timing, setTiming] = useState<Timing | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const think = (next: Phase) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setPhase(next), reduced ? 0 : 900);
  };

  const chooseNeed = (id: string) => {
    setSolution(solutions.find((s) => s.id === id) ?? null);
    setPhase("thinking-need");
    think("timing");
  };

  const chooseTiming = (id: string) => {
    setTiming(timings.find((t) => t.id === id) ?? null);
    setPhase("thinking-timing");
    think("result");
  };

  const restart = () => { setSolution(null); setTiming(null); setPhase("need"); };

  useEffect(() => {
    if (phase !== "need") endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [phase]);

  return (
    <div className="space-y-4" aria-live="polite">
      <AssistantBubble>Hallo! Ich helfe Ihnen, die passende Lösung zu finden. <strong>Was brauchen Sie?</strong></AssistantBubble>
      {phase === "need" && <ChoiceList choices={solutions} onSelect={chooseNeed} />}

      {solution && <UserBubble>{solution.label}</UserBubble>}
      {phase === "thinking-need" && <TypingIndicator />}
      {solution && phase !== "thinking-need" && phase !== "need" && (
        <AssistantBubble>{solution.reply} <strong>Wann möchten Sie starten?</strong></AssistantBubble>
      )}
      {phase === "timing" && <ChoiceList choices={timings} onSelect={chooseTiming} />}

      {timing && <UserBubble>{timing.label}</UserBubble>}
      {phase === "thinking-timing" && <TypingIndicator />}
      {phase === "result" && solution && timing && (
        <>
          <AssistantBubble>Hier ist Ihre persönliche Übersicht zu <strong>„{solution.label}“</strong>:</AssistantBubble>
          <SolutionResult solution={solution} timing={timing} onRestart={restart} />
        </>
      )}
      <div ref={endRef} />
    </div>
  );
}
