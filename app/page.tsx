import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";

import { getHomepage, getProjects, getSiteSettings } from "@/sanity/lib/data";
import Link from "next/link";

export const revalidate = 10;

export default async function HomePage() {
  const [homepage, projects, settings] = await Promise.all([
    getHomepage(),
    getProjects(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero
        title={homepage?.heroTitle || "Inspire Design Studio"}
        description={homepage?.heroDescription}
        image={homepage?.heroImage}
      />

      <About
        title={homepage?.aboutTitle}
        description={homepage?.aboutDescription}
        image={homepage?.aboutImage}
      />

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-10 text-2xl font-medium">
          {homepage?.projectsTitle || "Selected Projects"}
        </h2>

        <ProjectGrid projects={projects} />
      </section>

      <section id="contact" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-medium">
            {homepage?.contactTitle || "Let's work together"}
          </h2>

          <div className="mt-6 space-y-2 text-neutral-600">
            {settings?.email && <p>{settings.email}</p>}

            {settings?.phone && <p>{settings.phone}</p>}

            {settings?.address && <p>{settings.address}</p>}

            <div className="flex gap-4">
              {settings?.instagram && (
                <Link
                  href={settings.instagram}
                  className="underline text-blue-500"
                >
                  Instagram
                </Link>
              )}
              {settings?.linkedin && (
                <Link
                  href={settings.linkedin}
                  className="underline text-blue-500"
                >
                  LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
