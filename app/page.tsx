'use client';

import Image from 'next/image';
import { useState } from 'react';

// Replace with your real links
const calendly = 'https://calendly.com/<your-handle>/30min';
const waitlist = 'https://<your-waitlist-form-url>';

type Lang = 'en' | 'es';
type FAQ = { q: string; a: string };

interface Copy {
  nav_demo: string;
  nav_waitlist: string;
  pill: string;
  hero_h1: string;
  hero_sub: string;
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
  features_title: string;
  features_points: string[];
  proof_title: string;
  proof_points: string[];
  offer_title: string;
  offer_copy: string;
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
    nav_demo: 'Book a Demo',
    nav_waitlist: 'Join Waitlist',
    pill: 'Multi-Location Ops • EN/ES',
    hero_h1: 'Turn Data Chaos Into Intelligence-Led Operations.',
    hero_sub: 'Run every location in real-time. Optimize execution. Increase value.',
    hero_demo: 'See the Live Demo',
    hero_waitlist: 'Join the Waitlist',

    before_after_title: 'Before vs After',
    before_label: 'BEFORE',
    after_label: 'AFTER',
    before_points: [
      'Weekly Excel recaps. Firefighting.',
      'Inconsistent guest/client experience.',
      "“Who’s on it?” No idea.",
    ],
    after_points: [
      'Live KPIs with owners and due dates.',
      'Consistent execution across sites.',
      '“Who’s on it?” Assigned. In progress. Proof attached.',
    ],

    problem_title: 'Spreadsheets ≠ Operations.',
    problem_points: [
      'Inconsistent locations. Late data. Slow decisions.',
      'Managers report the news instead of fixing problems.',
      'No single source of truth. No accountability.',
    ],
    problem_card: 'We replace weekly recap chaos with live visibility and clear ownership.',

    solution_title: 'Real-Time Ops + Custom AI Tools.',
    custom_examples_title: 'Custom AI Examples',
    custom_examples: [
      'Vendor follow-ups with due dates + proof requests (WhatsApp/Email).',
      'KPI drift alerts (missed routines, aging work orders, SLA breaches).',
      'Auto-assign tasks to managers with reminders and escalation.',
      'EN/ES messaging so your whole team adopts it day one.',
    ],
    solution_cta: 'Book a Demo',

    features_title: 'Built for Multi-Location. Built for Speed.',
    features_points: [
      'Multi-Location Dashboard: KPIs, trends, and alerts in one view.',
      'Custom AI Tools: auto-assign tasks, chase vendors, confirm completion.',
      'Smart Alerts: threshold breaches, missed routines, aging work orders.',
      'Bilingual Workflows: WhatsApp/Email comms in EN/ES.',
      'Governance: roles, audit trails, accountability by manager/location.',
    ],

    proof_title: 'Why Shorago AI',
    proof_points: [
      '20 years in operations leadership — built for real ops, not slide decks.',
      'Pilot-ready sprints to value.',
      'Miami • South Florida roots. Bilingual by default.',
    ],

    offer_title: 'Simple Pricing to Start',
    offer_copy: 'Stage 1 → $1,200/month (12-month). A fraction of the cost of a full-time ops analyst.',
    offer_points: [
      'Live dashboard + alerts',
      'Custom AI tools for your workflows',
      'Bilingual onboarding + support',
    ],
    offer_cta_demo: 'Book a Demo',
    offer_cta_waitlist: 'Join the Waitlist',

    faq_title: 'FAQ',
    faqs: [
      { q: 'Who owns my data?', a: 'You do. We connect to your systems and keep everything exportable at any time.' },
      { q: 'How fast can we launch?', a: 'Typical pilot is 2–4 weeks: connect data, define KPIs, ship first AI workflows.' },
      { q: 'Do you support EN/ES teams?', a: 'Yes. All dashboards and workflows support English/Spanish from day one.' },
      { q: 'What about security?', a: 'Modern cloud security practices; access limited by role and location.' },
    ],

