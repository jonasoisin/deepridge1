export function Leadership() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="border-l-4 border-red-500 pl-4">
                        <h2 className="font-display text-4xl font-extrabold text-slate-900 uppercase tracking-tight">Executive Leadership</h2>
                    </div>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">Led by industry visionaries with over 150 years of combined experience in energy infrastructure and renewables.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {/* william reed */}
                    <div className="bg-white p-8 shadow-sm border border-red-500 hover:shadow-xl transition-shadow">
                        <img alt="CEO William Reed" className="w-24 h-24 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all border-2 border-red-500/20" src="/IMG_3154.PNG" />
                        <h4 className="font-display font-bold text-xl mb-1">William Reed</h4>
                        <p className="text-primary font-bold text-sm uppercase mb-4 tracking-widest">Chief Executive Officer</p>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">Our advisory clients rely on our models to give them a competitive advantage in negotiation. Our models must therefore be robust and flexible but above all clear and transparent. Too often modelling is left to the least experienced team member; at Dael Energy we give modelling to the senior level management it requires.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
