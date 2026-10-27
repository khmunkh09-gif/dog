"use client";
import { useEffect, useState } from "react";
import { Moon } from "./icon/moon";

const NAVS = [
  ["Discover", "#Discover"],
  ["Breeds", "#Breeds"],
  ["Gallery", "#Gallery"],
];
const Sun = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export function Header() {
  const [dark, setDark] = useState(false); // Анхдагч утгыг false (Light mode) болголоо
  const [active, setActive] = useState("#Discover");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-lg transition-colors">
      <div className="flex w-full flex-wrap items-center justify-between px-4 py-3 lg:px-8 sm:h-16 sm:py-0">
        <div className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-stone-200">
          <span>🐾</span> Dog Explorer
        </div>

        <nav className="flex gap-2 md:gap-4">
          {NAVS.map(([title, link]) => (
            <a
              key={link}
              href={link}
              onClick={() => setActive(link)}
              className={`rounded-full px-4 py-1 text-sm font-semibold transition-colors ${
                active === link
                  ? "bg-amber-500 text-amber-950"
                  : "text-zinc-700 dark:text-stone-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}>
              {title}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle mode"
          onClick={() => setDark(!dark)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 text-amber-600 dark:text-amber-300 transition-colors">
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
}
