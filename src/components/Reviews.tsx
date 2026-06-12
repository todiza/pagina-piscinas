"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
    gsap.from(".review-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-[clamp(60px,8vw,130px)] font-bold text-foreground leading-none mb-16 text-center uppercase">
          Reseñas
        </h2>

        <div className="flex flex-col gap-12 max-w-4xl mx-auto mb-24">
          {reviews.map((review, i) => (
            <div key={i} className="review-card flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left bg-black/5 p-8 border border-black/5 rounded-2xl">
              <div className="shrink-0 relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent text-white p-2 rounded-full shadow-md">
                  <Quote size={16} />
                </div>
              </div>
              <div>
                <h3 className="text-[clamp(24px,3vw,40px)] font-bold text-foreground uppercase leading-tight mb-2">
                  "{review.title}"
                </h3>
                <p className="text-foreground/70 text-lg mb-4 italic">
                  {review.body}
                </p>
                <h6 className="text-[15px] font-bold text-foreground tracking-widest uppercase">
                  {review.name}
                </h6>
              </div>
            </div>
          ))}
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
