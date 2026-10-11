export const NAV_LINKS = [
  { href: "#thinking", label: "Thinking" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#method", label: "Method" },
  { href: "#why", label: "Why VV" },
  { href: "#faq", label: "FAQ" },
] as const;

export const CTA = {
  label: "Bring Us a Problem",
  href: "#contact",
} as const;

export const CONTACT_ACTIONS = [
  { label: "Call" },
  { label: "WhatsApp" },
  { label: "Email" },
] as const;

/** Live tel / wa.me / mailto values are not in the docs. Do not invent them. */
export const CONTACT_PENDING =
  "Call, WhatsApp, and email will be listed here before public launch.";
