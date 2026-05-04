import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nevoxia — Software hecho en turno para pymes españolas",
  description:
    "Nevoxia crea software para pymes españolas. ReseaBot responde reseñas con tu voz y aprobación por WhatsApp. Hecho desde A Coruña.",
  metadataBase: new URL("https://nevoxia.es"),
  openGraph: {
    title: "Nevoxia — Hecho en turno",
    description:
      "Software para reseñas, cocina, sala y pyme española. Primero lo usamos. Después lo vendemos.",
    url: "https://nevoxia.es",
    siteName: "Nevoxia",
    locale: "es_ES",
    type: "website",
  },
};

const themeInit = `(() => {
  try {
    const key = "nevoxia:theme";
    const stored = localStorage.getItem(key);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mode = stored || "system";
    const resolved = mode === "dark" || (mode === "system" && prefersDark) ? "dark" : "light";
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themeMode = mode;
  } catch (_) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="nevoxia:theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
