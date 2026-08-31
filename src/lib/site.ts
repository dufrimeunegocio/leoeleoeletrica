export const WHATSAPP_NUMBER = "5511939402876";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const INSTAGRAM_URL =
  "https://www.instagram.com/leonardojuniorda2?igsh=MTg1Mmx6ZDdtNnUzYw==";

export const PHONE_DISPLAY = "(11) 93940-2876";
