import Services from "@/components/Services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="flex flex-col relative overflow-x-hidden min-h-screen">
      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-[clamp(40px,6vw,80px)] font-bold uppercase leading-none mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Soluciones integrales para cada propietario de piscina.
          </p>
        </div>
        {/* Wave Shape Divider - Unique Asymmetric Path */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ transform: 'translateY(1px)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px] block">
            <path d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,149.3C672,139,768,85,864,85.3C960,85,1056,139,1152,144C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Reusing the Services Component */}
      <Services />

      {/* Additional Detailed Section - No Prices */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold uppercase text-foreground mb-8 text-center tracking-widest">
            Planes de Mantenimiento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-primary/20 rounded-2xl bg-white text-center shadow-lg">
              <h3 className="text-2xl font-bold uppercase text-primary mb-6 tracking-wider">Mantenimiento Básico</h3>
              <ul className="text-left space-y-4 mb-8 text-foreground/80 font-medium">
                <li>✓ Análisis de Agua</li>
                <li>✓ Balanceo Químico</li>
                <li>✓ Limpieza de Canastas y Filtros</li>
                <li>✓ Retiro de Hojas en Superficie</li>
              </ul>
              <Link href="/contact" className="inline-block w-full py-4 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors tracking-widest">Solicitar</Link>
            </div>
            
            <div className="p-8 border-2 border-accent rounded-2xl bg-white relative text-center shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1 text-sm font-bold uppercase rounded-full tracking-widest">Premium</div>
              <h3 className="text-2xl font-bold uppercase text-accent mb-6 tracking-wider">Cuidado Integral</h3>
              <ul className="text-left space-y-4 mb-8 text-foreground/80 font-medium">
                <li>✓ Todo lo del plan Básico</li>
                <li>✓ Aspirado Profundo</li>
                <li>✓ Limpieza de Paredes y Suelo</li>
                <li>✓ Inspección Completa de Equipos</li>
                <li>✓ Soporte Prioritario 24/7</li>
              </ul>
              <Link href="/contact" className="inline-block w-full py-4 bg-accent text-white font-bold uppercase hover:bg-accent/90 transition-colors tracking-widest">Solicitar</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
