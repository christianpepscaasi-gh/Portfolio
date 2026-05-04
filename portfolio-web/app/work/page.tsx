"use client";

import { useState } from "react";
import { ProjectCard } from "@/components";
import projects from "@/data/projects.json";
import type { Project } from "@/types";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const projectList = projects as Project[];

  const categories = Array.from(new Set(projectList.map((p) => p.category)));

  const filteredProjects = (() => {
    if (!selectedCategory) return projectList;
    return projectList.filter((p) => p.category === selectedCategory);
  })();

  const personalProjectIds = new Set([
    "cargaexpress",
    "grade-prediction",
    "chainmarket",
  ]);

  const personalProjects = filteredProjects.filter((project) =>
    personalProjectIds.has(project.id)
  );

  const ojtProjects = filteredProjects.filter(
    (project) => !personalProjectIds.has(project.id)
  );

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-secondary-warm pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-light mb-4">
            My Work
          </h1>
          <p className="text-accent-light/70 text-lg max-w-2xl">
            A collection of projects spanning mobile development, blockchain
            systems, full-stack applications, and QA contributions. Each
            project represents growth, learning, and real-world problem-solving.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-secondary-warm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-accent-light/60 text-sm font-medium mb-3">
              Filter by category:
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === null
                    ? "bg-accent-gold text-primary-dark border border-accent-gold"
                    : "bg-secondary-warm text-accent-light border border-secondary-warm hover:border-accent-gold"
                }`}
              >
                All Projects
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-accent-gold text-primary-dark border border-accent-gold"
                      : "bg-secondary-warm text-accent-light border border-secondary-warm hover:border-accent-gold"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-accent-light/60 text-sm">
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          {personalProjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accent-light mb-6">
                Personal Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {ojtProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-accent-light mb-6">
                OJT Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                {ojtProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-accent-light/60">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary-warm/20 border-t border-secondary-warm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-gold mb-2">
                {projectList.length}
              </div>
              <p className="text-accent-light/70">Total Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold mb-2">
                {categories.length}
              </div>
              <p className="text-accent-light/70">Categories</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-gold mb-2">
                {new Set(projectList.flatMap((p) => p.techStack)).size}
              </div>
              <p className="text-accent-light/70">Technologies</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
