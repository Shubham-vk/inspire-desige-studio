import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getProject } from "@/sanity/lib/data";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 10;
type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = await getProject(slug);
  console.log("all projects", project);

  if (!project) {
    notFound();
  }

  const coverImage = urlFor(project.coverImage)
    .width(1600)
    .height(1000)
    .fit("crop")
    .url();

  return (
    <article className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          {project.category}
        </p>

        <h1 className="mt-3 text-4xl font-medium tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <div className="mt-4 flex gap-4 text-sm text-neutral-500">
          {project.location && <span>{project.location}</span>}

          {project.year && <span>{project.year}</span>}
        </div>
      </div>

      <div className="relative mt-12 aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {project.description && (
        <div className="mt-12 max-w-2xl text-lg leading-8 text-neutral-700">
          <PortableText value={project.description} />
        </div>
      )}

      {project.images?.length > 0 && (
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {project.images.map((image: unknown, index: number) => {
            const imageUrl = urlFor(image as Parameters<typeof urlFor>[0])
              .width(1200)
              .height(900)
              .fit("crop")
              .url();

            return (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden bg-neutral-100"
              >
                <Image
                  src={imageUrl}
                  alt={`${project.title} image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}
