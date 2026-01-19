import Link from 'next/link';

const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/skills', label: 'skills' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
] as const;

export function HomeSidebar() {
    return (
        <aside className="flex min-h-0 w-full shrink-0 flex-col border-zinc-200/80 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 lg:sticky lg:top-0 lg:min-h-screen lg:flex-1 lg:border-l">
            <nav className="flex flex-row flex-wrap gap-x-5 gap-y-3 border-b border-zinc-200/80 px-5 py-5 lowercase sm:gap-x-8 lg:flex lg:h-full lg:flex-col lg:justify-center lg:gap-14 lg:border-b-0 lg:px-6 lg:py-12 xl:px-8">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className="whitespace-nowrap text-lg font-light tracking-tight text-zinc-600 transition-colors hover:text-zinc-950 sm:text-xl lg:text-2xl dark:text-zinc-400 dark:hover:text-zinc-50 capitalize"
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
