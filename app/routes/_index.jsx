import EarphonesScene from "../components/World/EarphonesScene"
import { ShoppingBag, ArrowRight, Star } from "lucide-react"

export default function Index() {
  return (
    <div className="min-h-screen bg-[#E7ECEF] font-sans selection:bg-accent/20 overflow-x-hidden">
      {/* Header Minimalista */}
      <nav className="flex justify-between items-center px-12 py-8 bg-transparent border-b border-black/5">
        <div className="flex items-center gap-3">
          <img src="/assets/earphones.svg" alt="logo" className="w-7 opacity-80" />
          <h1 className="text-xl font-black tracking-widest uppercase text-dark/90">VAIS</h1>
        </div>
        
        <ul className="hidden md:flex gap-12 font-medium text-sm tracking-[0.2em] uppercase text-dark/70">
          <li className="hover:text-dark cursor-pointer transition-colors border-b-2 border-transparent hover:border-dark pb-1">Series</li>
          <li className="hover:text-dark cursor-pointer transition-colors border-b-2 border-transparent hover:border-dark pb-1">Studio</li>
          <li className="hover:text-dark cursor-pointer transition-colors border-b-2 border-transparent hover:border-dark pb-1">Explore</li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="relative group">
            <ShoppingBag className="w-5 h-5 text-dark/80 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 bg-primary text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[80vh] items-center">
        {/* Lado Izquierdo: Tipografía Premium */}
        <div className="space-y-12 order-2 lg:order-1 text-center lg:text-left z-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-md rounded-full border border-black/5 text-xs font-bold tracking-widest text-primary uppercase">
            <Star className="w-3 h-3 fill-primary" /> Nuevo Lanzamiento
          </div>

          <h2 className="text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-dark">
            Sonido <br />
            <span className="text-gradient">Absoluto.</span>
          </h2>

          <p className="text-lg lg:text-xl text-dark/60 max-w-lg leading-relaxed font-light">
            Diseñados para desaparecer. La nueva generación de audífonos con cancelación de ruido activa y transductores de alta fidelidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
            <button className="bg-dark text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
              Comprar Ahora <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-dark/20 text-dark px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:border-dark transition-all">
              Especificaciones
            </button>
          </div>
        </div>

        {/* Lado Derecho: Canvas 3D (Sin bordes ni sombras externas) */}
        <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
          {/* Aura de fondo contenida */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="w-full h-full flex items-center justify-center">
            <EarphonesScene />
          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/5 opacity-40 text-xs font-bold tracking-widest uppercase">
        <p>© 2026 VAIS. Crafted with Three.js & Shopify.</p>
        <div className="flex gap-10">
          <span>Privacidad</span>
          <span>Términos</span>
        </div>
      </footer>
    </div>
  )
}
