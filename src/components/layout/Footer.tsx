import Link from "next/link";
import { Facebook, Twitter, Linkedin, Globe } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        solutions: [
            { name: "Offshore Wind", href: "/services" },
            { name: "Natural Gas Services", href: "/services" },
            { name: "Subsea Engineering", href: "/services" },
            { name: "Asset Management", href: "/services" },
            { name: "Decommissioning", href: "/services" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Sustainability", href: "/about" },
            { name: "Innovation Lab", href: "/projects" },
            { name: "Investors", href: "/about" },
            { name: "Newsroom", href: "/about" },
        ],
        support: [
            { name: "Contact Support", href: "/contact" },
            { name: "Global Locations", href: "/contact" },
            { name: "Ethics & Compliance", href: "/about" },
            { name: "Privacy Policy", href: "/about" },
        ],
    };

    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                                <span className="text-white font-bold text-lg">D</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                DEEPRIDGE
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Engineering sustainable energy solutions for a cleaner, more reliable future. Leading the way in Hywind and advanced natural gas technologies.
                        </p>
                        <div className="flex gap-4">
                            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                            <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-6">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-6">Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {currentYear} DeepRidge Energy Corp. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Privacy</Link>
                        <Link href="#" className="hover:text-white">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
