'use client';

import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL } from "../lib/calendly";

export default function Home() {
  const [lang, setLang] = useState<"en"|"es">("en");
  const t = (en: string, es: string) => (lang === "en" ? en : es);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0f] to-[#111118] text-white flex flex-col items-center">
      {/* Language Toggle */}
      <div className="w-full max-w-6xl flex justify-end px-6 pt-5">
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="text-xs md:text-sm border border-gray-600 rounded-xl px-3 py-1 hover:bg-gray-800 transition"
          aria-label={t("Switch to Spanish", "Cambiar a Inglés")}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </div>

      {/* Hero */}
      <section className="max-w-4xl text-center pt-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t("The AI Operating System for Small Business", "El Sistema Operativo de IA para Pequeñas Empresas")}
        </h1>
        <p className="text-gray-300 text-base md:text-xl mb-8 leading-relaxed">
          {t(
            "We build AI-powered operating systems that learn how your business works, train your team, and continuously improve your processes.",
            "Creamos sistemas operativos impulsados por IA que aprenden cómo funciona tu negocio, entrenan a tu equipo y mejoran continuamente tus procesos."
          )}
        </p>

        <Link
          href={CALENDLY_URL}
          target="_blank"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-md transition"
        >
          {t("Book a Strategy Call", "Agenda una Consulta Estratégica")}
        </Link>
      </section>

      {/* Philosophy */}
      <section className="max-w-5xl text-left mt-16 md:mt-20 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {t("From Automations to Operating Systems", "De Automatizaciones a Sistemas Operativos")}
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          {t(
            "Shorago AI transforms fragmented tools into one intelligent layer — connecting your automations, team training, and decision-making under a single AI brain.",
            "Shorago AI transforma herramientas fragmentadas en una capa inteligente — conectando tus automatizaciones, la capacitación del equipo y la toma de decisiones bajo un solo cerebro de IA."
          )}
        </p>
        <ul className="space-y-3 text-gray-300 text-sm md:text-base">
          <li>🧠 {t("AI that learns and adapts to your workflows.", "IA que aprende y se adapta a tus flujos de trabajo.")}</li>
          <li>📊 {t("Built-in performance dashboards and benchmarks.", "Paneles de rendimiento y métricas integradas.")}</li>
          <li>🎓 {t("Includes AI training modules for your team (EN/ES).", "Incluye módulos de capacitación en IA para tu equipo (EN/ES).")}</li>
        </ul>
      </section>

      {/* Difference */}
      <section className="max-w-5xl text-left mt-14 md:mt-20 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {t("AI That Trains, Decides, and Executes", "IA que Entrena, Decide y Ejecuta")}
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          {t(
            "We go beyond automation — Shorago AI captures how your business thinks. It benchmarks performance, trains your staff, and optimizes your processes every week.",
            "Vamos más allá de la automatización — Shorago AI captura cómo piensa tu negocio. Evalúa el rendimiento, capacita a tu personal y optimiza tus procesos cada semana."
          )}
        </p>
        <ul className="space-y-3 text-gray-300 text-sm md:text-base">
          <li>⚙️ {t("Weekly AI retraining cycles improve your workflows automatically.", "Ciclos semanales de reentrenamiento de IA mejoran tus flujos automáticamente.")}</li>
          <li>📈 {t("KPI dashboards measure before/after impact and ROI.", "Paneles de KPI miden el impacto antes/después y el ROI.")}</li>
          <li>🤖 {t("Your own reasoning agents — trained like your best people.", "Tus propios agentes de razonamiento — entrenados como tus mejores personas.")}</li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-16 md:mt-20 mb-20 px-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          {t("We’re not just automating your business — we’re teaching it how to think.", "No solo automatizamos tu negocio — le enseñamos a pensar.")}
        </h3>
        <Link
          href={CALENDLY_URL}
          target="_blank"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-md transition"
        >
          {t("Book Your Strategy Call", "Agenda tu Consulta Estratégica")}
        </Link>
      </section>
    </main>
  );
}
