import { awards } from "@/data/awards";

export function Awards() {
  const sorted = [...awards].sort((a, b) => b.year - a.year);
  return (
    <section className="section">
      <h2>Awards &amp; Honors</h2>
      <ul className="awards">
        {sorted.map((a, i) => (
          <li key={`${a.title}-${i}`}>
            <span className="awards-year">{a.year ? a.year : "—"}</span>
            <span className="awards-title">{a.title}</span>
            {a.org && <span className="awards-org">{a.org}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
