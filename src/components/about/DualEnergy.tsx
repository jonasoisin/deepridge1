import { Section } from "../ui/Section";
import Image from "next/image";
import { Wind, Flame } from "lucide-react";

export function DualEnergy() {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1 h-12 bg-primary" />
                        <h2 className="text-4xl font-bold text-secondary uppercase leading-none">
                            Leading the <br />
                            <span className="text-primary">Dual-Energy</span> Era
                        </h2>
                    </div>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="text-primary mt-1"><Wind className="w-8 h-8" /></div>
                            <div>
                                <h4 className="font-bold text-secondary mb-2 uppercase tracking-wide">Hywind Technology</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    As the first to commercialize deep-water floating wind farms, our Hywind platforms provide stable, high-capacity renewable power where fixed foundations cannot reach.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="text-primary mt-1"><Flame className="w-8 h-8" /></div>
                            <div>
                                <h4 className="font-bold text-secondary mb-2 uppercase tracking-wide">Low-Carbon Natural Gas</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We utilize advanced carbon capture and storage (CCS) at every extraction point, ensuring our natural gas production remains the cleanest in the global market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 h-[500px]">
                    <div className="relative h-full rounded-sm overflow-hidden mt-12">
                        <Image
                            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
                            alt="Wind"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-full rounded-sm overflow-hidden mb-12">
                        <Image
                            src="https://images.unsplash.com/photo-1581094285859-9745a550992b?q=80&w=2070&auto=format&fit=crop"
                            alt="Gas"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
