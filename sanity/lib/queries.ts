import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[
    _type == "project"
  ]
  | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    location,
    category,
    year,
    description,
    coverImage,
    featured,
    order
  }
`;

export const featuredProjectsQuery = groq`
  *[
    _type == "project"
    && featured == true
  ]
  | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    location,
    category,
    year,
    description,
    coverImage
  }
`;

export const projectQuery = groq`
  *[
    _type == "project"
    && slug.current == $slug
  ][0] {
    _id,
    title,
    slug,
    location,
    category,
    year,
    description,
    coverImage,
    images,
    featured,
    order
  }
`;

export const siteSettingsQuery = groq`
  *[
    _type == "siteSettings"
  ][0] {
    studioName,
    tagline,
    description,
    email,
    phone,
    address,
    instagram,
    linkedin,
    logo
  }
`;

export const homepageQuery = groq`
  *[
    _type == "homepage"
  ][0] {
    heroTitle,
    heroDescription,
    heroImage,
    projectsTitle,
    aboutTitle,
    aboutDescription,
    aboutImage,
    contactTitle
  }
`;
