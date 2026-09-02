import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Factory,
  Home,
  Instagram,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Wallet,
  Wrench,
} from "lucide-react";

import logo from "@/assets/logo.png";

import lighting from "@/assets/section-lighting.jpg";
import { Header } from "@/components/site/Header";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_E164, SITE_URL, trackWhatsAppClick, whatsappLink } from "@/lib/site";
import servico1 from "@/assets/servico-1.webp.asset.json";
import servico2 from "@/assets/servico-2.webp.asset.json";
import servico3 from "@/assets/servico-3.webp.asset.json";
import servico4 from "@/assets/servico-4.webp.asset.json";
import servico5 from "@/assets/servico-5.webp.asset.json";
import servico6 from "@/assets/servico-6.webp.asset.json";

const gallery = [
  { src: servico1.url, alt: "Instalação de iluminação linear em teto de drogaria — serviço comercial" },
  { src: servico2.url, alt: "Medição de tensão em interruptor durante manutenção elétrica residencial" },
  { src: servico3.url, alt: "Quadro de proteção instalado com IDR, disjuntor e DPS" },
  { src: servico4.url, alt: "Carregador de veículo elétrico instalado em parede" },
  { src: servico5.url, alt: "Quadro de distribuição com disjuntores e DPS organizado" },
  { src: servico6.url, alt: "Fechadura eletrônica instalada em porta" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eletricista em Guarulhos | Leo e Leo Elétrica" },
      {
        name: "description",
        content:
          "Eletricista em Guarulhos e Grande São Paulo. Serviços elétricos residenciais, comerciais, industriais e prediais com garantia e atendimento profissional.",
      },
      { property: "og:title", content: "Eletricista em Guarulhos | Leo e Leo Elétrica" },
      {
        property: "og:description",
        content:
          "Serviços elétricos residenciais, comerciais e industriais com segurança, qualidade e atendimento profissional em Guarulhos e região.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "Leo e Leo Elétrica" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eletricista em Guarulhos | Leo e Leo Elétrica" },
      {
        name: "twitter:description",
        content:
          "Serviços elétricos residenciais, comerciais, industriais e prediais em Guarulhos e Grande São Paulo.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Electrician",
          name: "Leo e Leo Elétrica",
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/favicon.png`,
          image: `${SITE_URL}/og-image.jpg`,
          telephone: PHONE_E164,
          description:
            "Serviços elétricos residenciais, comerciais, industriais e prediais em Guarulhos e Grande São Paulo.",
          areaServed: [
            { "@type": "City", name: "Guarulhos" },
            { "@type": "AdministrativeArea", name: "Grande São Paulo" },
          ],
          sameAs: [INSTAGRAM_URL],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços elétricos",
            itemListElement: [
              "Elétrica residencial",
              "Elétrica comercial",
              "Elétrica industrial",
              "Elétrica predial",
              "Manutenção elétrica",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Home,
    tag: "Residencial",
    title: "Elétrica Residencial",
    text: "Instalações e manutenções seguras para sua casa e família.",
    msg: "Olá, preciso de um eletricista para um serviço residencial!",
  },
  {
    icon: Building2,
    tag: "Comercial",
    title: "Elétrica Comercial",
    text: "Soluções elétricas para lojas, escritórios e comércios.",
    msg: "Olá, preciso de um eletricista para um serviço comercial!",
  },
  {
    icon: Factory,
    tag: "Industrial",
    title: "Elétrica Industrial",
    text: "Atendimento técnico para demandas elétricas de maior complexidade.",
    msg: "Olá, preciso de um eletricista para um serviço industrial!",
  },
  {
    icon: Landmark,
    tag: "Predial",
    title: "Elétrica Predial",
    text: "Manutenção, adequação e reparos elétricos para prédios e condomínios.",
    msg: "Olá, preciso de um eletricista para um serviço predial!",
  },
];

const differentials = [
  { icon: BadgeCheck, title: "Atendimento profissional" },
  { icon: ShieldCheck, title: "Serviço com garantia" },
  { icon: Wallet, title: "Preço justo" },
  { icon: Wrench, title: "Residencial, comercial e industrial" },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Qualidade técnica comprovada",
    text: "Serviços feitos conforme normas e boas práticas.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia em todos os serviços",
    text: "Tranquilidade após a entrega do serviço.",
  },
  {
    icon: Clock,
    title: "Atendimento rápido",
    text: "Chamados atendidos com agilidade.",
  },
  {
    icon: Wallet,
    title: "Preço justo e transparência",
    text: "Sem surpresas e sem taxas escondidas.",
  },
];

const testimonials = [
  {
    name: "Carlos Henrique",
    role: "Cliente Comercial – São Paulo",
    text: "Ficamos sem energia no comércio e precisávamos resolver o problema com urgência. A Leo e Leo Elétrica atendeu rapidamente, explicou tudo com clareza e resolveu o serviço com muita qualidade. Atendimento profissional, preço justo e serviço garantido. Recomendo sem dúvidas.",
  },
  {
    name: "Ana Paula",
    role: "Cliente Residencial – Guarulhos",
    text: "Já tive problemas com eletricistas antes, mas com a Leo e Leo Elétrica foi diferente. Desde o primeiro contato no WhatsApp até a finalização do serviço, tudo foi muito bem explicado. O serviço ficou ótimo e ainda recebi garantia. Com certeza chamarei novamente.",
  },
  {
    name: "Marcos Silva",
    role: "Cliente Empresarial – Guarulhos",
    text: "Precisávamos de manutenção elétrica no prédio e queríamos alguém de confiança. A equipe da Leo e Leo Elétrica foi muito profissional, cumpriu os prazos e entregou um serviço de qualidade. Passaram segurança em todo o processo. Excelente atendimento.",
  },
];

const faqs = [
  {
    q: "Vocês atendem emergências?",
    a: "Sim, realizamos atendimentos urgentes. Chame no WhatsApp e informe o que está acontecendo.",
  },
  {
    q: "O serviço tem garantia?",
    a: "Sim, todos os serviços possuem garantia de 90 dias.",
  },
  {
    q: "Em quanto tempo o serviço é concluído?",
    a: "Pequenos reparos podem ser resolvidos no mesmo dia. Instalações completas levam em média de 2 a 4 dias, dependendo do serviço.",
  },
  {
    q: "Quais são os meios de pagamento?",
    a: "Aceitamos cartão de crédito, cartão de débito, Pix e dinheiro. Tudo é combinado com transparência antes da execução do serviço.",
  },
  {
    q: "Vocês atendem residências, comércios e empresas?",
    a: "Sim. Atendemos residências, comércios, prédios e empresas, realizando desde pequenos reparos até serviços elétricos de maior complexidade.",
  },
  {
    q: "Quais regiões vocês atendem?",
    a: "Atendemos Guarulhos e a Grande São Paulo.",
  },
];

function Index() {
  const mainMsg = "Olá, preciso de um eletricista!";

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy-deep pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
          <div className="grid-tech absolute inset-0 opacity-60" aria-hidden />
          <div
            className="absolute left-1/2 -top-40 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--cyan), transparent 65%)" }}
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
            <div className="rise-in flex flex-col items-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-soft">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                Guarulhos e Grande São Paulo
              </span>
              <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-[3.6rem]">
                Eletricista em Guarulhos com{" "}
                <span className="text-cyan">Atendimento Profissional</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                Serviços elétricos residenciais, comerciais e industriais com segurança, qualidade e
                atendimento profissional.
              </p>

              <a
                href={whatsappLink(mainMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero")}
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-8 py-4 text-base font-bold uppercase tracking-wide text-navy-deep shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-lg"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Contratar eletricista
              </a>

              <dl className="mt-10 flex w-full flex-col items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-center">
                {["Serviço com garantia", "Preço justo", "Atendimento profissional"].map((t) => (
                  <div key={t} className="flex items-center gap-2 whitespace-nowrap">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" aria-hidden />
                    <dt className="text-sm text-primary-foreground/75 sm:text-[0.9rem]">{t}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>


        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
            {differentials.map((d) => (
              <div key={d.title} className="flex items-center gap-3 px-1 py-3 lg:px-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-navy">
                  <d.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="min-w-0 text-sm font-semibold leading-snug text-foreground">
                  {d.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Serviços</p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              Soluções elétricas para cada tipo de ambiente
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Do pequeno reparo à instalação completa, com execução técnica e segurança.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <a
                key={s.title}
                href={whatsappLink(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("servico")}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-primary-foreground transition-colors group-hover:bg-cyan group-hover:text-navy-deep">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-cyan">
                  Falar no WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* POR QUE ESCOLHER */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-stretch gap-12 px-5 lg:grid-cols-2">
            <div className="order-2 h-full overflow-hidden rounded-3xl shadow-soft lg:order-1">
              <img
                src={lighting}
                alt="Instalação de iluminação e eletrodutos em ambiente comercial"
                width={1280}
                height={960}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80 lg:h-full lg:min-h-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
                Por que escolher a Leo e Leo?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                Confiança, qualidade e serviço bem feito.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A Leo e Leo Elétrica atua na Grande São Paulo e Guarulhos oferecendo serviços
                elétricos com foco em qualidade técnica, segurança e transparência. Nosso
                compromisso é simples: resolver o problema elétrico sem improviso, sem risco e sem
                dor de cabeça.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((r) => (
                  <div key={r.title} className="rounded-2xl border border-border bg-card p-5">
                    <r.icon className="h-5 w-5 text-cyan" aria-hidden />
                    <h3 className="mt-3 text-base font-bold text-foreground">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS REALIZADOS */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Portfólio</p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              Serviços realizados
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Fotos reais de instalações, quadros elétricos, iluminação e manutenções executadas
              pela Leo e Leo Elétrica em Guarulhos e Grande São Paulo.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <div
                key={g.src}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* REGIÃO ATENDIDA */}
        <section id="atendimento" className="bg-navy-deep py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
                Região atendida
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
                Guarulhos e Grande São Paulo
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
                Atendemos Guarulhos e também a Grande São Paulo, com deslocamento para residências,
                comércios, prédios e empresas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-navy p-6 shadow-lift">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan" aria-hidden />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-primary-foreground">Atendimento</p>
                  <p className="text-sm text-primary-foreground/70">Guarulhos e Grande São Paulo</p>
                </div>
              </div>

              <a
                href={whatsappLink(mainMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("regiao")}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-whats px-5 py-3.5 text-sm font-semibold text-whats-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Depoimentos</p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              O que dizem nossos clientes
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Quote className="h-6 w-6 text-cyan" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                Ficou com alguma dúvida?
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Se não encontrar sua resposta aqui, é só chamar no WhatsApp que a gente te ajuda.
              </p>
              <a
                href={whatsappLink(mainMsg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("faq")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-cyan hover:text-cyan"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Mandar mensagem
              </a>
            </div>

            <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {faqs.map((f) => (
                <details key={f.q} className="group px-5 py-4 sm:px-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-foreground">
                    {f.q}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
          <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Precisa de um eletricista?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/70">
              Fale agora com a Leo e Leo Elétrica pelo WhatsApp e conte o que você precisa.
            </p>
            <a
              href={whatsappLink(mainMsg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("cta_final")}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whats px-8 py-5 text-base font-bold text-whats-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Chamar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy-deep pb-24 pt-14 sm:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-3">
          <div>
            <img src={logo} alt="Leo e Leo Elétrica" width={1180} height={360} loading="lazy" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Serviços elétricos residenciais, comerciais, industriais e prediais em Guarulhos e
              Grande São Paulo.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-cyan"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                  @leonardojuniorda2
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Guarulhos e Grande São Paulo
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Leo e Leo Elétrica. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Criado com ❤️ por{" "}
            <a
              href="https://dufrimeunegocio.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:text-cyan"
            >
              Dufri — @dufrimeunegocio
            </a>
          </p>
        </div>

      </footer>
    </div>
  );
}
