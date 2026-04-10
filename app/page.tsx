import { Hero } from "@/components/Hero";
import { Bio } from "@/components/Bio";
import { Skills } from "@/components/Skills";
import { Awards } from "@/components/Awards";
import { Filmography } from "@/components/Filmography";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="resume">
      <Hero />
      <Bio />
      <Skills />
      <Awards />
      <Filmography />
      <Contact />
      <footer className="footer muted small">
        Résumé site — built with Next.js. Filmography compiled from public
        sources; dates and titles reflect widely recognized English releases.
      </footer>
    </main>
  );
}
