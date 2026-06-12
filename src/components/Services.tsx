"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Waves, Wrench, Umbrella, Droplet } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    title: "Nuevas Piscinas",
    description: "Piscinas diseñadas a medida para encajar perfectamente en tu patio.",
    icon: Waves,
  },
  {
    title: "Reparación",
    description: "Servicios expertos de reparación para todos los equipos de tu piscina.",
    icon: Wrench,
  },
  {
    title: "Remodelación",
    description: "Transforma tu vieja piscina en un oasis moderno.",
    icon: Umbrella,
  },
  {
    title: "Productos",
    description: "Químicos y accesorios de alta calidad para tu piscina.",
    icon: Droplet,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="py-24 relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/water_bg.png')" }}
    >
      {/* Overlay solid blue to match Astra */}
      <div className="absolute inset-0 bg-[#002251]/95" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Lo Que Hacemos
          </span>
          <h2 className="font-sans text-[clamp(35px,5vw,70px)] font-extrabold text-white leading-none uppercase">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card flex flex-col items-center text-center p-12 bg-white/5 hover:bg-white/10 transition-colors duration-300 rounded-lg">
                <div className="w-24 h-24 bg-black/30 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-accent" strokeWidth={2} />
                </div>
                <h4 className="font-sans text-xl font-bold text-white mb-4 uppercase tracking-widest">
                  {service.title}
                </h4>
                <p className="text-white/80 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
