"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

const exploreLinks = [
  { href: "/", label: "Discover" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  const [signedIn, setSignedIn] = useState(null);

  useEffect(() => {
    const sync = () =>
      setSignedIn(
        sessionStorage.getItem("devcanvas-demo-session") === "active",
      );
    sync();
    window.addEventListener("devcanvas-session-change", sync);
    return () => window.removeEventListener("devcanvas-session-change", sync);
  }, []);

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
            <Link href={signedIn ? "/logout" : "/login"}>
              <span
                className={
                  signedIn === null ? "session-label-pending" : undefined
                }
              >
                {signedIn === null
                  ? "Admin Sign In"
                  : signedIn
                    ? "Sign Out"
                    : "Admin Sign In"}
              </span>
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
