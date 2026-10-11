import styles from "./SectionLabel.module.css";

type SectionLabelProps = {
  id?: string;
  children: string;
  invert?: boolean;
};

export function SectionLabel({ id, children, invert = false }: SectionLabelProps) {
  return (
    <p className={`${styles.label} ${invert ? styles.invert : ""}`} id={id}>
      {children}
    </p>
  );
}
