import Image from "next/image";
import Link from "next/link";
import { Badge, Button } from "@/components";
import { profileData } from "@/data/profile";
import projects from "@/data/projects.json";
import type { Project } from "@/types";

export default function Home() {
  const featuredProjects = (projects as Project[]).filter(
    (p) => p.featured
  );

  return (
    <>
      {/* Hero Section - Asymmetrical Layout */}
      <section className="min-h-[600px] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Side - Left */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                {/* Subtle background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-secondary-warm/10 rounded-lg blur-3xl"></div>

                {/* Profile Image */}
                <Image
                  src="/profile-pic.png"
                  alt={profileData.name}
                  width={500}
                  height={500}
                  priority
                  className="relative w-full h-full object-cover rounded-lg shadow-2xl"
                />

                {/* Cinematic vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent rounded-lg"></div>
              </div>
            </div>

            {/* Content Side - Right */}
            <div className="flex flex-col justify-center order-1 lg:order-2 lg:pl-10 xl:pl-16">
  <div className="mb-8">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-light mb-6 leading-[1.1] tracking-tight">
      Hey, I&apos;m{" "}
      <span className="text-accent-gold">Christian Peps</span>
    </h1>

    <p className="text-lg text-accent-light/90 mb-6 max-w-xl leading-relaxed">
      {profileData.title} crafting digital experiences with{" "}
      <span className="text-accent-gold font-semibold">
        React, Flutter, and Blockchain
      </span>
    </p>

    <p className="text-accent-light/70 mb-10 leading-relaxed max-w-xl">
      I build mobile apps, web platforms, and blockchain systems.
      Currently interning at Makerspace OJT, where I lead the Sillag
      team, review production code, and develop innovative solutions.
    </p>
  </div>

  {/* CTA Buttons */}
  <div className="flex flex-wrap gap-4 mb-10">
    <Link href="/work">
      <Button variant="accent" size="lg">
        View My Work →
      </Button>
    </Link>
    <a href={`mailto:${profileData.email}`}>
      <Button variant="secondary" size="lg">
        Get in Touch
      </Button>
    </a>
  </div>

  {/* Skills Preview */}
  <div>
    <p className="text-accent-light/50 text-sm font-medium mb-3 tracking-wide uppercase">
      Skills
    </p>
    <div className="flex flex-wrap gap-2 max-w-lg">
      {profileData.skills.technical.slice(0, 6).map((skill) => (
        <Badge key={skill} variant="secondary">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="bg-secondary-warm/20 border-t border-secondary-warm py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-accent-light mb-4">
                Featured Work
              </h2>
              <p className="text-accent-light/70 text-lg">
                Showcasing projects that demonstrate my technical skills and
                problem-solving approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-secondary-warm border border-accent-gold rounded-lg p-8 sm:p-10 hover:shadow-lg hover:border-accent-light transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-accent-light mb-2">
                    {project.title}
                  </h3>
                  <p className="text-accent-light/90 mb-4">
                    {project.description}
                  </p>
                  <Badge variant="accent">{project.category}</Badge>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <Link href="/work">
                <Button variant="accent" size="md">
                  Explore All Projects →
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="border-t border-secondary-warm py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent-light mb-12">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-accent-gold mb-4">
                Background
              </h3>
              <p className="text-accent-light/80 mb-4 leading-relaxed">
                {profileData.summary}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent-gold mb-4">
                Currently Doing
              </h3>
              <ul className="space-y-3 text-accent-light/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">→</span>
                  <span>Leading the Sillag blockchain development team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">→</span>
                  <span>Reviewing production code for PromptGraph system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">→</span>
                  <span>
                    Contributing to blockchain and full-stack development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">→</span>
                  <span>
                    Building digital experiences with modern web technologies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-warm/20 border-t border-secondary-warm min-h-[320px] flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent-light mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-accent-light/80 text-lg mb-8">
            I&apos;m open to new opportunities, collaborations, and interesting
            conversations. Feel free to reach out!
          </p>
          <a href={`mailto:${profileData.email}`}>
            <Button variant="accent" size="lg">
              Send Me an Email
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
