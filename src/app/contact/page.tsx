

import { ContactHero } from "@/components/contact/ContactHero";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { CareerCTA } from "@/components/contact/CareerCTA";
import { GlobalLocations } from "@/components/contact/GlobalLocations";

export default function Contact() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">

            <ContactHero />
            <InquiryForm />
            <CareerCTA />
            <GlobalLocations />
        </main>
    );
}
