import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | DeepRidge Energy',
    description: 'Learn about DeepRidge Energy, our mission, vision, and leadership in the sustainable energy sector.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">About DeepRidge Energy</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Pioneering the future of energy through innovation and sustainability.
                    </p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        DeepRidge Energy is a global leader in offshore wind and natural gas solutions.
                        We are dedicated to engineering a cleaner, more reliable future by leveraging
                        advanced technologies and deep industry expertise.
                    </p>
                    {/* Add more content here */}
                </div>
            </div>
        </main>
    );
}
