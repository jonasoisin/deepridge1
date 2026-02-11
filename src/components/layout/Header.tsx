import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Solutions", href: "/services" },
        { name: "Sustainability", href: "/about" },
        { name: "Innovation", href: "/projects" },
        { name: "Investors", href: "/about" }, // Placeholder
        { name: "Careers", href: "/about" }, // Placeholder
    ];

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                        <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-secondary">
                        DEEPRIDGE <span className="font-light">ENERGY</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary hover:text-primary transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button size="sm" onClick={() => window.location.href = '/contact'}>Contact Us</Button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Search className="w-5 h-5 text-secondary" />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-secondary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-secondary hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full" onClick={() => {
                        window.location.href = '/contact';
                        setIsOpen(false);
                    }}>Contact Us</Button>
                </div>
            )}
        </header>
    );
}
