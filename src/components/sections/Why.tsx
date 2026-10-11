import { WHY } from "@/content/copy";
import { MEDIA } from "@/content/media";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MediaSlot } from "@/components/visual/MediaSlot";
import { SectionLabel } from "./SectionLabel";
import styles from "./Why.module.css";

export function Why() {
  return (
    <Section id={WHY.id} ariaLabelledBy={WHY.headingId} tone="muted">
      <Container>
        <SectionLabel id={WHY.headingId}>{WHY.label}</SectionLabel>
        <div style={{ marginBottom: "var(--space-12)" }}>
          <MediaSlot media={MEDIA.why} />
        </div>
        <div className={styles.list}>
          {WHY.principles.map((principle) => (
            <article key={principle.title} className={styles.principle}>
              <h2 className={styles.title}>{principle.title}</h2>
              <p className={styles.body}>{principle.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
