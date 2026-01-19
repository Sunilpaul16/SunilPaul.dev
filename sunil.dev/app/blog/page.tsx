import Link from 'next/link';
import { formatPostedAt, getAllLogs } from '../content/logs';

export default function BlogIndexPage() {
    const posts = getAllLogs();

    return (
        <div className="mx-auto flex min-h-full max-w-2xl flex-col gap-8 px-5 py-12 md:px-8">
            <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                Logs
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
                Short notes on setup, habits, and whatever I&apos;m thinking
                about.
            </p>
            <ul className="flex flex-col gap-6 ">
                {posts.map((post) => (
                    <li
                        key={post.slug}
                        className="border-b border-zinc-200/80 pb-6 last:border-0 dark:border-zinc-800"
                    >
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group block"
                        >
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {formatPostedAt(post.postedAt)}
                            </p>
                            <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                {post.type}
                            </p>
                            <p className="mt-2 text-lg text-zinc-950 transition-colors group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
                                {post.subject}
                            </p>
                            <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {post.paragraphs[0]}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
