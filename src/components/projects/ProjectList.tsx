"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { LayoutGrid, Map as MapIcon, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Category = "All Projects" | "Renewables" | "Natural Gas" | "Carbon Capture" | "Oil Refining";

const projects = [
    {
        category: "Oil Refining",
        location: "Global Operations",
        title: "Modern Oil Refining",
        description: "Advanced refining capabilities delivering high-quality petroleum products globally.",
        stats: [
            { label: "CAPACITY", value: "450 kbpd" },
            { label: "EFFICIENCY", value: "98.5%" }
        ],
        image: "https://www.mbenergy.com/fileadmin/_processed_/0/5/csm_image_raffinerie_AdobeStock_202041790_Standardlizenz_2022-03-31_1920_3ce4ef600e.jpg",
    },
    {
        category: "Natural Gas",
        location: "Dubai, UAE",
        title: "Gas Processing Plant",
        description: "Offshore production of natural gas for the generation of electricity to reduce the cost and increase the supply for Dubai households and industries in the UAE.",
        stats: [
            { label: "OUTPUT", value: "High Capacity" },
            { label: "SUPPLY", value: "Dubai & UAE" }
        ],
        image: "https://images.unsplash.com/photo-1566933294831-bda8d085df7c?auto=format&fit=crop&q=80",
    },
];

export function ProjectList() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-sm hover:shadow-xl transition-shadow group">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`text-xs font-bold text-white px-3 py-1 uppercase tracking-wider ${project.category === 'Renewables' ? 'bg-green-600' :
                                        project.category === 'Natural Gas' ? 'bg-blue-900' :
                                            project.category === 'Oil Refining' ? 'bg-orange-700' :
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
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6 border-t border-red-500 pt-6">
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


            </Section>
        </div>
    );
}
