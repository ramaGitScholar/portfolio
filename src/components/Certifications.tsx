"use client";

import { useState } from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

type Cert = { id: number; title: string; type: "web" | "artificial intelligence" | "data science"; path: string };

const cards: Cert[] = [
  { id: 1, title: "Advanced React", type: "web", path: "web1.jpg" },
  { id: 2, title: "React Basics", type: "web", path: "web2.jpg" },
  { id: 3, title: "Developed Responsive Web Pages Using HTML5 and CSS3", type: "web", path: "web3.jpg" },
  { id: 4, title: "Artificial Intelligence Essentials V2", type: "artificial intelligence", path: "ai1.jpg" },
  { id: 5, title: "Practical Machine Learning", type: "artificial intelligence", path: "ai2.jpg" },
  { id: 6, title: "Scikit-Learn for Machine Learning Classification Problems", type: "artificial intelligence", path: "ai3.jpg" },
  { id: 7, title: "Python Project for Data Science", type: "data science", path: "ds1.jpg" },
  { id: 8, title: "Data Science in Real Life", type: "data science", path: "ds2.jpg" },
  { id: 9, title: "The Data Scientist's Toolbox", type: "data science", path: "ds3.jpg" },
];

const filters = ["all", "web", "artificial intelligence", "data science"] as const;

export default function Certifications() {
  const [selected, setSelected] = useState<(typeof filters)[number]>("all");

  const filtered =
    selected === "all" ? cards : cards.filter((c) => c.type === selected);

  return (
    <section id="certifications" className="scroll-mt-24 py-24">
      <div className="container-px">
        <div className="text-center">
          <span className="section-eyebrow">Learning</span>
          <h2 className="section-title">Certifications</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Highlighted completed courses across web development and machine
            learning.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelected(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-all ${
                selected === f
                  ? "bg-gradient-to-r from-neon-pink to-neon-violet text-white"
                  : "border border-white/10 bg-white/5 text-white/70 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid max-h-[38rem] gap-5 overflow-y-auto hide-scrollbar sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((card) => (
            <a
              key={card.id}
              href={`/cert/${card.path}`}
              target="_blank"
              rel="noreferrer"
              className="card group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10">
                <Image
                  src={`/cert/${card.path}`}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 items-start justify-between gap-3 p-4">
                <div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-neon-cyan">
                    {card.type}
                  </span>
                  <h3 className="mt-1 font-poppins text-sm font-medium text-white">
                    {card.title}
                  </h3>
                </div>
                <HiArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-neon-cyan" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.linkedin.com/in/ramandhaps/details/certifications/"
            target="_blank"
            rel="noreferrer"
            className="ghost-btn"
          >
            View all on LinkedIn <HiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
