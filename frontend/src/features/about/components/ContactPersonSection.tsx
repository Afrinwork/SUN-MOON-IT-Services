import { Container } from "@/components/ui/container/Container";
import { ContactPersonCard } from "@/features/about/components/ContactPersonCard";
import { ContactPersonCardMobile } from "@/features/about/components/ContactPersonCardMobile";

/** Eigene Sektion „Ihr Ansprechpartner“ – getrenntes Design für Desktop und Mobil. */
export function ContactPersonSection() {
  return (
    <section id="ansprechpartner" className="bg-surface py-12 md:py-24">
      <Container>
        <div className="hidden md:block"><ContactPersonCard /></div>
        <div className="md:hidden">
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-strong">Ihr Ansprechpartner</p>
          <ContactPersonCardMobile />
        </div>
      </Container>
    </section>
  );
}
