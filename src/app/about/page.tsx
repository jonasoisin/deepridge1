import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { Values } from "@/components/about/Values";
import { Leadership } from "@/components/about/Leadership";
import { DualEnergy } from "@/components/about/DualEnergy";
import { SustainabilityReport } from "@/components/about/SustainabilityReport";

export default function About() {
    return (
        <main className="min-h-screen">
            <Header />
            <AboutHero />
            <Values />
            <Leadership />
            <DualEnergy />
            <SustainabilityReport />
            <Footer />
        </main>
    );
}
