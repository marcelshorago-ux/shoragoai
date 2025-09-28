"use client";
import { useState } from "react";

/** Centralized copy so EN/ES switch translates every visible string */
const copy = {
  en: {
    nav_demo: "Book a Demo",
    nav_waitlist: "Join Waitlist",
    hero_badge: "Multi-Location Ops • EN/ES",
    hero_title: "Turn Data Chaos Into Intelligence-Led Operations.",
    hero_sub:
      "Run every location in real-time. Optimize execution. Increase value.",
    hero_cta_demo: "See the Live Demo",
    hero_cta_wait: "Join the Waitlist",

    before_after_title: "Before vs After",
    before_label: "Before",
    after_label: "After",
    before_list: [
      "Weekly Excel recaps. Firefighting.",
      "Inconsistent guest/client experience.",
      "“Who’s on it?” No idea."
    ],
    after_list: [
      "Live KPIs with owners and due dates.",
      "Consistent execution across sites.",
      "“Who’s on it?” Assigned. In progress. Proof attached."
    ],

    problem_title: "Spreadsheets ≠ Operations.",
    problem_points: [
      "Inconsistent locations. Late data. Slow decisions.",
      "Managers report the news instead of fixing problems.",
      "No single source of truth. No accountability."
    ],
    problem_card:
      "We replace weekly recap chaos with live visibility and clear ownership.",

    solution_title: "Real-Time Ops + Custom AI Tools.",
    solution_text:
      "Shorago AI unifies KPIs across every site and builds AI tools for your exact workflows—vendor follow-ups, KPI alerts, and WhatsApp/Email nudges in EN/ES.",
    custom_examples_title: "Custom AI Examples",
    custom_examples: [
      "Vendor follow-ups with due dates + proof requests (WhatsApp/Email).",
      "KPI drift alerts (missed routines, aging work orders, SLA breaches).",
      "Auto-assign tasks to managers with reminders and escalation.",
      "EN/ES messaging so your whole team adopts it day one."
    ],

    features_title: "Built for Multi-Location. Built for Speed.",
    features_list: [
      "Multi-Location Dashboard: KPIs, trends, and alerts in one view.",
      "Custom AI Tools: auto-assign tasks, chase vendors, confirm completion.",
      "Smart Alerts: threshold breaches, missed routines, aging work orders.",
      "Bilingual Workflows: WhatsApp/Email comms in EN/ES.",
      "Governance: roles, audit trails, accountability by manager/location."
    ],
    features_card:
      "Governed access. Audit trails. Manager/location accountability. Built for real ops, not slide decks.",

    proof_title: "20 Years in Ops Leadership. Pilot-Ready Today.",
    proof_points: [
      "Led operations across dozens of sites—systematized, measured, delivered.",
      "Built playbooks that cut cost and increased accountability.",
      "Now applying that expertise with AI-powered tools tailored to your business."
    ],
    proof_card:
      "Want specifics for your industry? Book a call and we’ll map your SOPs → AI workflows in 30 minutes.",

    pricing_title: "Stage 1 Pilot: $1,200/mo · 12-Month Agreement",
    pricing_points: [
      "Includes onboarding, dashboard, and 1–2 custom AI tools for your workflows.",
      "Replace $6–10k/mo in ops headcount/time with automation.",
      "ROI Calculator to estimate savings within 30–60 days."
    ],
    pricing_card:
      "Run the numbers with our simple ROI calculator on the call.",

    faq_title: "FAQ",
    faq: [
      { q: "Who owns our data?", a: "You do. We use secure cloud storage with export on request." },
      { q: "How hard is setup?", a: "Typical pilot: connect data sources + SOPs → live in 1–2 weeks." },
      { q: "Spanish-first team?", a: "Yes. Agents and alerts run EN/ES over WhatsApp/Email." },
      { q: "Integrations?", a: "Start where you are—CSVs/emails/forms—and evolve to APIs." },
      { q: "Support?", a: "Founder-led onboarding, weekly KPI reviews, and playbook tuning." },
      { q: "Security?", a: "Role-based access, audit trails, least-privilege by default." }
    ],

    close_title:
      "Are you going to keep wasting weeks in Excel… or finally see your business in real-time?",
    close_cta: "Book a Demo",
    lang_toggle: "ES"
  },
  es: {
    nav_demo: "Agenda una demo",
    nav_waitlist: "Únete a la lista",
    hero_badge: "Operación Multi-sede • EN/ES",
    hero_title: "Convierte el caos de datos en operaciones inteligentes.",
    hero_sub:
      "Opera cada sede en tiempo real. Optimiza la ejecución. Aumenta el valor.",
    hero_cta_demo: "Ver demo en vivo",
    hero_cta_wait: "Unirme a la lista",

    before_after_title: "Antes vs Después",
    before_label: "Antes",
    after_label: "Después",
    before_list: [
      "Recaps semanales en Excel. Apagar incendios.",
      "Experiencia del cliente inconsistente.",
      "“¿Quién lo atiende?” Ni idea."
    ],
    after_list: [
      "KPIs en vivo con responsables y fechas.",
      "Ejecución consistente en todas las sedes.",
      "“¿Quién lo atiende?” Asignado. En progreso. Evidencia adjunta."
    ],

    problem_title: "Las hojas de cálculo no son operaciones.",
    problem_points: [
      "Sucursales inconsistentes. Datos tardíos. Decisiones lentas.",
      "Los mandos reportan en vez de resolver.",
      "Sin verdad única. Sin responsables."
    ],
    problem_card:
      "Reemplazamos el caos de recaps semanales con visibilidad en vivo y responsables claros.",

    solution_title: "Operación en tiempo real + IA a la medida.",
    solution_text:
      "Shorago AI unifica KPIs en todas tus sedes y construye herramientas de IA para tus flujos—seguimiento a proveedores, alertas de KPIs y recordatorios por WhatsApp/Email en EN/ES.",
    custom_examples_title: "Ejemplos de IA a la medida",
    custom_examples: [
      "Seguimiento a proveedores con fechas y evidencia (WhatsApp/Email).",
      "Alertas por desvíos de KPIs (rutinas omitidas, órdenes envejecidas, SLAs).",
      "Asignación automática a gerentes con recordatorios y escalamiento.",
      "Mensajería EN/ES para adopción desde el día uno."
    ],

    features_title: "Hecho para varias sedes. Hecho para la velocidad.",
    features_list: [
      "Tablero multi-sede: KPIs, tendencias y alertas en una vista.",
      "IA a la medida: asigna tareas, persigue proveedores, confirma cierre.",
      "Alertas inteligentes: umbrales, rutinas omitidas, órdenes envejecidas.",
      "Flujos bilingües: WhatsApp/Email en EN/ES.",
      "Gobernanza: roles, auditoría y responsables por sede/gerente."
    ],
    features_card:
      "Accesos gobernados. Trazabilidad. Responsables por gerente/sede. Hecho para operación real, no para diapositivas.",

    proof_title: "20 años en operaciones. Listo para pilotos hoy.",
    proof_points: [
      "Liderazgo en docenas de sedes—sistematizado, medido, entregado.",
      "Playbooks que reducen costos y aumentan la responsabilidad.",
      "Ahora aplicamos esa experiencia con herramientas de IA hechas a la medida."
    ],
    proof_card:
      "¿Quieres ejemplos de tu industria? Agenda y mapeamos tus SOPs → flujos de IA en 30 minutos.",

    pricing_title: "Piloto Fase 1: $1,200/mes · 12 meses",
    pricing_points: [
      "Incluye onboarding, tablero y 1–2 herramientas de IA para tus flujos.",
      "Sustituye $6–10k/mes en personal/horas con automatización.",
      "Calculadora de ROI para estimar ahorros en 30–60 días."
    ],
    pricing_card:
      "Hacemos la cuenta con una calculadora simple durante la llamada.",

    faq_title: "Preguntas frecuentes",
    faq: [
      { q: "¿De quién es la data?", a: "Tuya. Almacenamiento seguro con exportación cuando lo pidas." },
      { q: "¿Qué tan difícil es el setup?", a: "Piloto típico: conectar fuentes + SOPs → en vivo en 1–2 semanas." },
      { q: "¿Equipo hispanohablante?", a: "Sí. Agentes y alertas en EN/ES por WhatsApp/Email." },
      { q: "¿Integraciones?", a: "Empezamos con CSVs/emails/forms y evolucionamos a APIs." },
      { q: "¿Soporte?", a: "Onboarding por el fundador, revisión semanal de KPIs y ajuste de playbooks." },
      { q: "¿Seguridad?", a: "Acceso por roles, trazabilidad y mínimo privilegio por defecto." }
    ],

    close_title:
      "¿Vas a seguir perdiendo semanas en Excel… o por fin ver tu negocio en tiempo real?",
    close_cta: "Agenda una demo",
    lang_toggle: "EN"
  }
};

