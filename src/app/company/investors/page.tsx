import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Investors | DeepRidge Energy',
    description: 'Financial information and investor relations.',
};

export default function InvestorsPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Investor Relations</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Delivering value through sustainable growth.
                    </p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        DeepRidge Energy is committed to transparency and delivering long-term value to our shareholders.
                        Explore our financial reports, stock information, and corporate governance.
                    </p>
                </div>
            </div>
        </main>
    );
}
