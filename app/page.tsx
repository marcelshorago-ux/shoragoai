export const revalidate = 0;

import Image from "next/image";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/marcel-shorago/30min";

const BUILD_TIME = process.env.NEXT_PUBLIC_BUILD_TIME ?? "";

const verticals = [
  {
    icon: "⚖️",
    industry: "Law Firms",
    description:
      "Intake automation, deadline management, AI-drafted pleadings, and client engagement messaging — all connected to your existing case management system.",
    tags: ["My Case", "Filevine", "Bilingual EN/ES"],
  },
  {
    icon: "🚛",
    industry: "Trucking & Logistics",
    description:
      "Dispatch operations systems, driver assignment engines, SMS notifications, payout tracking, and performance dashboards built around your load boards.",
    tags: ["Amazon Relay", "Load Boards", "Driver SMS"],
  },
  {
    icon: "🎯",
    industry: "Coaching & Personal Brands",
    description:
      "Full CRM buildouts, client onboarding sequences, lead follow-up automation, and engagement systems that run 24/7 so you can focus on your craft.",
    tags: ["CRM", "Client Onboarding", "Lead Automation"],
  },
  {
    icon: "🏠",
    industry: "Real Estate",
    description:
      "Lead capture and follow-up workflows, transaction coordination automation, client communication sequences, and deal tracking infrastructure.",
    tags: ["Lead Follow-Up", "Transaction Mgmt", "Client Comms"],
  },
];

const beforeAfter = [
  {
    before: "Leads fall through the cracks between apps and messages.",
    after: "Every lead is captured, followed up, and converted automatically.",
  },
  {
    before: "Coordination happens across texts, calls, and spreadsheets.",
    after: "One system handles assignment, tracking, and notifications.",
  },
  {
    before: "Admin work grows every time you add a client or driver.",
    after: "The system scales with you — no extra overhead.",
  },
];

const stats = [
  { value: "8 weeks", label: "from kickoff to full system live" },
  { value: "24/7", label: "your system works while you don't" },
  { value: "<$4/hr", label: "effective cost of the monthly retainer" },
];

