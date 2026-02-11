import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { Locations } from "@/components/contact/Locations";
import { CTA } from "@/components/home/CTA";

export default function Contact() {
    return (
        <main className="min-h-screen">
            <Header />
            {/* Hero for Contact is simpler or just top padding/section */}
            <div className="pt-20">
                <div className="relative h-[40vh] min-h-[400px] flex flex-col justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-stone-900/40 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" // Business/Handshake
                        }}
                    />
                    <div className="container mx-auto px-4 md:px-6 relative z-20">
                        <div className="w-1 h-12 bg-primary mb-6" />
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                            Partner with DeepRidge Energy for innovative solutions in Hywind and Natural Gas. Our global team is ready to support your next breakthrough.
                        </p>
                    </div>
                </div>
            </div>

            <ContactForm />
            <CTA /> {/* Reusing CTA for hiring/story */}
            <Locations />
            <Footer />
        </main>
    );
}
