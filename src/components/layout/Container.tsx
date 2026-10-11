import type { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
  as?: "div" | "main" | "header" | "footer";
  className?: string;
};

export function Container({
  children,
  as: Tag = "div",
  className,
}: ContainerProps) {
  const classNames = [styles.container, className].filter(Boolean).join(" ");

  return <Tag className={classNames}>{children}</Tag>;
}
