import { HeaderPill } from "@/components/header-pill";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Products } from "@/components/sections/products";
import { Approach } from "@/components/sections/approach";
import { AboutIsrael } from "@/components/sections/about-israel";
import { CtaBlack } from "@/components/sections/cta-black";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeaderPill />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustStrip />
        <Products />
        <Approach />
        <AboutIsrael />
        <CtaBlack />
      </main>
      <Footer />
    </>
  );
}
