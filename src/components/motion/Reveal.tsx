"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  id?: string;
  rootMargin?: string;
};

function isInViewport(node: HTMLElement) {
  if (getComputedStyle(node).display === "none") return true;
  const rect = node.getBoundingClientRect();
  return rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  id,
  rootMargin = "0px 0px -8% 0px",
}: RevealProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node || visible) return;

    node.dataset.revealReady = "1";

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      isInViewport(node)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
      },
      { threshold: 0, rootMargin }
    );
    observer.observe(node);

    const onScroll = () => {
      if (isInViewport(node)) setVisible(true);
    };

    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    window.addEventListener("resize", onScroll);
    const frame = requestAnimationFrame(onScroll);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [node, visible, rootMargin]);

  const style =
    delay > 0
      ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
      : undefined;

  const classes = [className, visible ? "is-in" : null].filter(Boolean).join(" ");

  return (
    <Tag ref={setNode} id={id} className={classes} style={style}>
      {children}
    </Tag>
  );
}
