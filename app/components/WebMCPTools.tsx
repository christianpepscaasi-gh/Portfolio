"use client";

import { useEffect } from "react";
import projects from "@/data/projects.json";
import type { Project } from "@/types";

const projectList = projects as Project[];
const categories = [...new Set(projectList.map((project) => project.category))];
const technologies = [
  ...new Set(projectList.flatMap((project) => project.techStack)),
];

interface FindProjectsInput {
  category?: string;
  technology?: string;
}

interface GetProjectDetailsInput {
  id: string;
}

interface ProjectSummary {
  id: string;
  title: string;
  summary: string;
  category: string;
  technologies: string[];
  detailPath: string;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidFindProjectsInput(
  input: unknown,
): input is FindProjectsInput {
  if (!isObject(input)) return false;

  const keys = Object.keys(input);
  if (keys.some((key) => key !== "category" && key !== "technology")) {
    return false;
  }

  const category = input.category;
  if (
    category !== undefined &&
    (typeof category !== "string" ||
      !categories.some(
        (available) => available.toLowerCase() === category.toLowerCase(),
      ))
  ) {
    return false;
  }

  const technology = input.technology;
  return (
    technology === undefined ||
    (typeof technology === "string" &&
      technology.trim().length > 0 &&
      technology.trim().length <= 80 &&
      technologies.some(
        (available) =>
          available.toLowerCase() === technology.trim().toLowerCase(),
      ))
  );
}

function isValidGetProjectDetailsInput(
  input: unknown,
): input is GetProjectDetailsInput {
  return (
    isObject(input) &&
    Object.keys(input).length === 1 &&
    typeof input.id === "string" &&
    input.id.trim().length > 0 &&
    input.id.length <= 100
  );
}

function toProjectSummary(project: Project): ProjectSummary {
  return {
    id: project.id,
    title: project.title,
    summary: project.description,
    category: project.category,
    technologies: project.techStack,
    detailPath: `/work/${encodeURIComponent(project.id)}`,
  };
}

function findProjects(input: unknown) {
  if (!isValidFindProjectsInput(input)) {
    return {
      success: false,
      error:
        "Invalid filters. Use a listed category and/or a technology of up to 80 characters.",
    };
  }

  const category = input.category?.toLowerCase();
  const technology = input.technology?.trim().toLowerCase();
  const matches = projectList
    .filter(
      (project) =>
        (!category || project.category.toLowerCase() === category) &&
        (!technology ||
          project.techStack.some((item) => item.toLowerCase() === technology)),
    )
    .map(toProjectSummary);

  return {
    success: true,
    count: matches.length,
    projects: matches,
  };
}

function getProjectDetails(input: unknown) {
  if (!isValidGetProjectDetailsInput(input)) {
    return {
      success: false,
      error: "Invalid input. Provide exactly one non-empty project ID.",
    };
  }

  const project = projectList.find((item) => item.id === input.id.trim());
  if (!project) {
    return {
      success: false,
      error: "Project not found.",
      id: input.id.trim(),
    };
  }

  return {
    success: true,
    project: {
      ...toProjectSummary(project),
      description: project.longDescription ?? project.description,
      ...(project.achievements
        ? { highlights: project.achievements }
        : {}),
      ...(project.github ? { github: project.github } : {}),
      ...(project.demo ? { demo: project.demo } : {}),
    },
  };
}

export function WebMCPTools() {
  useEffect(() => {
    const modelContext = document.modelContext;
    if (!modelContext) return;

    const registerTool = modelContext.registerTool.bind(modelContext);
    const controller = new AbortController();

    async function registerTools() {
      try {
        await registerTool(
          {
            name: "find_projects",
            description:
              "Find portfolio projects, optionally filtering by category and/or technology.",
            inputSchema: {
              type: "object",
              properties: {
                category: {
                  type: "string",
                  description: "Project category.",
                  enum: categories,
                },
                technology: {
                  type: "string",
                  description: "Technology used by the project.",
                  enum: technologies,
                  maxLength: 80,
                },
              },
              additionalProperties: false,
            },
            annotations: { readOnlyHint: true },
            execute: findProjects,
          },
          { signal: controller.signal },
        );

        await registerTool(
          {
            name: "get_project_details",
            description:
              "Get the public details and links for one portfolio project by its exact ID.",
            inputSchema: {
              type: "object",
              properties: {
                id: {
                  type: "string",
                  description: "Exact project ID from the portfolio.",
                  minLength: 1,
                  maxLength: 100,
                },
              },
              required: ["id"],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: true },
            execute: getProjectDetails,
          },
          { signal: controller.signal },
        );
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Failed to register WebMCP portfolio tools.", error);
          controller.abort();
        }
      }
    }

    void registerTools();
    return () => controller.abort();
  }, []);

  return null;
}
