import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { Background } from "@/components/layout/Background";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/** Serifa usada só no versículo da seção "Além do código". */
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const description =
  "Victor Henrique, desenvolvedor de software full stack em Governador Valadares, MG. TypeScript, React, Next.js, PostgreSQL e FastAPI. Projetos: Kombexa, Cognita AI, Aureon, Finance.AI e Foodie.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description,
  applicationName: `${SITE.name} — Portfólio`,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "Victor Henrique",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "Desenvolvedor Júnior",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "FastAPI",
    "LLM",
    "RAG",
    "Governador Valadares",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.role}`,
    description,
    images: [{ url: "/projects/kombexa.webp", width: 1440, height: 900, alt: "Kombexa, projeto de Victor Henrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.role}`,
    description,
    images: ["/projects/kombexa.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#171323" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.title,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  image: `${SITE.url}/victor-henrique.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Governador Valadares", addressRegion: "MG", addressCountry: "BR" },
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: ["TypeScript", "React", "Next.js", "PostgreSQL", "Python", "FastAPI", "LLM", "RAG"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        {/* aplica o tema salvo antes da primeira pintura */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Ir para o conteúdo
        </a>
        <MotionProvider>
          <Background />
          <Header />
          <main id="conteudo" className="mx-auto w-full max-w-6xl flex-1 overflow-x-clip px-4 sm:px-6">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
