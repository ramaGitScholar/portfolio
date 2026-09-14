import Image from "next/image";
import { HiCode, HiFire, HiSparkles, HiUserGroup } from "react-icons/hi";

const pillars = [
  {
    icon: HiCode,
    title: "Full-Stack Web",
    body: "Interactive UI/UX and reliable backends across personal, team, and professional projects — React, Next.js, Laravel.",
  },
  {
    icon: HiSparkles,
    title: "Machine Learning & AI",
    body: "Expanding into machine learning & AI with a focus on Natural Language Processing and LLM integration",
  },
  {
    icon: HiUserGroup,
    title: "Collaboration",
    body: "Strong teamwork built through organizations and volunteer work — communicating clearly and shipping together.",
  },
  {
    icon: HiFire,
    title: "Continuous Learning",
    body: "Driven by curiosity to continuously expand skillsets and adapt to new technological frontiers.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-neon-pink/30 to-neon-violet/20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/60">
              <Image
                src="/profile-picture.png"
                alt="Ramandha Putra Suryahadi"
                width={640}
                height={640}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="section-eyebrow">About</span>
            <h2 className="section-title">
              Hello, you can call me <span className="neon-text">Rama</span>
            </h2>
            <p className="mt-5 max-w-2xl text-white/60">
              I&apos;m a software engineer who loves turning complex ideas into 
              reality—specializing in full-stack web apps and AI integration. 
              My approach is simple: build clean, usable, and well-documented 
              products that make future development a breeze.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="card p-5">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-pink/20 to-neon-violet/20 text-neon-cyan">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-poppins font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/55">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
