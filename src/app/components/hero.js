"use client";

import { useState } from "react";
import { Zuras } from "./icon/zuras";
import { Oroong } from "./icon/oroong";
import { Smile } from "./icon/smile";
import { Down } from "./icon/down";
import { Thunder } from "./icon/thunder";
import { Fire } from "./icon/fire";
import { Paw } from "./icon/paw";
import { Star } from "./icon/star";
import { Clock } from "./icon/clock";

const URL = "https://dog.ceo/api/breeds/image/random";
const DEF_DOG = {
  image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg",
  breed: "Golden Retriever",
};
const STATS = [
  { label: "Friendliness", value: "10 / 10", bar: "w-full", Icon: Smile },
  { label: "Energy Level", value: "Vibrant", bar: "w-4/5", Icon: Thunder },
  {
    label: "Mood Boost",
    value: "Instant",
    bar: "w-full",
    Icon: Fire,
    wide: true,
  },
];

const parseBreed = (url) => {
  const m = url.match(/breeds\/([^/]+)\//);
  return m
    ? m[1]
        .split("-")
        .reverse()
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ")
    : "Unknown";
};

const StatCard = ({ label, value, bar, Icon, wide }) => (
  <div
    className={`flex flex-col gap-1 p-4 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm ${wide ? "col-span-2 sm:col-span-1" : ""}`}>
    <div className="flex justify-between text-xs font-semibold text-zinc-600 dark:text-stone-300">
      <span>{label}</span>
      <Icon />
    </div>
    <span className="text-xl font-bold text-zinc-900 dark:text-stone-200">
      {value}
    </span>
    <div className="mt-1 h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
      <div className={`h-full bg-amber-500 rounded-full ${bar}`} />
    </div>
  </div>
);

export function Hero() {
  const [dog, setDog] = useState(DEF_DOG);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShuffle = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setDog({ image: data.message, breed: parseBreed(data.message) });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Discover"
      className="relative isolate w-full overflow-hidden bg-stone-50 px-4 pt-6 pb-10 text-zinc-900 dark:bg-zinc-950 dark:text-stone-200 lg:px-8">
      <div className="pointer-events-none absolute -top-32 left-1/4 -z-10 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-10 -z-10 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start gap-4 lg:col-span-7">
          <div className="inline-flex items-center gap-1 rounded-full bg-zinc-200 px-4 py-1 text-xs font-semibold text-amber-700 dark:bg-zinc-800 dark:text-amber-300">
            <span>🐾</span>
            <span>Daily Joy Feed</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Meet a New{" "}
            <span className="relative inline-block text-amber-500">
              Friend
              <Zuras />
            </span>
          </h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-stone-300">
            Discover dogs from around the world, one adorable face at a time.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={handleShuffle}
              disabled={loading}
              className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-10 py-4 text-sm font-semibold text-amber-950 shadow-md transition hover:scale-105 active:scale-95 disabled:opacity-60">
              <Oroong />
              <span>{loading ? "Loading..." : "Show Another"}</span>
            </button>
            <a
              href="#Breeds"
              className="inline-flex items-center gap-1 rounded-full bg-white px-6 py-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-stone-200 dark:hover:bg-zinc-800">
              <span>Explore Breeds</span>
              <Down />
            </a>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="grid w-full max-w-lg grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="group relative overflow-hidden rounded-3xl bg-white p-4 shadow-xl dark:bg-zinc-900">
            <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-zinc-300 dark:bg-zinc-700">
              <img
                src={dog.image}
                alt={dog.breed}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-zinc-900/80 px-4 py-1 text-xs font-semibold text-stone-200 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                <span>{dog.breed}</span>
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold text-amber-950">
                Gentle Giant
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-stone-200">
                    {dog.breed}
                  </h3>
                  <p className="text-sm text-stone-300">
                    Gentle companion • Loves park fetch
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/90 text-amber-300 backdrop-blur-sm">
                  <Paw />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between px-1 text-xs font-semibold text-zinc-600 dark:text-stone-300">
              <span className="flex items-center gap-1">
                <Star /> AKC Sporting
              </span>
              <span className="flex items-center gap-1">
                <Clock /> 10–12 Years
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
