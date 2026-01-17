type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-2xl p-8 lowercase">
      <h1 className="text-2xl font-medium text-zinc-950 dark:text-zinc-50">
        blog {slug}
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">Coming soon.</p>
    </div>
  );
}