    final_close: 'Are you going to keep wasting time in spreadsheets… or finally run your business in real-time?',
    final_cta: 'See the Live Demo',
    location: 'Miami • South Florida',
    lang_toggle: 'ES',
  },

  es: {
    nav_demo: 'Agenda una demo',
    nav_waitlist: 'Únete a la lista',
    pill: 'Operación Multi-sede • EN/ES',
    hero_h1: 'Convierte el caos de datos en operaciones inteligentes.',
    hero_sub: 'Opera cada sede en tiempo real. Optimiza la ejecución. Aumenta el valor.',
    hero_demo: 'Ver demo en vivo',
    hero_waitlist: 'Únirme a la lista',

    before_after_title: 'Antes vs Después',
    before_label: 'ANTES',
    after_label: 'DESPUÉS',
    before_points: [
      'Recaps semanales en Excel. Apagar incendios.',
      'Experiencia del cliente inconsistente.',
      '“¿Quién lo atiende?” Ni idea.',
    ],
    after_points: [
      'KPIs en vivo con responsables y fechas.',
      'Ejecución consistente en todas las sedes.',
      '“¿Quién lo atiende?” Asignado. En progreso. Evidencia adjunta.',
    ],

    problem_title: 'Las hojas de cálculo no son operaciones.',
    problem_points: [
      'Sucursales inconsistentes. Datos tardíos. Decisiones lentas.',
      'Los mandos reportan, no resuelven.',
      'Sin una sola fuente de verdad. Sin responsables.',
    ],
    problem_card: 'Reemplazamos el caos de recaps con visibilidad en vivo y responsables claros.',

    solution_title: 'Operación en tiempo real + IA a la medida.',
    custom_examples_title: 'Ejemplos de IA a medida',
    custom_examples: [
      'Seguimiento a proveedores con fechas + solicitud de evidencia (WhatsApp/Email).',
      'Alertas de desvío de KPIs (rutinas omitidas, órdenes envejecidas, SLAs).',
      'Autoasignación de tareas con recordatorios y escalación.',
      'Mensajería EN/ES para adopción desde el día uno.',
    ],
    solution_cta: 'Agenda una demo',

    features_title: 'Hecho para varias sedes. Hecho para la velocidad.',
    features_points: [
      'Tablero multi-sede: KPIs, tendencias y alertas en una vista.',
      'IA a la medida: asigna tareas, persigue proveedores, confirma cierre.',
      'Alertas inteligentes: umbrales, rutinas omitidas, órdenes envejecidas.',
      'Flujos bilingües: WhatsApp/Email EN/ES.',
      'Gobernanza: roles, auditoría y responsables por sede/gerente.',
    ],

    proof_title: 'Por qué Shorago AI',
    proof_points: [
      '20 años en liderazgo de operaciones — construido para operación real.',
      'Pilotos ancla y sprints rápidos hacia valor.',
      'Miami • Sur de Florida. Bilingüe por defecto.',
    ],

    offer_title: 'Precio simple para empezar',
    offer_copy: 'Etapa 1 → $1,200/mes (12 meses). Una fracción del costo de un analista de operaciones.',
    offer_points: [
      'Tablero en vivo + alertas',
      'Herramientas de IA a la medida',
      'Onboarding y soporte bilingüe',
    ],
    offer_cta_demo: 'Agenda una demo',
    offer_cta_waitlist: 'Únete a la lista',

    faq_title: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Quién es dueño de mis datos?', a: 'Tú. Nos conectamos a tus sistemas y todo es exportable cuando quieras.' },
      { q: '¿Qué tan rápido lanzamos?', a: 'Piloto típico de 2–4 semanas: conectar datos, definir KPIs y enviar primeras automatizaciones.' },
      { q: '¿Soportan equipos EN/ES?', a: 'Sí. Dashboards y flujos bilingües desde el día uno.' },
      { q: '¿Y la seguridad?', a: 'Prácticas modernas en la nube y accesos por rol y ubicación.' },
    ],

    final_close: '¿Vas a seguir perdiendo tiempo en hojas de cálculo… o por fin operar en tiempo real?',
    final_cta: 'Ver demo en vivo',
    location: 'Miami • South Florida',
    lang_toggle: 'EN',
  },
};

