import { bio } from "@/data/bio";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-mark" aria-hidden="true">
        JC
      </div>
      <div>
        <h1>{bio.stageName}</h1>
        <p className="hero-sub">
          Actor · Martial Artist · Stunt Performer · Director · Producer
        </p>
        <p className="hero-meta">
          <span>{bio.legalName}</span>
          <span>·</span>
          <span>Born {bio.born}</span>
          <span>·</span>
          <span>{bio.based}</span>
        </p>
      </div>
    </header>
  );
}
