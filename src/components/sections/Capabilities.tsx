import { CAPABILITIES } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MediaSlot } from "@/components/visual/MediaSlot";
import { SectionLabel } from "./SectionLabel";
import styles from "./Capabilities.module.css";

export function Capabilities() {
  return (
    <Section
      id={CAPABILITIES.id}
      ariaLabelledBy={CAPABILITIES.headingId}
      tone="muted"
    >
      <Container>
        <Reveal className="js-reveal">
          <SectionLabel>{CAPABILITIES.label}</SectionLabel>
          <div className={styles.intro}>
            <h2 id={CAPABILITIES.headingId} className={styles.heading}>
              {CAPABILITIES.intro}
            </h2>
            <p className={styles.arc}>{CAPABILITIES.arc}</p>
          </div>
        </Reveal>

        <Reveal className={`js-reveal ${styles.mediaWrap}`} delay={100}>
          <MediaSlot media={MEDIA.capabilities} />
        </Reveal>

        <ul className={styles.matrix}>
          {CAPABILITIES.items.map((item, index) => (
            <li
              key={item.name}
              className={styles.cell}
              tabIndex={0}
              role="button"
              aria-label={`${item.name}: ${item.line}`}
            >
              <div className={styles.cellHeader}>
                <span className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.indicator} aria-hidden="true">
                  +
                </span>
              </div>
              <p className={styles.line}>{item.line}</p>
            </li>
          ))}
        </ul>
        <p className={styles.integrated}>{CAPABILITIES.integrated}</p>
      </Container>
    </Section>
  );
}
