import { Button } from "../ui/Button";

export function AboutHero() {
    return (
        <div className="relative h-[60vh] min-h-[500px] flex flex-col justify-center text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-stone-900/40 z-10" />

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')" // Construction/Site
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-3xl space-y-6">
                    <div className="w-1 h-12 bg-primary mb-6" />
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Pioneering the <br />
                        Energy Horizon
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                        DeepRidge Energy is a global leader in sustainable extraction and floating offshore wind technology. We engineer the bridge to a cleaner future through innovation and integrity.
                    </p>
                    <div className="pt-8 flex gap-4">
                        <Button variant="primary">EXPLORE OUR IMPACT</Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">WATCH OUR STORY</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
