"use client";

import Hero from "@/components/Hero"
import dynamic from "next/dynamic"
import About from "@/components/About"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Reviews from "@/components/Reviews"

const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider"), { ssr: false })

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-x-hidden">
      <Hero />
      <BeforeAfterSlider />
      <About />
      <Services />
      <Gallery />
      <Reviews />
    </main>
  )
}
