"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"enter" | "reveal" | "done">("enter");

  useEffect(() => {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    // Prevent body scrolling during loading animation
    document.body.style.overflow = "hidden";

    // Transition to Phase 2 (scaling expansion & landing page reveal)
    const timer1 = setTimeout(() => {
      setPhase("reveal");
    }, 900);

    // Complete animation and unmount loader
    const timer2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 1750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`${styles.overlay} ${phase === "reveal" ? styles.overlayReveal : ""}`}
      aria-label="Loading Vulcan Voyage"
      role="status"
    >
      <h1
        className={`${styles.text} ${
          phase === "enter" ? styles.textEnter : styles.textReveal
        }`}
      >
        VULCAN VOYAGE
      </h1>
    </div>
  );
}
