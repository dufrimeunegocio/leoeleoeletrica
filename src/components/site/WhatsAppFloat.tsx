import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick, whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá, preciso de um eletricista!")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("float")}
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whats px-4 py-3.5 font-semibold text-whats-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:px-5"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
      <span className="hidden text-sm sm:inline">Chamar no WhatsApp</span>
    </a>
  );
}
