import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { whatsappLink } from "@/lib/site";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#atendimento", label: "Atendimento" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy-deep/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Leo e Leo Elétrica">
          <img src={logo} alt="Leo e Leo Elétrica" width={1180} height={360} className="h-7 w-auto sm:h-8" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/75 transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Olá, preciso de um eletricista!")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whats px-4 py-2.5 text-sm font-semibold text-whats-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-primary-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-deep px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-base font-medium text-primary-foreground/85"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá, preciso de um eletricista!")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-whats px-4 py-3 text-sm font-semibold text-whats-foreground"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Chamar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
