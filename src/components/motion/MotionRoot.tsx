"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

const HEADER_OFFSET = -88;

export function MotionRoot({ children }: { children: ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncClass = () => {
      document.documentElement.classList.toggle("motion-on", !media.matches);
    };
    syncClass();
    media.addEventListener("change", syncClass);

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      smoothWheel: true,
      anchors: { offset: HEADER_OFFSET, duration: 1.1 },
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });

    const syncMenu = () => {
      if (document.body.classList.contains("nav-open")) lenis.stop();
      else lenis.start();
    };
    const observer = new MutationObserver(syncMenu);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    const onSkip = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      event.preventDefault();
      lenis.scrollTo("#contact", { offset: HEADER_OFFSET, immediate: true });
      target.blur();
    };
    const skip = document.querySelector<HTMLAnchorElement>(".skip-link");
    skip?.addEventListener("click", onSkip);

    const onHashClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a[href^='#']");
      if (!link || link === skip) return;
      if (!document.body.classList.contains("nav-open")) return;
      document.body.classList.remove("nav-open");
      lenis.start();
    };
    document.addEventListener("click", onHashClick, true);

    return () => {
      skip?.removeEventListener("click", onSkip);
      document.removeEventListener("click", onHashClick, true);
      observer.disconnect();
      media.removeEventListener("change", syncClass);
      document.documentElement.classList.remove("motion-on");
      lenis.destroy();
    };
  }, []);

  return children;
}
