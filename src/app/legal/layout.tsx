import type { Metadata } from "next";
import { HeaderPill } from "@/components/header-pill";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: true,
      follow: true,
      noarchive: true,
      nosnippet: true,
      "max-snippet": 0,
      "max-image-preview": "none",
    },
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderPill />
      <main className="flex flex-1 flex-col px-6 pb-32 pt-32 sm:px-12">
        <div className="mx-auto w-full max-w-3xl">{children}</div>
      </main>
      <Footer />
    </>
  );
}
