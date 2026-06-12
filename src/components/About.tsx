"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-content > *", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Text Column */}
          <div className="about-content lg:w-1/2 pr-0 lg:pr-8">
            <span className="text-accent font-bold tracking-[0.3em] uppercase mb-4 block text-sm md:text-base">
              Nuestra Historia
            </span>
            <h2 className="text-[clamp(40px,6vw,80px)] font-extrabold text-foreground leading-[1.1] mb-6 uppercase">
              Nosotros
            </h2>
            <h3 className="text-[clamp(20px,2.5vw,32px)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-8 uppercase leading-tight drop-shadow-sm">
              LOS MEJORES PROFESIONALES DEL MERCADO
            </h3>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
              Nos dedicamos a brindar servicios de piscinas de la más alta calidad. Desde diseños personalizados hasta mantenimiento semanal, nuestro equipo de expertos asegura que tu piscina esté siempre lista para un buen chapuzón. Nos enorgullece nuestra confiabilidad y la satisfacción de nuestros clientes.
            </p>
            <Link href="/about" className="inline-block bg-primary text-white px-10 py-5 text-[15px] font-bold uppercase hover:bg-primary/90 transition-all tracking-widest shadow-lg hover:shadow-primary/50 hover:-translate-y-1 rounded-sm">
              MÁS INFORMACIÓN
            </Link>
          </div>

          {/* Right Image Slider Column */}
          <div className="about-image lg:w-1/2 w-full h-[600px] relative mt-12 lg:mt-0 pl-0 lg:pl-8">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full shadow-2xl rounded-xl overflow-hidden"
            >
              <SwiperSlide>
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: "url('/images/about_1.png')" }} 
                />
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: "url('/images/about_2.png')" }} 
                />
              </SwiperSlide>
              <SwiperSlide>
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: "url('/images/about_3.png')" }} 
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
