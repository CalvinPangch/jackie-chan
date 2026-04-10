import { awards } from "@/data/awards";

export function Awards() {
  const sorted = [...awards].sort((a, b) => b.year - a.year);
  return (
    <section className="section reveal" id="honors">
      <div className="container">
        <p className="section-eyebrow">Honors</p>
        <h2 className="section-heading">
          Seals of esteem from every <em>arena.</em>
        </h2>
        <ul className="awards-list">
          {sorted.map((a, i) => (
            <li key={`${a.title}-${i}`} className="award">
              <span className="award-year">{a.year ? a.year : "—"}</span>
              <p className="award-title">{a.title}</p>
              {a.org ? <span className="award-org">{a.org}</span> : <span />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
