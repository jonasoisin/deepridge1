import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function GlobalReach() {
    return (
        <Section className="bg-white">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-2xl mb-2">OUR GLOBAL <span className="text-primary">REACH</span></h4>

                    <p className="text-gray-600 mt-6 mb-12 text-lg leading-relaxed">
                        DeepRidge Energy operates across 24 countries, managing over $140 billion in energy assets. Our project development pipeline focus is centered on regions with high potential for renewable transition and existing infrastructure optimization.
                    </p>

                    <div className="grid grid-cols-2 gap-12 mb-12">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-1">24+</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Countries Operating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-1">15.2GW</div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Renewable Capacity</div>
                        </div>
                    </div>

                    <Button variant="primary">DOWNLOAD PORTFOLIO PDF</Button>
                </div>

                <div className="lg:w-1/2 relative bg-gray-50 rounded-2xl p-12 min-h-[400px] flex items-center justify-center">
                    {/* Placeholder for complex map interaction */}
                    <div className="text-center">
                        <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center relative">
                            {/* Abstract map representation */}
                            <div className="absolute w-3 h-3 bg-primary rounded-full top-10 left-10 animate-pulse" />
                            <div className="absolute w-3 h-3 bg-primary rounded-full bottom-12 right-20 animate-pulse delay-75" />
                            <div className="absolute w-3 h-3 bg-primary rounded-full top-1/2 left-1/2 animate-pulse delay-150" />
                            <span className="text-gray-400 font-bold text-xs">INTERACTIVE MAP PREVIEW</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
