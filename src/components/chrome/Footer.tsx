import { CTA } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ContactChannels } from "./ContactChannels";
import { Container } from "@/components/layout/Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.brand}>Vulcan Voyage</p>
          <p className={styles.line}>
            Indian in origin.
            <br />
            Lateral in thinking.
            <br />
            Global in ambition.
          </p>
          <div className={styles.cta}>
            <Button href={CTA.href} variant="inverted">
              {CTA.label}
            </Button>
          </div>
          <div className={styles.contacts}>
            <ContactChannels tone="dark" />
          </div>
          <p className={styles.copy}>© 2026 Vulcan Voyage</p>
        </div>
      </Container>
    </footer>
  );
}
