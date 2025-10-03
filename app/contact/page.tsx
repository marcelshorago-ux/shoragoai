'use client';

import { useState } from "react";
import { openCalendly, CALENDLY_URL } from "../../lib/calendly";

const EMAIL = "marcel.shorago@gmail.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function mailtoFallback(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || "Website"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0a0f] via-[#0e0a13] to-[#0b0b0f] text-zinc-100">
      <section className="container mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-zinc-300">
          Book a quick call or send us a message. EN/ES welcome.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold">Book a Demo</h2>
            <p className="mt-2 text-zinc-300">
              See how Shorago AI runs multi-location ops in real-time.
            </p>
            <button onClick={() => openCalendly(CALENDLY_URL)} className="btn btn-primary mt-4 inline-flex">
              Open Calendly
            </button>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h2 className="text-lg font-semibold">Send a Message</h2>
            <form className="mt-4 space-y-3" onSubmit={mailtoFallback}>
              <input
                className="w-full rounded-lg bg-black/30 p-3 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full rounded-lg bg-black/30 p-3 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                className="w-full rounded-lg bg-black/30 p-3 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="What do you want to achieve?"
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
              />
              <button className="btn btn-secondary" type="submit">
                Send Email
              </button>
            </form>
            <p className="mt-3 text-xs text-zinc-400">
              This uses your email app (no account setup required).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
