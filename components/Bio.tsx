import { bio } from "@/data/bio";

export function Bio() {
  return (
    <section className="section reveal" id="origins">
      <div className="container">
        <p className="section-eyebrow">Origins</p>
        <h2 className="section-heading">
          The training hall behind the <em>myth.</em>
        </h2>
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
