import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import SkillsStrip from "@/components/SkillsStrip";
import Impact from "@/components/sections/Impact";
import Work from "@/components/sections/Work";
import Story from "@/components/sections/Story";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SkillsStrip />
      <Impact />
      <Story />
      <Work />
      <About />
      <Contact />
    </main>
  );
}
