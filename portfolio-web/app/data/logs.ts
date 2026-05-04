import rawLogs from "./logs.json";
import type { LogCollection, LogEntry } from "@/types";

const data = rawLogs as LogCollection;

export function getAllLogs(): LogEntry[] {
  return [...data.logs].sort((a, b) => b.weekNumber - a.weekNumber);
}

export function getLogBySlug(slug: string): LogEntry | undefined {
  return data.logs.find((log) => log.slug === slug);
}

export function getAdjacentLogs(slug: string): {
  previousLog?: LogEntry;
  nextLog?: LogEntry;
} {
  const sorted = [...data.logs].sort((a, b) => a.weekNumber - b.weekNumber);
  const index = sorted.findIndex((log) => log.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previousLog: sorted[index - 1],
    nextLog: sorted[index + 1],
  };
}
