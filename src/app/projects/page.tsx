import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectList } from "@/components/projects/ProjectList";
import { GlobalReach } from "@/components/projects/GlobalReach";

export default function Projects() {
    return (
        <main className="min-h-screen">
            <Header />
            <ProjectHero />
            <ProjectList />
            <GlobalReach />
            <Footer />
        </main>
    );
}
