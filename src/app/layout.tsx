import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LangProvider } from "@/context/LangProvider";
import type { Metadata } from "next";
const inter = Inter({
    subsets: ['latin'], // Specify the necessary subsets
    display: 'swap', // Recommended for better performance
  });

export const metadata: Metadata = {
  title: "Lucas Henintsoa Randriamiarisoa",
  description: "This is my portfolio",
  icons: {
        icon: '/iconMetadata.svg', // Path relative to the /public directory
        apple: '/iconMetadata.svg', // Path relative to the /public directory
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
        className={inter.className}
      >
      <LangProvider>
        <Navbar />
        {children}
      </LangProvider>
      </body>
    </html>
  );
}
