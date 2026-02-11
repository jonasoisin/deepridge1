import { Section } from "../ui/Section";
import { ShieldCheck, Zap, Heart } from "lucide-react";

export function Values() {
    const values = [
        {
            icon: ShieldCheck,
            title: "OPERATIONAL EXCELLENCE",
            desc: "Forging long-term partnerships with communities and stakeholders to ensure mutual prosperity and energy security.",
        },
        {
            icon: Zap,
            title: "INNOVATION",
            desc: "Pushing the boundaries of Hywind technology and decarbonizing natural gas production through R&D.",
        },
        {
            icon: Heart,
            title: "RESPONSIBILITY",
            desc: "Environmental stewardship is at our core, committed to a net-zero future by 2050.",
        },
    ];

    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {values.map((value, index) => (
                    <div key={index} className="px-4">
                        <div className="inline-flex p-4 rounded-full bg-red-50 text-primary mb-6">
                            <value.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-secondary uppercase tracking-widest mb-4">{value.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{value.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
