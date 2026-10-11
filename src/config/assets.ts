/**
 * ==========================================
 * VULCAN VOYAGE - LANDING PAGE ASSETS REGISTRY
 * ==========================================
 * 
 * Assign key-value pairs for your landing page images here.
 * 
 * HOW TO USE:
 * 1. For Local Files: Place images in `public/assets/` and reference them like `"/assets/your-image.jpg"`
 * 2. For Remote Images / URLs: Use full HTTPS URLs like `"https://images.unsplash.com/photo-..."`
 * 3. Save the file — the landing page will instantly update!
 */

export const ASSETS = {
  hero: "/assets/hero.jpg",
  about: "/assets/about.jpg",
  capabilities: "/assets/capabilities.jpg",
  method: "/assets/method.jpg",
  why: "/assets/why.jpg",
} as const;

export type AssetKey = keyof typeof ASSETS;
