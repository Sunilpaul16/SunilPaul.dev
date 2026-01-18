import Link from "next/link";
import { SkillsShowcase } from "../components/SkillsShowcase";
import { SKILL_EXTRAS, SKILL_GROUPS } from "../content/skills";

export default function SkillsPage() {
  return (
    <div className="relative mx-auto flex min-h-full max-w-3xl flex-col gap-12 px-5 py-12 md:gap-14 md:px-8">
      <Link
        href="/"
        className="text-sm lowercase text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← home
      </Link>

      <header className="space-y-3">
        <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
          skills
        </h1>
        <p className="max-w-prose text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A subjective map of what I&apos;m comfortable with — not a scoreboard,
          just how things feel day to day.
        </p>
      </header>

      <SkillsShowcase groups={SKILL_GROUPS} extras={SKILL_EXTRAS} />
    </div>
  );
}
