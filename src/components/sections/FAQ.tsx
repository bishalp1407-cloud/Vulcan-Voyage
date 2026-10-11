"use client";

import { useState } from "react";
import { FAQ } from "@/content/copy";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "./SectionLabel";
import styles from "./FAQ.module.css";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id={FAQ.id} ariaLabelledBy={FAQ.headingId} tone="muted">
      <Container>
        <Reveal className="js-reveal">
          <SectionLabel>{FAQ.label}</SectionLabel>
          <div className={styles.intro}>
            <h2 id={FAQ.headingId} className={styles.heading}>
              {FAQ.intro}
            </h2>
          </div>
        </Reveal>

        <div className={styles.accordion}>
          {FAQ.items.map((item, index) => {
            const isOpen = openIndex === index;
            const itemId = `faq-item-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <Reveal
                key={item.question}
                as="div"
                className={`js-reveal ${styles.item} ${isOpen ? styles.isOpen : ""}`}
                delay={index * 50}
              >
                <button
                  type="button"
                  id={itemId}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                >
                  <span className={styles.index}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.indicator} aria-hidden="true">
                    +
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={itemId}
                  className={styles.panel}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{item.answer}</p>
                    {"tags" in item && Array.isArray(item.tags) && (
                      <div className={styles.tagGroup}>
                        {item.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
