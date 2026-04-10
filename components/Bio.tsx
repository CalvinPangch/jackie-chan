import { bio } from "@/data/bio";

export function Bio() {
  return (
    <section className="section">
      <h2>Summary</h2>
      {bio.summary.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </section>
  );
}
