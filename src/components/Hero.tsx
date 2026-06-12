"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { WaterRippleImage } from "./ui/water-ripple-image";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[95vh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-primary pt-20">
      
      {/* Interactive WebGL Water Background - Covers the entire section */}
      <div className="absolute inset-0 z-0">
        <WaterRippleImage 
          src="/images/water_texture.png" 
          blueish={0.5} 
          scale={3} 
          illumination={0.15} 
          surfaceDistortion={0.02} 
          waterDistortion={0.015} 
          className="w-full h-full object-cover" 
        />
        {/* Subtle primary tint overlay for text legibility */}
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      {/* Centered Floatie Image - with parallax scroll wrapper */}
      <div 
        className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <div className="relative w-[85vw] h-[85vw] max-w-[750px] max-h-[750px] md:w-[60vw] md:h-[60vw] xl:w-[50vw] xl:h-[50vw] translate-y-[26%] md:translate-y-[22%]">
          <img 
            src="/images/hero_floatie.png" 
            alt="Persona en flotador" 
            className="w-full h-full object-contain opacity-95 animate-float"
          />
        </div>
      </div>

      {/* Hero Content - Clean Typography as in Template */}
      <div className="relative z-20 text-center flex flex-col items-center max-w-4xl px-4 pointer-events-none mt-10">
        <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
          Servicios Premium
        </span>
        <h1 className="hero-text font-sans text-[clamp(50px,9vw,120px)] font-extrabold uppercase text-white leading-[1.0] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          El Verano <br/> Se Acerca
        </h1>
        <p className="text-white text-lg md:text-xl font-medium max-w-2xl mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Construye, remodela y mantén la piscina de tus sueños con los expertos líderes del país.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row pointer-events-auto">
          <Link 
            href="#about"
            className="bg-accent text-slate-900 px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors shadow-lg"
          >
            Saber Más
          </Link>
          <Link 
            href="/contact"
            className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors shadow-lg"
          >
            Presupuesto
          </Link>
        </div>
      </div>

      {/* Clean Wave Shape Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 pointer-events-none" style={{ transform: 'translateY(1px)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px] block" preserveAspectRatio="none">
          <path fill="var(--background)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
