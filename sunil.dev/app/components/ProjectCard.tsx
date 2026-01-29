'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '../content/projects';

const STATUS_LABELS: Record<Project['status'], string> = {
    live: 'live',
    wip: 'in progress',
    archived: 'archived',
    'coming-soon': 'soon',
};

const STATUS_CLASSES: Record<Project['status'], string> = {
    live: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-400',
    wip: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-400',
    archived:
        'border-zinc-200 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-400',
    'coming-soon':
        'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-400',
};

type Props = {
    project: Project;
    featured?: boolean;
};

export function ProjectCard({ project, featured = false }: Props) {
    const [hovered, setHovered] = useState(false);
    const hasImage = Boolean(project.image);
    const showGif = hovered && Boolean(project.gif);

    return (
        <article
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/60 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-zinc-950/30 ${featured ? 'md:flex-row' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image area */}
            {hasImage ? (
                <div
                    className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${featured ? 'aspect-video md:aspect-auto md:w-1/2' : 'aspect-video'}`}
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        loading={featured ? 'eager' : 'lazy'}
                        className={`object-cover transition-opacity duration-500 ${showGif ? 'opacity-0' : 'opacity-100'}`}
                        unoptimized={project.image.endsWith('.gif')}
                        sizes={
                            featured
                                ? '(max-width: 768px) 100vw, 50vw'
                                : '(max-width: 768px) 100vw, 33vw'
                        }
                    />
                    {project.gif && (
                        <Image
                            src={project.gif}
                            alt={`${project.name} preview`}
                            fill
                            className={`object-cover transition-opacity duration-500 ${showGif ? 'opacity-100' : 'opacity-0'}`}
                            unoptimized
                            sizes={
                                featured
                                    ? '(max-width: 768px) 100vw, 50vw'
                                    : '(max-width: 768px) 100vw, 33vw'
                            }
                        />
                    )}
                    {project.gif && (
                        <div
                            className={`absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                        >
                            GIF
                        </div>
                    )}
                </div>
            ) : (
                <div
                    className={`relative overflow-hidden ${featured ? 'aspect-video md:aspect-auto md:w-1/2' : 'aspect-video'}`}
                >
                    <div className="absolute inset-0 bg-linear-to-br from-violet-100 via-zinc-100 to-emerald-100 dark:from-violet-950/30 dark:via-zinc-900 dark:to-emerald-950/30">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl font-extralight tracking-tighter text-zinc-300 dark:text-zinc-600">
                                ???
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div
                className={`flex flex-1 flex-col gap-4 p-5 ${featured ? 'md:p-8 md:justify-center' : ''}`}
            >
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3
                            className={`font-medium tracking-tight text-zinc-950 dark:text-zinc-50 ${featured ? 'text-2xl' : 'text-lg'}`}
                        >
                            {project.name}
                        </h3>
                        <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                            {project.tagline}
                        </p>
                    </div>
                    <span
                        className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_CLASSES[project.status]}`}
                    >
                        {STATUS_LABELS[project.status]}
                    </span>
                </div>

                {project.status !== 'coming-soon' && (
                    <p
                        className={`leading-relaxed text-zinc-600 dark:text-zinc-400 ${featured ? 'text-sm md:text-base' : 'text-sm'}`}
                    >
                        {project.description}
                    </p>
                )}

                {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md border border-zinc-200/80 bg-zinc-100/80 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {(project.links.github || project.links.live) && (
                    <div className="mt-auto flex items-center gap-4 pt-2">
                        {project.links.github && (
                            <Link
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                            >
                                GitHub →
                            </Link>
                        )}
                        {project.links.live && (
                            <Link
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-zinc-950 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
                            >
                                Live →
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}
