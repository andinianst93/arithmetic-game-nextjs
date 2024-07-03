import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arithmetic Game",
  description: "Arithmetic Game challenges you to solve as many arithmetic problems as possible within a two-minute timeframe, making it a high-speed drill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />

          </div>
        </Providers>
      </body>
    </html>
  );
}
