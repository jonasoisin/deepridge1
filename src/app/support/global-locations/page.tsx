import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Global Locations | DeepRidge Energy',
    description: 'Our global presence and operational hubs.',
};

export default function GlobalLocationsPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Global Locations</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Operating in key energy hubs worldwide.
                    </p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        With headquarters in Houston and major operations in the North Sea, Brazil, and Southeast Asia,
                        DeepRidge Energy is positioned to serve the global energy market.
                    </p>
                </div>
            </div>
        </main>
    );
}
