import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Decommissioning | DeepRidge Energy',
    description: 'Sustainable and safe decommissioning services.',
};

export default function DecommissioningPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Decommissioning</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Responsible end-of-life solutions for energy assets.
                    </p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        We provide comprehensive decommissioning services, ensuring safe removal and
                        recycling of offshore platforms and subsea infrastructure in compliance with
                        global environmental standards.
                    </p>
                </div>
            </div>
        </main>
    );
}
