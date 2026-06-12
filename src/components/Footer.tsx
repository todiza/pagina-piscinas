"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-[21px] font-bold uppercase tracking-widest text-white/90 mb-4">
            Obtén Un Presupuesto Gratis
          </h2>
          <p className="text-white/70 text-lg mb-8">
            ¿Listo para construir la piscina de tus sueños o necesitas mantenimiento experto? Contáctanos hoy para un presupuesto sin compromiso. Nuestro equipo está listo para ayudarte.
          </p>
          <a
            href="/contact"
            className="bg-accent text-white px-10 py-5 text-[15px] font-bold uppercase hover:bg-accent/90 transition-colors mb-16 tracking-widest"
          >
            Contáctanos
          </a>

          <div className="w-full h-px bg-white/20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between w-full text-white/60 text-sm gap-4">
            <p>Copyright © 2026 | Desarrollado por Pool Services</p>
            <p>Dirección: 123 Quinta Avenida, Nueva York, NY 10160, EE.UU.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
