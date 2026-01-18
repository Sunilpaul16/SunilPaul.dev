import Link from "next/link";

type SocialLinksProps = {
  linkedin: string;
  github: string;
  email: string;
};

export function SocialLinks({ linkedin, github, email }: SocialLinksProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm lowercase tracking-wide text-zinc-600 dark:text-zinc-400">
      <Link
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
      >
        linkedin
      </Link>
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
      >
        github
      </Link>
      <a
        href={email}
        className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
      >
        mail
      </a>
    </div>
  );
}
