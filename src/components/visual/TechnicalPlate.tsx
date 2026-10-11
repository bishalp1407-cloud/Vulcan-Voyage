import styles from "./TechnicalPlate.module.css";

type TechnicalPlateProps = {
  /** Drawing only — caption lives on MediaSlot when used as a photo fallback. */
  bare?: boolean;
};

export function TechnicalPlate({ bare = false }: TechnicalPlateProps) {
  const drawing = (
      <svg
        className={styles.svg}
        viewBox="0 0 320 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0.5" y="0.5" width="319" height="399" stroke="currentColor" strokeOpacity="0.18" />
        <line x1="16" y1="24" x2="304" y2="24" stroke="currentColor" strokeOpacity="0.22" />
        <line x1="16" y1="376" x2="304" y2="376" stroke="currentColor" strokeOpacity="0.22" />
        <line x1="24" y1="16" x2="24" y2="384" stroke="currentColor" strokeOpacity="0.22" />
        <line x1="296" y1="16" x2="296" y2="384" stroke="currentColor" strokeOpacity="0.22" />

        <path
          d="M118 112h84c8 0 14 6 14 14v118c0 28-22 50-50 50h-12c-28 0-50-22-50-50V126c0-8 6-14 14-14Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M132 112V96h56v16" stroke="currentColor" strokeWidth="1.2" />
        <rect x="144" y="78" width="32" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M148 294v18h24v-18" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="160" cy="200" r="18" stroke="currentColor" strokeOpacity="0.45" />
        <line x1="160" y1="182" x2="160" y2="218" stroke="currentColor" strokeOpacity="0.35" />
        <line x1="142" y1="200" x2="178" y2="200" stroke="currentColor" strokeOpacity="0.35" />

        <path d="M88 112h-20M88 294h-20" stroke="currentColor" strokeOpacity="0.5" />
        <path d="M78 112v182" stroke="currentColor" strokeOpacity="0.5" />
        <path d="M74 112l4-6 4 6M74 294l4 6 4-6" stroke="currentColor" strokeOpacity="0.5" />
        <text x="44" y="208" className={styles.anno} fill="currentColor">
          182
        </text>

        <path d="M118 86h84" stroke="currentColor" strokeOpacity="0.5" />
        <path d="M118 86l6-4v8M202 82v8" stroke="currentColor" strokeOpacity="0.5" />
        <text x="146" y="76" className={styles.anno} fill="currentColor">
          Ø 84
        </text>

        <text x="36" y="48" className={styles.anno} fill="currentColor">
          NEED → FORM
        </text>
        <text x="210" y="360" className={styles.anno} fill="currentColor">
          NOT THE OBVIOUS
        </text>
      </svg>
  );

  if (bare) {
    return drawing;
  }

  return (
    <figure className={styles.plate} aria-hidden="true">
      <figcaption className={styles.caption}>VV-01 · Study</figcaption>
      {drawing}
    </figure>
  );
}
