import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="flex flex-col relative overflow-x-hidden min-h-screen">
      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-[clamp(40px,6vw,80px)] font-bold uppercase leading-none mb-4">
            Nuestra Historia
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Décadas de experiencia construyendo las mejores piscinas del país.
          </p>
        </div>
        {/* Wave Shape Divider - Unique Asymmetric Path */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ transform: 'translateY(1px)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px] block">
            <path d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,58.7C672,53,768,75,864,96C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Reusing the About Component */}
      <About />

      {/* Additional Detailed Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold uppercase text-foreground mb-8 tracking-widest">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary uppercase">Expertos Certificados</h3>
              <p className="text-foreground/70">Nuestro equipo está formado por profesionales certificados con más de 20 años de experiencia combinada.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary uppercase">Materiales de Calidad</h3>
              <p className="text-foreground/70">Solo utilizamos materiales premium y líderes en la industria para garantizar que tu piscina dure toda la vida.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary uppercase">Galardonados</h3>
              <p className="text-foreground/70">Reconocidos por la Asociación Nacional de Diseño de Piscinas por nuestros diseños innovadores.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
