"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfterSlider() {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[clamp(40px,6vw,80px)] font-bold text-foreground uppercase leading-tight">
            Mira la diferencia
          </h2>
          <p className="text-foreground/70 mt-4 text-lg">
            Desliza para ver nuestras increíbles transformaciones de piscinas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage 
                src="/images/before.png" 
                alt="Piscina Antes" 
              />
            }
            itemTwo={
              <ReactCompareSliderImage 
                src="/images/after.png" 
                alt="Piscina Después" 
              />
            }
            className="h-[400px] md:h-[600px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