const faqs = [
  {
    q: "Do you replace the tools we already use?",
    a: "No. We build around your existing platforms — My Case, Filevine, Amazon Relay, Dropbox, and others. The system connects everything into one operational hub.",
  },
  {
    q: "How long does a build take?",
    a: "Most systems go from kickoff to fully live in 6–8 weeks. You'll see working workflows before the build is complete.",
  },
  {
    q: "What's included in the monthly retainer?",
    a: "System support and maintenance. Any additional workflows or features outside the original scope are scoped and billed separately.",
  },
  {
    q: "Do you work in Spanish?",
    a: "Yes. We're bilingual by default. Proposals, systems, and client-facing messaging can all be built in English, Spanish, or both.",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">

      {/* ── Header ── */}
      <header className="mx-auto w-full max-w-6xl px-4 pt-8 pb-6 flex items-center justify-between">
        <Image
          priority
          src="/brand/shoragoai-logo.png"
          alt="Shorago AI"
          width={640}
          height={320}
          sizes="(min-width:1280px) 400px, (min-width:768px) 320px, 220px"
          className="w-auto h-20 sm:h-24 md:h-32 lg:h-36 xl:h-40"
        />
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm text-white/50">Miami · South Florida</span>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#C8A96E] text-black px-5 py-2.5 text-sm font-bold hover:bg-[#E2C899] transition"
          >
            Get Your Custom Proposal
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="mx-auto w-full max-w-4xl px-4 pt-6 pb-4 text-center">
        <div className="mx-auto mb-6 inline-block rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-white/60">
          Custom AI Systems · Law · Trucking · Coaching · Real Estate · EN/ES
        </div>
        <h1 className="text-4xl leading-tight font-extrabold md:text-6xl md:leading-[1.05] tracking-tight">
          We build the operational system<br className="hidden md:block" /> your business runs on.
        </h1>
        <p className="mt-5 text-lg text-white/70 md:text-xl max-w-2xl mx-auto">
          Custom-built AI infrastructure that automates your intake, follow-up, dispatch, and client communication — so you can scale without adding overhead.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-[#C8A96E] text-black px-7 py-4 text-center font-bold hover:bg-[#E2C899] transition"
          >
            Get Your Custom Proposal
          </a>
          <a
            href="#how-it-works"
            className="inline-block rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-semibold hover:bg-white/10 transition"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="mx-auto mt-12 w-full max-w-5xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-6 md:grid-cols-3 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="text-3xl font-extrabold text-[#C8A96E]">{s.value}</div>
              <div className="text-white/60 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Verticals ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Built for your industry.</h2>
        <p className="mt-2 text-white/60">Every system is custom-built around how your business actually operates — not a generic template.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {verticals.map((v) => (
            <div key={v.industry} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{v.icon}</span>
                <span className="text-lg font-bold">{v.industry}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{v.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {v.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/10 text-[#C8A96E] text-xs px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">How it works.</h2>
        <p className="mt-2 text-white/60">Simple process. Real system. Running in 8 weeks.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { step: "01", title: "Discovery & Proposal", body: "We learn how your business operates today, identify the highest-impact workflows, and deliver a custom proposal scoped to your exact needs." },
            { step: "02", title: "Build & Deploy", body: "We build your system in 6–8 weeks — connecting to your existing tools, configuring your workflows, and testing everything before handoff." },
            { step: "03", title: "Support & Maintenance", body: "Monthly retainer covers ongoing system support and maintenance. Additional workflows outside the original scope are available as add-ons." },
          ].map((s) => (
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
        <h2 className="text-2xl md:text-3xl font-bold">Before vs. After.</h2>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
          {beforeAfter.map((row, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-white/60 text-sm">
                <span className="text-xs uppercase tracking-wider text-white/30 block mb-1">Before</span>
                {row.before}
              </div>
              <div className="rounded-xl bg-[#C8A96E]/10 border border-[#C8A96E]/20 p-4 text-white/90 text-sm">
                <span className="text-xs uppercase tracking-wider text-[#C8A96E] block mb-1">After</span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Investment ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Investment.</h2>
        <p className="mt-2 text-white/60">
          Founding partner pricing — available for the first 10 clients only. Once those spots are filled, the standard rate applies.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#C8A96E]/30 bg-[#C8A96E]/5 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[#C8A96E] font-bold text-sm uppercase tracking-wider">Build Fee</div>
              <div className="rounded-full bg-[#C8A96E]/20 border border-[#C8A96E]/40 text-[#C8A96E] text-xs font-bold px-3 py-1">
                First 10 clients only
              </div>
            </div>
            <div className="text-4xl font-extrabold">$3,000</div>
            <div className="text-white/50 text-sm mt-1">one-time · founding partner rate</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-white/30 text-xs line-through">Standard rate: $7,500</span>
              <span className="text-[#C8A96E] text-xs font-semibold">Save $4,500</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>✓ Custom system built to your workflow</li>
              <li>✓ Integrations with your existing tools</li>
              <li>✓ 6–8 week build &amp; deployment</li>
              <li>✓ Full handoff + documentation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white/50 font-bold text-sm uppercase tracking-wider mb-2">Monthly Retainer</div>
            <div className="text-4xl font-extrabold">Depends on scope</div>
            <div className="text-white/50 text-sm mt-1">system support &amp; maintenance</div>
            <div className="text-white/30 text-xs mt-1">Runs 720 hrs/month · less than $4/hr</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>✓ System monitoring &amp; maintenance</li>
              <li>✓ Bug fixes &amp; uptime support</li>
              <li>✓ Priority response</li>
              <li>✓ Additional workflows billed separately</li>
            </ul>
            <p className="mt-4 text-white/40 text-xs">
              Retainer is scoped per project. Included in your custom proposal.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-[#C8A96E] text-black px-8 py-4 font-bold hover:bg-[#E2C899] transition"
          >
            Get Your Custom Proposal
          </a>
          <p className="mt-3 text-white/30 text-xs">
            Founding partner rate locks in at $3,000 for the first 10 clients. This will not be available after those spots are filled.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto mt-14 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faqs.map((item) => (
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
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to run your business on a system that works 24/7?
          </h3>
          <p className="mt-3 text-white/60 max-w-xl mx-auto">
            Tell us how your business operates and we&apos;ll send you a custom proposal — specific to your industry, your tools, and your workflow.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-2xl bg-[#C8A96E] text-black px-8 py-4 font-bold hover:bg-[#E2C899] transition"
          >
            Get Your Custom Proposal
          </a>
          <div className="mt-4 text-white/30 text-sm">Miami · South Florida · Bilingual EN/ES</div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mx-auto mb-10 w-full max-w-6xl px-4 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Shorago AI · Custom AI Systems for Service Businesses · shorago.ai
        <div className="mt-2 text-xs opacity-50">
          Build: {BUILD_TIME ? new Date(BUILD_TIME).toLocaleString() : "n/a"}
        </div>
      </footer>

    </main>
  );
}
