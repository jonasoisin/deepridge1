"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { LayoutGrid, Map as MapIcon, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

type Category = "All Projects" | "Renewables" | "Natural Gas" | "Carbon Capture";

const projects = [
    {
        category: "Renewables",
        location: "Norway, North Sea",
        title: "Hywind Tampen Floating Wind",
        stats: [
            { label: "OUTPUT", value: "88 MW" },
            { label: "CO2 REDUCED", value: "200k t/y" }
        ],
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
    },
    {
        category: "Natural Gas",
        location: "Port Kembla, Australia",
        title: "Eastern Gas Hub Terminal",
        stats: [
            { label: "CAPACITY", value: "130 PJ/y" },
            { label: "STORAGE", value: "170k m³" }
        ],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    },
    {
        category: "Renewables",
        location: "Arizona, USA",
        title: "Ridgefield Solar Field",
        stats: [
            { label: "OUTPUT", value: "450 MW" },
            { label: "HOUSEHOLDS", value: "90k" }
        ],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    },
    {
        category: "Carbon Capture",
        location: "Alberta, Canada",
        title: "Polaris Carbon Injection",
        stats: [
            { label: "STORAGE", value: "2.4 Mt/y" },
            { label: "PURITY", value: "99.9%" }
        ],
        image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop",
    },
    {
        category: "Natural Gas",
        location: "Gulf of Mexico",
        title: "Viking Deepwater Project",
        stats: [
            { label: "DEPTH", value: "2,800 m" },
            { label: "RESERVES", value: "4.2 Tcf" }
        ],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2068&auto=format&fit=crop",
    },
    {
        category: "Renewables",
        location: "Rotterdam, NL",
        title: "H2-Horizon Electrolyzer",
        stats: [
            { label: "POWER", value: "200 MW" },
            { label: "TYPE", value: "Green H2" }
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
];

export function ProjectList() {
    const [activeCategory, setActiveCategory] = useState<Category>("All Projects");

    const filteredProjects = activeCategory === "All Projects"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {(["All Projects", "Renewables", "Natural Gas", "Carbon Capture"] as Category[]).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors rounded-sm ${activeCategory === cat
                                        ? "bg-primary text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
                            Region: Global <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="w-px h-4 bg-gray-300" />
                        <div className="flex gap-2">
                            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-sm text-secondary">
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                            <button className="p-2 bg-white hover:bg-gray-50 rounded-sm text-gray-400">
                                <MapIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="bg-white shadow-sm hover:shadow-xl transition-shadow group">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`text-xs font-bold text-white px-3 py-1 uppercase tracking-wider ${project.category === 'Renewables' ? 'bg-green-600' :
                                            project.category === 'Natural Gas' ? 'bg-blue-900' :
                                                'bg-teal-600'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-gray-400 mb-2 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {project.location}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3 leading-snug min-h-[56px]">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                                    Utility-scale solution featuring advanced tracking technology focused on sustainability.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6 border-t border-gray-100 pt-6">
                                    {project.stats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
                                            <div className="text-lg font-bold text-secondary">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <button className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                                    EXPLORE PROJECT <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="white" className="bg-gray-200 hover:bg-gray-300">SEE MORE PROJECTS</Button>
                </div>
            </Section>
        </div>
    );
}
