"use client";

import { useState, useEffect } from "react";
import { Up } from "./icon/up";

export function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-100 dark:bg-zinc-950 mt-10 py-6">
      <div className="w-full px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-normal text-sm leading-5 text-zinc-600 dark:text-stone-300 text-center md:text-left">
          Crafted with warmth for dog lovers everywhere.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="font-semibold text-xs text-zinc-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-350 transition-colors flex items-center gap-1"
            href="#"
            onClick={handleBackToTop}>
            Back to Top
            <Up />
          </a>
          <span className="font-normal text-sm leading-5 text-zinc-500 dark:text-stone-400">
            {year ? `© ${year} Dog Explorer` : "© Dog Explorer"}
          </span>
        </div>
      </div>
    </footer>
  );
}
