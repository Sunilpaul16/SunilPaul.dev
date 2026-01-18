import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLogBySlug, getAllLogs } from "../../content/logs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllLogs().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getLogBySlug(slug);
  if (!post) return { title: "log" };
  return {
    title: `log ${post.indexLabel}: ${post.title}`,
    description: post.paragraphs[0],
  };
}

export default async function LogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getLogBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto flex min-h-full max-w-2xl flex-col gap-10 px-5 py-12 md:px-8">
      <Link
        href="/blog"
        className="text-sm lowercase text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← logs
      </Link>

      <header className="space-y-2">
        <p className="text-sm lowercase text-zinc-500 dark:text-zinc-400">
          log {post.indexLabel}
        </p>
        <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
          {post.title}
        </h1>
      </header>

      <div className="space-y-6">
        {post.paragraphs.map((p, i) => (
          <p
            key={i}
            className="max-w-prose leading-relaxed text-zinc-700 dark:text-zinc-300"
          >
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
