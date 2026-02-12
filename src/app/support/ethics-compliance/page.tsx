import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ethics & Compliance | DeepRidge Energy',
    description: 'Our commitment to ethical business practices.',
};

export default function EthicsPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Ethics & Compliance</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Upholding the highest standards of integrity.
                    </p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        We conduct our business with honesty, integrity, and respect. Our Code of Conduct
                        guides our interactions with employees, partners, and the communities we serve.
                    </p>
                </div>
            </div>
        </main>
    );
}
