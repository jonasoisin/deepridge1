// Note: Importing icons from Material Icons via CDN in layout, using span approach from HTML
export function Values() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
                    <div className="space-y-4 group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-primary transition-colors">
                            <span className="material-icons-outlined text-primary group-hover:text-white">handshake</span>
                        </div>
                        <h3 className="font-display font-bold text-xl uppercase tracking-wide">Collaboration</h3>
                        <p className="text-slate-600">Forging long-term partnerships with communities and stakeholders to ensure mutual prosperity and energy security.</p>
                    </div>
                    <div className="space-y-4 group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-primary transition-colors">
                            <span className="material-icons-outlined text-primary group-hover:text-white">verified_user</span>
                        </div>
                        <h3 className="font-display font-bold text-xl uppercase tracking-wide">Excellence</h3>
                        <p className="text-slate-600">Our operational standards lead the industry, ensuring safety and precision in the most challenging environments.</p>
                    </div>
                    <div className="space-y-4 group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-primary transition-colors">
                            <span className="material-icons-outlined text-primary group-hover:text-white">psychology</span>
                        </div>
                        <h3 className="font-display font-bold text-xl uppercase tracking-wide">Innovation</h3>
                        <p className="text-slate-600">Pushing the boundaries of Hywind technology and decarbonizing natural gas production through R&D.</p>
                    </div>
                    <div className="space-y-4 group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-primary transition-colors">
                            <span className="material-icons-outlined text-primary group-hover:text-white">eco</span>
                        </div>
                        <h3 className="font-display font-bold text-xl uppercase tracking-wide">Responsibility</h3>
                        <p className="text-slate-600">Environmental stewardship is at our core, committed to a net-zero future by 2050.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
