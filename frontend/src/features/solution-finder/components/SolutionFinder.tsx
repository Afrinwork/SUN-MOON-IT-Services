"use client";

import { Bot, CheckCheck, History, LockKeyhole, MoreHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FaqItem } from "@/components/ui/faq/FaqList";
import { siteConfig } from "@/config/site.config";
import { topicQuestions } from "@/content/solution-finder/quick-questions";
import { solutions } from "@/content/solution-finder/solutions";
import { AskAnything } from "@/features/solution-finder/components/AskAnything";
import { AssistantBubble, TypingIndicator, UserBubble } from "@/features/solution-finder/components/ChatBubbles";
import { ChoiceList } from "@/features/solution-finder/components/ChoiceList";
import { FinderProgress } from "@/features/solution-finder/components/FinderProgress";
import { MultiChoiceList } from "@/features/solution-finder/components/MultiChoiceList";
import { QuickQuestions } from "@/features/solution-finder/components/QuickQuestions";
import { SolutionResult } from "@/features/solution-finder/components/SolutionResult";
import { WishesInput } from "@/features/solution-finder/components/WishesInput";
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
  const [showHistory, setShowHistory] = useState(false);
  const activeMessageRef = useRef<HTMLDivElement>(null);
  const latestQuestionRef = useRef<HTMLDivElement>(null);

  const solution = solutions.find((s) => s.id === needId) ?? null;
  const { messages, pendingStep, selection, progress } = buildConversation(needId, answers);
  const visibleMessages = thinking === "flow" ? messages.slice(0, -1) : messages;
  const hiddenMessageCount = Math.max(0, visibleMessages.length - 5);
  const displayedMessages = showHistory ? visibleMessages : visibleMessages.slice(-5);
  const status = thinking
    ? "analysiert Ihre Antwort …"
    : selection
      ? "Ihre Übersicht ist fertig"
      : "online · antwortet sofort";

  const pause = (kind: Exclude<Thinking, null>) => {
    setThinking(kind);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setThinking(null), reduced ? 0 : 850);
  };

  const chooseNeed = (id: string) => { setNeedId(id); pause("flow"); };
  const answer = (step: Step, id: string) => { setAnswers((prev) => ({ ...prev, [step.id]: id })); pause("flow"); };
  const back = () => { const result = undoLast(solution, answers); setAnswers(result.answers); if (result.clearNeed) setNeedId(null); };
  const restart = () => { setNeedId(null); setAnswers({}); setAsked([]); setThinking(null); setShowHistory(false); };
  const askItem = (item: FaqItem) => { setAsked((prev) => [...prev, item]); pause("qa"); };
  const askText = (question: string) => askItem({ question, answer: findAnswer(question)?.answer ?? fallback });

  useEffect(() => {
    if (!needId && !asked.length) return;
    const frame = window.requestAnimationFrame(() => {
      const target = asked.length ? latestQuestionRef.current : activeMessageRef.current;
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [needId, answers, asked.length, thinking]);

  return (
    <section className="finder-shell relative overflow-clip rounded-[1.75rem] border border-white/70 bg-white shadow-2xl shadow-primary/18 md:rounded-[2rem]" aria-label="Sun & Moon Lösungs-Assistent">
      <header className="finder-chat-header sticky top-16 z-30 flex items-center gap-3 border-b border-border/80 bg-white/92 px-4 py-3 backdrop-blur-xl md:top-18 md:px-6 md:py-4">
        <span className="relative grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-accent shadow-lg shadow-primary/18">
          <Bot size={21} />
          <i className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-white bg-emerald-500" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-black text-primary md:text-base">Sun &amp; Moon Assistent</span>
          <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-muted md:text-xs"><CheckCheck size={13} className="text-accent-strong" /> {status}</span>
        </span>
        <span className="hidden items-center gap-1.5 rounded-full bg-surface px-3 py-2 text-xs font-bold text-muted sm:flex"><LockKeyhole size={13} /> Lokal &amp; sicher</span>
        <span aria-label="Ihre Antworten bleiben lokal in diesem Browser" title="Ihre Antworten bleiben lokal in diesem Browser" className="grid size-10 shrink-0 place-items-center rounded-full text-muted"><MoreHorizontal size={20} /></span>
      </header>

      <div className="finder-thread relative px-4 pb-4 pt-3 md:px-7 md:pb-7 md:pt-5">
        {needId && <FinderProgress done={progress.done} total={progress.total} onBack={back} onRestart={restart} />}
        <div className="finder-transcript space-y-4 pt-2" aria-live="polite">
          {hiddenMessageCount > 0 && !showHistory && (
            <button type="button" onClick={() => setShowHistory(true)} className="mx-auto flex min-h-10 items-center gap-2 rounded-full border border-border bg-white/90 px-4 text-xs font-bold text-muted shadow-sm transition hover:border-accent hover:text-primary">
              <History size={14} /> {hiddenMessageCount} frühere Nachrichten anzeigen
            </button>
          )}
          {displayedMessages.map((message, index) => {
            const isLatest = index === displayedMessages.length - 1;
            return (
              <div key={`${message.text}-${index}`} ref={isLatest ? activeMessageRef : undefined} className={isLatest ? "finder-active-message scroll-mt-40" : undefined}>
                {message.from === "user"
                  ? <UserBubble>{message.text}</UserBubble>
                  : <AssistantBubble current={isLatest && !thinking}>{message.text} {message.question && <strong className="text-primary">{message.question}</strong>}</AssistantBubble>}
              </div>
            );
          })}

          {thinking === "flow" && <TypingIndicator label="prüft Ihre Auswahl …" />}
          {!thinking && !needId && <ChoiceList choices={solutions} onSelect={chooseNeed} />}
          {!thinking && pendingStep?.kind === "single" && <ChoiceList choices={pendingStep.choices} onSelect={(id) => answer(pendingStep, id)} onSkip={() => answer(pendingStep, SKIP)} />}
          {!thinking && pendingStep?.kind === "multi" && <MultiChoiceList key={needId} choices={pendingStep.choices} onDone={(value) => answer(pendingStep, value)} />}
          {!thinking && pendingStep?.kind === "text" && <WishesInput onDone={(text) => answer(pendingStep, text)} onSkip={() => answer(pendingStep, SKIP)} />}
          {selection && thinking !== "flow" && <SolutionResult selection={selection} />}

          {asked.map((item, index) => (
            <div key={`${item.question}-${index}`} ref={index === asked.length - 1 ? latestQuestionRef : undefined} className="space-y-4 scroll-mt-40">
              <UserBubble>{item.question}</UserBubble>
              {thinking === "qa" && index === asked.length - 1 ? <TypingIndicator /> : <AssistantBubble current={index === asked.length - 1}>{item.answer}</AssistantBubble>}
            </div>
          ))}
        </div>
      </div>

      <div className="finder-composer-dock sticky bottom-0 z-20 border-t border-border/80 bg-white/90 px-3 py-3 backdrop-blur-xl md:px-7 md:py-4">
        {selection && !thinking && (
          <QuickQuestions items={topicQuestions(selection.solution.serviceHref, selection.main?.packageId ?? selection.solution.packageId)} askedQuestions={asked.map((a) => a.question)} onAsk={askItem} />
        )}
        {thinking !== "qa" && <AskAnything onAsk={askText} />}
        <p className="mt-2 text-center text-[0.62rem] font-medium text-muted">Lokale Antworten · keine Anmeldung · keine Speicherung</p>
      </div>
    </section>
  );
}
