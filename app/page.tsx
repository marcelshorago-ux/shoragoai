"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import Image from "next/image";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/marcel-shorago/30min";

type Lang = "en" | "es";
const t = (lang: Lang, en: string, es: string) => (lang === "en" ? en : es);

const verticals = (lang: Lang) => [
  {
    icon: "⚖️",
    industry: t(lang, "Law Firms", "Firmas de Abogados"),
    description: t(
      lang,
      "Intake automation, deadline management, AI-drafted pleadings, and client engagement messaging — all connected to your existing case management system.",
      "Automatización de clientes, gestión de plazos, documentos generados por IA y mensajería de seguimiento — todo conectado a tu sistema de gestión de casos."
    ),
    tags: ["My Case", "Filevine", "Bilingual EN/ES"],
  },
  {
    icon: "🚛",
    industry: t(lang, "Trucking & Logistics", "Transporte y Logística"),
    description: t(
      lang,
      "Dispatch operations systems, driver assignment engines, SMS notifications, payout tracking, and performance dashboards built around your load boards.",
      "Sistemas de despacho, asignación de conductores, notificaciones SMS, seguimiento de pagos y paneles de rendimiento integrados con tus plataformas de cargas."
    ),
    tags: ["Amazon Relay", "Load Boards", "Driver SMS"],
  },
  {
    icon: "🎯",
    industry: t(lang, "Coaching & Personal Brands", "Coaching y Marcas Personales"),
    description: t(
      lang,
      "Full CRM buildouts, client onboarding sequences, lead follow-up automation, and engagement systems that run 24/7 so you can focus on your craft.",
      "CRM completo, secuencias de bienvenida, automatización de seguimiento y sistemas de engagement que funcionan 24/7 para que te enfoques en lo tuyo."
    ),
    tags: ["CRM", "Client Onboarding", "Lead Automation"],
  },
  {
    icon: "🏠",
    industry: t(lang, "Real Estate", "Bienes Raíces"),
    description: t(
      lang,
      "Lead capture and follow-up workflows, transaction coordination automation, client communication sequences, and deal tracking infrastructure.",
      "Captura de leads, automatización de coordinación de transacciones, secuencias de comunicación con clientes y seguimiento de negocios."
    ),
    tags: ["Lead Follow-Up", "Transaction Mgmt", "Client Comms"],
  },
  {
    icon: "📊",
    industry: t(lang, "Campaign Intelligence", "Inteligencia de Campañas"),
    description: t(
      lang,
      "AI-powered competitor ad analysis, creative pattern detection, and campaign concept generation — so your next campaign is built on what's already working in your market.",
      "Análisis de anuncios de competidores con IA, detección de patrones creativos y generación de conceptos de campaña — para que tu próxima campaña se base en lo que ya funciona en tu mercado."
    ),
    tags: [
      t(lang, "Ad Intelligence", "Inteligencia Publicitaria"),
      t(lang, "Campaign Strategy", "Estrategia de Campaña"),
      t(lang, "Creative Briefs", "Briefs Creativos"),
    ],
  },
];

