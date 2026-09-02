import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { MessageCircle } from "lucide-react";

import appCss from "../styles.css?url";
import { trackWhatsAppClick, whatsappLink } from "../lib/site";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep px-5">
      <div className="grid-tech absolute inset-0 opacity-60" aria-hidden />
      <div className="relative max-w-md text-center">
        <p className="text-6xl font-extrabold text-cyan sm:text-7xl">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-primary-foreground sm:text-3xl">
          Página não encontrada
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
          O endereço que você acessou não existe ou foi movido. Volte para o início ou fale com a
          gente pelo WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-cyan px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-deep transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Voltar ao início
          </Link>
          <a
            href={whatsappLink("Olá, preciso de um eletricista!")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("404")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whats px-6 py-3.5 text-sm font-semibold text-whats-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Leo e Leo Elétrica" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Leo e Leo Elétrica" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
