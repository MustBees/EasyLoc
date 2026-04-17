import Link from "next/link";
import { modules } from "@/lib/modules";

export function ModuleCards() {
  return (
    <div className="grid-4">
      {modules.map((module, index) => (
        <article
          className="card module-card"
          key={module.href}
          style={{ animationDelay: `${0.25 + index * 0.12}s` }}
        >
          <div className="module-badge">0{index + 1}</div>
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
