import { bio } from "@/data/bio";

export function Bio() {
  return (
    <section className="section reveal">
      <div className="container">
        <p className="section-eyebrow">Summary</p>
        <div className="bio-grid">
          <blockquote className="pull-quote">
            “Do not let circumstances control you. You change your
            circumstances.”
          </blockquote>
          <div className="bio-body">
            {bio.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
