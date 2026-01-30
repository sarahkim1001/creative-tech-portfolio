import type { Metadata } from "next";
import MobileMenu from "./components/MobileMenu";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah Kim - Creative Portfolio",
  description: "Sarah Kim's creative portfolio",
  icons: {
    icon: '/media/img/faviconlight.png',
  },
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
          <main className="flex-1" style={{ 
            padding: '0 clamp(1.6rem, 2.4rem, 2.4rem)', 
            paddingTop: 'clamp(6.4rem, 0px, 0px)', /* Add top padding on mobile for fixed header */
            maxWidth: '1680px', 
            margin: '0 auto', 
            width: '100%' 
          }}>
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
