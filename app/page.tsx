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
        <div className="container footer-inner">
          <span>Résumé demo — not an official page.</span>
          <span>
            Photo:{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Jackie_Chan_Cannes_2013.jpg"
              rel="noreferrer"
            >
              Georges Biard
            </a>
            , CC BY-SA 3.0
          </span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
