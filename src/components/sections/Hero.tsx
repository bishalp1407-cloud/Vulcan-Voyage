import { HERO } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { CTA } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MediaSlot } from "@/components/visual/MediaSlot";
import { TechnicalPlate } from "@/components/visual/TechnicalPlate";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section id="top" ariaLabelledBy="hero-heading" flush>
      <Container>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <Reveal className={`js-reveal ${styles.meta}`}>
              <p className={styles.brand}>{HERO.brand}</p>
              <p className={styles.positioning}>{HERO.positioning}</p>
            </Reveal>
            <Reveal as="h1" id="hero-heading" className={`js-reveal ${styles.headline}`}>
              {HERO.headline.map((line) => (
                <span key={line} className={styles.line}>
                  {line}
                </span>
              ))}
            </Reveal>
            <Reveal className={`js-reveal ${styles.pov}`} delay={80}>
              {HERO.pov.map((line) => (
                <span key={line} className={styles.line}>
                  {line}
                </span>
              ))}
            </Reveal>
            <Reveal className={`js-reveal ${styles.cta}`} delay={200}>
              <Button href={CTA.href}>{CTA.label}</Button>
            </Reveal>
          </div>
          <Reveal className={`js-reveal ${styles.gesture}`} delay={220}>
            <MediaSlot media={MEDIA.hero} fallback={<TechnicalPlate bare />} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
