import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "inverted";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classNames(variant: Variant, extra?: string) {
  return [styles.button, styles[variant], extra].filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, variant = "primary", className, children, ...rest } = props;
    return (
      <a href={href} className={classNames(variant, className)} {...rest}>
        {children}
      </a>
    );
  }

  const { variant = "primary", className, children, type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classNames(variant, className)} {...rest}>
      {children}
    </button>
  );
}
