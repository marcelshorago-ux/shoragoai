
export const metadata = {
  title: "Shorago AI",
  description: "AI consulting and implementation for non-technical teams — we map, automate, and train your operations to run on AI.",
  openGraph: {
    title: "Shorago AI — AI Workflow Consulting",
    description: "We help your business use AI, from workflow audits to automation rollout.",
    url: "https://shoragoai.com",
    siteName: "Shorago AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL } from "../lib/calendly";

type Lang = "en" | "es";
type FAQ = { q: string; a: string };

interface Copy {
  nav_demo: string;
  nav_waitlist: string;
  pill: string;
  hero_h1: string;
  hero_sub: string;
  hero_points: string[];
  hero_demo: string;
  hero_waitlist: string;
  before_after_title: string;
  before_label: string;
  after_label: string;
  before_points: string[];
  after_points: string[];
  problem_title: string;
  problem_points: string[];
  problem_card: string;
  solution_title: string;
  custom_examples_title: string;
  custom_examples: string[];
  solution_cta: string;
  consulting_title: string;
  consulting_body: string;
  consulting_points: string[];
  consulting_cta: string;
  features_title: string;
  features_points: string[];
  proof_title: string;
  proof_points: string[];
  offer_title: string;
  offer_copy: string;
  offer_note: string;
  offer_points: string[];
  offer_cta_demo: string;
  offer_cta_waitlist: string;
  faq_title: string;
  faqs: FAQ[];
  final_close: string;
  final_cta: string;
  location: string;
  lang_toggle: string;
}

const COPY: Record<Lang, Copy> = {
  en: {
    nav_demo: "Book Your AI Consultation",
    nav_waitlist: "Join Waitlist",
    pill: "AI Workflow Consulting • EN/ES",
    hero_h1: "We turn your everyday workflows into AI-powered systems.",
    hero_sub: "From discovery to build and rollout — we guide non-technical teams to real results.",
    hero_points: [
      "We map your processes and find quick wins.",
      "We implement practical AI tools into your daily operations.",
      "We train your team and measure impact."
    ],
    hero_demo: "Start Your Workflow Audit",
    hero_waitlist: "Join the Waitlist",
    before_after_title: "Before vs After",
    before_label: "BEFORE",
    after_label: "AFTER",
    before_points: [
      "Unclear where to start with AI.",
      "Manual reports, late decisions.",
      "Tasks slip through the cracks."
    ],
    after_points: [
      "Clear AI roadmap, prioritized by ROI.",
      "Live KPIs with owners and due dates.",
      "Automated nudges and proof of completion."
    ],
    problem_title: "Most teams don’t need more tools — they need a guide.",
    problem_points: [
      "AI feels like hype and buzzwords.",
      "Your data lives in spreadsheets and inboxes.",
      "No single owner driving adoption and results."
    ],
    problem_card: "We consult, design, and implement — so AI sticks and your team actually uses it.",
    solution_title: "Real-Time Ops + Custom AI, implemented for you.",
    custom_examples_title: "What we’ll build first",
    custom_examples: [
      "KPI drift alerts and auto follow-ups to managers.",
      "Vendor chasing with due dates + proof requests (Email/WhatsApp).",
      "Daily huddles auto-generated from live metrics.",
      "Multi-location dashboards with roles and audit trails."
    ],
    solution_cta: "Talk to an Expert",
    consulting_title: "AI Consulting + Implementation for Non-Technical Teams",
    consulting_body:
      "We start with a lightweight AI Workflow Audit, then ship the first automation fast. You’ll get recommendations, a clear roadmap, and hands-on implementation — not theory.",
    consulting_points: [
      "Workflow Audit: we map your processes and surface automation opportunities.",
      "Pilot Build: we implement the first tool and train your team (EN/ES).",
      "Scale: roll out more automations and dashboards based on impact."
    ],
    consulting_cta: "Book Your AI Consultation",
    features_title: "Built for multi-location. Built for adoption.",
    features_points: [
      "Multi-Location Dashboard: KPIs and trends in one view.",
      "AI Automations: assign tasks, chase vendors, confirm completion.",
      "Smart Alerts: thresholds, missed routines, aging work orders.",
      "Bilingual Workflows: WhatsApp/Email in EN/ES.",
      "Governance: roles, audit trails, accountability per manager/site."
    ],
    proof_title: "Why Shorago AI",
    proof_points: [
      "20 years in operations leadership — we build for real-world teams.",
      "Pilot sprints that show value in weeks, not months.",
      "Miami • South Florida roots. Bilingual by default."
    ],
    offer_title: "Simple Starter Plan (Founders Offer)",
    offer_copy: "Stage 1 → $499/month (12-month). Includes AI Workflow Audit + first automation implementation + support.",
    offer_note: "For the first 10 founding customers — price locked for 12 months.",
    offer_points: [
      "Audit + roadmap + quick wins",
      "First automation included",
      "Bilingual onboarding + support"
    ],
    offer_cta_demo: "Book Your AI Consultation",
    offer_cta_waitlist: "Join the Waitlist",
    faq_title: "FAQ",
    faqs: [
      { q: "We’re new to AI — is this for us?", a: "Yes. We specialize in guiding non-technical teams from zero to working automations with training and support." },
      { q: "How fast can we launch?", a: "Typical pilot is 2–4 weeks: connect data, define KPIs, ship the first automation, and train your team." },
      { q: "Who owns the data and tools?", a: "You do. We connect to your systems, and everything is exportable. We’ll document the setup for your team." },
      { q: "What if our processes are messy?", a: "That’s exactly when consulting helps. We map your workflows, simplify where needed, and implement practical tools." }
    ],
    final_close: "Ready to move from “we should use AI” to “AI runs our workflows every day”?",
    final_cta: "Start Your Workflow Audit",
    location: "Miami • South Florida",
    lang_toggle: "ES"
  },
  es: {
    nav_demo: "Agenda tu consulta de IA",
    nav_waitlist: "Únete a la lista",
    pill: "Consultoría de flujos con IA • EN/ES",
    hero_h1: "Convertimos tus flujos diarios en sistemas con IA.",
    hero_sub: "De descubrimiento a implementación — guiamos a equipos no técnicos hasta resultados reales.",
    hero_points: [
      "Mapeamos procesos y encontramos quick wins.",
      "Implementamos herramientas de IA en tu operación diaria.",
      "Capacitamos al equipo y medimos impacto."
    ],
    hero_demo: "Inicia tu Auditoría de Flujos",
    hero_waitlist: "Únete a la lista",
    before_after_title: "Antes vs Después",
    before_label: "ANTES",
    after_label: "DESPUÉS",
    before_points: [
      "No sabes por dónde empezar con IA.",
      "Reportes manuales, decisiones tardías.",
      "Las tareas se pierden."
    ],
    after_points: [
      "Ruta clara de IA priorizada por ROI.",
      "KPIs en vivo con responsables y fechas.",
      "Recordatorios automáticos y evidencia de cierre."
    ],
    problem_title: "La mayoría no necesita más apps — necesita una guía.",
    problem_points: [
      "La IA se siente como pura moda.",
      "Los datos viven en hojas y correos.",
      "Nadie lidera adopción y resultados."
    ],
    problem_card: "Consultamos, diseñamos e implementamos — para que la IA sí se use.",
    solution_title: "Operación en tiempo real + IA a la medida, implementada por nosotros.",
    custom_examples_title: "Lo primero que construiremos",
    custom_examples: [
      "Alertas por desvío y seguimientos automáticos a gerentes.",
      "Gestión de proveedores con fechas + solicitud de evidencia (Email/WhatsApp).",
      "Huddles diarios generados con métricas en vivo.",
      "Tableros multi-sede con roles y auditoría."
    ],
    solution_cta: "Habla con un experto",
    consulting_title: "Consultoría + Implementación de IA para equipos no técnicos",
    consulting_body:
      "Iniciamos con una Auditoría de Flujos de IA y enviamos la primera automatización rápido. Obtendrás recomendaciones, una ruta clara y ejecución práctica.",
    consulting_points: [
      "Auditoría de Flujos: mapeamos procesos y oportunidades.",
      "Piloto: implementamos la primera herramienta y capacitamos (EN/ES).",
      "Escala: desplegamos más automatizaciones y dashboards según impacto."
    ],
    consulting_cta: "Agenda tu consulta de IA",
    features_title: "Hecho para multi-sede. Hecho para adopción.",
    features_points: [
      "Tablero multi-sede: KPIs y tendencias en una vista.",
      "Automatizaciones: asigna tareas, persigue proveedores, confirma cierre.",
      "Alertas inteligentes: umbrales, rutinas omitidas, órdenes envejecidas.",
      "Flujos bilingües: WhatsApp/Email EN/ES.",
      "Gobernanza: roles, auditoría y responsables por sede."
    ],
    proof_title: "Por qué Shorago AI",
    proof_points: [
      "20 años en liderazgo de operaciones — para equipos reales.",
      "Sprints piloto con valor en semanas.",
      "Miami • Sur de Florida. Bilingüe de base."
    ],
    offer_title: "Plan inicial simple (Oferta Fundadores)",
    offer_copy: "Etapa 1 → $499/mes (12 meses). Incluye Auditoría de Flujos de IA + primera automatización + soporte.",
    offer_note: "Para los primeros 10 clientes fundadores — precio fijo por 12 meses.",
    offer_points: [
      "Auditoría + ruta + quick wins",
      "Primera automatización incluida",
      "Onboarding y soporte bilingüe"
    ],
    offer_cta_demo: "Agenda tu consulta de IA",
    offer_cta_waitlist: "Únete a la lista",
    faq_title: "Preguntas frecuentes",
    faqs: [
      { q: "Somos nuevos en IA — ¿esto es para nosotros?", a: "Sí. Guiamos a equipos no técnicos hasta automatizaciones funcionando con capacitación y soporte." },
      { q: "¿Qué tan rápido lanzamos?", a: "Piloto típico de 2–4 semanas: conectar datos, definir KPIs, primera automatización y entrenamiento." },
      { q: "¿Quién es dueño de los datos y herramientas?", a: "Tú. Conectamos a tus sistemas y todo es exportable. Documentamos la configuración." },
      { q: "¿Y si nuestros procesos son un lío?", a: "Justo ahí ayuda la consultoría. Mapeamos, simplificamos e implementamos herramientas prácticas." }
    ],
    final_close: "¿Listo para pasar de “deberíamos usar IA” a “la IA opera nuestros flujos a diario”?",
    final_cta: "Inicia tu Auditoría de Flujos",
    location: "Miami • South Florida",
    lang_toggle: "EN"
  }
};

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const t = COPY[lang];
  const toggleLang = () => setLang((p) => (p === "en" ? "es" : "en"));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0a0f] via-[#0e0a13] to-[#0b0b0f] text-zinc-100">
      {/* HEADER */}
      <header className="container mx-auto max-w-6xl px-4 pt-6">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Shorago AI"
              width={600}
              height={200}
              className="h-28 w-auto sm:h-32 md:h-36"
              priority
            />
          </div>

          <div className="hidden md:block text-sm text-zinc-300">{t.location}</div>

          {/* Right: CTAs */}
          <div className="flex items-center gap-2">
            {/* Mobile: one external link */}
            <a
              href={CALENDLY_URL}
              className="btn btn-primary px-3 py-2 text-xs whitespace-nowrap md:hidden"
              target="_blank" rel="noopener"
            >
              {t.nav_demo}
            </a>

            {/* CTAs (always visible, even on mobile) */}
            <div className="flex items-center gap-2 flex-wrap justify-end">
              <a href={CALENDLY_URL} className="btn btn-muted px-3 py-2 text-sm whitespace-nowrap" target="_blank" rel="noopener">
                {t.nav_demo}
              </a>
              <Link href="/waitlist" className="btn btn-secondary px-3 py-2 text-sm whitespace-nowrap">
                {t.nav_waitlist}
              </Link>
              <button type="button" onClick={toggleLang} className="btn btn-primary px-3 py-2 text-sm whitespace-nowrap">
                {t.lang_toggle}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container mx-auto max-w-6xl px-4 pt-10 sm:pt-16 text-center">
        <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10">
          {t.pill}
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
          {t.hero_h1}
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-zinc-300">{t.hero_sub}</p>

        <ul className="mt-4 max-w-xl mx-auto text-zinc-300 space-y-2 text-sm">
          {t.hero_points.map((x) => (
            <li key={x} className="flex gap-2 justify-center">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={CALENDLY_URL} className="btn btn-primary whitespace-nowrap" target="_blank" rel="noopener">
            {t.hero_demo}
          </a>
          <Link href="/waitlist" className="btn btn-secondary whitespace-nowrap">
            {t.hero_waitlist}
          </Link>
        </div>

        {/* BEFORE vs AFTER card */}
        <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white/5 p-5 text-left ring-1 ring-white/10">
          <h3 className="text-lg font-semibold">{t.before_after_title}</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs text-zinc-400">{t.before_label}</div>
              <ul className="mt-2 space-y-2 text-zinc-300">
                {t.before_points.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs text-zinc-400">{t.after_label}</div>
              <ul className="mt-2 space-y-2 text-zinc-300">
                {t.after_points.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.problem_title}</h2>
        <ul className="mt-4 space-y-2 text-zinc-300">
          {t.problem_points.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
          <p className="text-zinc-200">{t.problem_card}</p>
          <div className="mt-4">
            <a href={CALENDLY_URL} className="btn btn-primary whitespace-nowrap" target="_blank" rel="noopener">
              {t.solution_cta}
            </a>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.solution_title}</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* What we’ll build first */}
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold">{t.custom_examples_title}</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              {t.custom_examples.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/waitlist" className="btn btn-secondary whitespace-nowrap">
                {t.nav_waitlist}
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold">{t.features_title}</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              {t.features_points.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONSULTING & IMPLEMENTATION */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.consulting_title}</h2>
          <p className="mt-2 text-zinc-300">{t.consulting_body}</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {t.consulting_points.map((x) => (
              <div key={x} className="flex gap-2 text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>{x}</span>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <a href={CALENDLY_URL} className="btn btn-primary whitespace-nowrap" target="_blank" rel="noopener">
              {t.consulting_cta}
            </a>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.proof_title}</h2>
        <ul className="mt-4 space-y-2 text-zinc-300">
          {t.proof_points.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* OFFER */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
          <h2 className="text-2xl font-bold sm:text-3xl">{t.offer_title}</h2>
          <p className="mt-2 text-zinc-300">{t.offer_copy}</p>
          <p className="mt-1 text-xs text-zinc-400">{t.offer_note}</p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {t.offer_points.map((x) => (
              <div key={x} className="flex gap-2 text-zinc-300">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>{x}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={CALENDLY_URL} className="btn btn-primary whitespace-nowrap" target="_blank" rel="noopener">
              {t.offer_cta_demo}
            </a>
            <Link href="/waitlist" className="btn btn-secondary whitespace-nowrap">
              {t.offer_cta_waitlist}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.faq_title}</h2>
        <div className="mt-4 space-y-4">
          {t.faqs.map((item) => (
            <div key={item.q} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="font-semibold">{item.q}</div>
              <p className="mt-2 text-zinc-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CLOSE */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20 pb-24">
        <div className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
          <h3 className="text-xl font-bold sm:text-2xl">{t.final_close}</h3>
          <div className="mt-5 flex justify-center">
            <a href={CALENDLY_URL} className="btn btn-primary whitespace-nowrap" target="_blank" rel="noopener">
              {t.final_cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
