import {
    countToLevel,
    fetchContributions,
    type ContributionWeek,
} from '../lib/github';
import {
    GitHubContributionGridClient,
    type CellMeta,
} from './GitHubContributionGridClient';

const GITHUB_USERNAME = 'Sunilpaul16';
const WEEKS = 53;
const DAYS = 7;

const MONTH_NAMES = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

type MonthLabel = { col: number; name: string };

function mockLevel(week: number, day: number): number {
    const n = (week * 17 + day * 31) % 97;
    if (n < 55) return 0;
    if (n < 70) return 1;
    if (n < 82) return 2;
    if (n < 92) return 3;
    return 4;
}

function buildMockDate(week: number, day: number): string {
    const today = new Date();
    const start = new Date(today.getTime() - (WEEKS - 1) * 7 * 24 * 60 * 60 * 1000);
    const d = new Date(start.getTime() + (week * 7 + day) * 24 * 60 * 60 * 1000);
    return d.toISOString().slice(0, 10);
}

function mockCount(level: number): number {
    if (level === 0) return 0;
    if (level === 1) return 2;
    if (level === 2) return 6;
    if (level === 3) return 14;
    return 22;
}

function buildCellsFromApi(apiWeeks: ContributionWeek[]): CellMeta[][] {
    const cells: CellMeta[][] = Array.from({ length: WEEKS }, () =>
        Array.from({ length: DAYS }, () => ({ level: 0, date: '', count: 0 })),
    );
    const offset = WEEKS - apiWeeks.length;
    apiWeeks.forEach((week, wi) => {
        week.contributionDays.forEach((day) => {
            const col = offset + wi;
            const row = day.weekday;
            if (col >= 0 && col < WEEKS && row >= 0 && row < DAYS) {
                cells[col][row] = {
                    level: countToLevel(day.contributionCount),
                    date: day.date,
                    count: day.contributionCount,
                };
            }
        });
    });
    return cells;
}

function buildMockCells(): CellMeta[][] {
    return Array.from({ length: WEEKS }, (_, wi) =>
        Array.from({ length: DAYS }, (_, di) => {
            const level = mockLevel(wi, di);
            return { level, date: buildMockDate(wi, di), count: mockCount(level) };
        }),
    );
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

function computeMockTotal(): number {
    let total = 0;
    for (let wi = 0; wi < WEEKS; wi++) {
        for (let di = 0; di < DAYS; di++) {
            total += mockCount(mockLevel(wi, di));
        }
    }
    return total;
}

export async function GitHubContributionGrid() {
    const data = await fetchContributions(GITHUB_USERNAME);
    const cells = data ? buildCellsFromApi(data.weeks) : buildMockCells();
    const monthLabels = getMonthLabels(data?.weeks ?? null);
    const total = data?.total ?? computeMockTotal();

    return (
        <GitHubContributionGridClient
            cells={cells}
            monthLabels={monthLabels}
            total={total}
            weeks={WEEKS}
            days={DAYS}
        />
    );
}