export default function Page() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = copy[lang];

  const calendly = "https://calendly.com/your-handle/30min"; // TODO: replace
  const waitlist = "https://your-mailerlite-or-convertkit-form"; // TODO: replace

  return (
    <main>
      {/* Nav */}
      <header className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Shorago AI Logo" className="h-60 w-auto" />
          <span className="small">Miami • South Florida</span>
        </div>
        <div className="flex items-center gap-3">
          <a className="btn btn-muted" href={calendly}>{t.nav_demo}</a>
          <a className="btn btn-secondary" href={waitlist}>{t.nav_waitlist}</a>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="btn btn-primary"
            aria-label="Toggle language"
          >
            {t.lang_toggle}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="badge w-max">{t.hero_badge}</div>
            <h1 className="h1">{t.hero_title}</h1>
            <p className="sub max-w-xl">{t.hero_sub}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a className="btn btn-primary" href={calendly}>{t.hero_cta_demo}</a>
              <a className="btn btn-secondary" href={waitlist}>{t.hero_cta_wait}</a>
            </div>
          </div>
          <div className="card">
            <h3 className="h3 mb-3">{t.before_after_title}</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="small uppercase mb-2 opacity-80">{t.before_label}</p>
                <ul className="space-y-2 list-disc pl-5">
                  {copy[lang].before_list.map((x, i) => (<li key={i}>{x}</li>))}
                </ul>
              </div>
              <div>
                <p className="small uppercase mb-2 opacity-80">{t.after_label}</p>
                <ul className="space-y-2 list-disc pl-5">
                  {copy[lang].after_list.map((x, i) => (<li key={i}>{x}</li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="h2">{t.problem_title}</h2>
            <ul className="space-y-2 list-disc pl-5">
              {t.problem_points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>
          <div className="card">
            <p className="sub">{t.problem_card}</p>
            <div className="hr" />
            <a className="btn btn-primary" href={calendly}>{t.nav_demo}</a>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="h2">{t.solution_title}</h2>
            <p className="sub max-w-xl">{t.solution_text}</p>
          </div>
          <div className="card space-y-4">
            <h3 className="h3">{t.custom_examples_title}</h3>
            <ul className="space-y-2 list-disc pl-5">
              {t.custom_examples.map((x, i) => (<li key={i}>{x}</li>))}
            </ul>
            <a className="btn btn-primary" href={waitlist}>{t.nav_waitlist}</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="h2">{t.features_title}</h2>
            <ul className="space-y-2 list-disc pl-5">
              {t.features_list.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
          <div className="card">
            <p className="sub">{t.features_card}</p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="h2">{t.proof_title}</h2>
            <ul className="space-y-2 list-disc pl-5">
              {t.proof_points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>
          <div className="card">
            <p className="sub">{t.proof_card}</p>
            <div className="hr" />
            <a className="btn btn-primary" href={calendly}>{t.nav_demo}</a>
          </div>
        </div>
      </section>

      {/* Pricing / Offer */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="h2">{t.pricing_title}</h2>
            <ul className="space-y-2 list-disc pl-5">
              {t.pricing_points.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>
          <div className="card">
            <p className="sub">{t.pricing_card}</p>
            <div className="hr" />
            <div className="flex gap-3">
              <a className="btn btn-primary" href={calendly}>{t.nav_demo}</a>
              <a className="btn btn-secondary" href={waitlist}>{t.nav_waitlist}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="h2 mb-6">{t.faq_title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.faq.map((item, i) => (
              <div key={i} className="card">
                <h3 className="h3 mb-2">{item.q}</h3>
                <p className="sub">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="section">
        <div className="container text-center max-w-3xl">
          <h2 className="h2 mb-4">{t.close_title}</h2>
          <div className="flex items-center justify-center gap-3">
            <a className="btn btn-primary" href={calendly}>{t.close_cta}</a>
            <a className="btn btn-secondary" href={waitlist}>{t.nav_waitlist}</a>
          </div>
        </div>
      </section>

      <footer className="container py-10 small flex items-center justify-between">
        <span>© {new Date().getFullYear()} Shorago AI. All rights reserved.</span>
        <span className="opacity-70">Built in Miami • EN/ES</span>
      </footer>
    </main>
  );
}
