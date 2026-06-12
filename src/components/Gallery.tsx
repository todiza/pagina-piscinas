"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/gallery_1.png",
  "/images/before.png",
  "/images/after.png",
  "/images/gallery_2.png",
  "/images/gallery_3.png",
  "/images/about_2.png",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".gallery-header > *", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="gallery" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-6 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 gallery-header">
        <div>
          <h2 className="text-[clamp(40px,6vw,90px)] font-bold text-foreground leading-none mb-4 uppercase">
            Galería
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-xl">
            Echa un vistazo a algunos de nuestros proyectos más recientes e impresionantes. Convertimos patios traseros en resorts privados.
          </p>
        </div>
        <Link href="/gallery" className="bg-accent text-white px-8 md:px-10 py-4 md:py-5 text-sm md:text-[15px] font-bold uppercase hover:bg-accent/90 transition-colors whitespace-nowrap tracking-widest text-center">
          VER GALERÍA
        </Link>
      </div>

      <div className="w-full relative">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 30 },
            1024: { slidesPerView: 3.5, spaceBetween: 30 },
          }}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          className="w-full pb-10"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} className="h-[250px] sm:h-[350px] md:h-[400px]">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105 rounded-xl"
                style={{ backgroundImage: `url('${src}')` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
