import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: SiGithub, href: "https://github.com/ramaGitScholar", label: "GitHub" },
  { icon: SiInstagram, href: "https://www.instagram.com/ramandha_putras/", label: "Instagram" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/ramandhaps/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-soft">
      <div className="container-px flex flex-col gap-8 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#hero" className="flex items-center gap-2 font-poppins font-semibold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-pink to-neon-violet text-sm">
              R
            </span>
            Ramandha Putra Suryahadi
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-white/60 transition-colors hover:text-neon-cyan"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Ramandha Putra Suryahadi. All rights
          reserved. All trademarks and logos belong to their respective owners.
        </div>
      </div>
    </footer>
  );
}
