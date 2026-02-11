import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Innovations } from "@/components/home/Innovations";
import { NewsFeed } from "@/components/home/NewsFeed";
import { Projects } from "@/components/home/Projects";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Innovations />
      <NewsFeed />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
