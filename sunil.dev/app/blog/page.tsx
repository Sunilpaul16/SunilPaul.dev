import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Short notes on setup, habits, and whatever I\'m thinking about.',
};
import { formatDate, getAllLogs } from '../content/logs';

export default function BlogIndexPage() {
    const posts = getAllLogs();

    return (
        <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
            <header className="space-y-3">
                <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                    Writing
                </h1>
                <p className="max-w-prose text-zinc-600 dark:text-zinc-400">
                    Short notes on setup, habits, and whatever I&apos;m
                    thinking about.
                </p>
            </header>

            <ul className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-900">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group block py-7 transition-colors"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0 flex-1 space-y-3">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="rounded-md border border-zinc-200/80 bg-zinc-100/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-400">
                                            {post.type}
                                        </span>
                                        <span className="text-xs text-zinc-400 dark:text-zinc-600">
                                            {formatDate(post.postedAt)}
                                        </span>
                                    </div>

                                    <p className="text-lg font-light tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                                        {post.subject}
                                    </p>

                                    <p className="line-clamp-2 max-w-prose text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
                                        {post.paragraphs[0]}
                                    </p>
                                </div>

                                <span className="shrink-0 text-zinc-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-600 dark:text-zinc-700 dark:group-hover:text-zinc-400">
                                    →
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
