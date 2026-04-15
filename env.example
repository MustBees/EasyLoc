import Link from "next/link";
import { WorkflowStep } from "@/types/workflow";
interface ModulePageProps { title: string; description: string; nextAction: string; nextHref: string; workflow: WorkflowStep[]; }
export function ModulePage({ title, description, nextAction, nextHref, workflow }: ModulePageProps) {
  return <main className="container section"><div className="badge">Workflow en préparation</div><h1 style={{ fontSize:"2.6rem", marginTop:18 }}>{title}</h1><p style={{ maxWidth:800 }}>{description}</p><section className="panel" style={{ marginTop:28 }}><h2 style={{ marginTop:0 }}>Workflow conseillé</h2><div className="workflow">{workflow.map((step, index) => <div key={step.title} className="step"><strong>Étape {index + 1}. {step.title}</strong><span>{step.description}</span></div>)}</div></section><div className="hero-actions" style={{ marginTop:28 }}><Link className="button button-primary" href={nextHref}>{nextAction}</Link><Link className="button button-secondary" href="/">Retour à l’accueil</Link></div></main>;
}
