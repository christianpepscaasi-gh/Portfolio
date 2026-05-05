import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Button } from "@/components";
import projects from "@/data/projects.json";
import type { Project } from "@/types";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

const projectList = projects as Project[];

function getProjectById(id: string): Project | undefined {
  return projectList.find((project) => project.id === id);
}

export async function generateStaticParams() {
  return projectList.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Christian Peps Caasi",
      description: "Requested project detail could not be found.",
    };
  }

  return {
    title: `${project.title} | Christian Peps Caasi`,
    description: project.longDescription ?? project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-secondary-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/work" className="text-accent-gold hover:text-accent-light">
            ← Back to Work
          </Link>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-accent-light/60 text-sm mb-2">{project.completionDate}</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-accent-light mb-4">
              {project.title}
            </h1>
            <p className="text-accent-light/85 leading-relaxed text-lg">
              {project.longDescription ?? project.description}
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            <Badge variant="accent">{project.category}</Badge>
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-accent-light mb-4">Highlights</h2>
              <ul className="list-disc pl-6 space-y-2 text-accent-light/85">
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accent-light mb-8">Project Gallery</h2>
              <div className="space-y-12">
                {project.galleryImages.map((image, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={`${project.id}-${image.src}`}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                    >
                      {isEven ? (
                        <>
                          {/* Image on left, description on right */}
                          <figure className="bg-secondary-warm border border-accent-gold/60 rounded-lg overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={960}
                              height={640}
                              className="w-full h-72 object-cover"
                            />
                          </figure>
                          {image.caption && (
                            <div className="text-accent-light/85 leading-relaxed">
                              <p className="text-lg font-medium text-accent-gold mb-2">
                                {image.caption}
                              </p>
                              <p className="text-accent-light/70">{image.alt}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {/* Description on left, image on right */}
                          {image.caption && (
                            <div className="text-accent-light/85 leading-relaxed">
                              <p className="text-lg font-medium text-accent-gold mb-2">
                                {image.caption}
                              </p>
                              <p className="text-accent-light/70">{image.alt}</p>
                            </div>
                          )}
                          <figure className="bg-secondary-warm border border-accent-gold/60 rounded-lg overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={960}
                              height={640}
                              className="w-full h-72 object-cover"
                            />
                          </figure>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 border-t border-secondary-warm pt-8">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button variant="accent" className="min-h-11">
                  Open GitHub →
                </Button>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="min-h-11">
                  Open Demo →
                </Button>
              </a>
            )}
            <Link href="/work">
              <Button variant="secondary" className="min-h-11">
                Back to Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
