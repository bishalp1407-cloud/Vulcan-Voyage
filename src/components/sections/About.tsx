import { ABOUT } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MediaSlot } from "@/components/visual/MediaSlot";
import { SectionLabel } from "./SectionLabel";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id={ABOUT.id} ariaLabelledBy={ABOUT.headingId} tone="muted">
      <Container>
        <Reveal className="js-reveal">
          <SectionLabel>{ABOUT.label}</SectionLabel>
        </Reveal>
        <div className={styles.layout}>
          <div className={styles.primary}>
            <Reveal as="h2" id={ABOUT.headingId} className={`js-reveal ${styles.definition}`}>
              {ABOUT.definition}
            </Reveal>
            <Reveal className={`js-reveal ${styles.mediaFrame}`} delay={120}>
              <MediaSlot media={MEDIA.about} />
            </Reveal>
          </div>
          <div className={styles.side}>
            <Reveal className={`js-reveal ${styles.companion}`} delay={100}>
              {ABOUT.companion}
            </Reveal>
            <Reveal className={`js-reveal ${styles.role}`} delay={180}>
              {ABOUT.role}
            </Reveal>
            <Reveal as="h3" className={`js-reveal ${styles.closing}`} delay={240}>
              {ABOUT.closing}
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
