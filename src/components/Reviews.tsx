"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "PATRICIA RÍOS, LAS CONDES",
    title: "¡EXCELENTE EQUIPO!",
    body: "El equipo fue increíble de principio a fin. Construyeron nuestra piscina soñada antes de lo previsto y la calidad es excepcional. ¡Muy recomendados!",
    image: "/images/review_1.png"
  },
  {
    name: "JUAN PÉREZ, PROVIDENCIA",
    title: "¡GRAN SERVICIO!",
    body: "El mantenimiento semanal nunca fue tan fácil. Mi piscina siempre está cristalina. Muy profesionales y confiables.",
    image: "/images/review_2.png"
  },
  {
    name: "SARA GÓMEZ, VITACURA",
    title: "HERMOSA REMODELACIÓN",
    body: "Transformaron por completo nuestra anticuada piscina en un oasis moderno. La atención al detalle es notable.",
    image: "/images/review_3.png"
  }
];

const partners = Array(8).fill("Marca Asoc.");

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".reviews-swiper-wrapper", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="reviews" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[clamp(40px,6vw,90px)] font-bold text-foreground leading-none mb-8 md:mb-16 text-center uppercase">
          Reseñas
        </h2>

        <div className="reviews-swiper-wrapper max-w-4xl mx-auto mb-16 md:mb-24">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full pb-12"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="review-card flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left bg-black/5 p-6 md:p-8 border border-black/5 rounded-2xl mx-1 my-1">
                  <div className="shrink-0 relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-accent text-white p-2 rounded-full shadow-md">
                      <Quote size={14} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[clamp(20px,2.5vw,32px)] font-bold text-foreground uppercase leading-tight mb-2">
                      "{review.title}"
                    </h3>
                    <p className="text-foreground/70 text-base md:text-lg mb-4 italic">
                      {review.body}
                    </p>
                    <h6 className="text-xs md:text-sm font-bold text-foreground tracking-widest uppercase">
                      {review.name}
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Brand Logos Carousel */}
        <div className="border-t border-black/10 pt-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="w-full grayscale opacity-60 hover:grayscale-0 transition-all duration-500"
          >
            {partners.map((brand, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center h-20">
                <span className="font-bold text-xl text-foreground/50 uppercase">{brand} {i+1}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
