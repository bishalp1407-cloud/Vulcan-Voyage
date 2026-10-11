import { THINKING } from "@/content/copy";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "./SectionLabel";
import styles from "./Thinking.module.css";

export function Thinking() {
  return (
    <Section id={THINKING.id} ariaLabelledBy={THINKING.headingId} tone="dark">
      <Container>
        <SectionLabel invert>{THINKING.label}</SectionLabel>
        <div className={styles.layout}>
          <Reveal
            as="h2"
            id={THINKING.headingId}
            className={`js-words ${styles.display}`}
          >
            {THINKING.display.map((line, index) => (
              <span
                key={line}
                className={`${styles.word} word`}
                data-offset={String(index)}
              >
                {line}
              </span>
            ))}
          </Reveal>
          <Reveal className={`js-reveal ${styles.aside}`} delay={220}>
            <p className={styles.lead}>{THINKING.lead}</p>
            <ul className={styles.list}>
              {THINKING.thinking.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className={styles.list}>
              {THINKING.lateral.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className={styles.outcome}>{THINKING.outcome}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
