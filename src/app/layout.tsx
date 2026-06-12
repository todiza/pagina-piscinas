import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "previsualizacion",
  description: "Servicios profesionales de mantenimiento, reparación y construcción de piscinas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(montserrat.variable, "h-full antialiased scroll-smooth")}
    >
      <body className="min-h-full flex flex-col relative bg-background font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
