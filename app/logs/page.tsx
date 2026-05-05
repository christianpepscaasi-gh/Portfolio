import Link from "next/link";
import { Button } from "@/components";
import { getAllLogs } from "@/data/logs";

export const metadata = {
  title: "Weekly Logs | Christian Peps Caasi",
  description:
    "Technical documentation and weekly progress logs from my development journey",
};

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-secondary-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-accent-light mb-4">
            Weekly Logs
          </h1>
          <p className="text-accent-light/70 text-lg max-w-2xl">
            Technical documentation, progress updates, and reflections from my
            development journey at Makerspace OJT and beyond.
          </p>
        </div>
      </section>

      {/* Logs List */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {logs.length > 0 ? (
            <div className="relative border-l-2 border-secondary-warm/80 pl-5 sm:pl-8 space-y-5">
              {logs.map((log) => (
                <article
                  key={log.slug}
                  className="relative bg-secondary-warm border border-accent-gold rounded-lg p-5 sm:p-6 hover:shadow-lg hover:border-accent-light transition-all duration-300"
                >
                  <span className="absolute -left-[31px] sm:-left-[37px] top-6 h-3.5 w-3.5 rounded-full bg-accent-gold border-2 border-primary-dark" />

                  <div className="mb-3">
                    <p className="text-accent-light/60 text-xs sm:text-sm font-medium mb-1">
                      {log.weekLabel} • {log.dateRange}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-accent-light hover:text-accent-gold transition-colors">
                      <Link href={`/logs/${log.slug}`}>{log.title}</Link>
                    </h2>
                  </div>

                  <p className="text-accent-light/80 mb-4">{log.preview}</p>

                  <Link href={`/logs/${log.slug}`}>
                    <Button variant="accent" size="sm" className="min-h-11">
                      Read Full Log →
                    </Button>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-accent-light/60 mb-6">
                Weekly logs coming soon! Check back for detailed technical
                documentation and progress updates.
              </p>
              <Link href="/">
                <Button variant="accent" size="md">
                  Back to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Contributing Section */}
      <section className="bg-secondary-warm/20 border-t border-secondary-warm">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-accent-light mb-4">
            Planning Your Week?
          </h2>
          <p className="text-accent-light/70 mb-6">
            These logs document my learning process, technical decisions, and
            project progress. Feel free to reach out if you&apos;d like to discuss
            any of these topics!
          </p>
          <a href="mailto:christianpepscaasi@gmail.com">
            <Button variant="accent" size="md">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
