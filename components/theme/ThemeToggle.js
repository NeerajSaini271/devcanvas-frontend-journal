"use client";

import { useTheme } from "@/components/theme/ThemeProvider";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 15.4A8.6 8.6 0 0 1 8.6 3.8 8.6 8.6 0 1 0 20.2 15.4Z" />
    </svg>
  );
}

export default function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  const label = dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      className={compact ? "theme-toggle compact" : "theme-toggle"}
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
