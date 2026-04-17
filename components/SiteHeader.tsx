import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/">
          EasyLoc
        </Link>
        <nav className="nav-links">
          <Link href="/rent">Location</Link>
          <Link href="/choose-car">Choix voiture</Link>
          <Link href="/transport">Transport</Link>
          <Link href="/claim">Sinistre</Link>
        </nav>
      </div>
    </header>
  );
}