const campaignIntelligence = (lang: Lang) => ({
  name: t(lang, "Campaign Intelligence", "Inteligencia de Campañas"),
  tagline: t(
    lang,
    "Stop guessing. Start winning with what's already working.",
    "Deja de adivinar. Gana con lo que ya está funcionando."
  ),
  description: t(
    lang,
    "Campaign Intelligence is Shorago AI's system for analyzing competitor ads, detecting creative patterns, and generating original campaign concepts — so your marketing is built on real market intelligence, not gut feeling.",
    "Campaign Intelligence es el sistema de Shorago AI para analizar anuncios de competidores, detectar patrones creativos y generar conceptos de campaña originales — para que tu marketing esté basado en inteligencia real del mercado, no en suposiciones."
  ),
  howItWorks: [
    {
      step: "01",
      title: t(lang, "Competitor Ad Collection", "Recopilación de Anuncios"),
      body: t(lang, "We gather active competitor ads from Meta Ad Library and other platforms to build your intelligence database.", "Recopilamos anuncios activos de competidores desde Meta Ad Library y otras plataformas para construir tu base de datos de inteligencia."),
    },
    {
      step: "02",
      title: t(lang, "AI-Powered Ad Analysis", "Análisis de Anuncios con IA"),
      body: t(lang, "Each ad is analyzed for hook, angle, emotional trigger, format, offer structure, and CTA — giving you a complete breakdown of what your competitors are running.", "Cada anuncio se analiza por gancho, ángulo, disparador emocional, formato, estructura de oferta y CTA — dándote un desglose completo de lo que ejecutan tus competidores."),
    },
    {
      step: "03",
      title: t(lang, "Pattern Detection", "Detección de Patrones"),
      body: t(lang, "The system identifies what's appearing repeatedly across multiple ads — revealing the creative formulas and offers that appear to be working in your market.", "El sistema identifica lo que aparece repetidamente en múltiples anuncios — revelando las fórmulas creativas y ofertas que parecen estar funcionando en tu mercado."),
    },
    {
      step: "04",
      title: t(lang, "Campaign Concept Generation", "Generación de Conceptos de Campaña"),
      body: t(lang, "Based on market intelligence, we generate original campaign concepts, ad angles, and creative briefs tailored to your brand and audience.", "Basándonos en la inteligencia del mercado, generamos conceptos de campaña originales, ángulos publicitarios y briefs creativos adaptados a tu marca y audiencia."),
    },
  ],
  deliverables: [
    t(lang, "Competitor ad breakdown reports", "Reportes de análisis de anuncios de competidores"),
    t(lang, "Pattern and trend analysis", "Análisis de patrones y tendencias"),
    t(lang, "Original campaign concepts", "Conceptos de campaña originales"),
    t(lang, "Ready-to-execute creative briefs", "Briefs creativos listos para ejecutar"),
    t(lang, "Hook and angle library for your brand", "Biblioteca de ganchos y ángulos para tu marca"),
  ],
  bestFor: [
    t(lang, "Real estate teams", "Equipos de bienes raíces"),
    t(lang, "Gyms and fitness brands", "Gimnasios y marcas de fitness"),
    t(lang, "Med spas and aesthetic clinics", "Med spas y clínicas estéticas"),
    t(lang, "Influencers and creator agencies", "Influencers y agencias de creadores"),
    t(lang, "Local businesses running paid ads", "Negocios locales con publicidad pagada"),
  ],
});

