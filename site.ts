:root { --background:#f8fafc; --foreground:#0f172a; --muted:#475569; --card:#fff; --border:#e2e8f0; --primary:#2563eb; --primary-dark:#1d4ed8; }
* { box-sizing:border-box; }
body { margin:0; font-family:Arial,Helvetica,sans-serif; background:linear-gradient(180deg,#f8fafc 0%,#eef4ff 100%); color:var(--foreground); }
a { color:inherit; text-decoration:none; }
.container { max-width:1180px; margin:0 auto; padding:0 24px; }
.header { position:sticky; top:0; z-index:20; backdrop-filter:blur(10px); background:rgba(248,250,252,.88); border-bottom:1px solid rgba(226,232,240,.9); }
.nav { display:flex; align-items:center; justify-content:space-between; min-height:72px; gap:16px; }
.brand { font-size:1.1rem; font-weight:700; }
.nav-links { display:flex; gap:18px; flex-wrap:wrap; color:var(--muted); }
.hero { padding:72px 0 36px; }
.badge { display:inline-block; padding:8px 12px; border-radius:999px; background:rgba(37,99,235,.1); color:var(--primary-dark); font-size:.9rem; font-weight:700; }
.hero-grid { display:grid; grid-template-columns:1.2fr .8fr; gap:28px; align-items:start; }
.hero h1 { font-size:3rem; line-height:1.1; margin:18px 0 16px; }
.hero p { font-size:1.1rem; line-height:1.7; color:var(--muted); max-width:760px; }
.hero-actions { display:flex; gap:14px; flex-wrap:wrap; margin-top:28px; }
.button { display:inline-flex; align-items:center; justify-content:center; padding:14px 20px; border-radius:14px; font-weight:700; transition:.2s ease; border:1px solid transparent; }
.button-primary { background:var(--primary); color:white; }
.button-primary:hover { background:var(--primary-dark); }
.button-secondary { border-color:var(--border); background:white; }
.cards { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; margin:42px 0 56px; }
.card { background:var(--card); border:1px solid var(--border); border-radius:22px; padding:24px; box-shadow:0 10px 25px rgba(15,23,42,.05); }
.card h2 { margin:0 0 12px; font-size:1.4rem; }
.card p { margin:0 0 18px; color:var(--muted); line-height:1.6; }
.card ul { margin:0 0 18px 18px; padding:0; color:var(--muted); line-height:1.7; }
.card-link { color:var(--primary-dark); font-weight:700; }
.panel { background:rgba(255,255,255,.85); border:1px solid var(--border); border-radius:24px; padding:24px; }
.section { padding:24px 0 42px; }
.section h2 { font-size:2rem; margin-bottom:10px; }
.section p,.section li { color:var(--muted); line-height:1.7; }
.footer { padding:42px 0 64px; color:var(--muted); }
.workflow { display:grid; gap:16px; }
.step { background:white; border:1px solid var(--border); border-radius:18px; padding:18px; }
.step strong { display:block; margin-bottom:8px; }
@media (max-width:900px) { .hero-grid,.cards { grid-template-columns:1fr; } .hero h1 { font-size:2.2rem; } }
