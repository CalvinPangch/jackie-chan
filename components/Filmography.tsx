import { films, type Film } from "@/data/films";
import { FilmRow } from "./FilmRow";

function decadeOf(year: number): number {
  return Math.floor(year / 10) * 10;
}

export function Filmography() {
  const byDecade = new Map<number, Film[]>();
  for (const f of films) {
    const d = decadeOf(f.year);
    const arr = byDecade.get(d) ?? [];
    arr.push(f);
    byDecade.set(d, arr);
  }
  const decades = [...byDecade.keys()].sort((a, b) => b - a);
  const firstYear = Math.min(...films.map((f) => f.year));
  const directedCount = films.filter((f) => f.role?.toLowerCase().includes("director")).length;

  return (
    <section className="section reveal" id="legacy">
      <div className="container">
        <p className="section-eyebrow">Legacy</p>
        <h2 className="section-heading">
          {films.length}+ films. <em>Six decades.</em> Still in motion.
        </h2>

        <div className="film-stats">
          <div className="film-stat">
            <span className="film-stat-num">{films.length}</span>
            <span className="film-stat-label">Feature films</span>
          </div>
          <div className="film-stat">
            <span className="film-stat-num">{decades.length}</span>
            <span className="film-stat-label">Decades active</span>
          </div>
          <div className="film-stat">
            <span className="film-stat-num">{firstYear}</span>
            <span className="film-stat-label">Screen debut</span>
          </div>
          <div className="film-stat">
            <span className="film-stat-num">{directedCount}+</span>
            <span className="film-stat-label">As director</span>
          </div>
        </div>

        {decades.map((d) => {
          const entries = (byDecade.get(d) ?? [])
            .slice()
            .sort((a, b) => b.year - a.year);
          return (
            <div key={d} className="decade">
              <div className="decade-head">
                <div className="decade-head-sticky">
                  <h3 className="decade-label">
                    {d}
                    <em>{entries.length} films</em>
                  </h3>
                </div>
                <ul className="film-list">
                  {entries.map((film, i) => (
                    <FilmRow key={`${film.year}-${film.title}-${i}`} film={film} />
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
