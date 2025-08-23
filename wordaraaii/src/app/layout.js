// src/app/layout.js

import "../styles/globals.css"; // Import Tailwind/global styles from src/styles
import { Inter } from "next/font/google";
import Script from 'next/script';
import VantaBackground from "@/components/shared/VantaBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wordara",
  description: "Your AI-powered assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Vanta.js Fog Background */}
        <VantaBackground />

        {/* App content above background */}
        <main className="relative z-10">{children}</main>

        {/* Load Three.js and Vanta once */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
