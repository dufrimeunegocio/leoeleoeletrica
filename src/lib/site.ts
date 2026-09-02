export const WHATSAPP_NUMBER = "5511939402876";

export const SITE_URL = "https://leoeleoeletrica.com.br";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Dispara o evento click_whatsapp (GA4 / dataLayer), apenas se existirem. */
export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  if (typeof w.gtag === "function") {
    w.gtag("event", "click_whatsapp", { location });
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: "click_whatsapp", location });
  }
}

export const INSTAGRAM_URL =
  "https://www.instagram.com/leonardojuniorda2?igsh=MTg1Mmx6ZDdtNnUzYw==";

export const PHONE_DISPLAY = "(11) 93940-2876";
export const PHONE_E164 = "+5511939402876";
