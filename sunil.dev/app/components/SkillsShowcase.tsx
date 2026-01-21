'use client';

import { useMemo, useState } from 'react';
import type { SkillGroup } from '../content/skills';

type Props = {
    groups: SkillGroup[];
    extras: string[];
};

export function SkillsShowcase({ groups, extras }: Props) {
    const [activeId, setActiveId] = useState(groups[0]?.id ?? '');

    const activeGroup = useMemo(
        () => groups.find((g) => g.id === activeId) ?? groups[0],
        [groups, activeId],
    );

    return (
        <div className="space-y-14">
            <section className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    {groups.map((g) => {
                        const isOn = g.id === activeGroup?.id;
                        return (
                            <button
                                key={g.id}
                                type="button"
                                onClick={() => setActiveId(g.id)}
                                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                                    isOn
                                        ? 'border-zinc-950 bg-zinc-950 text-white shadow-lg shadow-zinc-950/15 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:shadow-zinc-100/10'
                                        : 'border-zinc-200 bg-white/60 text-zinc-600 hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:bg-zinc-900'
                                }`}
                            >
                                {g.title}
                            </button>
                        );
                    })}
                </div>

                {activeGroup && (
                    <div key={activeGroup.id} className="skills-group-enter space-y-5">
                        <p className="max-w-prose text-zinc-600 dark:text-zinc-400">
                            {activeGroup.description}
                        </p>
                        <ul className="flex flex-wrap gap-x-8 gap-y-3">
                            {activeGroup.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="text-base text-zinc-800 dark:text-zinc-200"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            <section className="space-y-4">
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Also in the mix
                </h2>
                <p className="max-w-prose text-sm text-zinc-600 dark:text-zinc-400">
                    Smaller surface area, but I&apos;ve shipped or debugged with
                    these enough to be dangerous.
                </p>
                <div className="flex flex-wrap gap-2">
                    {extras.map((label, i) => (
                        <span
                            key={label}
                            className="skill-pill inline-flex items-center rounded-full border border-zinc-200/90 bg-white/70 px-3 py-1.5 text-xs text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:border-zinc-500"
                            style={{ animationDelay: `${i * 35}ms` }}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}
