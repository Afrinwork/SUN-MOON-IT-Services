import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { ContactDetails } from "@/features/contact/components/ContactDetails";
import { ContactHero } from "@/features/contact/components/ContactHero";

export const metadata: Metadata = createMetadata({ title: "Kontakt", description: "Kontaktieren Sie Sun & Moon IT Services per WhatsApp, Telefon oder E-Mail und besprechen Sie Ihr digitales Projekt unverbindlich.", path: "/kontakt" });

export default function KontaktPage() {
  return (
    <main>
      <ContactHero />
      <ContactDetails />
    </main>
  );
}
