export interface Service {
  slug: string;
  title: string;
  price: number;
  priceFormatted: string;
  duration: string;
  desc: string;
  longDesc: string;
  includes: string[];
}

export const services: Service[] = [
  {
    slug: "portfolio-review",
    title: "Portfolio Review",
    price: 499900,
    priceFormatted: "₹4,999",
    duration: "2-hour session",
    desc: "In-depth critique of your design portfolio with actionable feedback.",
    longDesc:
      "A focused 2-hour live review session where I go through your entire portfolio — structure, storytelling, case study depth, visual quality, and positioning. You walk away with a prioritised list of improvements that will meaningfully change how hiring managers and clients perceive your work.",
    includes: [
      "2-hour live review session (recorded)",
      "Written feedback document",
      "Prioritised action checklist",
      "30-day follow-up check-in",
    ],
  },
  {
    slug: "ux-leadership-coaching",
    title: "UX Leadership Coaching",
    price: 999900,
    priceFormatted: "₹9,999",
    duration: "Per month (4 sessions)",
    desc: "Monthly coaching for design leads navigating leadership growth.",
    longDesc:
      "Monthly 1:1 coaching for design leads who want to grow from senior individual contributor to a strategic design leader. We work on the skills that aren't taught in design school: hiring great designers, managing up, influencing roadmaps, building team culture, and handling the politics of product organisations.",
    includes: [
      "4 x 60-min coaching sessions",
      "Async support via messaging",
      "Leadership framework templates",
      "Resource library access",
    ],
  },
  {
    slug: "ai-for-design-workshops",
    title: "AI for Design Workshops",
    price: 2499900,
    priceFormatted: "₹24,999",
    duration: "Full-day workshop",
    desc: "Hands-on workshop for design teams integrating AI into their workflow.",
    longDesc:
      "A structured full-day workshop (in-person or virtual) for design teams of up to 12 people. We cover AI-powered research analysis, image generation for ideation, AI-assisted prototyping, and building sustainable AI workflows. Every participant leaves with a personalised AI toolkit and a team adoption roadmap.",
    includes: [
      "Full-day in-person or virtual workshop",
      "Custom toolkit for your workflow",
      "Team assessment & recommendations",
      "90-day AI adoption roadmap",
    ],
  },
  {
    slug: "design-team-audits",
    title: "Design Team Audits",
    price: 4999900,
    priceFormatted: "₹49,999",
    duration: "2-week engagement",
    desc: "Comprehensive audit of your design organisation with an action plan.",
    longDesc:
      "A 2-week deep-dive into your design organisation. I conduct stakeholder interviews, review processes and tooling, assess output quality across your product surface, and evaluate team structure and talent gaps. The engagement ends with an executive-ready audit report and a prioritised 90-day action plan presented to your leadership team.",
    includes: [
      "Stakeholder interviews",
      "Process & tooling assessment",
      "Portfolio and output quality review",
      "Executive-ready audit report",
      "90-day action plan presentation",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
