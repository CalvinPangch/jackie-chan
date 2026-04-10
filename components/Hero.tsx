import Image from "next/image";
import { bio } from "@/data/bio";
import { films } from "@/data/films";

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

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-top">
          <div>
            <div>Résumé</div>
            <div>{bio.stageName}</div>
          </div>
          <div>
            <div>Est. {firstYear}</div>
            <div>{years}+ years on screen</div>
          </div>
        </div>

        <div className="hero-split">
          <h1 className="hero-name">
            <span className="first">Jackie</span>
            <span className="last">Chan</span>
          </h1>
          <figure className="hero-portrait">
            <Image
              src="/jackie-chan.jpg"
              alt="Portrait of Jackie Chan at the Cannes Film Festival, 2013"
              width={677}
              height={960}
              priority
              sizes="(max-width: 900px) 60vw, 320px"
            />
            <figcaption>Cannes, 2013</figcaption>
          </figure>
        </div>

        <div className="hero-meta">
          <p className="hero-roles">
            <strong>Actor.</strong> <strong>Martial artist.</strong>{" "}
            <strong>Stunt performer.</strong> <strong>Director.</strong>{" "}
            <strong>Producer.</strong> A six-decade career of breaking bones,
            breaking records, and redefining what an action movie can look
            like.
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
              {title} <span>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
