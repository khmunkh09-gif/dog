import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Hero2 } from "./components/hero2";
import { Hero3 } from "./components/hero3";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-zinc-950">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Hero2 />
        <Hero3 />
      </main>
      <Footer />
    </div>
  );
}
