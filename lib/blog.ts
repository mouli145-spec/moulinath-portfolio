export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-tools-every-ux-designer-needs",
    title: "The 7 AI Tools Every UX Designer Needs in 2024",
    excerpt:
      "AI is transforming the design workflow. Here are the tools I recommend to every designer I coach — and how to integrate them without losing your creative edge.",
    date: "2024-11-15",
    readTime: "6 min read",
    category: "AI & Design",
    content: `
Artificial intelligence is no longer a future concern for designers — it's a present reality reshaping every phase of the UX process. After running AI for Design workshops with dozens of teams, I've identified seven tools that provide genuine, repeatable value.

## 1. Midjourney for Concept Exploration
Before committing to wireframes, I use Midjourney to rapidly explore visual directions. A single prompt session can generate 30–40 concept directions in the time it would take to sketch 5.

## 2. Perplexity for Research Synthesis
User research generates mountains of data. Perplexity helps synthesise interview transcripts, survey responses, and secondary research into usable insight clusters.

## 3. Cursor for Prototype Code
Designer-developer handoff friction is real. Cursor lets you generate working React components from rough descriptions, enabling designers to prototype at higher fidelity.

## 4. Notion AI for Documentation
Design rationale is always the first thing lost. Notion AI helps maintain living documentation by summarising meeting notes, decisions, and feedback threads automatically.

## 5. Galileo AI for Rapid UI Generation
For client presentations where visual quality matters fast, Galileo generates polished UI screens from text prompts that serve as strong starting points.

## 6. Maze for Automated Research Analysis
Usability test analysis used to take days. Maze's AI features surface patterns and quote clusters from moderated and unmoderated sessions within minutes.

## 7. Adobe Firefly for Asset Generation
Custom illustrations, icons, and brand-consistent imagery on demand — without licensing concerns. Firefly is trained on licensed content, making it safe for commercial work.

The key to using these tools well is knowing where human judgment is non-negotiable. AI can accelerate generation; it cannot replace the empathy, contextual judgment, and strategic thinking that define great design leadership.
    `,
  },
  {
    slug: "portfolio-mistakes-killing-your-career",
    title: "5 Portfolio Mistakes That Are Killing Your Design Career",
    excerpt:
      "After reviewing 200+ design portfolios, I keep seeing the same five mistakes. Fix these and your response rate will change overnight.",
    date: "2024-10-22",
    readTime: "5 min read",
    category: "Career",
    content: `
I've reviewed over 200 design portfolios in the past two years. The quality gap between the ones that land senior roles and the ones that don't isn't about visual skill — it's almost always about these five structural mistakes.

## Mistake 1: Leading with Visual Output, Not Impact
Hiring managers want to know: did your design work change anything measurable? Start every case study with the outcome. "I redesigned the checkout flow — conversion increased 34%" is infinitely more compelling than "I created a clean, minimal checkout experience."

## Mistake 2: The "We Did This Together" Trap
Collaborative credit is admirable, but hiring managers need to understand YOUR contribution specifically. Use "I" language and be precise: "I owned the research synthesis and created the journey maps. I co-designed the IA with the PM."

## Mistake 3: Skipping the Problem Definition
Jumping straight to the solution signals junior thinking. Spend time articulating the business problem, user problem, and the constraints you were designing within. This is where senior designers differentiate themselves.

## Mistake 4: Too Many Projects, Not Enough Depth
Three deep case studies beat ten shallow ones every time. Quality > quantity. If you can't tell the full story of a project — problem, process, decision rationale, outcome, learnings — it shouldn't be in your portfolio.

## Mistake 5: No Clear Point of View
What do you believe about design? What's your philosophy? The best portfolios have a clear voice — you can feel the designer's perspective in every case study. Generic portfolios produce generic results.

Fix these five things before you apply to another role.
    `,
  },
  {
    slug: "building-design-culture-from-scratch",
    title: "How to Build a Design Culture in a Company That Doesn't Have One",
    excerpt:
      "Joining an organisation as its first or second designer is one of the hardest roles in tech. Here's the playbook I've used to build design cultures from scratch — three times.",
    date: "2024-09-10",
    readTime: "8 min read",
    category: "Design Leadership",
    content: `
Building a design culture from zero is different from improving an existing one. There's no inertia to fight — but there's also no foundation to stand on. Here's what I've learned doing this three times.

## Month 1: Listen More Than You Build
Resist the urge to immediately redesign things or establish processes. Spend your first month doing discovery — interviewing stakeholders, understanding the business model, mapping existing pain points, and building trust relationships with engineering and product.

## Month 2: Pick a High-Visibility Win
Find one problem that is genuinely painful for the company — ideally something measurable — and fix it well. This win gives you credibility, demonstrates the value of design, and creates advocates in leadership.

## Month 3: Establish Minimal Viable Process
Once you have credibility, introduce lightweight process. Don't bring in enterprise UX methodology — introduce one tool (Figma), one ritual (weekly design critique), and one artifact (user story mapping) that the team can actually maintain.

## Months 4–6: Start Hiring Thoughtfully
Your first hire sets the culture. Don't rush. Hire someone who complements your skills, communicates well across functions, and can work autonomously. One great hire is worth five mediocre ones.

## The Long Game: Make Design Everyone's Job
The goal isn't to build a design team that does design for everyone else. It's to build an organisation where product managers think in user outcomes, engineers consider interaction quality, and leadership uses design thinking to solve business problems.

This takes years, not months. Be patient, be consistent, and keep connecting design decisions to business outcomes.
    `,
  },
  {
    slug: "ux-maturity-model-explained",
    title: "The UX Maturity Model: Where Is Your Organisation?",
    excerpt:
      "Most organisations think they're further along the UX maturity curve than they actually are. Here's how to accurately assess where you are — and what it takes to move up.",
    date: "2024-08-05",
    readTime: "7 min read",
    category: "Design Strategy",
    content: `
The Nielsen Norman Group's UX Maturity Model describes six stages from "Absent" to "User-Driven." In my audit work, I've found that most companies self-assess two stages above where they actually are.

## Stage 1: Absent
Design is not practiced. Decisions are made by engineers or PMs based on gut feel or competitor copying. This is more common than people admit, especially in B2B SaaS.

## Stage 2: Limited
Some design happens, but it's cosmetic. A designer may exist, but they're treated as a visual production resource rather than a strategic partner.

## Stage 3: Emergent
Design is recognised as valuable. There's a design team, basic user research happens, and design has some influence on product decisions — but it's inconsistent.

## Stage 4: Structured
Design processes are established and repeatable. Design systems exist. Designers are embedded in product squads. Research is systematic, not ad hoc.

## Stage 5: Integrated
Design is a core organisational capability. C-suite includes design leadership. Design strategy is part of business strategy. Outcome metrics are tracked.

## Stage 6: User-Driven
User insight drives company direction. Every major product and business decision starts with validated user understanding. Very few organisations reach this stage.

## How to Move Up
Moving one stage requires different things at different levels. But the common thread is always the same: make design's value legible to leadership in business terms. Connect your design work to revenue, retention, and operational efficiency — and you'll earn the influence to mature your practice.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
