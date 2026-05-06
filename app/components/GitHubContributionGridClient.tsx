'use client';

import { useState } from 'react';

export type CellMeta = {
    level: number;
    date: string;
    count: number;
};

type MonthLabel = { col: number; name: string };

type Props = {
    cells: CellMeta[][];
    monthLabels: MonthLabel[];
    total: number;
    weeks: number;
    days: number;
};

const CELL = 12;
const GAP = 3;
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''] as const;

function levelClass(level: number): string {
    const levels = [
        'bg-zinc-100 dark:bg-zinc-800',
        'bg-emerald-200/90 dark:bg-emerald-900/80',
        'bg-emerald-400/85 dark:bg-emerald-700/85',
        'bg-emerald-600/90 dark:bg-emerald-500/70',
        'bg-emerald-800 dark:bg-emerald-400/60',
    ];
    return levels[level] ?? levels[0];
}

function levelGlow(level: number): string {
    if (level === 4) return 'shadow-sm shadow-emerald-400/50 dark:shadow-emerald-400/40';
    if (level === 3) return 'shadow-sm shadow-emerald-400/20 dark:shadow-emerald-400/20';
    return '';
}

function formatTooltip(date: string, count: number): string {
    const d = new Date(date);
    const formatted = d.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
    if (count === 0) return `No contributions · ${formatted}`;
    return `${count} contribution${count === 1 ? '' : 's'} · ${formatted}`;
}

export function GitHubContributionGridClient({
    cells,
    monthLabels,
    total,
    weeks,
    days,
}: Props) {
    const [hoverInfo, setHoverInfo] = useState<string | null>(null);

    const colTemplate = `repeat(${weeks}, minmax(0, ${CELL}px))`;
    const rowTemplate = `repeat(${days}, minmax(0, ${CELL}px))`;
    const monthLabelOffset = 28;

    return (
        <div className="space-y-3">
            {/* Info bar */}
            <div className="flex items-center justify-between gap-2">
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    {hoverInfo ?? (
                        total > 0
                            ? `${total.toLocaleString()} contributions in the last year`
                            : 'Contribution activity'
                    )}
                </p>
            </div>

            <div className="overflow-x-auto pb-1">
                <div className="inline-block">
                    {/* Month labels */}
                    <div
                        className="mb-1.5 grid"
                        style={{
                            gridTemplateColumns: colTemplate,
                            columnGap: `${GAP}px`,
                            marginLeft: `${monthLabelOffset}px`,
                        }}
                    >
                        {monthLabels.map(({ col, name }, i) => {
                            const nextCol = monthLabels[i + 1]?.col ?? weeks;
                            return (
                                <span
                                    key={col}
                                    style={{
                                        gridColumn: `${col + 1} / span ${nextCol - col}`,
                                    }}
                                    className="truncate text-[10px] leading-none text-zinc-400 dark:text-zinc-600"
                                >
                                    {name}
                                </span>
                            );
                        })}
                    </div>

                    {/* Day labels + cells */}
                    <div className="flex items-start gap-2">
                        <div
                            className="grid w-5 shrink-0"
                            style={{
                                gridTemplateRows: rowTemplate,
                                rowGap: `${GAP}px`,
                            }}
                        >
                            {DAY_LABELS.map((label, i) => (
                                <span
                                    key={i}
                                    className="flex items-center justify-end text-[10px] leading-none text-zinc-400 dark:text-zinc-600"
                                >
                                    {label}
                                </span>
                            ))}
                        </div>

                        <div
                            className="inline-grid gap-0.75"
                            style={{
                                gridTemplateColumns: colTemplate,
                                gridTemplateRows: rowTemplate,
                            }}
                            role="img"
                            aria-label={`GitHub contribution activity, last 12 months`}
                            onMouseLeave={() => setHoverInfo(null)}
                        >
                            {cells.map((week, wi) =>
                                week.map((cell, di) => (
                                    <div
                                        key={`${wi}-${di}`}
                                        style={{
                                            gridColumn: wi + 1,
                                            gridRow: di + 1,
                                        }}
                                        className={`size-3 shrink-0 rounded-sm transition-all duration-100 hover:scale-125 hover:rounded-xs cursor-default ${levelClass(cell.level)} ${levelGlow(cell.level)}`}
                                        onMouseEnter={() =>
                                            setHoverInfo(
                                                formatTooltip(cell.date, cell.count),
                                            )
                                        }
                                    />
                                )),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
