import Link from "next/link";
import { modules } from "@/lib/modules";

export function ModuleCards() {
  return (
    <div className="grid-4">
      {modules.map((module) => (
        <article className="card" key={module.href}>
          <h2>{module.title}</h2>
          <p>{module.description}</p>
          <Link className="card-link" href={module.href}>
            Ouvrir →
          </Link>
        </article>
      ))}
    </div>
  );
}
