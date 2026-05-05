import Link from "next/link";
import React from "react";
import { Project } from "@/types";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-secondary-warm border border-accent-gold rounded-lg p-8 sm:p-10 hover:shadow-lg hover:border-accent-light transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-accent-light mb-2">
          {project.title}
        </h3>
        <p className="text-accent-light/90 text-sm mb-3">
          {project.description}
        </p>
      </div>

      {/* Category Badge */}
      <div className="mb-4">
        <Badge variant="accent">{project.category}</Badge>
      </div>

      {/* Tech Stack */}
      <div className="mb-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Date */}
      <div className="mb-4 text-accent-light/70 text-sm font-medium">
        Completed: {project.completionDate}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-accent-gold/30">
        <Link
          href={`/work/${project.id}`}
          className="text-accent-gold hover:text-accent-light font-medium text-sm transition-colors"
        >
          Details →
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold hover:text-accent-light font-medium text-sm transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold hover:text-accent-light font-medium text-sm transition-colors"
          >
            Demo →
          </a>
        )}
      </div>
    </article>
  );
}
