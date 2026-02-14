import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Subsea Engineering | DeepRidge Energy',
    description: 'Advanced subsea infrastructure and engineering.',
};

export default function SubseaEngineeringPage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pl-0 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Subsea Engineering</h1>
                    <p className="text-xl text-slate-600">
                        Designing the backbone of offshore energy.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        From pipelines to umbilicals, our subsea engineering solutions ensure robust
                        connectivity and reliability in the most challenging marine environments.
                    </p>
                </div>
            </div>
        </main>
    );
}
