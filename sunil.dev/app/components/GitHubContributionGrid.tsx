import {
    countToLevel,
    fetchContributionWeeks,
    type ContributionWeek,
} from '../lib/github';

const GITHUB_USERNAME = 'Sunilpaul16';
const WEEKS = 53;
const DAYS = 7;
const CELL = 12; // px — must match size-3
const GAP = 3;   // px — must match gap-0.75

const MONTH_NAMES = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

// Show Mon / Wed / Fri; empty string = invisible row
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''] as const;

type MonthLabel = { col: number; name: string };

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

function mockLevel(week: number, day: number): number {
    const n = (week * 17 + day * 31) % 97;
    if (n < 55) return 0;
    if (n < 70) return 1;
    if (n < 82) return 2;
    if (n < 92) return 3;
    return 4;
}

function buildGridFromApi(weeks: ContributionWeek[]): number[][] {
    const grid: number[][] = Array.from({ length: WEEKS }, () =>
        Array(DAYS).fill(0),
    );
    const offset = WEEKS - weeks.length;
    weeks.forEach((week, wi) => {
        week.contributionDays.forEach((day) => {
            const col = offset + wi;
            const row = day.weekday;
            if (col >= 0 && col < WEEKS && row >= 0 && row < DAYS) {
                grid[col][row] = countToLevel(day.contributionCount);
            }
        });
    });
    return grid;
}

function getMonthLabels(apiWeeks: ContributionWeek[] | null): MonthLabel[] {
    const labels: MonthLabel[] = [];

    if (apiWeeks) {
        let last = -1;
        const offset = WEEKS - apiWeeks.length;
        apiWeeks.forEach((week, wi) => {
            if (!week.contributionDays.length) return;
            const month = new Date(week.contributionDays[0].date).getMonth();
            if (month !== last) {
                labels.push({ col: offset + wi, name: MONTH_NAMES[month] });
                last = month;
            }
        });
    } else {
        // Derive month positions from today's date for the mock grid
        const today = new Date();
        const start = new Date(today.getTime() - (WEEKS - 1) * 7 * 24 * 60 * 60 * 1000);
        let last = -1;
        for (let wi = 0; wi < WEEKS; wi++) {
            const d = new Date(start.getTime() + wi * 7 * 24 * 60 * 60 * 1000);
            const month = d.getMonth();
            if (month !== last) {
                labels.push({ col: wi, name: MONTH_NAMES[month] });
                last = month;
            }
        }
    }

    return labels;
}

export async function GitHubContributionGrid() {
    const apiWeeks = await fetchContributionWeeks(GITHUB_USERNAME);
    const grid = apiWeeks ? buildGridFromApi(apiWeeks) : null;
    const monthLabels = getMonthLabels(apiWeeks);

    const cells = [];
    for (let week = 0; week < WEEKS; week++) {
        for (let day = 0; day < DAYS; day++) {
            const level = grid ? (grid[week][day] ?? 0) : mockLevel(week, day);
            cells.push(
                <div
                    key={`${week}-${day}`}
                    style={{ gridColumn: week + 1, gridRow: day + 1 }}
                    className={`size-3 shrink-0 rounded-sm ${levelClass(level)}`}
                />,
            );
        }
    }

    const colTemplate = `repeat(${WEEKS}, minmax(0, ${CELL}px))`;
    const rowTemplate = `repeat(${DAYS}, minmax(0, ${CELL}px))`;
    // Day-label column width + gap so month labels align with cell columns
    const dayColOffset = `${CELL + GAP * 2}px`; // ~18 px  (w-5 ≈ 20 + gap-2 = 8 → use calc)

    return (
        <div className="overflow-x-auto pb-1">
            <div className="inline-block">

                {/* ── Month labels ─────────────────────────────── */}
                <div
                    className="mb-1.5 grid"
                    style={{
                        gridTemplateColumns: colTemplate,
                        columnGap: `${GAP}px`,
                        marginLeft: `calc(20px + 8px)`, /* w-5 day col + gap-2 */
                    }}
                >
                    {monthLabels.map(({ col, name }, i) => {
                        const nextCol = monthLabels[i + 1]?.col ?? WEEKS;
                        return (
                            <span
                                key={col}
                                style={{ gridColumn: `${col + 1} / span ${nextCol - col}` }}
                                className="truncate text-[10px] leading-none text-zinc-400 dark:text-zinc-600"
                            >
                                {name}
                            </span>
                        );
                    })}
                </div>

                {/* ── Day labels + cells ───────────────────────── */}
                <div className="flex items-start gap-2">

                    {/* Day label column — same row sizing as the cell grid */}
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

                    {/* Contribution cells */}
                    <div
                        className="inline-grid gap-0.75"
                        style={{
                            gridTemplateColumns: colTemplate,
                            gridTemplateRows: rowTemplate,
                        }}
                        role="img"
                        aria-label={`GitHub contribution activity for ${GITHUB_USERNAME}, last 12 months${!apiWeeks ? ' (placeholder)' : ''}`}
                    >
                        {cells}
                    </div>
                </div>
            </div>
        </div>
    );
}
