import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { FAQSection } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Thinking } from "@/components/sections/Thinking";
import { Why } from "@/components/sections/Why";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <About />
      <Thinking />
      <Capabilities />
      <Method />
      <Why />
      <FAQSection />
      <Contact />
    </main>
  );
}
