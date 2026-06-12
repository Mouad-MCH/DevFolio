"use client";

import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
}

interface ThemeToggleProps {
  className?: string;
  size?: number;
}

const ThemeToggle = ({ className = "p-3", size = 18 }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={`border-border-dark text-text-secondary hover:border-accent hover:text-text-primary flex cursor-pointer items-center justify-center rounded-full border transition-colors ${className}`}
    >
      <Sun className="theme-toggle__sun" size={size} />
      <Moon className="theme-toggle__moon" size={size} />
    </button>
  );
};

export default ThemeToggle;
