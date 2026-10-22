import { Refresh } from "./icon/refresh";
export function Hero3() {
  return (
    <section
      className="bg-zinc-950 font-sans text-base text-stone-200 w-full px-4 lg:px-8 py-10"
      id="gallery">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center">
        <div className="text-center flex flex-col items-center gap-1 max-w-xl">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-zinc-800 text-amber-300 font-semibold text-xs">
            <span>📸</span>
            <span>Community Snaps</span>
          </div>
          <h2 className="font-bold text-3xl leading-tight text-stone-200 tracking-tight">
            More Dogs to Love
          </h2>
          <p className="font-normal text-base leading-6 text-stone-300">
            A lively collection of everyday wagging tails, sweet snouts, and
            happy smiles.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
          <div className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-900 shadow-md">
            <img
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <p className="text-stone-200 font-semibold text-sm">
                  Summer Garden Stroll
                </p>
                <p className="text-amber-300 font-semibold text-xs">
                  Corgi Companion
                </p>
              </div>
            </div>
          </div>
          <div className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-900 shadow-md">
            <img
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <p className="text-stone-200 font-semibold text-sm">
                  Curious Head-tilt
                </p>
                <p className="text-amber-300 font-semibold text-xs">
                  French Bulldog
                </p>
              </div>
            </div>
          </div>
          <div className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-900 shadow-md">
            <img
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://images.dog.ceo/breeds/retriever-golden/n02099601_100.jpg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <p className="text-stone-200 font-semibold text-sm">
                  Sunlit Afternoon
                </p>
                <p className="text-amber-300 font-semibold text-xs">
                  Golden Retriever
                </p>
              </div>
            </div>
          </div>
          <div className="group relative h-80 rounded-3xl overflow-hidden bg-zinc-900 shadow-md">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt=""
              src="https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <p className="text-stone-200 font-semibold text-sm">
                  Forest Wanderer
                </p>
                <p className="text-amber-300 font-semibold text-xs">
                  Aussie Shepherd
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <button
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-zinc-900 text-stone-200 font-semibold text-sm hover:bg-zinc-800 transition-transform active:scale-95 shadow-md"
            id="loadMoreBtn"
            type="button">
            <span>🐾</span>
            <span>Show More Pups</span>
            <Refresh />
          </button>
        </div>
      </div>
    </section>
  );
}