export default function Page() {
  const [lang, setLang] = useState<Lang>('en');
  const t = COPY[lang];
  const toggleLang = () => setLang((p) => (p === 'en' ? 'es' : 'en'));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0a0f] via-[#0e0a13] to-[#0b0b0f] text-zinc-100">
      {/* HEADER */}
      <header className="container mx-auto max-w-6xl px-4 pt-6">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Logo (slightly smaller on portrait) */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Shorago AI"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-9 md:h-10"
              priority
            />
          </div>

          {/* Middle: Location (hide on mobile) */}
          <div className="hidden md:block text-sm text-zinc-300">
            {t.location}
          </div>

          {/* Right: CTAs */}
          <div className="flex items-center gap-2">
            {/* Mobile: single compact Demo button */}
            <a
              href={calendly}
              className="btn btn-primary px-3 py-2 text-xs whitespace-nowrap md:hidden"
            >
              Demo
            </a>

            {/* ≥ md: full CTA set */}
            <div className="hidden md:flex items-center gap-2">
              <a className="btn btn-muted px-3 py-2 text-sm whitespace-nowrap" href={calendly}>
                {t.nav_demo}
              </a>
              <a className="btn btn-secondary px-3 py-2 text-sm whitespace-nowrap" href={waitlist}>
                {t.nav_waitlist}
              </a>
              <button
                type="button"
                onClick={toggleLang}
                className="btn btn-primary px-3 py-2 text-sm whitespace-nowrap"
              >
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

        <p className="mt-4 max-w-2xl mx-auto text-zinc-300">
          {t.hero_sub}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={calendly} className="btn btn-primary whitespace-nowrap">
            {t.hero_demo}
          </a>
          <a href={waitlist} className="btn btn-secondary whitespace-nowrap">
            {t.hero_waitlist}
          </a>
        </div>

        {/* Before/After card */}
        <div className="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 md:p-6 text-left">
          <h3 className="text-lg font-semibold">{t.before_after_title}</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold text-zinc-400">{t.before_label}</div>
              <ul className="mt-2 space-y-2 text-zinc-200">
                {t.before_points.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold text-zinc-400">{t.after_label}</div>
              <ul className="mt-2 space-y-2 text-zinc-200">
                {t.after_points.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
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
            <a href={calendly} className="btn btn-primary whitespace-nowrap">
              {t.solution_cta}
            </a>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.solution_title}</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold">{t.custom_examples_title}</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              {t.custom_examples.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a href={waitlist} className="btn btn-secondary whitespace-nowrap">
                {t.nav_waitlist}
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold">{t.features_title}</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              {t.features_points.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.proof_title}</h2>
        <ul className="mt-4 space-y-2 text-zinc-300">
          {t.proof_points.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
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
          <ul className="mt-3 grid gap-2 text-zinc-200 sm:grid-cols-3">
            {t.offer_points.map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={calendly} className="btn btn-primary whitespace-nowrap">
              {t.offer_cta_demo}
            </a>
            <a href={waitlist} className="btn btn-secondary whitespace-nowrap">
              {t.offer_cta_waitlist}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">{t.faq_title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.faqs.map((f: FAQ) => (
            <div key={f.q} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-zinc-300">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CLOSE */}
      <section className="container mx-auto max-w-6xl px-4 pt-14 md:pt-20 pb-24">
        <div className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
          <h3 className="text-xl font-bold sm:text-2xl">{t.final_close}</h3>
          <div className="mt-5 flex justify-center">
            <a href={calendly} className="btn btn-primary whitespace-nowrap">
              {t.final_cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
