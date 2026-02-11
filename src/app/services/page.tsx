import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { Capabilities } from "@/components/services/Capabilities";
import { NewsFeed } from "@/components/home/NewsFeed"; // Reused from Home as seen in some designs or just as a filler, wait design has News Feed at bottom too?
// Actually the design shows News Feed at the bottom of Services page too in the screenshot provided? 
// Checking `deepridge_energy_services/screen.png`.
// Yes, there is "Ready to evolve your energy portfolio?" CTA and footer.
// I will reuse CTA and Footer.

import { CTA } from "@/components/home/CTA";

export default function Services() {
    return (
        <main className="min-h-screen">
            <Header />
            <ServiceHero />
            <ServiceDetails />
            <Capabilities />
            <div className="py-12 bg-gray-50">
                {/* Optional filler or just spacing */}
            </div>

            {/* Reusing Home Innovation/News components if needed, but design ends with CTA */}
            <div className="bg-secondary text-white py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to evolve your energy portfolio?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">Partner with our world-class engineering teams to design, deploy, and maintain high-performance energy infrastructure.</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-bold uppercase tracking-wide transition-colors">Request a Consultation</button>
                        <button className="text-white border-b-2 border-white hover:text-gray-200 pb-1 font-bold text-sm uppercase tracking-wide">Download Services Catalog</button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
