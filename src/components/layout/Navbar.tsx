"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-red-500 dark:border-red-500 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            <div className="relative w-32 h-12">
                                <Image
                                    src="/de.png"
                                    alt="DeepRidge Energy"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
                        <Link
                            href="/services"
                            className={`transition-colors ${pathname === "/services"
                                ? "text-primary"
                                : "text-slate-900 dark:text-white hover:text-primary"
                                }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/projects"
                            className={`transition-colors ${pathname === "/projects"
                                ? "text-primary"
                                : "text-slate-900 dark:text-white hover:text-primary"
                                }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/about"
                            className={`transition-colors ${pathname === "/about"
                                ? "text-primary"
                                : "text-slate-900 dark:text-white hover:text-primary"
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={`transition-colors ${pathname === "/contact"
                                ? "text-primary"
                                : "text-slate-900 dark:text-white hover:text-primary"
                                }`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/news"
                            className={`transition-colors ${pathname === "/news"
                                ? "text-primary"
                                : "text-slate-900 dark:text-white hover:text-primary"
                                }`}
                        >
                            News
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-900 dark:text-white transition-colors">
                            <span className="material-icons-outlined">search</span>
                        </button>
                        <button
                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-900 dark:text-white transition-colors"
                            onClick={toggleTheme}
                        >
                            {darkMode ? (
                                <span className="material-icons-outlined text-yellow-400">
                                    light_mode
                                </span>
                            ) : (
                                <span className="material-icons-outlined">dark_mode</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