const getContent = (lang: Lang) => ({
  badge: t(lang, "Custom AI Systems · Law · Trucking · Coaching · Real Estate · Campaign Intelligence · EN/ES", "Sistemas de IA · Abogados · Transporte · Coaching · Bienes Raíces · Campañas · EN/ES"),
  hero: {
    headline: t(lang, "We build the operational system your business runs on.", "Construimos el sistema operacional sobre el que corre tu negocio."),
    sub: t(lang, "Custom-built AI infrastructure that automates your intake, follow-up, dispatch, and client communication — so you can scale without adding overhead.", "Infraestructura de IA personalizada que automatiza tu captación, seguimiento, despacho y comunicación con clientes — para que puedas crecer sin aumentar la carga operativa."),
    cta1: t(lang, "Get Your Custom Proposal", "Obtén Tu Propuesta Personalizada"),
    cta2: t(lang, "See How It Works", "Cómo Funciona"),
  },
  stats: [
    { value: "8 weeks", label: t(lang, "from kickoff to full system live", "del inicio al sistema en producción") },
    { value: "24/7", label: t(lang, "your system works while you don't", "tu sistema trabaja mientras tú descansas") },
    { value: "<$4/hr", label: t(lang, "effective cost of the monthly retainer", "costo efectivo del retainer mensual") },
  ],
  verticalsSectionTitle: t(lang, "Built for your industry.", "Construido para tu industria."),
  verticalsSub: t(lang, "Every system is custom-built around how your business actually operates — not a generic template.", "Cada sistema se construye a la medida de cómo opera tu negocio — no es una plantilla genérica."),
  howTitle: t(lang, "How it works.", "Cómo funciona."),
  howSub: t(lang, "Simple process. Real system. Running in 8 weeks.", "Proceso simple. Sistema real. Funcionando en 8 semanas."),
  howSteps: [
    { step: "01", title: t(lang, "Discovery & Proposal", "Descubrimiento y Propuesta"), body: t(lang, "We learn how your business operates today, identify the highest-impact workflows, and deliver a custom proposal scoped to your exact needs.", "Aprendemos cómo opera tu negocio hoy, identificamos los flujos de trabajo de mayor impacto y entregamos una propuesta personalizada a tus necesidades exactas.") },
    { step: "02", title: t(lang, "Build & Deploy", "Construcción y Despliegue"), body: t(lang, "We build your system in 6–8 weeks — connecting to your existing tools, configuring your workflows, and testing everything before handoff.", "Construimos tu sistema en 6–8 semanas — conectando tus herramientas existentes, configurando tus flujos de trabajo y probando todo antes de la entrega.") },
    { step: "03", title: t(lang, "Support & Maintenance", "Soporte y Mantenimiento"), body: t(lang, "Monthly retainer covers ongoing system support and maintenance. Additional workflows outside the original scope are available as add-ons.", "El retainer mensual cubre soporte y mantenimiento continuo. Flujos de trabajo adicionales fuera del alcance original están disponibles como complementos.") },
  ],
  beforeAfter: [
    { before: t(lang, "Leads fall through the cracks between apps and messages.", "Los leads se pierden entre apps y mensajes."), after: t(lang, "Every lead is captured, followed up, and converted automatically.", "Cada lead se captura, hace seguimiento y convierte automáticamente.") },
    { before: t(lang, "Coordination happens across texts, calls, and spreadsheets.", "La coordinación ocurre por textos, llamadas y hojas de cálculo."), after: t(lang, "One system handles assignment, tracking, and notifications.", "Un sistema maneja asignación, seguimiento y notificaciones.") },
    { before: t(lang, "Admin work grows every time you add a client or driver.", "El trabajo administrativo crece cada vez que agregas un cliente o conductor."), after: t(lang, "The system scales with you — no extra overhead.", "El sistema escala contigo — sin carga extra.") },
  ],
  invest: {
    title: t(lang, "Investment.", "Inversión."),
    sub: t(lang, "Founding partner pricing — available for the first 10 clients only.", "Precio de socio fundador — disponible solo para los primeros 10 clientes."),
    buildTitle: t(lang, "Build Fee", "Tarifa de Construcción"),
    buildPrice: "$3,000",
    buildSub: t(lang, "one-time · founding partner rate", "único · precio de socio fundador"),
    buildNote: t(lang, "Standard rate: $7,500", "Tarifa estándar: $7,500"),
    buildSave: t(lang, "Save $4,500", "Ahorra $4,500"),
    buildFeatures: [
      t(lang, "Custom system built to your workflow", "Sistema personalizado a tu flujo de trabajo"),
      t(lang, "Integrations with your existing tools", "Integraciones con tus herramientas existentes"),
      t(lang, "6–8 week build & deployment", "Construcción y despliegue en 6–8 semanas"),
      t(lang, "Full handoff + documentation", "Entrega completa + documentación"),
    ],
    retainerTitle: t(lang, "Monthly Retainer", "Retainer Mensual"),
    retainerPrice: t(lang, "Depends on scope", "Depende del alcance"),
    retainerSub: t(lang, "system support & maintenance", "soporte y mantenimiento del sistema"),
    retainerNote: t(lang, "Runs 720 hrs/month · less than $4/hr", "Funciona 720 hrs/mes · menos de $4/hr"),
    retainerFeatures: [
      t(lang, "System monitoring & maintenance", "Monitoreo y mantenimiento del sistema"),
      t(lang, "Bug fixes & uptime support", "Corrección de errores y soporte de disponibilidad"),
      t(lang, "Priority response", "Respuesta prioritaria"),
      t(lang, "Additional workflows billed separately", "Flujos adicionales facturados por separado"),
    ],
    retainerFine: t(lang, "Retainer is scoped per project. Included in your custom proposal.", "El retainer se define por proyecto. Incluido en tu propuesta personalizada."),
    urgency: t(lang, "Founding partner rate locks in at $3,000 for the first 10 clients. This will not be available after those spots are filled.", "El precio de socio fundador se fija en $3,000 para los primeros 10 clientes. No estará disponible después de que esos cupos se llenen."),
  },
  faqs: [
    { q: t(lang, "Do you replace the tools we already use?", "¿Reemplazan las herramientas que ya usamos?"), a: t(lang, "No. We build around your existing platforms — My Case, Filevine, Amazon Relay, Dropbox, and others. The system connects everything into one operational hub.", "No. Construimos alrededor de tus plataformas existentes — My Case, Filevine, Amazon Relay, Dropbox y otras. El sistema conecta todo en un hub operacional.") },
    { q: t(lang, "How long does a build take?", "¿Cuánto tarda una construcción?"), a: t(lang, "Most systems go from kickoff to fully live in 6–8 weeks. You'll see working workflows before the build is complete.", "La mayoría de los sistemas van del inicio a estar completamente activos en 6–8 semanas. Verás flujos de trabajo funcionando antes de que la construcción esté completa.") },
    { q: t(lang, "What's included in the monthly retainer?", "¿Qué incluye el retainer mensual?"), a: t(lang, "System support and maintenance. Any additional workflows or features outside the original scope are scoped and billed separately.", "Soporte y mantenimiento del sistema. Cualquier flujo de trabajo o función adicional fuera del alcance original se define y factura por separado.") },
    { q: t(lang, "Do you work in Spanish?", "¿Trabajan en español?"), a: t(lang, "Yes. We're bilingual by default. Proposals, systems, and client-facing messaging can all be built in English, Spanish, or both.", "Sí. Somos bilingües por defecto. Las propuestas, sistemas y mensajes para clientes pueden construirse en inglés, español o ambos.") },
  ],
  closing: {
    headline: t(lang, "Ready to run your business on a system that works 24/7?", "¿Listo para operar tu negocio con un sistema que trabaja 24/7?"),
    sub: t(lang, "Tell us how your business operates and we'll send you a custom proposal — specific to your industry, your tools, and your workflow.", "Cuéntanos cómo opera tu negocio y te enviaremos una propuesta personalizada — específica para tu industria, tus herramientas y tu flujo de trabajo."),
    cta: t(lang, "Get Your Custom Proposal", "Obtén Tu Propuesta Personalizada"),
    location: t(lang, "Miami · South Florida · Bilingual EN/ES", "Miami · Sur de Florida · Bilingüe EN/ES"),
  },
  footer: t(lang, "Custom AI Systems for Service Businesses", "Sistemas de IA Personalizados para Negocios de Servicios"),
});

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const c = getContent(lang);
  const ci = campaignIntelligence(lang);
  const verts = verticals(lang);

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">

      {/* ── Header ── */}
      <header className="mx-auto w-full max-w-6xl px-4 pt-8 pb-6 flex items-center justify-between">
        <Image priority src="/brand/shoragoai-logo.png" alt="Shorago AI" width={640} height={320}
          sizes="(min-width:1280px) 400px, (min-width:768px) 320px, 220px"
          className="w-auto h-20 sm:h-24 md:h-32 lg:h-36 xl:h-40" />
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-white/50">Miami · South Florida</span>
          <button onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="rounded-xl border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-semibold hover:bg-white/10 transition">
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="rounded-2xl bg-[#C8A96E] text-black px-5 py-2.5 text-sm font-bold hover:bg-[#E2C899] transition">
            {c.hero.cta1}
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="mx-auto w-full max-w-4xl px-4 pt-6 pb-4 text-center">
        <div className="mx-auto mb-6 inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/60">
          {c.badge}
        </div>
        <h1 className="text-4xl leading-tight font-extrabold md:text-6xl md:leading-[1.05] tracking-tight">
          {c.hero.headline}
        </h1>
        <p className="mt-5 text-lg text-white/70 md:text-xl max-w-2xl mx-auto">{c.hero.sub}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-[#C8A96E] text-black px-7 py-4 text-center font-bold hover:bg-[#E2C899] transition">
            {c.hero.cta1}
          </a>
          <a href="#how-it-works"
            className="inline-block rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-semibold hover:bg-white/10 transition">
            {c.hero.cta2}
          </a>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="mx-auto mt-12 w-full max-w-5xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-6 md:grid-cols-3 text-center">
          {c.stats.map((s) => (
            <div key={s.value}>
              <div className="text-3xl font-extrabold text-[#C8A96E]">{s.value}</div>
              <div className="text-white/60 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Verticals ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">{c.verticalsSectionTitle}</h2>
        <p className="mt-2 text-white/60">{c.verticalsSub}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {verts.map((v) => (
            <div key={v.industry} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{v.icon}</span>
                <span className="text-lg font-bold">{v.industry}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{v.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {v.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 text-[#C8A96E] text-xs px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Campaign Intelligence Deep Dive ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <div className="rounded-3xl border border-[#C8A96E]/20 bg-[#C8A96E]/5 p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📊</span>
            <span className="text-[#C8A96E] font-bold text-sm uppercase tracking-wider">
              {lang === "en" ? "New Vertical" : "Nueva Vertical"}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{ci.name}</h2>
          <p className="mt-2 text-[#C8A96E] font-semibold">{ci.tagline}</p>
          <p className="mt-3 text-white/70 text-sm leading-relaxed max-w-3xl">{ci.description}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ci.howItWorks.map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-[#C8A96E] font-bold text-sm mb-1">{s.step}</div>
                <div className="font-bold mb-1">{s.title}</div>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">
                {lang === "en" ? "What You Receive" : "Lo Que Recibes"}
              </div>
              <ul className="space-y-2">
                {ci.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-[#C8A96E] mt-0.5">✓</span>{d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white/50 text-xs uppercase tracking-wider mb-3 font-semibold">
                {lang === "en" ? "Best For" : "Ideal Para"}
              </div>
              <ul className="space-y-2">
                {ci.bestFor.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-[#C8A96E] mt-0.5">→</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-[#C8A96E] text-black px-6 py-3 font-bold hover:bg-[#E2C899] transition text-sm">
              {c.hero.cta1}
            </a>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">{c.howTitle}</h2>
        <p className="mt-2 text-white/60">{c.howSub}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {c.howSteps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-[#C8A96E] font-bold text-sm mb-2">{s.step}</div>
              <div className="text-lg font-bold mb-2">{s.title}</div>
              <p className="text-white/70 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">{lang === "en" ? "Before vs. After." : "Antes vs. Después."}</h2>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
          {c.beforeAfter.map((row, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-white/60 text-sm">
                <span className="text-xs uppercase tracking-wider text-white/30 block mb-1">{lang === "en" ? "Before" : "Antes"}</span>
                {row.before}
              </div>
              <div className="rounded-xl bg-[#C8A96E]/10 border border-[#C8A96E]/20 p-4 text-white/90 text-sm">
                <span className="text-xs uppercase tracking-wider text-[#C8A96E] block mb-1">{lang === "en" ? "After" : "Después"}</span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Investment ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">{c.invest.title}</h2>
        <p className="mt-2 text-white/60">{c.invest.sub}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#C8A96E]/30 bg-[#C8A96E]/5 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[#C8A96E] font-bold text-sm uppercase tracking-wider">{c.invest.buildTitle}</div>
              <div className="rounded-full bg-[#C8A96E]/20 border border-[#C8A96E]/40 text-[#C8A96E] text-xs font-bold px-3 py-1">
                {lang === "en" ? "First 10 clients only" : "Solo primeros 10 clientes"}
              </div>
            </div>
            <div className="text-4xl font-extrabold">{c.invest.buildPrice}</div>
            <div className="text-white/50 text-sm mt-1">{c.invest.buildSub}</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-white/30 text-xs line-through">{c.invest.buildNote}</span>
              <span className="text-[#C8A96E] text-xs font-semibold">{c.invest.buildSave}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {c.invest.buildFeatures.map((f) => <li key={f}>✓ {f}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white/50 font-bold text-sm uppercase tracking-wider mb-2">{c.invest.retainerTitle}</div>
            <div className="text-3xl font-extrabold">{c.invest.retainerPrice}</div>
            <div className="text-white/50 text-sm mt-1">{c.invest.retainerSub}</div>
            <div className="text-white/30 text-xs mt-1">{c.invest.retainerNote}</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {c.invest.retainerFeatures.map((f) => <li key={f}>✓ {f}</li>)}
            </ul>
            <p className="mt-4 text-white/40 text-xs">{c.invest.retainerFine}</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-[#C8A96E] text-black px-8 py-4 font-bold hover:bg-[#E2C899] transition">
            {c.hero.cta1}
          </a>
          <p className="mt-3 text-white/30 text-xs">{c.invest.urgency}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {c.faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">{item.q}</div>
              <p className="mt-2 text-white/70 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="mx-auto mt-14 mb-16 w-full max-w-5xl px-4">
        <div className="rounded-3xl border border-[#C8A96E]/20 bg-[#C8A96E]/5 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">{c.closing.headline}</h3>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">{c.closing.sub}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-block rounded-2xl bg-[#C8A96E] text-black px-8 py-4 font-bold hover:bg-[#E2C899] transition">
            {c.closing.cta}
          </a>
          <div className="mt-4 text-white/30 text-sm">{c.closing.location}</div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mx-auto mb-10 w-full max-w-6xl px-4 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Shorago AI · {c.footer} · shorago.ai
      </footer>

    </main>
  );
}
