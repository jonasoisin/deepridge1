import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function NewsFeed() {
    const news = [
        {
            date: "JAN 15, 2025",
            title: "DeepRidge and GlobalWind Launch NEX-Gen Hub to Advance Offshore Hydrogen",
        },
        {
            date: "JAN 12, 2025",
            title: "Executive Board Appoints New VP of Sustainable Development",
        },
        {
            date: "JAN 08, 2025",
            title: "Hywind Pilot Reaches Milestone: Over 500 GWh Generated in First Phase",
        },
        {
            date: "JAN 04, 2025",
            title: "SmartGrid Integration Successfully Deployed in Eastern Hemisphere",
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Featured News (Left) */}
            <div className="lg:w-3/5 relative min-h-[500px] flex items-center bg-secondary">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" // Conference room
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />

                <div className="relative z-10 px-8 md:px-16 py-12 max-w-2xl">
                    <div className="w-12 h-1 bg-primary mb-8" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        DeepRidge Announces Fourth Quarter 2024 Performance Results
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                        Continuing our trend of sustainable growth, DeepRidge reported record net income as we expand our Hywind footprint across the North Sea.
                    </p>
                    <Button variant="white">READ PRESS RELEASE</Button>
                </div>
            </div>

            {/* News List (Right) */}
            <div className="lg:w-2/5 bg-gray-50 p-8 md:p-16">
                <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-12">News Feed</h3>
                <div className="space-y-8">
                    {news.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                            <p className="text-xs text-gray-500 font-medium mb-1">{item.date}</p>
                            <h4 className="text-secondary font-bold hover:text-primary transition-colors leading-snug">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-red-500">
                    <a href="#" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                        SEE ALL NEWS <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
