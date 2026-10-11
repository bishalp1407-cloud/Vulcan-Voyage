export const SITE = {
  name: "Vulcan Voyage",
  domain: "vulcanvoyage.com",
  tagline: "Product Design Companion",
  location: "India",
  metaDescription:
    "Vulcan Voyage is a product design companion from India. We stay with the problem until we find the need behind the need — then design products that can exist in the world.",
} as const;

export const HERO = {
  brand: "Vulcan Voyage",
  positioning: "Product Design Companion · India",
  headline: ["Don’t design", "the obvious."],
  pov: [
    "Indian in origin.",
    "Lateral in thinking.",
    "Global in ambition.",
  ],
} as const;

export const ABOUT = {
  id: "about",
  label: "01 / About",
  headingId: "about-heading",
  definition:
    "Vulcan Voyage is a product design companion. We stay with the problem until we find the need behind the need — then design products that can exist in the world.",
  companion:
    "We do not simply execute a brief. We question it, understand the context behind it, and help discover what needs to exist. Then we design the product and help move it toward reality.",
  audiencesLabel: "Who we work with",
  audiences: [
    "Start-up owners",
    "Business owners",
    "Product manufacturers",
  ],
  spacesLabel: "What we can engage with",
  spaces: [
    "Everyday products",
    "Mobility",
    "Furniture",
    "Spaces",
    "Systems",
    "Emerging products",
  ],
  role: "We are companions to the problem. We stay with it from early ambiguity to the tangible thing.",
  closing: "Not more products. Better reasons for products to exist.",
} as const;

export const THINKING = {
  id: "thinking",
  label: "02 / The Point of View",
  headingId: "thinking-heading",
  display: ["Don’t", "design", "the", "obvious."],
  lead:
    "The obvious solution is almost always the easiest answer to the wrong question.",
  thinking: [
    "Stay with the problem.",
    "Look underneath the surface request.",
    "Find the need behind the need.",
  ],
  lateral: [
    "Challenge obvious category conventions.",
    "Explore the directions a market is not asking for.",
  ],
  outcome:
    "Better problem. Better opportunity. Better reason for the product to exist.",
} as const;

export const CAPABILITIES = {
  id: "capabilities",
  label: "03 / What We Bring",
  headingId: "capabilities-heading",
  intro:
    "We bring several disciplines to one problem — not a menu of services to pick from.",
  arc: "Need → Opportunity → Product → Reality",
  items: [
    {
      name: "Research",
      line: "See the context as it is, not as the brief describes it.",
    },
    {
      name: "Lateral thinking",
      line: "Look sideways before looking forward.",
    },
    {
      name: "Indian context",
      line: "Use complexity, resourcefulness, and culture as design intelligence.",
    },
    {
      name: "Industrial design",
      line: "Give the opportunity a form that can be used, made, and lived with.",
    },
    {
      name: "Engineering",
      line: "Make the idea hold — technically and commercially.",
    },
    {
      name: "Manufacturing",
      line: "Design for how it will actually be built.",
    },
    {
      name: "Brand",
      line: "Shape how the product is understood, not only how it looks.",
    },
  ],
  integrated:
    "Each capability informs the other. Design informs engineering. Engineering informs manufacturing. Manufacturing informs form.",
} as const;

export const METHOD = {
  id: "method",
  label: "04 / Method",
  headingId: "method-heading",
  intro: "How we work with you.",
  stages: [
    {
      number: "01",
      name: "Observe",
      line: "Spend time in the domain before touching a tool.",
    },
    {
      number: "02",
      name: "Question",
      line: "Challenge premises until the core requirement is clear.",
    },
    {
      number: "03",
      name: "Prototype",
      line: "Make low-fidelity artifacts to test assumptions fast.",
    },
    {
      number: "04",
      name: "Refine",
      line: "Work through detail, proportion, and finish.",
    },
    {
      number: "05",
      name: "Deliver",
      line: "Handoff complete assets, specifications, and context.",
    },
    {
      number: "06",
      name: "Support",
      line: "Remain available as the work enters production.",
    },
    {
      number: "07",
      name: "Advise",
      line: "Provide long-horizon guidance across product cycles.",
    },
    {
      number: "08",
      name: "Evolve",
      line: "Improve, adapt, and refine.",
    },
    {
      number: "09",
      name: "Realise",
      line: "Move toward a product that can exist in the world.",
    },
  ],
  closing: "The method is one path. Not nine services.",
} as const;

export const WHY = {
  id: "why",
  label: "05 / Why VV",
  headingId: "why-heading",
  principles: [
    {
      title: "Indian at the core",
      body: "India is not merely where we are from. It is a source of complexity, diversity, resourcefulness, culture, craft, climate, behaviour, and changing needs.",
    },
    {
      title: "Universal in relevance",
      body: "The aim is not to design products that are only “Indian.” Indian in thought. Universal in relevance.",
    },
    {
      title: "Built to endure",
      body: "Products should remain useful, adaptable, and worth keeping as needs and technologies change.",
    },
    {
      title: "Designed to evolve",
      body: "A product can grow into a family, a platform, a system, an ecosystem.",
    },
    {
      title: "Global ambition",
      body: "We design from an Indian point of view for a world that will actually use the work.",
    },
  ],
} as const;

export const FAQ = {
  id: "faq",
  label: "06 / Engagement & Scope",
  headingId: "faq-heading",
  intro: "Common questions regarding who we work with and how we engage.",
  items: [
    {
      question: "Who does Vulcan Voyage work with?",
      answer:
        "We collaborate with ambitious start-up founders, established business leaders, and product manufacturers who want to discover the true need behind the brief rather than simply executing obvious styling.",
      tags: ["Start-up Owners", "Business Leaders", "Product Manufacturers"],
    },
    {
      question: "What physical domains and product categories do you engage with?",
      answer:
        "Our capabilities span physical products and systems across diverse scale and complexity:",
      tags: [
        "Everyday Products",
        "Mobility",
        "Furniture",
        "Spaces",
        "Systems",
        "Emerging Products",
      ],
    },
    {
      question: "How does an engagement typically begin?",
      answer:
        "We start before touching a 3D tool — spending time in your domain, questioning premises, and exploring lateral directions until the core requirement, user intelligence, and commercial feasibility are completely clear.",
    },
    {
      question: "What does the final handoff include?",
      answer:
        "You receive complete production-ready CAD engineering assets, comprehensive technical specification plates, CMF (Color, Material, Finish) matrices, manufacturing context, and the strategic brand narrative for launch.",
    },
  ],
} as const;

export const CONTACT = {
  id: "contact",
  headingId: "contact-heading",
  promise: [
    "We don’t want to design more products.",
    "We want to design better reasons for products to exist.",
  ],
  invitation: ["Have a problem worth solving?", "Bring it to us."],
} as const;
