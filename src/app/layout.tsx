import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DeepRidge Energy | Powering the Future",
  description: "DeepRidge Energy is a global leader in sustainable extraction and floating offshore wind technology. We engineer the bridge to a cleaner future.",
  openGraph: {
    title: "DeepRidge Energy | Powering the Future",
    description: "DeepRidge Energy is a global leader in sustainable extraction and floating offshore wind technology.",
    url: "https://deepridge-energy.com",
    siteName: "DeepRidge Energy",
    images: [
      {
        url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "DeepRidge Energy Offshore Wind",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepRidge Energy",
    description: "Powering the Future of Energy with Hywind and Natural Gas solutions.",
    images: ["https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased text-secondary bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
