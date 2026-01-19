import Link from 'next/link';
import { GitHubContributionGrid } from './components/GitHubContributionGrid';
import { SocialLinks } from './components/SocialLinks';
import { formatPostedAt, getAllLogs } from './content/logs';

/** Update these to your real profiles. */
const SOCIAL = {
    linkedin: 'https://www.linkedin.com/in/sunilpaul16/',
    github: 'https://github.com/Sunilpaul16',
    email: 'mailto:hello@example.com',
} as const;

export default function Home() {
    const posts = getAllLogs();
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 p-6 md:gap-16 md:p-10 lg:pr-10">
            <header className="pt-2">
                <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50">
                    <span className="font-normal">Sunil</span>{' '}
                    <span className="text-zinc-600 dark:text-zinc-400">
                        Paul
                    </span>
                </h1>
            </header>

            <section aria-labelledby="github-heading">
                <h2 id="github-heading" className="sr-only">
                    GitHub activity
                </h2>
                <GitHubContributionGrid />
                <SocialLinks
                    linkedin={SOCIAL.linkedin}
                    github={SOCIAL.github}
                    email={SOCIAL.email}
                />
            </section>

            <section aria-labelledby="logs-heading">
                <h2
                    id="logs-heading"
                    className="mb-6 text-sm font-medium lowercase text-zinc-500 dark:text-zinc-400"
                >
                    logs
                </h2>
                <ul className="flex flex-col gap-4">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block border-b border-zinc-200/80 py-4 transition-colors dark:border-zinc-800"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0 flex-1 space-y-2">
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                            {formatPostedAt(post.postedAt)}
                                        </p>
                                        <p className="text-xs font-medium lowercase text-zinc-500 dark:text-zinc-400">
                                            {post.type}
                                        </p>
                                        <p className="text-sm lowercase text-zinc-800 group-hover:text-zinc-950 dark:text-zinc-200 dark:group-hover:text-zinc-50">
                                            {post.subject}
                                        </p>
                                    </div>
                                    <span className="shrink-0 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-500">
                                        →
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    href="/blog"
                    className="mt-6 inline-flex items-center gap-2 text-sm lowercase text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                    View all posts
                    <span aria-hidden>→</span>
                </Link>
            </section>
        </div>
    );
}
