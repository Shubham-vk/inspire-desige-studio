import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./project";
import { siteSettingsType } from "./siteSettings";
import { homepageType } from "./homepage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, siteSettingsType, homepageType],
};
