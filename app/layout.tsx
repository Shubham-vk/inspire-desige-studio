import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { getSiteSettings } from "@/sanity/lib/data";

import "./globals.css";

export const metadata: Metadata = {
  title: "Inspire Design Studio",
  description: "Interior design studio portfolio.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  console.log(settings);
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Header studioName={settings?.studioName} logo={settings?.logo} />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
