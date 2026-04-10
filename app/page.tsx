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
      <footer className="footer">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <span>Résumé demo — not an official page.</span>
          <span>Built with Next.js · Design by UI UX Pro Max principles</span>
        </div>
      </footer>
    </main>
  );
}
