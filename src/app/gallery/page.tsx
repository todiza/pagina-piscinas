import Gallery from "@/components/Gallery";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

export default function GalleryPage() {
  return (
    <main className="flex flex-col relative overflow-x-hidden min-h-screen">
      {/* Page Header */}
      <section className="relative pt-40 pb-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-[clamp(40px,6vw,80px)] font-bold uppercase leading-none mb-4">
            Nuestro Trabajo
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos favoritos en todo el país.
          </p>
        </div>
        {/* Wave Shape Divider - Unique Asymmetric Path */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ transform: 'translateY(1px)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px] block">
            <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Reusing the Gallery Component */}
      <div className="pt-12">
        <Gallery />
      </div>

      {/* Additional Detailed Section */}
      <section className="py-24 bg-black/5">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold uppercase text-foreground mb-12 text-center">
            Antes y Después
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
              <BeforeAfterSlider 
                beforeImage="/images/before_1.png"
                afterImage="/images/after_1.png"
                className="mb-6 shadow-inner"
              />
              <h3 className="font-bold text-xl uppercase mb-2 text-primary">The Miami Resort Style</h3>
              <p className="text-foreground/70">Una remodelación completa que transforma un espacio vacío en un oasis moderno con borde infinito.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col">
              <BeforeAfterSlider 
                beforeImage="/images/before_2.png"
                afterImage="/images/after_2.png"
                className="mb-6 shadow-inner"
              />
              <h3 className="font-bold text-xl uppercase mb-2 text-primary">Texas Minimalist</h3>
              <p className="text-foreground/70">Líneas limpias, piedra blanca y la química del agua perfecta para una sensación de lujo de alta gama.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
