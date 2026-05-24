import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { PillarsMarquee } from "@/components/sections/PillarsMarquee";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { DoorToDoor } from "@/components/sections/DoorToDoor";
import { Studio } from "@/components/sections/Studio";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Manifesto />
        <PillarsMarquee />
        <Services />
        <Pricing />
        <DoorToDoor />
        <Studio />
        <Gallery />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
