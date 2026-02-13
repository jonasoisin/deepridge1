import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Solutions | DeepRidge Energy',
    description: 'Explore our comprehensive energy solutions.',
};

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Our Solutions</h1>
                    <p className="text-xl text-slate-600">
                        Innovative engineering for a sustainable future.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link href="/solutions/offshore-wind" className="block p-6 border border-slate-200 rounded-lg hover:border-red-500 transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Offshore Wind</h2>
                        <p className="text-slate-600">Advanced floating wind technology for deep waters.</p>
                    </Link>
                    <Link href="/solutions/natural-gas" className="block p-6 border border-slate-200 rounded-lg hover:border-red-500 transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Natural Gas Services</h2>
                        <p className="text-slate-600">Bridging the energy transition with efficient gas solutions.</p>
                    </Link>
                    <Link href="/solutions/subsea-engineering" className="block p-6 border border-slate-200 rounded-lg hover:border-red-500 transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Subsea Engineering</h2>
                        <p className="text-slate-600">Robust subsea infrastructure design and implementation.</p>
                    </Link>
                    <Link href="/solutions/asset-management" className="block p-6 border border-slate-200 rounded-lg hover:border-red-500 transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Asset Management</h2>
                        <p className="text-slate-600">Optimizing asset lifecycle and performance.</p>
                    </Link>
                    <Link href="/solutions/decommissioning" className="block p-6 border border-slate-200 rounded-lg hover:border-red-500 transition-colors group">
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">Decommissioning</h2>
                        <p className="text-slate-600">Safe and responsible end-of-life services.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
