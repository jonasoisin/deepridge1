import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sustainability | DeepRidge Energy',
    description: 'Our commitment to a net-zero future and sustainable energy practices.',
};

export default function SustainabilityPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Sustainability</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Driving the transition to a low-carbon economy.
                    </p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        At DeepRidge, sustainability is at the core of our operations. From Hywind floating wind farms
                        to carbon capture initiatives, we are actively reducing our environmental footprint.
                    </p>
                </div>
            </div>
        </main>
    );
}
