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

  return (
    <section className="section">
      <h2>
        Filmography <span className="muted">({films.length} feature films)</span>
      </h2>
      {decades.map((d) => {
        const entries = (byDecade.get(d) ?? []).slice().sort((a, b) => b.year - a.year);
        return (
          <div key={d} className="decade">
            <h3>
              {d}s <span className="muted">({entries.length})</span>
            </h3>
            <ul className="film-list">
              {entries.map((film, i) => (
                <FilmRow key={`${film.year}-${film.title}-${i}`} film={film} />
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
