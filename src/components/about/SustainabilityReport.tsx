import { Section } from "../ui/Section";
import { Download, ArrowRight } from "lucide-react";

export function SustainabilityReport() {
    return (
        <Section background="dark" className="text-white">
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-8 h-1 bg-primary" />
                        <h2 className="text-3xl font-bold uppercase">Sustainability Report 2024</h2>
                    </div>
                    <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                        Our latest Environmental, Social, and Governance (ESG) report outlines our path to becoming net-negative by 2045. We've invested $2.4B into regenerative marine ecosystems around our offshore sites.
                    </p>

                    <div className="flex gap-16 mb-12">
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">45%</div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Emission Reduction</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary mb-2">1.2GW</div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Renewable Capacity</div>
                        </div>
                    </div>

                    <button className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:text-primary transition-colors border-b border-white/20 pb-1">
                        DOWNLOAD ESG REPORT <Download className="w-4 h-4" />
                    </button>
                </div>

                <div className="lg:w-1/2 bg-secondary-light p-12 rounded-sm border border-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-8">Latest Updates</h3>

                    <div className="space-y-8">
                        <div className="group cursor-pointer">
                            <div className="text-primary text-xs font-bold uppercase mb-2">March 14, 2024</div>
                            <h4 className="text-white font-bold hover:text-primary transition-colors leading-snug">
                                DeepRidge partners with North Sea alliance for 500MW offshore expansion.
                            </h4>
                        </div>
                        <div className="w-full h-px bg-white/10" />
                        <div className="group cursor-pointer">
                            <div className="text-primary text-xs font-bold uppercase mb-2">February 28, 2024</div>
                            <h4 className="text-white font-bold hover:text-primary transition-colors leading-snug">
                                Quarterly Results: Natural Gas efficiency exceeds projections by 12%.
                            </h4>
                        </div>
                        <div className="w-full h-px bg-white/10" />
                        <div className="group cursor-pointer">
                            <div className="text-primary text-xs font-bold uppercase mb-2">January 15, 2024</div>
                            <h4 className="text-white font-bold hover:text-primary transition-colors leading-snug">
                                DeepRidge receives "Triple-A" ESG rating for the fourth consecutive year.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
