"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";

const links = [
  { href: "/", label: "Discover" },
  { href: "/about", label: "About" },
  { href: "/comments", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);

    function closeOnEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    function closeOnOutsideClick(event) {
      if (
        open &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [open]);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/" || pathname.startsWith("/articles/")
      : pathname === href;

  return (
    <header className="site-header" ref={headerRef}>
      <div className="shell header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "nav-link active" : "nav-link"}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link
            className="account-button desktop-login session-link session-link-signed-out"
            href="/login"
          >
            Admin Sign In
          </Link>
          <Link
            className="account-button desktop-login session-link session-link-signed-in"
            href="/logout"
          >
            Sign Out
          </Link>
          <button
            className={open ? "menu-button open" : "menu-button"}
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={open ? "mobile-nav-wrap open" : "mobile-nav-wrap"}>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-heading">
            <span>Navigation</span>
            <ThemeToggle compact />
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              <span>{link.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
          <Link
            className="mobile-account-link session-link session-link-signed-out"
            href="/login"
          >
            <span>Admin Sign In</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            className="mobile-account-link session-link session-link-signed-in"
            href="/logout"
          >
            <span>Sign Out</span>
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
