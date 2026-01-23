import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../content/projects';

export default function ProjectsPage() {
    const [featured, ...rest] = PROJECTS;

    return (
        <div className="mx-auto flex min-h-full max-w-4xl flex-col gap-12 px-5 py-12 md:px-8">
            <header className="space-y-3">
                <h1 className="text-3xl font-light tracking-tight text-zinc-950 dark:text-zinc-50">
                    Projects
                </h1>
                <p className="max-w-prose text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Things I&apos;ve built. Hover the cards to see them in
                    action.
                </p>
            </header>

            <div className="flex flex-col gap-6">
                {featured && (
                    <ProjectCard project={featured} featured />
                )}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
