import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { MediaEntry } from "@/content/media";
import styles from "./MediaSlot.module.css";

type MediaSlotProps = {
  media: MediaEntry;
  /** Shown when `media.src` is empty (e.g. TechnicalPlate in the hero). */
  fallback?: ReactNode;
  className?: string;
};

export function MediaSlot({ media, fallback, className }: MediaSlotProps) {
  const hasPhoto = Boolean(media.src);

  return (
    <figure
      className={className ? `${styles.slot} ${className}` : styles.slot}
      style={{ "--media-aspect": media.aspect } as CSSProperties}
      data-slot={media.id}
    >
      <figcaption className={styles.caption}>{media.caption}</figcaption>
      <div className={styles.frame}>
        {hasPhoto && media.src ? (
          <Image
            className={styles.photo}
            src={media.src}
            alt={media.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            priority={media.id === "hero"}
          />
        ) : fallback ? (
          <div className={styles.fallback}>{fallback}</div>
        ) : (
          <div className={styles.empty} aria-hidden="true" />
        )}
      </div>
    </figure>
  );
}
