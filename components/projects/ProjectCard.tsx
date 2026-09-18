import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

type ProjectCardProps = {
  project: {
    title: string;
    slug: {
      current: string;
    };
    location?: string;
    category?: string;
    year?: number;
    coverImage: Parameters<typeof urlFor>[0];
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = urlFor(project.coverImage)
    .width(1200)
    .height(800)
    .fit("crop")
    .url();

  return (
    <Link href={`/projects/${project.slug.current}`} className="group block">
      <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium">{project.title}</h3>

        <div className="mt-1 flex gap-3 text-sm text-neutral-500">
          {project.location && <span>{project.location}</span>}

          {project.category && <span>{project.category}</span>}

          {project.year && <span>{project.year}</span>}
        </div>
      </div>
    </Link>
  );
}
