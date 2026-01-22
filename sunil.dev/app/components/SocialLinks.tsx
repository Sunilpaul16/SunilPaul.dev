import Link from 'next/link';

function LinkedInIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

type SocialLinksProps = {
    linkedin: string;
    github: string;
    email: string;
};

const linkBase =
    'inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/60 px-4 py-2 text-sm text-zinc-600 backdrop-blur-sm transition-all duration-200 hover:-translate-y-px hover:border-zinc-300 hover:bg-white hover:text-zinc-950 hover:shadow-md hover:shadow-zinc-950/5 dark:border-zinc-700/80 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-50';

export function SocialLinks({ linkedin, github, email }: SocialLinksProps) {
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkBase}
            >
                <LinkedInIcon />
                LinkedIn
            </Link>
            <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkBase}
            >
                <GitHubIcon />
                GitHub
            </Link>
            <a href={email} className={linkBase}>
                <MailIcon />
                Email
            </a>
        </div>
    );
}
