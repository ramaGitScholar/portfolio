"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const socials = [
  { icon: SiGithub, href: "https://github.com/ramaGitScholar", label: "GitHub" },
  { icon: SiInstagram, href: "https://www.instagram.com/ramandha_putras/", label: "Instagram" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/ramandhaps/", label: "LinkedIn" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`container-px flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/40" : "bg-transparent"
        }`}
      >
        <Link href="#hero" className="flex items-center gap-2 font-poppins font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-violet text-sm">
            R
          </span>
          <span className="hidden sm:block">Ramandha</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={`group relative text-sm font-medium transition-colors ${
                active === l.id ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink transition-all duration-300 ${
                  active === l.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-white/70 transition-all hover:-translate-y-0.5 hover:text-neon-cyan"
            >
              <s.icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden"
        >
          {open ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`container-px overflow-hidden transition-all duration-300 md:hidden ${
          open ? "mt-2 max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass flex flex-col gap-1 rounded-2xl p-3">
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                active === l.id
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-4 border-t border-white/10 px-4 pt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-white/70 hover:text-neon-cyan"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
