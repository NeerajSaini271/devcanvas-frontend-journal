"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";

const exploreLinks = [
  { href: "/", label: "Discover" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <Logo />
          <p className="footer-copy">
            Practical frontend notes for interfaces that are clear, accessible,
            and easier to maintain.
          </p>
          <span className="footer-badge">Independent learning project</span>
        </div>

        <div className="footer-nav-groups">
          <nav className="footer-link-group" aria-label="Explore DevCanvas">
            <h2>Explore</h2>
            {exploreLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="footer-link-group" aria-label="DevCanvas dashboard">
            <h2>Dashboard</h2>
            <Link href="/comments">Moderation</Link>
            <Link
              className="session-link session-link-signed-out"
              href="/login"
            >
              Admin Sign In
            </Link>
            <Link
              className="session-link session-link-signed-in"
              href="/logout"
            >
              Sign Out
            </Link>
          </nav>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 DevCanvas</span>
        <span>Built with Next.js, React, and Tailwind CSS</span>
      </div>
    </footer>
  );
}
