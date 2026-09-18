import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Contact from "@/components/Contact";

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

      <section id="contact-form" className="mx-auto max-w-6xl px-6 pb-20">
        <Contact />
      </section>

      <section id="contact" className="border-t border-neutral-200">
        <div className="mx-auto flex flex-col items-center justify-center max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-medium">
            {homepage?.contactTitle || "Connect with Us"}
          </h2>

          <div className="flex md:flex-row flex-col gap-4 justify-center items-center mt-6 space-y-2 text-neutral-600">
            <div className="flex gap-4 items-center justify-center md:mb-2">
              {settings?.email && <p>{settings.email}</p>}

              {settings?.phone && <p>{settings.phone}</p>}

              {settings?.address && <p>{settings.address}</p>}
            </div>

            <div className="flex gap-4 items-center justify-center">
              {settings?.instagram && (
                <Link
                  href={settings.instagram}
                  className="underline text-blue-500 md:mb-[6px]"
                >
                  Instagram
                </Link>
              )}
              {settings?.linkedin && (
                <Link
                  href={settings.linkedin}
                  className="underline text-blue-500 md:mb-[6px]"
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
