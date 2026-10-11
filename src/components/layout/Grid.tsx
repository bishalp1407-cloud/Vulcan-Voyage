import type { ReactNode } from "react";
import styles from "./Grid.module.css";

type GridProps = {
  children: ReactNode;
  className?: string;
};

export function Grid({ children, className }: GridProps) {
  const classNames = [styles.grid, className].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
}
