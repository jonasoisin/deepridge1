import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | DeepRidge Energy',
    description: 'Terms and conditions for using our website.',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background-light text-slate-900 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Terms of Service</h1>
                    <p className="text-xl text-slate-600">
                        Conditions of use for DeepRidge Energy services.
                    </p>
                </div>
                <div className="prose max-w-none">
                    <p>
                        By accessing or using the DeepRidge Energy website, you agree to comply with and be bound by these Terms of Service.
                    </p>
                </div>
            </div>
        </main>
    );
}
