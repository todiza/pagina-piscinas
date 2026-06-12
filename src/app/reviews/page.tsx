import Reviews from "@/components/Reviews";

export default function ReviewsPage() {
  return (
    <main className="flex flex-col relative overflow-x-hidden min-h-screen">
      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-[clamp(40px,6vw,80px)] font-bold uppercase leading-none mb-4">
            Testimonios de clientes
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            No solo tome nuestra palabra. Escuche a nuestros felices propietarios de piscinas.
          </p>
        </div>
        {/* Wave Shape Divider - Unique Asymmetric Path */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ transform: 'translateY(1px)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px] block">
            <path d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,133.3C672,149,768,139,864,122.7C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Reusing the Reviews Component */}
      <Reviews />
      
      {/* Additional Detailed Section */}
      <section className="py-24 bg-accent text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold uppercase mb-6">Deja una reseña</h2>
          <p className="text-lg mb-8">¡Valoramos sus comentarios! Si hemos realizado mantenimiento a su piscina recientemente, háganos saber cómo lo hicimos.</p>
          <button className="bg-white text-accent px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
            Escribir una reseña
          </button>
        </div>
      </section>
    </main>
  );
}
