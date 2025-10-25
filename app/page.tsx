export const revalidate = 0; // or: export const dynamic = 'force-dynamic'

import Image from "next/image";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/marcel-shorago/30min";

const BUILD_TIME = process.env.NEXT_PUBLIC_BUILD_TIME ?? "";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="Shorago AI" width={34} height={34} />
          <span className="text-lg font-semibold opacity-90">Shorago AI</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-700 transition"
          >
            Book Your AI Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-4">
        <div className="mx-auto mb-4 inline-block rounded-full bg-white/5 px-4 py-1 text-sm text-white/70">
          AI Workflow Consulting • EN/ES
        </div>
        <h1 className="text-4xl leading-tight font-extrabold md:text-6xl md:leading-[1.05] tracking-tight">
          We turn your everyday workflows into AI-powered systems.
        </h1>
        <p className="mt-4 text-lg text-white/80 md:text-xl">
          From discovery to build and rollout — we guide non-technical teams to real results.
        </p>

        <ul className="mt-6 space-y-3 text-white/90">
          <li className="flex gap-3">
            <span className="mt-[10px] inline-block h-2 w-2 rounded-full bg-purple-400" />
            <span>We map your processes and find quick wins.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[10px] inline-block h-2 w-2 rounded-full bg-purple-400" />
            <span>We implement practical AI tools into your daily operations.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[10px] inline-block h-2 w-2 rounded-full bg-purple-400" />
            <span>We train your team and measure impact.</span>
          </li>
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-purple-600 px-6 py-4 text-center font-semibold hover:bg-purple-700 transition"
          >
            Start Your Workflow Audit
          </a>
          <a
            href="/waitlist"
            className="inline-block rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold hover:bg-white/10 transition"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* Before vs After */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">Before vs After</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Before</div>
              <ul className="space-y-3 text-white/90">
                <li>Unclear where to start with AI.</li>
                <li>Manual reports, late decisions.</li>
                <li>Tasks slip through the cracks.</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60 mb-2">After</div>
              <ul className="space-y-3 text-white/90">
                <li>Clear AI roadmap, prioritized by ROI.</li>
                <li>Live KPIs with owners and due dates.</li>
                <li>Automated nudges and proof of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Operating System Loop */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">The AI Operating System Loop</h2>
        <p className="mt-2 text-white/80">
          We don’t just automate. We train, decide, and execute — all in one loop.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "Train", d: "Shorago AI Academy (EN/ES) + role-based playbooks train your team as we ship." },
            { t: "Decide", d: "Benchmarks & alerts highlight what matters: drift, delays, missed KPIs." },
            { t: "Execute", d: "WhatsApp/Email automations chase owners, collect proof, and close loops." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-lg font-semibold">{b.t}</div>
              <p className="mt-2 text-white/80">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benchmarks / KPI strip */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 grid gap-4 md:grid-cols-3 text-center">
          <div>
            <div className="text-3xl font-extrabold">30–50%</div>
            <div className="text-white/70 text-sm">productivity lift per employee</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">2–4 weeks</div>
            <div className="text-white/70 text-sm">to first automation shipped</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">24/7</div>
            <div className="text-white/70 text-sm">live KPIs & audit trails</div>
          </div>
        </div>
      </section>

      {/* Reasoning Agents */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Reasoning agents that learn your business</h2>
        <p className="mt-2 text-white/80">
          We capture checklists, SOPs, and message patterns to create light domain agents
          (“Coach AI”, “Vendor AI”) that replicate your best people’s reasoning.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <ul className="space-y-3 text-white/90">
            <li>Onboarding playbooks converted to structured knowledge.</li>
            <li>Agents propose actions; automations execute with approvals.</li>
            <li>Monthly performance snapshots build your proprietary KPI index.</li>
          </ul>
          <div className="mt-5">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-700 transition"
            >
              See the AI OS plan for your team
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Simple Starter Plan (Founders Offer)</h2>
          <p className="mt-2 text-white/80">
            Stage 1 → <span className="font-semibold">$499/month (12-month)</span>. Includes AI Workflow Audit + first
            automation implementation + support.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-3 text-white/90">
            <li>Audit + roadmap + quick wins</li>
            <li>First automation included</li>
            <li>Bilingual onboarding + support</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-purple-600 px-6 py-4 text-center font-semibold hover:bg-purple-700 transition"
            >
              Book Your AI Consultation
            </a>
            <a
              href="/waitlist"
              className="inline-block rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold hover:bg-white/10 transition"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto my-12 w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {[
            {
              q: "We’re new to AI — is this for us?",
              a: "Yes. We specialize in guiding non-technical teams from zero to working automations with training and support."
            },
            {
              q: "How fast can we launch?",
              a: "Typical pilot is 2–4 weeks: connect data, define KPIs, ship the first automation, and train your team."
            },
            {
              q: "Who owns the data and tools?",
              a: "You do. We connect to your systems, and everything is exportable. We’ll document the setup for your team."
            },
            {
              q: "What if our processes are messy?",
              a: "That’s exactly when consulting helps. We map your workflows, simplify where needed, and implement practical tools."
            }
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">{item.q}</div>
              <p className="mt-2 text-white/80">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold">
            Ready to move from “we should use AI” to “AI runs our workflows every day”?
          </h3>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-2xl bg-purple-600 px-6 py-4 font-semibold hover:bg-purple-700 transition"
          >
            Start Your Workflow Audit
          </a>
        </div>
      </section>

      {/* Footer with build stamp */}
      <footer className="mx-auto mb-10 w-full max-w-6xl px-4 text-center text-white/60">
        © {new Date().getFullYear()} Shorago AI • Built for SMBs
        <div className="mt-2 text-xs opacity-70">
          Build: {BUILD_TIME ? new Date(BUILD_TIME).toLocaleString() : "n/a"}
        </div>
      </footer>
    </main>
  );
}
