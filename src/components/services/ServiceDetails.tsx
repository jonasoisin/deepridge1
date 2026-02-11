import { Section } from "../ui/Section";
import Image from "next/image";
import { CheckCircle2, Activity, Zap, Anchor, Wind } from "lucide-react";

export function ServiceDetails() {
    return (
        <Section>
            {/* Service 1: Hywind */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
                <div className="relative h-[400px] rounded-sm overflow-hidden shadow-xl">
                    <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-3 py-1 z-10 uppercase tracking-widest">Innovation</div>
                    <Image
                        src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
                        alt="Hywind Offshore"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <div className="w-1 h-8 bg-primary mb-4" />
                    <h2 className="text-3xl font-bold text-secondary mb-6">Hywind Offshore Solutions</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We are pioneers in floating wind technology, enabling energy harvest in deep-water environments where traditional fixed-bottom turbines cannot reach. Our Hywind solutions maximize wind yield while minimizing environmental footprint.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <Anchor className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Floating Foundation Engineering</h4>
                                <p className="text-gray-500 text-sm mt-1">Stability designs for ultra-deep water applications.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Wind className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Subsea Infrastructure</h4>
                                <p className="text-gray-500 text-sm mt-1">Complex dynamic cabling and anchoring systems.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Activity className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Predictive Maintenance</h4>
                                <p className="text-gray-500 text-sm mt-1">AI-driven turbine health monitoring and remote servicing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service 2: Natural Gas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <div className="w-1 h-8 bg-primary mb-4" />
                    <h2 className="text-3xl font-bold text-secondary mb-6">Natural Gas Production</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Providing critical base-load energy through advanced extraction and processing. We focus on low-emission production techniques and efficient distribution networks to bridge the gap to a renewable future.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Seismic Exploration</h4>
                                <p className="text-gray-500 text-sm mt-1">High-resolution 4D mapping of natural gas reserves.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Zap className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Processing Facilities</h4>
                                <p className="text-gray-500 text-sm mt-1">Next-gen LNG liquefaction and purification plants.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Activity className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">Emissions Control</h4>
                                <p className="text-gray-500 text-sm mt-1">Methane capture and carbon sequestration technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative h-[400px] rounded-sm overflow-hidden shadow-xl">
                    <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold px-3 py-1 z-10 uppercase tracking-widest">Stability</div>
                    <Image
                        src="https://images.unsplash.com/photo-1581094285859-9745a550992b?q=80&w=2070&auto=format&fit=crop"
                        alt="Natural Gas Production"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}
