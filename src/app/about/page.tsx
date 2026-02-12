import { AboutHero } from "@/components/about/AboutHero";
import { Values } from "@/components/about/Values";
import { Leadership } from "@/components/about/Leadership";
import { DualEnergy } from "@/components/about/DualEnergy";
import { SustainabilityReport } from "@/components/about/SustainabilityReport";

export default function AboutPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-200">
            <AboutHero />
            <Values />
            <Leadership />
            <DualEnergy />
            <SustainabilityReport />
        </main>
    );
}
