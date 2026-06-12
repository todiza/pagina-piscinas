"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col relative overflow-x-hidden min-h-screen bg-background">
      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-[clamp(40px,6vw,80px)] font-bold uppercase leading-none mb-4">
            Ponte en Contacto
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Estamos listos para transformar tu patio trasero. Contáctanos hoy.
          </p>
        </div>
        {/* Wave Shape Divider - Unique Asymmetric Path */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ transform: 'translateY(1px)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px] block">
            <path d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,138.7C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="var(--background, #fafafa)"></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-3xl font-bold uppercase text-foreground mb-8">Información</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Dirección</h4>
                    <p className="text-foreground/70">123 Quinta Avenida, Nueva York, NY 10160</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Teléfono</h4>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-foreground/70">info@poolservices.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 lg:p-12 shadow-xl rounded-2xl border border-black/5">
            <h3 className="text-2xl font-bold uppercase text-foreground mb-8">Envíanos un Mensaje</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wider">Nombre</label>
                  <input type="text" className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Tu Nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Servicio de Interés</label>
                <select className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground/70">
                  <option>Nueva Piscina</option>
                  <option>Mantenimiento</option>
                  <option>Remodelación</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Mensaje</label>
                <textarea rows={5} className="w-full bg-background border border-black/10 px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button className="w-full bg-accent text-white font-bold uppercase tracking-widest py-4 hover:bg-accent/90 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
