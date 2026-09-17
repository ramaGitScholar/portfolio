import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  col?: string;
};

const projects: Project[] = [
  {
    title: "SineFlix",
    description:
      "A movie recommendation website with browsing, search and personalized suggestions.",
    image: "/projects/project1.jpg",
    link: "https://github.com/ramaGitScholar/laravel-sineflix",
    tags: ["Laravel", "MySQL", "Blade"],
    col: "2",
  },
  {
    title: "Airline Ticket Reservation",
    description:
      "Flight search and seat booking flow with reservation management.",
    image: "/projects/project2.jpg",
    link: "https://github.com/ramaGitScholar/airline-ticket-reservation",
    tags: ["Web App", "Backend"],
    col: "1"
  },
  {
    title: "E-commerce & Social Media Crawler",
    description:
      "Big data crawler from multiple sources such as Youtube, Tokopedia, and others for sentiment analysis related to government's policies.",
    image: "/projects/project6.png",
    link: "#projects",
    tags: ["Selenium", "Playwright", "Python"],
    col: "2"
  },
  {
    title: "Color Detection with OpenCV",
    description:
      "Real-time color detection and tracking from a live camera feed.",
    image: "/projects/project3.jpg",
    link: "#projects",
    tags: ["Python", "OpenCV", "Computer Vision"],
    col: "1"
  },
  {
    title: "Qolbu App",
    description:
      "Data management platform for the Qolbu Hasanah Foundation.",
    image: "/projects/project4.jpg",
    link: "https://github.com/ramaGitScholar/qolbuapp",
    tags: ["Full-Stack", "Dashboard"],
    col: "1"
  },
  {
    title: "Telegram Agentic AI English Mentor",
    description:
      "A Telegram-based English mentor powered by an Agentic AI architecture. Utilizing Gemini 3.1 Flash, it features multiple specialized AI agents working together to help users master writing, reading, listening, and even speaking in a fun way.",
    image: "/projects/project5.png",
    link: "https://github.com/ramaGitScholar/mentor_bahasa_inggris_virtual",
    tags: ["Python", "LLM", "Agentic AI", "Google AI Studio"],
    col: "2"
  },
  {
    title: "More on GitHub",
    description: "Browse the rest of my experiments and open-source work.",
    image: "/projects/findoutmore.png",
    link: "https://github.com/ramaGitScholar",
    tags: ["Open Source"],
    col: "3"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="section-eyebrow">Work</span>
            <h2 className="section-title">Highlighted Projects</h2>
          </div>
          <a
            href="https://github.com/ramaGitScholar"
            target="_blank"
            rel="noreferrer"
            className="ghost-btn"
          >
            All repositories <HiArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target={p.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`card group flex flex-col ${
                p.col == "1" ? "lg:col-span-1" : ""
              } ${
                p.col == "2" ? "lg:col-span-2" : ""
              }
              ${
                p.col == "3" ? "lg:col-span-3" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                  <HiArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-poppins text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm text-white/55">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
