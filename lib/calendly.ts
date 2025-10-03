export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/marcel-shorago/30min";

export const CALENDLY_FALLBACK =
  process.env.NEXT_PUBLIC_CALENDLY_FALLBACK || "https://calendly.com/marcel-shorago";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

/** Open Calendly popup if widget is present; otherwise redirect to URL (or fallback). */
export function openCalendly(url: string = CALENDLY_URL, fallback: string = CALENDLY_FALLBACK) {
  if (typeof window === "undefined") return;
  const finalUrl = url || fallback;
  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url: finalUrl });
  } else {
    window.location.href = finalUrl;
  }
}
