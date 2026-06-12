"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "NOSOTROS", href: "/about" },
    { name: "SERVICIOS", href: "/services" },
    { name: "GALERÍA", href: "/gallery" },
    { name: "RESEÑAS", href: "/reviews" },
    { name: "CONTACTO", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <span className="text-slate-900 font-bold">PS</span>
          </div>
          <span
            className={cn(
              "font-bold text-xl tracking-tight transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            Pool Services
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[15px] font-bold tracking-widest transition-colors hover:text-accent",
                scrolled ? "text-foreground/80" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={cn(
              "px-6 py-3 font-bold uppercase tracking-widest text-[14px] transition-all hover:bg-opacity-90 inline-block",
              scrolled
                ? "bg-accent text-slate-900"
                : "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-slate-900"
            )}
          >
            PRESUPUESTO
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn(scrolled ? "text-foreground" : "text-white")} />
          ) : (
            <Menu className={cn(scrolled ? "text-foreground" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground font-bold tracking-widest text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-6 py-3 font-bold tracking-widest uppercase text-center bg-accent text-slate-900 w-full block"
            onClick={() => setMobileMenuOpen(false)}
          >
            PRESUPUESTO
          </Link>
        </div>
      )}
    </header>
  );
}
