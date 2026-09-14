"use client";

import { FaReact, FaNodeJs, FaPython, FaLaravel, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiScikitlearn,
  SiOllama,
  SiGooglegemini,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Stack = { icon: IconType; name: string; color: string };

const stacks: Stack[] = [
  { icon: FaReact, name: "React", color: "#61DBFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: FaNodeJs, name: "Node.js", color: "#3C873A" },
  { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: SiMysql, name: "MySQL", color: "#00758F" },
  { icon: FaPython, name: "Python", color: "#FFD43B" },
  { icon: SiScikitlearn, name: "scikit-learn", color: "#F09437" },
  { icon: SiOllama, name: "Ollama", color: "#ffffff" },
  { icon: SiGooglegemini, name: "Google Gemini", color: "#078EFA" },
  { icon: SiOllama, name: "Ollama", color: "#F09437" },
  { icon: FaGitAlt, name: "Git", color: "#F05032" },
];

function Row({ items, reverse = false }: { items: Stack[]; reverse?: boolean }) {
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div
        className="flex w-max gap-4 animate-scroll"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items].map((s, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-surface/60 px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.6)]"
          >
            <s.icon
              className="h-6 w-6 shrink-0 transition-transform group-hover:scale-110"
              style={{ color: s.color }}
            />
            <span className="whitespace-nowrap font-openSans text-sm text-white/80">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(stacks.length / 2);
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="container-px text-center">
        <span className="section-eyebrow">Tech Stack</span>
        <h2 className="section-title">Tools I build with</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Hands-on experience across the full stack, and a growing toolkit for AI
          and computer vision.
        </p>
      </div>

      <div className="container-px mt-12 flex flex-col gap-4">
        <Row items={stacks.slice(0, half)} />
        <Row items={stacks.slice(half)} reverse />
      </div>
    </section>
  );
}
