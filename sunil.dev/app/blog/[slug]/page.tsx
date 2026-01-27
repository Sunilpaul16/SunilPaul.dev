import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
    formatDate,
    getLogBySlug,
    getAllLogs,
} from '../../content/logs';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllLogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getLogBySlug(slug);
    if (!post) return { title: 'log' };
    return {
        title: post.subject,
        description: post.paragraphs[0],
    };
}

export default async function LogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getLogBySlug(slug);
    if (!post) notFound();

    return (
        <article className="mx-auto flex min-h-full w-full max-w-4xl flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
            <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
                <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                    ←
                </span>
                Writing
            </Link>

            <header className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-zinc-200/80 bg-zinc-100/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-400">
                        {post.type}
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-600">
                        {formatDate(post.postedAt)}
                    </span>
                </div>

                <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                    {post.subject}
                </h1>
            </header>

            <div className="space-y-5 border-t border-zinc-100 pt-8 dark:border-zinc-900">
                {post.paragraphs.map((p, i) => (
                    <p
                        key={i}
                        className="max-w-prose leading-7 text-zinc-700 dark:text-zinc-300"
                    >
                        {p}
                    </p>
                ))}
            </div>

            <footer className="border-t border-zinc-100 pt-8 dark:border-zinc-900">
                <Link
                    href="/blog"
                    className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                    <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                        ←
                    </span>
                    All posts
                </Link>
            </footer>
        </article>
    );
}
