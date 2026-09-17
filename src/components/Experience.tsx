import Image from "next/image";
import { HiBriefcase, HiCamera } from "react-icons/hi";

type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  /** Path under /public, e.g. "/experience/company-team.jpg". Leave undefined until a photo is added. */
  photo?: string;
};

const jobs: Job[] = [
  {
    role: "Full Stack Web Developer",
    company: "Perum Perhutani",
    period: "September — December 2025",
    location: "South Jakarta, Indonesia",
    points: [
      "Collaborated with Perhutani's IT team to develop TITAN (Teknologi Informasi Tanaman), a comprehensive web application for forestry management operations",
      "Developed server-side functionalities using Laravel framework, including CRUD operations, RESTful APIs, authentication middleware, and business logic implementation",
      "Delivered a production-ready web application successfully deployed across 57 Forest Management Units (KPH) spanning Java, Madura, and Banten provinces, streamlining work hire module processes",
    ],
    photo: "/experience/experience1.jpeg"
  },
  {
    role: "Data Scientist",
    company: "INDEF",
    period: "January 2026 - Present",
    location: "South Jakarta, Indonesia",
    points: [
    "Built a web scraping pipeline (Selenium, Playwright) to collect 10,000–100,000 records of e-commerce product data, public internet conversations, and geo locations to support internal research initiatives",
    "Conducted economic and finance analysis and research on government policy",
    "Took part in INDEF seminar collaboration with CNBC, EcoSecurities, and others, related to sharia economics, sustainable energy, etc.",
    "Contributed to the development of an LLM-integrated policy hub platform, streamlining the policy brief creation process from government policy documents",
    "Collected and analyzed EV-related infrastructure data across Java province to support infrastructure planning and policy insight development",
    ],
    photo: "/experience/experience2.jpeg"
  },
];

function PhotoSlot({ photo, alt }: { photo?: string; alt: string }) {
  if (photo) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={photo}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-white/30">
      <HiCamera className="h-6 w-6" />
      <span className="text-center text-xs">Documentation photo</span>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24">
      <div className="container-px">
        <div className="text-center">
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I&apos;ve worked</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            A timeline of roles, internships, and organizations that shaped how I
            build.
          </p>
        </div>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-neon-pink/40 via-white/10 to-neon-violet/40 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {jobs.map((job, i) => {
              const alignRight = i % 2 === 1;
              return (
                <div
                  key={`${job.company}-${i}`}
                  className="relative grid gap-6 pl-14 lg:grid-cols-2 lg:gap-x-12 lg:pl-0"
                >
                  {/* dot */}
                  <div className="absolute left-5 top-1.5 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-ink ring-2 ring-neon-cyan lg:left-1/2">
                    <HiBriefcase className="h-3 w-3 text-neon-cyan" />
                  </div>

                  {/* Copy card */}
                  <div
                    className={`card p-6 ${
                      alignRight ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">
                      {job.period}
                    </span>
                    <h3 className="mt-2 font-poppins text-lg font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm text-white/50">
                      {job.company} · {job.location}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-white/60">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon-pink" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Photo slot */}
                  <div
                    className={
                      alignRight
                        ? "lg:col-start-1 lg:row-start-1"
                        : "lg:col-start-2"
                    }
                  >
                    <PhotoSlot photo={job.photo} alt={`${job.role} at ${job.company}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
