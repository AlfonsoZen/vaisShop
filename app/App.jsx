import Nav from "./components/Nav/Nav.component"
import EarphonesScene from "./components/World/EarphonesScene"
import { ShoppingBag, ArrowRight } from "lucide-react"

const App = () => {
  return (
    <div className="min-h-screen bg-light font-sans text-dark">
      {/* Header / Nav */}
      <nav className="flex justify-between items-center px-8 py-6 bg-dark text-light shadow-xl">
        <div className="flex items-center gap-2">
          <img src="/src/assets/earphones.svg" alt="logo" className="w-8 invert" />
          <h1 className="text-2xl font-black tracking-tighter italic">VAISSHOP</h1>
        </div>
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-accent cursor-pointer transition-colors">Home</li>
          <li className="hover:text-accent cursor-pointer transition-colors border-b-2 border-accent">Shop</li>
          <li className="hover:text-accent cursor-pointer transition-colors">Contact</li>
        </ul>
        <div className="flex items-center gap-4">
          <ShoppingBag className="w-6 h-6 hover:text-accent cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-black leading-none">
            Los mejores <br />
            <span className="text-accent underline decoration-primary decoration-8">Audífonos</span> <br />
            al mejor <span className="text-primary italic">Precio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-md">
            Experimenta el sonido de alta fidelidad con nuestros audífonos OEM. 
            Calidad premium a una fracción del costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-primary hover:bg-dark text-light px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-2xl">
              Comprar Ahora <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-dark text-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-dark hover:text-light transition-all">
              Ver Detalles
            </button>
          </div>
        </div>

        {/* 3D Canvas Container */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-1000"></div>
          <EarphonesScene color="#D8A47F" />
        </div>
      </main>

      {/* Features Section */}
      <footer className="bg-dark text-light/50 py-12 mt-24 text-center">
        <p className="">&copy; 2026 VAISSHOP. Powered by Shopify Headless & R3F.</p>
      </footer>
    </div>
  )
}

export default App
