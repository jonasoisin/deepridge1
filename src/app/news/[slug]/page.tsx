import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background-light text-slate-900 transition-colors duration-200 pt-20">
            {/* Hero / Header */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
                    <Link href="/news" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
                        <span className="material-icons-outlined mr-2">arrow_back</span>
                        Back to News
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                            {article.category}
                        </span>
                        <span className="text-slate-300 text-sm font-semibold uppercase tracking-wide">
                            {article.date}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
                        {article.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <p className="text-xl font-medium text-slate-600 mb-8 leading-relaxed border-l-4 border-primary pl-6 italic">
                        {article.summary}
                    </p>
                    <div
                        className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-primary hover:prose-a:text-primary-hover"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>

                {/* Sidebar / Info Box */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-50 p-8 rounded-sm sticky top-24 border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold mb-6 uppercase tracking-wider flex items-center gap-2 pb-4 border-b border-slate-200">
                            <span className="material-icons-outlined text-primary">info</span>
                            Key Details
                        </h3>

                        <div className="space-y-6">
                            {article.partners && (
                                <div>
                                    <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-2">Strategic Partners</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {article.partners.map((partner, index) => (
                                            <span key={index} className="bg-white px-3 py-1 rounded text-sm font-medium shadow-sm border border-slate-100">
                                                {partner}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {article.dealSize && article.dealSize !== "N/A" && (
                                <div>
                                    <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-2">Deal Size / Value</h4>
                                    <p className="text-xl font-bold text-slate-900">
                                        {article.dealSize}
                                    </p>
                                </div>
                            )}

                            {article.pressConference && (
                                <div>
                                    <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-2">Press Conference / Event</h4>
                                    <p className="text-sm text-slate-600 flex items-start gap-2">
                                        <span className="material-icons-outlined text-base mt-0.5 text-primary">event_note</span>
                                        {article.pressConference}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-4">Share this article</h4>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <span className="material-icons-outlined text-sm">facebook</span>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                                    <span className="material-icons-outlined text-sm">share</span>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900 transition-colors">
                                    <span className="material-icons-outlined text-sm">work</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
