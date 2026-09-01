"use client";

import { useState } from "react";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

type Cert = { id: number; title: string; type: "web" | "machine learning"; path: string };

const cards: Cert[] = [
  { id: 1, title: "Introduction to Web Development with HTML, CSS, JavaScript", type: "web", path: "webintro.jpg" },
  { id: 2, title: "Developing Responsive Web Pages Using HTML5 and CSS3", type: "web", path: "responsiveweb.jpg" },
  { id: 3, title: "Advanced React", type: "web", path: "advancedreact.jpg" },
  { id: 4, title: "React Native", type: "web", path: "reactnative.jpg" },
  { id: 5, title: "React Basics", type: "web", path: "reactbasic.jpg" },
  { id: 6, title: "Mobile Development and JavaScript", type: "web", path: "mobiledev.jpg" },
  { id: 7, title: "Introduction to Mobile Development", type: "web", path: "mobiledev2.jpg" },
  { id: 8, title: "Memulai Pemrograman dengan Python", type: "machine learning", path: "pythonintro.jpg" },
  { id: 9, title: "Belajar Dasar AI", type: "machine learning", path: "aifund.jpg" },
  { id: 10, title: "Practical Machine Learning", type: "machine learning", path: "practicalml.jpg" },
  { id: 11, title: "Introduction to Machine Learning", type: "machine learning", path: "mlintro.jpg" },
  { id: 12, title: "Scikit-Learn for Machine Learning Classification Problems", type: "machine learning", path: "scikitlearn.jpg" },
  { id: 13, title: "Artificial Intelligence Essentials V2", type: "machine learning", path: "aiessentials.jpg" },
  { id: 14, title: "Machine Learning with Python (V2)", type: "machine learning", path: "mlwpython.jpg" },
  { id: 15, title: "Python Project for Data Science", type: "machine learning", path: "pythonds.jpg" },
  { id: 16, title: "Python Project for Data Engineering", type: "machine learning", path: "pythonde.jpg" },
  { id: 17, title: "Foundations for Big Data Analysis with SQL", type: "machine learning", path: "bigdatafound.jpg" },
  { id: 18, title: "A Crash Course in Data Science", type: "machine learning", path: "ds.jpg" },
  { id: 19, title: "The Data Scientist’s Toolbox", type: "machine learning", path: "dstoolbox.jpg" },
  { id: 20, title: "Data Science in Real Life", type: "machine learning", path: "dsrl.jpg" },
];

const filters = ["all", "web", "machine learning"] as const;

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
            {cards.length}+ completed courses across web development and machine
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
