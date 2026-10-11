import { CONTACT } from "@/content/copy";
import { CTA } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ContactChannels } from "@/components/chrome/ContactChannels";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Section id={CONTACT.id} ariaLabelledBy={CONTACT.headingId}>
      <Container>
        <Reveal className={`js-reveal ${styles.wrap}`}>
          <h2 id={CONTACT.headingId} className={styles.promise}>
            {CONTACT.promise.map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.invitation}>
            {CONTACT.invitation.map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </p>
          <Button href="#contact-channels">{CTA.label}</Button>
          <ContactChannels id="contact-channels" showNote />
        </Reveal>
      </Container>
    </Section>
  );
}
