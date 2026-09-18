import { client } from "./client";
import {
  homepageQuery,
  projectsQuery,
  projectQuery,
  siteSettingsQuery,
} from "./queries";

export async function getHomepage() {
  return client.fetch(homepageQuery);
}

export async function getProjects() {
  return client.fetch(projectsQuery);
}

export async function getProject(slug: string) {
  return client.fetch(projectQuery, { slug });
}

export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}
