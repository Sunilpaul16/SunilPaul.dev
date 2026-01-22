export type ContributionDay = {
    contributionCount: number;
    weekday: number;
    date: string;
};

export type ContributionWeek = {
    contributionDays: ContributionDay[];
};

const QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              weekday
              date
            }
          }
        }
      }
    }
  }
`;

export async function fetchContributionWeeks(
    username: string,
): Promise<ContributionWeek[] | null> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return null;

    const to = new Date();
    const from = new Date(to.getTime() - 364 * 24 * 60 * 60 * 1000);

    try {
        const res = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: QUERY,
                variables: {
                    login: username,
                    from: from.toISOString(),
                    to: to.toISOString(),
                },
            }),
            next: { revalidate: 3600 },
        });

        if (!res.ok) return null;

        const json = await res.json();
        return (
            json.data?.user?.contributionsCollection?.contributionCalendar
                ?.weeks ?? null
        );
    } catch {
        return null;
    }
}

export function countToLevel(count: number): number {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 9) return 2;
    if (count <= 19) return 3;
    return 4;
}
