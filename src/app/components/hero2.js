import { Star2 } from "./icon/star2";

export function Hero2() {
  return (
    <section
      className="bg-zinc-950 font-sans text-base text-stone-200 w-full px-4 lg:px-8 py-10"
      id="breeds">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col items-start gap-1 max-w-2xl">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-800 text-amber-300 font-semibold text-xs">
              <span>🐾</span>
              <span>BREED COMPENDIUM</span>
            </div>
            <h2 className="font-bold text-3xl leading-tight text-stone-200 tracking-tight">
              Find Your Favorite Breed
            </h2>
            <p className="font-normal text-base leading-6 text-stone-300">
              Choose from hundreds of friendly breeds and see happy pups ready
              to brighten your day.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900 p-1 rounded-full shadow-sm">
            <div className="relative">
              <select
                aria-label="Select dog breed"
                className="appearance-none bg-zinc-800 text-stone-200 font-semibold text-xs rounded-full pl-4 pr-10 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                id="breedSelect">
                <option defaultValue="corgi">Pembroke Welsh Corgi</option>
                <option value="golden">Golden Retriever</option>
                <option value="frenchie">French Bulldog</option>
                <option value="shiba">Shiba Inu</option>
                <option value="samoyed">Samoyed</option>
              </select>
              <Star2 />
            </div>
            <button
              className="px-6 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs hover:brightness-105 transition-all"
              type="button">
              Show Dogs
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            className="px-4 py-1 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs whitespace-nowrap shadow-sm"
            type="button">
            All Breeds
          </button>
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800 font-semibold text-xs whitespace-nowrap transition-colors"
            type="button">
            Pembroke Welsh Corgi
          </button>
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800 font-semibold text-xs whitespace-nowrap transition-colors"
            type="button">
            Golden Retriever
          </button>
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800 font-semibold text-xs whitespace-nowrap transition-colors"
            type="button">
            French Bulldog
          </button>
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800 font-semibold text-xs whitespace-nowrap transition-colors"
            type="button">
            Shiba Inu
          </button>
          <button
            className="px-4 py-1 rounded-full bg-zinc-900 text-stone-300 hover:text-stone-200 hover:bg-zinc-800 font-semibold text-xs whitespace-nowrap transition-colors"
            type="button">
            Samoyed
          </button>
        </div>
        <div className="w-full bg-zinc-900 p-6 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-300/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300">
              <svg
                aria-hidden="true"
                className="shrink-0 size-7"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-xl text-stone-200">
                  Pembroke Welsh Corgi
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-amber-950 font-semibold text-xs">
                  Top Pick
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-700 text-stone-300 font-semibold text-xs">
                  Great with Kids
                </span>
              </div>
              <p className="font-normal text-sm leading-5 text-stone-300 mt-0.5">
                Playful &amp; Bold • Herding Group • Adaptable Companion
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 z-10 w-full md:w-auto justify-end">
            <div className="hidden sm:flex items-center gap-2 text-stone-300 font-semibold text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>High Trainability</span>
            </div>
            <button
              className="px-4 py-1 rounded-full bg-zinc-800 text-amber-300 hover:bg-zinc-700 font-semibold text-xs transition-colors"
              type="button">
              Read Breed Guide
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div className="group flex flex-col bg-zinc-900 rounded-3xl p-4 shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="relative w-full h-64 rounded-3xl overflow-hidden bg-zinc-700">
              <img
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute top-2 left-2 px-4 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
                Pembroke Welsh Corgi
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xl text-stone-200">Barnaby</h4>
                <span className="text-amber-300 font-semibold text-xs">
                  2 Years Old
                </span>
              </div>
              <p className="font-normal text-sm leading-5 text-stone-300">
                Loves open fields &amp; warm nap spots
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Affectionate
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Alert
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Smart
                </span>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-zinc-900 rounded-3xl p-4 shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="relative w-full h-64 rounded-3xl overflow-hidden bg-zinc-700">
              <img
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
              />
              <div className="absolute top-2 left-2 px-4 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
                French Bulldog
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xl text-stone-200">Milo</h4>
                <span className="text-amber-300 font-semibold text-xs">
                  1.5 Years Old
                </span>
              </div>
              <p className="font-normal text-sm leading-5 text-stone-300">
                Curious couch companion &amp; snore champion
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Quiet
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Loving
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Easygoing
                </span>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-zinc-900 rounded-3xl p-4 shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="relative w-full h-64 rounded-3xl overflow-hidden bg-zinc-700">
              <img
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg"
              />
              <div className="absolute top-2 left-2 px-4 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-stone-200 font-semibold text-xs">
                Golden Retriever
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xl text-stone-200">Archie</h4>
                <span className="text-amber-300 font-semibold text-xs">
                  3 Years Old
                </span>
              </div>
              <p className="font-normal text-sm leading-5 text-stone-300">
                Radiant park sprinter &amp; swimming enthusiast
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Gentle
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Devoted
                </span>
                <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-stone-300 font-semibold text-xs">
                  Joyous
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
