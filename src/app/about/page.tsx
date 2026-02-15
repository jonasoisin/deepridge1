import { AboutHero } from "@/components/about/AboutHero";
import { Values } from "@/components/about/Values";
import { Leadership } from "@/components/about/Leadership";
import { DualEnergy } from "@/components/about/DualEnergy";
import { Commitments } from "@/components/about/Commitments";
import { SustainabilityReport } from "@/components/about/SustainabilityReport";

export default function AboutPage() {
    return (
        <main className="bg-background-light text-slate-800 transition-colors duration-200">
            <AboutHero />
            <Values />
            <Commitments />
            <Leadership />
            <DualEnergy />
            <SustainabilityReport />
        </main>
    );
}
