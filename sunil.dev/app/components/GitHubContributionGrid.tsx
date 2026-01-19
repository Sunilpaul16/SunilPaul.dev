"use client";

import type { ReactNode } from "react";

/**
 * Visual-only contribution grid (GitHub-style). Replace with live data via API later.
 */
function levelClass(level: number): string {
  const levels = [
    "bg-zinc-100 dark:bg-zinc-800",
    "bg-emerald-200/90 dark:bg-emerald-900/80",
    "bg-emerald-400/85 dark:bg-emerald-700/85",
    "bg-emerald-600/90 dark:bg-emerald-500/70",
    "bg-emerald-800 dark:bg-emerald-400/60",
  ];
  return levels[level] ?? levels[0];
}

function cellLevel(week: number, day: number): number {
  const n = (week * 17 + day * 31) % 97;
  if (n < 55) return 0;
  if (n < 70) return 1;
  if (n < 82) return 2;
  if (n < 92) return 3;
  return 4;
}

/** ~53 weeks matches GitHub’s full-year contribution grid (12 months). */
const WEEKS = 53;
const DAYS = 7;

export function GitHubContributionGrid() {
  const cells: ReactNode[] = [];
  for (let week = 0; week < WEEKS; week++) {
    for (let day = 0; day < DAYS; day++) {
      const level = cellLevel(week, day);
      cells.push(
        <div
          key={`${week}-${day}`}
          style={{ gridColumn: week + 1, gridRow: day + 1 }}
          className={`size-3 shrink-0 rounded-sm ${levelClass(level)}`}
        />,
      );
    }
  }

  return (
    <div className="overflow-x-auto pb-1">
      <div
        className="inline-grid gap-0.75 py-1 pl-0 pr-4"
        style={{
          gridTemplateColumns: `repeat(${WEEKS}, minmax(0, 12px))`,
          gridTemplateRows: `repeat(${DAYS}, minmax(0, 12px))`,
        }}
        role="img"
        aria-label="GitHub-style contribution activity, last 12 months (placeholder)"
      >
        {cells}
      </div>
    </div>
  );
}
