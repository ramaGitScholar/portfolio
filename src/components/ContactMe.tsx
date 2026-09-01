"use client";

import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const EMAIL = "ramandhasuryahadi@gmail.com";

const socials = [
  { icon: SiGithub, href: "https://github.com/ramaGitScholar", label: "GitHub" },
  { icon: SiInstagram, href: "https://www.instagram.com/ramandha_putras/", label: "Instagram" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/ramandhaps/", label: "LinkedIn" },
];

export default function ContactMe() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 px-6 py-16 text-center backdrop-blur-md sm:px-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-pink/25 blur-3xl" />

          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let&apos;s build something <span className="neon-text">together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="neon-btn mx-auto mt-8"
          >
            <HiOutlineMail className="h-4 w-4" />
            {EMAIL}
          </a>

          <div className="mt-10 flex items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
