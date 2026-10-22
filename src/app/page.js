import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Hero2 } from "./components/hero2";
import { Hero3 } from "./components/hero3";
export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="w-full bg-zinc-950">
        <div className="flex flex-col w-full">
          <Hero />
          <Hero2 />
          <Hero3 />
        </div>
      </main>
      <Footer />
    </div>
  );
}
