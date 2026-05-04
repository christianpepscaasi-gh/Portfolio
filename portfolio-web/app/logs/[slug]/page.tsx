import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Badge } from "@/components";
import { getAdjacentLogs, getAllLogs, getLogBySlug } from "@/data/logs";

interface LogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLogs().map((log) => ({ slug: log.slug }));
}

export async function generateMetadata({
  params,
}: LogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) {
    return {
      title: "Log Not Found | Christian Peps Caasi",
      description: "This log entry is not available.",
    };
  }

  return {
    title: `${log.weekLabel} | ${log.title} | Christian Peps Caasi`,
    description: log.preview,
  };
}

export default async function LogDetailPage({ params }: LogDetailPageProps) {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) {
    notFound();
  }

  const { previousLog, nextLog } = getAdjacentLogs(slug);

  return (
    <>
      <section className="border-b border-secondary-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/logs" className="text-accent-gold hover:text-accent-light">
            ← Back to Logs
          </Link>
        </div>
      </section>

      <article>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-accent-light/60 text-sm font-medium mb-3">
              {log.weekLabel} • {log.dateRange}
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-accent-light mb-4">
              {log.title}
            </h1>
            <p className="text-accent-light/80 leading-relaxed">{log.preview}</p>
            {log.tags && log.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {log.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-10 mb-12">
            <section>
              <h2 className="text-2xl font-bold text-accent-gold mb-4">
                Tasks Accomplished
              </h2>
              <ul className="space-y-3 list-disc pl-6 text-accent-light/85">
                {log.tasks.map((task, index) => (
                  <li key={`${log.slug}-task-${index}`}>{task}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-gold mb-4">
                Knowledge, Skills, Values Learned
              </h2>
              {log.learnings.length > 0 ? (
                <ul className="space-y-3 list-disc pl-6 text-accent-light/85">
                  {log.learnings.map((learning, index) => (
                    <li key={`${log.slug}-learning-${index}`}>{learning}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-accent-light/70">
                  Reflection notes for this week are still being expanded.
                </p>
              )}
            </section>
          </div>

          <div className="border-t border-secondary-warm pt-8 flex flex-wrap gap-3">
            <Link href="/logs">
              <Button variant="secondary" className="min-h-11">
                ← Back to Logs
              </Button>
            </Link>
            <Link href="/">
              <Button variant="accent" className="min-h-11">
                Home
              </Button>
            </Link>
            {previousLog && (
              <Link href={`/logs/${previousLog.slug}`}>
                <Button variant="secondary" className="min-h-11">
                  ← {previousLog.weekLabel}
                </Button>
              </Link>
            )}
            {nextLog && (
              <Link href={`/logs/${nextLog.slug}`}>
                <Button variant="accent" className="min-h-11">
                  {nextLog.weekLabel} →
                </Button>
              </Link>
            )}
          </div>
        </div>
      </article>

      <section className="bg-secondary-warm/20 border-t border-secondary-warm mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-accent-light mb-4">
            Want To Collaborate?
          </h2>
          <p className="text-accent-light/70 mb-6">
            I enjoy discussing system architecture, debugging, and growth through real-world engineering work.
          </p>
          <a href="mailto:christianpepscaasi@gmail.com">
            <Button variant="accent" size="md" className="min-h-11">
              Send Feedback
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
