import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="relative w-32 h-10">
                                <Image
                                    src="/de.png"
                                    alt="DeepRidge Energy"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Engineering sustainable energy solutions for a cleaner, more reliable future. Leading the way in Hywind and advanced natural gas technologies.
                        </p>
                        <div className="flex gap-4">
                            <Link className="text-slate-400 hover:text-red-500 transition-colors" href="#"><span className="material-icons-outlined">facebook</span></Link>
                            <Link className="text-slate-400 hover:text-red-500 transition-colors" href="#"><span className="material-icons-outlined">language</span></Link>
                            <Link className="text-slate-400 hover:text-red-500 transition-colors" href="#"><span className="material-icons-outlined">alternate_email</span></Link>
                        </div>
                    </div>
                    <div>
                        <Link href="/solutions" className="group block mb-6"><h4 className="font-bold text-sm uppercase tracking-widest text-red-500 group-hover:text-red-400 transition-colors">Solutions</h4></Link>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link className="hover:text-red-500 transition-colors" href="/solutions/offshore-wind">Offshore Wind</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/solutions/natural-gas">Natural Gas Services</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/solutions/subsea-engineering">Subsea Engineering</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/solutions/asset-management">Asset Management</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/solutions/decommissioning">Decommissioning</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-red-500">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link className="hover:text-red-500 transition-colors" href="/company/about-us">About Us</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/company/sustainability">Sustainability</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/company/innovation-lab">Innovation Lab</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/company/investors">Investors</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/news">Newsroom</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link href="/support" className="group block mb-6"><h4 className="font-bold text-sm uppercase tracking-widest text-red-500 group-hover:text-red-400 transition-colors">Support</h4></Link>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link className="hover:text-red-500 transition-colors" href="/contact">Contact Support</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/support/global-locations">Global Locations</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/support/ethics-compliance">Ethics & Compliance</Link></li>
                            <li><Link className="hover:text-red-500 transition-colors" href="/legal/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-red-500 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                    <p>© 2025 DeepRidge Energy Corp. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link className="hover:text-red-500 transition-colors" href="/legal/terms-of-service">Terms of Service</Link>
                        <Link className="hover:text-red-500 transition-colors" href="/legal/privacy-policy">Privacy</Link>
                        <Link className="hover:text-red-500 transition-colors" href="/legal/cookie-settings">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
