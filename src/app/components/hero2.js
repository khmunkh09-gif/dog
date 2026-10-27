"use client";

import { useState } from "react";
import { Bigstar } from "./icon/bigstar";

const T = "text-zinc-900 dark:text-stone-200",
  M = "text-zinc-600 dark:text-stone-300",
  A = "text-amber-700 dark:text-amber-300";
const C = "bg-white dark:bg-zinc-900",
  S = "bg-zinc-200 dark:bg-zinc-800",
  G = "bg-amber-500 text-amber-950";
const B =
  "py-1 px-4 rounded-full font-semibold text-xs transition-colors whitespace-nowrap";

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
const BREEDS = {
  "Pembroke Welsh Corgi": ["Playful & Bold", "Trainability", "Kids"],
  "Golden Retriever": ["Friendly & Devoted", "Eager", "Kids"],
  "French Bulldog": ["Easygoing & Charming", "Easy", "City"],
  "Shiba Inu": ["Alert & Spirited", "Independent", "Spirited"],
  Samoyed: ["Gentle & Smiling", "Friendly", "Kids"],
};
const NAMES = Object.keys(BREEDS);
const DOGS = [
  {
    name: "Barnaby",
    breed: "Pembroke Welsh Corgi",
    age: "2y",
    bio: "Loves open fields",
    tags: ["Smart"],
    image: unsplash("1558788353-f76d92427f16"),
  },
  {
    name: "Milo",
    breed: "French Bulldog",
    age: "1.5y",
    bio: "Couch companion",
    tags: ["Quiet"],
    image: unsplash("1583337130417-3346a1be7dee"),
  },
  {
    name: "Archie",
    breed: "Golden Retriever",
    age: "3y",
    bio: "Park sprinter",
    tags: ["Gentle"],
    image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg",
  },
];

export const Badge = ({ children, gold }) => (
  <span
    className={`px-2 py-0.5 rounded-full font-semibold text-xs ${gold ? G : `${S} ${M}`}`}>
    {children}
  </span>
);

export function Hero2() {
  const [f, setF] = useState("all");
  const name = BREEDS[f] ? f : NAMES[0];
  const [info, trait, tag] = BREEDS[name];
  const dogs = DOGS.filter((d) => f === "all" || d.breed === f);

  return (
    <section
      id="Breeds"
      className={`bg-stone-50 dark:bg-zinc-950 ${T} w-full px-4 lg:px-8 py-10`}>
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span
              className={`inline-flex gap-1 px-3 py-1 rounded-full font-semibold text-xs ${S} ${A}`}>
              🐾 BREEDS
            </span>
            <h2 className={`text-3xl font-bold mt-1 ${T}`}>
              Find Your Favorite Breed
            </h2>
          </div>
          <select
            value={name}
            onChange={(e) => setF(e.target.value)}
            className={`${C} ${S} ${T} text-xs rounded-full px-4 py-2 font-semibold outline-none cursor-pointer`}>
            {NAMES.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {["all", ...NAMES].map((n) => (
            <button
              key={n}
              onClick={() => setF(n)}
              className={`${B} ${f === n ? `${G} shadow-sm` : `${C} ${M}`}`}>
              {n === "all" ? "All" : n}
            </button>
          ))}
        </div>

        {/* Featured */}
        <div
          className={`${C} relative overflow-hidden p-6 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-4 z-10">
            <div
              className={`w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center ${A}`}>
              <Bigstar />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`text-xl font-bold ${T}`}>{name}</h3>
                <Badge gold>Top</Badge>
                <Badge>{tag}</Badge>
              </div>
              <p className={`text-sm mt-0.5 ${M}`}>{info}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 z-10">
            <span
              className={`hidden sm:flex items-center gap-2 text-xs font-semibold ${M}`}>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              {trait}
            </span>
            <a
              href={`https://www.akc.org/dog-breeds/${name.toLowerCase().replace(/ /g, "-")}/`}
              target="_blank"
              rel="noreferrer"
              className={`${B} ${S} ${A}`}>
              Guide
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dogs.map((d) => (
            <div
              key={d.name}
              className={`${C} group flex flex-col rounded-3xl p-4 shadow-md hover:-translate-y-1 transition-all`}>
              <div className="relative h-64 rounded-3xl overflow-hidden bg-zinc-300 dark:bg-zinc-700">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-2 left-2 px-3 py-0.5 rounded-full bg-zinc-950/80 text-stone-200 text-xs font-semibold">
                  {d.breed}
                </span>
              </div>
              <div className="flex flex-col gap-1 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className={`text-lg font-bold ${T}`}>{d.name}</h4>
                  <span className={`text-xs font-semibold ${A}`}>{d.age}</span>
                </div>
                <p className={`text-sm ${M}`}>{d.bio}</p>
                <div className="flex gap-1 pt-1">
                  {d.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
