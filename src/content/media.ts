import { ASSETS } from "@/config/assets";

export type MediaEntry = {
  id: string;
  /** Set to a path under /public or external URL in @/config/assets */
  src?: string;
  alt: string;
  caption: string;
  aspect: `${number} / ${number}`;
};

/**
 * Named photo slots linked to key-value pairs in @/config/assets.
 * Changing image paths/URLs in @/config/assets updates the landing page automatically.
 */
export const MEDIA = {
  hero: {
    id: "hero",
    src: ASSETS.hero,
    alt: "Observational study for Vulcan Voyage — material and form.",
    caption: "VV-01 · Observational · study",
    aspect: "3 / 4",
  },
  about: {
    id: "about",
    src: ASSETS.about,
    alt: "Supporting editorial image — context and material.",
    caption: "VV-02 · Editorial · context",
    aspect: "4 / 3",
  },
  capabilities: {
    id: "capabilities",
    src: ASSETS.capabilities,
    alt: "Field image — making, materials, or system in use.",
    caption: "VV-03 · Field · system",
    aspect: "16 / 9",
  },
  method: {
    id: "method",
    src: ASSETS.method,
    alt: "Workshop or process — work in progress.",
    caption: "VV-04 · Process · workshop",
    aspect: "4 / 3",
  },
  why: {
    id: "why",
    src: ASSETS.why,
    alt: "Quiet material crop.",
    caption: "VV-05 · Material · crop",
    aspect: "3 / 4",
  },
} as const satisfies Record<string, MediaEntry>;
