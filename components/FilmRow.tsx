import type { Film } from "@/data/films";

export function FilmRow({ film }: { film: Film }) {
  return (
    <li className="film-row">
      <span className="film-year">{film.year}</span>
      <span className="film-body">
        <span className="film-title">{film.title}</span>
        {film.role && <span className="film-role">— {film.role}</span>}
        {film.notes && <span className="film-notes">{film.notes}</span>}
      </span>
    </li>
  );
}
