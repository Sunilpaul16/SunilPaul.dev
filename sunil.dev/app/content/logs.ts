export type LogPost = {
  slug: string;
  /** e.g. "01" for display */
  indexLabel: string;
  title: string;
  paragraphs: string[];
};

export const LOG_POSTS: LogPost[] = [
  {
    slug: "1",
    indexLabel: "01",
    title: "reinstalling Linux (again)",
    paragraphs: [
      "I’ve reinstalled Linux three times in two months. Every time it starts the same I tell myself this will be the clean setup I stick with.",
      "It usually lasts a few days before I start tweaking things again, breaking configs, or deciding I don’t like how something feels.",
      "I don’t think it’s really about the setup. It’s more the reset. There’s something about starting from zero that feels like progress, even if nothing actually changed.",
    ],
  },
  {
    slug: "2",
    indexLabel: "02",
    title: "double quotes vs single quotes",
    paragraphs: [
      "I use double quotes in code, even though it barely matters in most cases.",
      "Single quotes are probably “fine” and a lot of people prefer them, but double quotes just feel clearer to me when I’m reading things back.",
      "I’ve looked at the arguments on both sides before, but this is one of those decisions I stopped overthinking. It’s not really a rule, just a preference I stuck with.",
    ],
  },
  {
    slug: "3",
    indexLabel: "03",
    title: "forcing focus with timers",
    paragraphs: [
      "Sometimes I have to set timers or alarms just to start coding.",
      "Once I’m in, it’s fine, but starting is the hard part. So I kind of create fake urgency to push myself into it.",
      "It’s not elegant, but it works. And over time I’ve realised I don’t need perfect motivation, just a way to get over that initial friction.",
    ],
  },
];

export function getLogBySlug(slug: string): LogPost | undefined {
  return LOG_POSTS.find((p) => p.slug === slug);
}

export function getAllLogs(): LogPost[] {
  return LOG_POSTS;
}
