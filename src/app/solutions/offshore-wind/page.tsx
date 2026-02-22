import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Offshore Wind Solutions | Sovereign Renewables',
    description: 'Advanced offshore wind technology and Hywind solutions.',
};

export default function OffshoreWindPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Offshore Wind Solutions</h1>
                    <p className="text-xl text-slate-600">
                        Harnessing the power of the wind in deep-water environments.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        We specialize in floating offshore wind technology, enabling access to wind resources
                        in deeper waters where traditional fixed-bottom turbines are not feasible.
                    </p>
                </div>
            </div>
        </main>
    );
}
