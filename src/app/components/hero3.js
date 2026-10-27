"use client";

import { useState } from "react";
import { Refresh } from "./icon/refresh";

const T = "text-zinc-900 dark:text-stone-200",
  M = "text-zinc-600 dark:text-stone-300",
  A = "text-amber-700 dark:text-amber-300";
const C = "bg-white dark:bg-zinc-900",
  S = "bg-zinc-200 dark:bg-zinc-800";
const MORE_URL = "https://dog.ceo/api/breeds/image/random/4";

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
const DOGS = [
  {
    link: unsplash("1558788353-f76d92427f16"),
    title: "Summer Garden Stroll",
    breed: "Corgi Companion",
  },
  {
    link: unsplash("1583337130417-3346a1be7dee"),
    title: "Curious Head-tilt",
    breed: "French Bulldog",
  },
  {
    link: "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg",
    title: "Sunlit Afternoon",
    breed: "Golden Retriever",
  },
  {
    link: "https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg",
    title: "Forest Wanderer",
    breed: "Aussie Shepherd",
  },
];

const toBreed = (url) => {
  const [m = "", s = ""] = (url.match(/breeds\/([^/]+)\//)?.[1] ?? "").split(
    "-",
  );
  const words = m === "australian" ? [m, s] : [s, m];
  return (
    words
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ") || "Dog"
  );
};

export function Dog({ link, title, breed }) {
  return (
    <div
      className={`${S} group relative h-80 overflow-hidden rounded-3xl shadow-md`}>
      <img
        src={link}
        alt={title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-zinc-950/80 p-4 opacity-0 transition group-hover:opacity-100">
        <div>
          <p className="text-sm font-semibold text-stone-200">{title}</p>
          <p className="text-xs font-semibold text-amber-300">{breed}</p>
        </div>
      </div>
    </div>
  );
}

export function Hero3() {
  const [dogs, setDogs] = useState(DOGS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const showMore = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(MORE_URL);
      if (!res.ok) throw new Error();
      const { message } = await res.json();
      setDogs((prev) => [
        ...prev,
        ...message.map((link, i) => ({
          link,
          title: DOGS[(prev.length + i) % DOGS.length].title,
          breed: toBreed(link),
        })),
      ]);
    } catch {
      setError("Could not load more pups.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Gallery"
      className={`w-full bg-stone-50 px-4 py-10 ${T} dark:bg-zinc-950 lg:px-8`}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <div className="flex max-w-xl flex-col items-center gap-1 text-center">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-4 py-1 text-xs font-semibold ${S} ${A}`}>
            📸 Community Snaps
          </span>
          <h2 className={`text-3xl font-bold tracking-tight ${T}`}>
            More Dogs to Love
          </h2>
          <p className={M}>
            A lively collection of everyday wagging tails and happy smiles.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dogs.map((dog, i) => (
            <Dog key={i} {...dog} />
          ))}
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="button"
          onClick={showMore}
          disabled={loading}
          className={`${C} ${T} inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-semibold shadow-md transition hover:bg-zinc-200 active:scale-95 disabled:opacity-60 dark:hover:bg-zinc-800`}>
          <span>🐾</span>
          <span>{loading ? "Loading..." : "Show More Pups"}</span>
          <Refresh />
        </button>
      </div>
    </section>
  );
}
