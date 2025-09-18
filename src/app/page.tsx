import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="mt-8 h-0.5 bg-gradient-to-r from-teal-400 via-blue-900 to-violet-700 w-screen"></div>
      <main className="min-w-screen flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 bg-[#111]">
        <header className="mx-auto ">
          <Navbar />
        </header>
        <section className="mx-auto">
          <HeroSection />
        </section>
      </main>
    </>
  );
}
