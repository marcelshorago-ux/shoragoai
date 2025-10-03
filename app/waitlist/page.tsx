'use client';

import { useState } from "react";

const EMAIL = "marcel.shorago@gmail.com";

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [locations, setLocations] = useState<number | "">("");
  const [notes, setNotes] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Shorago AI Waitlist Signup");
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business}`,
        `Locations: ${locations || "-"}`,
        "",
        "Notes:",
        notes || "-",
      ].join("\n")
    );
    // Opens the user's email client with prefilled content (no backend needed)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0c0a0f] via-[#0e0a13] to-[#0b0b0f] text-zinc-100">
      <section className="container mx-auto max-w-2xl px-4 py-14">
        <h1 className="text-3xl font-bold">Join the Waitlist</h1>
        <p className="mt-2 text-zinc-300">
          Be the first to get access. We’ll reach out to schedule a quick fit call.
        </p>

        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="w-full rounded-lg bg-black/30 p-3 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-violet-400"
              placeholder="Full name"
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
          </div>

          <input
            className="w-full rounded-lg bg-black/30 p-3 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-violet-400"
            placeholder="Business name"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />

          <input
            className="w-full rounded-lg bg-black/30 p-3 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-violet-400"
            placeholder="# of locations (optional)"
            type="number"
            min={1}
            value={locations}
            onChange={(e) => setLocations(e.target.value === "" ? "" : Number(e.target.value))}
          />

          <textarea
            className="w-full rounded-lg bg-black/30 p-3 text-sm ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-violet-400"
            placeholder="What are you trying to solve or improve?"
            rows={5}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button className="btn btn-primary" type="submit">
            Join Waitlist
          </button>
        </form>

        <p className="mt-3 text-xs text-zinc-400">
          Submitting opens your email with the details pre-filled — no account required.
        </p>

        <div className="mt-8">
          <a href="/" className="text-violet-300 hover:underline">← Back to home</a>
        </div>
      </section>
    </main>
  );
}
