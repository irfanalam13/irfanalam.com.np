// components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

/**
 * ThemeToggle
 * - cycles: ["theme-light","theme-dark","theme-blue","theme-purple","theme-green"]
 * - stores choice in localStorage under "site-theme"
 * - applies class to document.documentElement (works whether your root is <html> or top div)
 */
const THEMES = ["theme-light", "theme-dark", "theme-blue", "theme-purple", "theme-green"];

export default function ThemeToggle({ compact = false }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("site-theme");
    if (saved) {
      const i = THEMES.indexOf(saved);
      if (i >= 0) setIdx(i);
      applyTheme(saved);
    } else {
      // try to honor system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "theme-dark" : "theme-light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function applyTheme(themeClass) {
    const root = document.documentElement;
    THEMES.forEach(t => root.classList.remove(t));
    root.classList.add(themeClass);
    localStorage.setItem("site-theme", themeClass);
  }

  function cycleTheme() {
    const next = (idx + 1) % THEMES.length;
    setIdx(next);
    applyTheme(THEMES[next]);
  }

  return (
    <button
      aria-label="Change theme"
      className="theme-btn"
      onClick={cycleTheme}
      title={`Theme: ${THEMES[idx].replace("theme-","")}`}
      style={{ display: "inline-grid", placeItems: "center" }}
    >
      {/* Simple icon text, change to SVG icons if you prefer */}
      <span style={{ fontSize: compact ? 12 : 14, fontWeight: 800 }}>
        {THEMES[idx].replace("theme-","").slice(0,1).toUpperCase()}
      </span>
    </button>
  );
}
