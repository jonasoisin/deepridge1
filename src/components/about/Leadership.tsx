export function Leadership() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="border-l-4 border-red-500 pl-4">
                        <h2 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">Executive Leadership</h2>
                    </div>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">Led by industry visionaries with over 150 years of combined experience in energy infrastructure and renewables.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Marcus Chen */}
                    <div className="bg-white dark:bg-slate-900 p-8 shadow-sm border border-red-500 dark:border-red-500 hover:shadow-xl transition-shadow">
                        <img alt="CEO Marcus Chen" className="w-24 h-24 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all border-2 border-red-500/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmOhJmor_kFw7q3V6CmGq4WCowkHfFnIzkrbQ9OFjs0lV4k5D52mowJDTWp0lb685q_tAmKYA1wQD-RcCwtANs9crQccI7jjBooov0Mb9f2jBAvij3SxmKuqBTfMhjGr4P5QOlSytkGVcNNph5V5bZhHGK9CSbVUpAATecOEs9MIPqrV5CYiOnaFKExBo1INMdWneyKFv7gVkBsdgvvIPpvvw9MBjbHghdelUQxzt0UJ1YPO2hU6UaJj71oHzAha229qmdOBAZVA" />
                        <h4 className="font-display font-bold text-xl mb-1">Marcus Chen</h4>
                        <p className="text-primary font-bold text-sm uppercase mb-4 tracking-widest">Chief Executive Officer</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">A pioneer in floating offshore wind, Marcus oversees the strategic transition of DeepRidge into a diversified energy powerhouse.</p>
                        <a className="text-slate-900 dark:text-white text-xs font-bold uppercase flex items-center gap-2 hover:text-primary transition-colors" href="#">
                            View Profile <span className="material-icons-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    {/* Sarah Whitaker */}
                    <div className="bg-white dark:bg-slate-900 p-8 shadow-sm border border-red-500 dark:border-red-500 hover:shadow-xl transition-shadow">
                        <img alt="CTO Sarah Whitaker" className="w-24 h-24 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all border-2 border-red-500/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9tGgUssmYtZlvBjk7P893O2EhiFRjoPq6iOcNxcAhqOGKViqUGVZCp1PLJipTNZpRlLfH3DLVeX_FYu5Efp6_NWKEY79ZwhoNqyfy4jULveDWKey1qsaiJkgEjSXGfVKMxdU8fuWHd-a7W8cq4PT0bPbYJ0fJ1YQkysUNDccRUi5rVCenXArRnljiLhelUszvmuk7ltlujcQhSqJIS8x34-60Hx5YzQmDincG9P8BhZtHcC8UtSgmqkDtVR933FL5fGWbIVAs1A" />
                        <h4 className="font-display font-bold text-xl mb-1">Sarah Whitaker</h4>
                        <p className="text-primary font-bold text-sm uppercase mb-4 tracking-widest">Chief Technical Officer</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">Leading our engineering division, Sarah holds 14 patents in subsea gas extraction and stabilization systems.</p>
                        <a className="text-slate-900 dark:text-white text-xs font-bold uppercase flex items-center gap-2 hover:text-primary transition-colors" href="#">
                            View Profile <span className="material-icons-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                    {/* James Rodriguez */}
                    <div className="bg-white dark:bg-slate-900 p-8 shadow-sm border border-red-500 dark:border-red-500 hover:shadow-xl transition-shadow">
                        <img alt="COO James Rodriguez" className="w-24 h-24 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all border-2 border-red-500/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEpaNqPwAw0rgXe9lYboYY7uw-_M1fMz4_y89yuwbrZvd9n6h_yIEnXeJSggb_i4TW0ZC46CrxD1O5BIJg_ZODDPa60MFuXeyaRJpgMsRQNZeXCz80rXjjzmJAZTih4l9jII1m41Fqs1bws_aEmMRCt8_lvF4sw5uZZwH-L9BldNfOQ0Gf46LxPdZK-CVPWbz6GBZfFS9pR2AoA5PvnUmrHF8WEUj00n_fK7e5r_3ajfMZK66gpVtu5sBT-O0zUo99UHh2ayx-Ng" />
                        <h4 className="font-display font-bold text-xl mb-1">James Rodriguez</h4>
                        <p className="text-primary font-bold text-sm uppercase mb-4 tracking-widest">Chief Operations Officer</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">James ensures operational safety across 14 countries, managing our transition from traditional gas to hybrid systems.</p>
                        <a className="text-slate-900 dark:text-white text-xs font-bold uppercase flex items-center gap-2 hover:text-primary transition-colors" href="#">
                            View Profile <span className="material-icons-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
