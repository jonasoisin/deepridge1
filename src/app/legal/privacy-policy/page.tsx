import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | DeepRidge Energy',
    description: 'How we protect and handle your data.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-l-4 border-red-500 pl-6 mb-12">
                    <h1 className="text-4xl font-bold mb-4 font-display">Privacy Policy</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        Your privacy is important to us.
                    </p>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        This Privacy Policy outlines how DeepRidge Energy collects, uses, and protects your personal information.
                    </p>
                    <p>
                        Last Updated: February 2026
                    </p>
                    {/* Add detailed privacy policy content */}
                </div>
            </div>
        </main>
    );
}
