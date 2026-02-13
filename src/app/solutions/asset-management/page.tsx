import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Asset Management | DeepRidge Energy',
    description: 'Maximizing value through lifecycle asset management.',
};

export default function AssetManagementPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Asset Management</h1>
                    <p className="text-xl text-slate-600">
                        Optimizing performance and extending asset life.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        Our asset management services utilize digital twins and predictive maintenance
                        to maximize uptime and ROI for your energy infrastructure.
                    </p>
                </div>
            </div>
        </main>
    );
}
