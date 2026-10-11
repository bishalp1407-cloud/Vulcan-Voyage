import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <p className={styles.kicker}>Vulcan Voyage</p>
        <h1 className={styles.title}>This page is not part of the voyage.</h1>
        <p className={styles.body}>The landing page is a single story. Start there.</p>
        <Button href="/">Back to Vulcan Voyage</Button>
      </Container>
    </Section>
  );
}
