import { METHOD } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MediaSlot } from "@/components/visual/MediaSlot";
import { SectionLabel } from "./SectionLabel";
import styles from "./Method.module.css";

export function Method() {
  return (
    <Section id={METHOD.id} ariaLabelledBy={METHOD.headingId}>
      <Container>
        <Reveal className={`js-reveal ${styles.head}`}>
          <SectionLabel>{METHOD.label}</SectionLabel>
          <h2 id={METHOD.headingId} className={styles.heading}>
            {METHOD.intro}
          </h2>
        </Reveal>
        <Reveal className={`js-reveal ${styles.mediaWrap}`} delay={100}>
          <MediaSlot media={MEDIA.method} />
        </Reveal>
        <div className={styles.trackContainer}>
          <ol className={styles.track}>
            {METHOD.stages.map((stage, index) => (
              <Reveal
                key={stage.number}
                as="li"
                className={`js-stage-reveal ${styles.stage}`}
                delay={index * 40}
                rootMargin="0px 0px -10% 0px"
              >
                <div className={styles.stageDot} aria-hidden="true" />
                <span className={styles.number}>{stage.number}</span>
                <span className={styles.name}>{stage.name}</span>
                <p className={styles.line}>{stage.line}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal className={`js-reveal ${styles.closing}`} delay={200}>
          {METHOD.closing}
        </Reveal>
      </Container>
    </Section>
  );
}
