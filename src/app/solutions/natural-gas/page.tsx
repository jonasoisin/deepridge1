import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Natural Gas Services | DeepRidge Energy',
    description: 'Responsible natural gas extraction and processing.',
};

export default function NaturalGasPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Natural Gas Services</h1>
                    <p className="text-xl text-slate-600">
                        Bridging the transition with cleaner hydrocarbon solutions.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        DeepRidge provides advanced natural gas services, focusing on efficiency and
                        emissions reduction to support global energy security during the transition.
                    </p>
                </div>
            </div>
        </main>
    );
}
