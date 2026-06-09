import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "content/homepage",
      schema: {
        heroTitle: fields.text({ label: "Hero Title" }),
        heroSubtitle: fields.text({ label: "Hero Subtitle", multiline: true }),
        heroCTAText: fields.text({ label: "Hero CTA Text" }),
        stats: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            value: fields.text({ label: "Value" }),
          }),
          { label: "Stats", itemLabel: (props) => props.fields.label.value }
        ),
        ctaStripText: fields.text({ label: "CTA Strip Text", multiline: true }),
      },
    }),
    about: singleton({
      label: "About",
      path: "content/about",
      schema: {
        pageTitle: fields.text({ label: "Page Title" }),
        introParagraph: fields.text({ label: "Intro Paragraph", multiline: true }),
        timeline: fields.array(
          fields.object({
            year: fields.text({ label: "Year" }),
            role: fields.text({ label: "Role" }),
            company: fields.text({ label: "Company" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          {
            label: "Timeline",
            itemLabel: (props) =>
              `${props.fields.year.value} — ${props.fields.role.value}`,
          }
        ),
      },
    }),
    contact: singleton({
      label: "Contact",
      path: "content/contact",
      schema: {
        heading: fields.text({ label: "Heading" }),
        subheading: fields.text({ label: "Subheading", multiline: true }),
        emailDisplay: fields.text({ label: "Email Display" }),
      },
    }),
  },
  collections: {
    services: collection({
      label: "Services",
      path: "content/services/*",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        price: fields.number({ label: "Price (in paise)" }),
        tagline: fields.text({ label: "Tagline" }),
        description: fields.text({ label: "Description", multiline: true }),
        features: fields.array(fields.text({ label: "Feature" }), {
          label: "Features",
          itemLabel: (props) => props.value,
        }),
      },
    }),
    blog: collection({
      label: "Blog",
      path: "content/blog/*",
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.text({ label: "Date (YYYY-MM-DD)" }),
        excerpt: fields.text({ label: "Excerpt", multiline: true }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
    "case-studies": collection({
      label: "Case Studies",
      path: "content/case-studies/*",
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        client: fields.text({ label: "Client" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        nda: fields.checkbox({ label: "NDA Protected", defaultValue: false }),
        summary: fields.text({ label: "Summary", multiline: true }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
  },
});
