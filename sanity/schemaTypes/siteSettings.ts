import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({
      name: "studioName",
      title: "Studio Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Studio Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),

    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),
  ],

  preview: {
    select: {
      title: "studioName",
      media: "logo",
    },
  },
});