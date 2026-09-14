"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { HiArrowDown } from "react-icons/hi";

const socials = [
  { icon: SiGithub, href: "https://github.com/ramaGitScholar", label: "GitHub" },
  { icon: SiInstagram, href: "https://www.instagram.com/ramandha_putras/", label: "Instagram" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/ramandhaps/", label: "LinkedIn" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
            Available for opportunities
          </span>

          <h1 className="mt-4 font-poppins text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Ramandha Putra <br className="hidden sm:block" />
            <span className="neon-text">Suryahadi</span>
          </h1>

          <div className="mt-5 flex items-center justify-center gap-3 text-lg text-white/70 lg:justify-start">
            <span className="hidden h-px w-8 bg-neon-pink sm:block" />
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1600,
                "Full-Stack Web Developer",
                1600,
                "AI / Machine Learning Engineer",
                1600,
              ]}
              wrapper="span"
              speed={55}
              className="font-openSans"
              repeat={Infinity}
            />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-white/60 lg:mx-0">
            Building reliable full-stack web applications with AI/ML integration —
            turning ideas into polished, usable AI-powered products.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href="#projects" className="neon-btn">
              View Projects
            </a>
            <a href="#contact" className="ghost-btn">
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 lg:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:-translate-y-1 hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-0 -z-10 animate-glow rounded-full bg-gradient-to-tr from-neon-violet/40 via-neon-pink/30 to-neon-cyan/30 blur-3xl" />
          <div className="animate-floaty overflow-hidden rounded-[2rem] border border-white/10 bg-surface/50 neon-ring backdrop-blur-sm">
            <Image
              src="/formal-bgremoved.png"
              alt="Ramandha Putra Suryahadi"
              width={605}
              height={698}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 text-left">
            <p className="text-lg font-bold text-white">3+ yrs</p>
            <p className="text-xs text-white/60">building things</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <HiArrowDown className="h-4 w-4 animate-bob" />
      </a>
    </section>
  );
}
