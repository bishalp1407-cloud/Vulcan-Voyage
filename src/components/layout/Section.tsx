import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  id?: string;
  ariaLabelledBy?: string;
  className?: string;
  tone?: "default" | "muted" | "dark";
  flush?: boolean;
};

export function Section({
  children,
  id,
  ariaLabelledBy,
  className,
  tone = "default",
  flush = false,
}: SectionProps) {
  const classNames = [
    styles.section,
    styles[tone],
    flush ? styles.flush : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      tabIndex={id ? -1 : undefined}
      data-tone={tone}
      aria-labelledby={ariaLabelledBy}
      className={classNames}
    >
      {children}
    </section>
  );
}
