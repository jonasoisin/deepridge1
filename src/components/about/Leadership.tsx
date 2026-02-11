import { Section } from "../ui/Section";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Leadership() {
    const leaders = [
        {
            name: "Marcus Chen",
            role: "CHIEF EXECUTIVE OFFICER",
            bio: "A pioneer in floating offshore wind, Marcus oversees the strategic transition of DeepRidge into a diversified energy powerhouse.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        },
        {
            name: "Sarah Whitaker",
            role: "CHIEF TECHNICAL OFFICER",
            bio: "Leading our engineering division, Sarah holds 14 patents in subsea gas extraction and stabilization systems.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        },
        {
            name: "James Rodriguez",
            role: "CHIEF OPERATIONS OFFICER",
            bio: "James ensures operational safety across 14 countries, managing our transition from traditional gas to hybrid systems.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
        },
    ];

    return (
        <Section className="bg-gray-50">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-primary" />
                <h2 className="text-3xl font-bold text-secondary uppercase">Executive Leadership</h2>
            </div>
            <p className="text-gray-500 max-w-2xl mb-16">
                Led by industry visionaries with over 150 years of combined experience in energy infrastructure and renewables.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leaders.map((leader, index) => (
                    <div key={index} className="bg-white p-8 hover:shadow-lg transition-shadow border border-gray-100">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto md:mx-0">
                            <Image
                                src={leader.image}
                                alt={leader.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-1">{leader.name}</h3>
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{leader.role}</div>
                        <p className="text-sm text-gray-500 mb-8 leading-relaxed">{leader.bio}</p>
                        <a href="#" className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-2 hover:text-primary transition-colors">
                            VIEW PROFILE <ArrowRight className="w-3 h-3" />
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
}
