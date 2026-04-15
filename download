import Link from "next/link";
import { homeCards } from "./home-data";
export function HomeCards() {
  return <div className="cards">{homeCards.map((card) => <article key={card.href} className="card"><h2>{card.title}</h2><p>{card.description}</p><ul>{card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><Link className="card-link" href={card.href}>Ouvrir le module →</Link></article>)}</div>;
}
