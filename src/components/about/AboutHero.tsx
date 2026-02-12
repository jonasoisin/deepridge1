export function AboutHero() {
    return (
        <section className="relative h-[700px] flex items-center overflow-hidden">
            <img
                alt="Engineers at deepridge energy site"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgFKpNo3Uggb0sDp8HjQI0qhbnOCEPJyOvumdyOGkHKKDh0INBro_Oe1GC1ycb6mxGd3S30dE18Re7oUe1TqFHNBOpcyBk4BNK2l_dxncusR1RrvejubzlFxRaQK_08VElhqy32fM7J9h1Pnw0fpN-1qi4sEt1p-MpP-blwPeqYapmGjQvD49pkekC4Ibl01lcVBnCY4jU36pc_SAR5cQd_Tpl_dtTroUy7sPvxRhKsK5MpVqAkWQMMnwxfvvCm1trNhFpYwR0SQ"
            />
            {/* Hero Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="max-w-2xl">
                    <div className="border-l-4 border-red-500 pl-4 mb-6">
                        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-tight">
                            Pioneering the <br />Energy Horizon
                        </h1>
                    </div>
                    <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                        DeepRidge Energy is a global leader in sustainable extraction and floating offshore wind technology. We engineer the bridge to a cleaner future through innovation and integrity.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-wider transition-all rounded-sm">Explore Our Impact</button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-red-500/30 px-8 py-3 font-bold uppercase tracking-wider transition-all rounded-sm">Watch Our Story</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
