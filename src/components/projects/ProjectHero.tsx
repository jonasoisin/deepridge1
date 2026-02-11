import { Section } from "../ui/Section";

export function ProjectHero() {
    return (
        <div className="relative h-[40vh] min-h-[400px] flex flex-col justify-center text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-stone-900/60 z-10" />

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')" // Construction/Crane
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-3xl space-y-6">
                    <div className="w-1 h-12 bg-primary mb-6" />
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
                        Global Energy <br />
                        Portfolio
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                        Advancing the energy transition through world-scale projects in Hywind offshore wind and high-efficiency natural gas.
                    </p>
                </div>
            </div>
        </div>
    );
}
