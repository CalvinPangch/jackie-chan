import Image from "next/image";
import { bio } from "@/data/bio";
import { films } from "@/data/films";

import jackieImage from "@/public/jackie-chan.jpg";

const MARQUEE_TITLES = [
  "Drunken Master",
  "Police Story",
  "Project A",
  "Armour of God",
  "Rumble in the Bronx",
  "Rush Hour",
  "Who Am I?",
  "The Legend of Drunken Master",
  "Shanghai Noon",
  "The Karate Kid",
  "Kung Fu Panda",
  "The Foreigner",
  "Ride On",
];

export function Hero() {
  const firstYear = Math.min(...films.map((f) => f.year));
  const years = new Date().getFullYear() - firstYear;
  const directedCount = films.filter((film) =>
    film.role?.toLowerCase().includes("director"),
  ).length;

  return (
    <section className="hero" id="top">
      <div className="container">
        <header className="hero-top">
          <div className="hero-mark">
            <span className="hero-mark-seal" aria-hidden="true">
              JC
            </span>
            <div>
              <div>Temple Red Archive</div>
              <div>{bio.stageName}</div>
            </div>
          </div>
          <nav className="hero-nav" aria-label="Section navigation">
            <a href="#origins">Origins</a>
            <a href="#discipline">Discipline</a>
            <a href="#honors">Honors</a>
            <a href="#legacy">Legacy</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-split">
          <div className="hero-copy">
            <p className="hero-kicker">Master of motion. Keeper of impact.</p>
            <h1 className="hero-name">
              <span className="first">Jackie</span>
              <span className="last">Chan</span>
            </h1>
            <p className="hero-intro">
              From Peking Opera training to global screen mythology, Chan
              forged a fighting style that turned agility, danger, humor, and
              discipline into its own cinema language.
            </p>
            <div className="hero-actions">
              <a href="#legacy" className="hero-button hero-button-primary">
                Enter the filmography
              </a>
              <a href="#origins" className="hero-button hero-button-secondary">
                Read the legend
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <figure className="hero-portrait">
              <Image
                src={jackieImage}
                alt="Portrait of Jackie Chan at the Cannes Film Festival, 2013"
                priority
                sizes="(max-width: 900px) 60vw, 320px"
              />
              <figcaption>Cannes, 2013</figcaption>
            </figure>
            <div className="hero-panel" aria-label="Career highlights">
              <div>
                <span>Screen debut</span>
                <strong>{firstYear}</strong>
              </div>
              <div>
                <span>Years active</span>
                <strong>{years}+</strong>
              </div>
              <div>
                <span>Directed works</span>
                <strong>{directedCount}+</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <p className="hero-roles">
            <strong>Actor.</strong> <strong>Martial artist.</strong>{" "}
            <strong>Stunt architect.</strong> <strong>Director.</strong>{" "}
            <strong>Producer.</strong> A six-decade body of work that fused
            slapstick rhythm, breathtaking choreography, and practical risk into
            one unmistakable screen signature.
          </p>
          <div className="hero-facts">
            <div>{bio.legalName}</div>
            <div>Born {bio.born.split(",")[0]}</div>
            <div>{bio.based}</div>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_TITLES, ...MARQUEE_TITLES].map((title, i) => (
            <span key={i} className={i % 3 === 0 ? "mark" : undefined}>
              {title} <span className="marquee-separator">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
