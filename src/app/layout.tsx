import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LangProvider } from "@/context/LangProvider";

const inter = Inter({
    subsets: ['latin'], // Specify the necessary subsets
    display: 'swap', // Recommended for better performance
  });


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
