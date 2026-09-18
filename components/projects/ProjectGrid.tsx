import ProjectCard from "./ProjectCard";
import type { ComponentProps } from "react";

type Project = ComponentProps<typeof ProjectCard>["project"] & {
  _id: string;
};

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  if (!projects.length) {
    return (
      <p className="text-sm text-neutral-500">
        No projects available.
      </p>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
        />
      ))}
    </div>
  );
}