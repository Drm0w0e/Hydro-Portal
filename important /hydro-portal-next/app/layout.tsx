import "./globals.css";
import type { Metadata } from "next";
import BackgroundLayers from "@/components/BackgroundLayers";

export const metadata: Metadata = {
  title: "Hydro Portal — Where Human Intelligence Meets Infinite AI",
  description:
    "Hydro Portal is a futuristic AI orchestration platform that connects multiple AI models into one intelligent system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <BackgroundLayers />
        {children}
      </body>
    </html>
  );
}
