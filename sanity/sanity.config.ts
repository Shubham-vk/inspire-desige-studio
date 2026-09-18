import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schema as schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "inspire-design-studio",
  title: "Inspire Design Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [structureTool()],

  schema: schemaTypes,
});
