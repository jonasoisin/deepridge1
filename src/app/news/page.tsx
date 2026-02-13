import { articles } from "@/data/articles";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black z-10"></div>
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">Newsroom</h1>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Latest updates, press releases, and insights from DeepRidge Energy.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article) => (
                        <Link href={`/news/${article.slug}`} key={article.id} className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-transparent hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden rounded-sm">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-3 uppercase tracking-wide">
                                    {article.date}
                                </div>
                                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {article.summary}
                                </p>
                                <div className="mt-auto flex items-center text-primary font-bold text-sm tracking-wide gap-2">
                                    READ MORE
                                    <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
