import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",

  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "projectsTitle",
      title: "Projects Section Title",
      type: "string",
      initialValue: "Selected Projects",
    }),

    defineField({
      name: "aboutTitle",
      title: "About Section Title",
      type: "string",
    }),

    defineField({
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      rows: 6,
    }),

    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "contactTitle",
      title: "Contact Section Title",
      type: "string",
      initialValue: "Let's work together",
    }),
  ],

  preview: {
    select: {
      title: "heroTitle",
      media: "heroImage",
    },
  },
});