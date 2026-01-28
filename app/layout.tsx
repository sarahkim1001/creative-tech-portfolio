import type { Metadata } from "next";
import MobileMenu from "./components/MobileMenu";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah Kim - Creative Portfolio",
  description: "Sarah Kim's creative portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          {/* Mobile Menu Component */}
          <MobileMenu />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="flex-1 px-[calc(15%+4rem)]">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
