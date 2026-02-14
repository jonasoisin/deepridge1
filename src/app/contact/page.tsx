

import { ContactHero } from "@/components/contact/ContactHero";
import { InquiryForm } from "@/components/contact/InquiryForm";



export default function Contact() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 font-sans transition-colors duration-300">

            <ContactHero />
            <InquiryForm />


        </main>
    );
}
