# vaisShop: "Sonido Absoluto" 🎧

## 1. Visión del Proyecto
**vaisShop** es una plataforma de e-commerce Headless de alta gama, diseñada para ofrecer una experiencia de compra inmersiva y premium. El enfoque central es el **"Comercio Experiencial"**, utilizando modelos 3D interactivos de ultra-realismo para digitalizar productos estrella (Hero Products).

El MVP actual presenta unos audífonos con una estética de polímero pulido ("Premium Glossy Plastic"), logrando una integración total entre la interfaz de usuario (UI) y un motor 3D de alta fidelidad.

## 2. Stack Tecnológico Finalizado (Visual MVP)
*   **Framework:** React Router 7 (Core de Shopify Hydrogen 2026.1).
*   **3D Engine:** Three.js + R3F + @react-three/drei.
*   **Estilos:** Tailwind CSS v3.4 (Tipografía Inter, jerarquía visual de lujo).
*   **Runtime:** Shopify Hydrogen / Vite 6.
*   **Branding:** Favicon dinámico y assets SVG optimizados con `currentColor`.

## 3. Hitos Alcanzados hoy
- [x] **Arquitectura Hydrogen:** Estructura basada en `app/` totalmente funcional y libre de errores SSR.
- [x] **Premium UI Design:** Layout responsivo con orden inteligente (Título -> Texto -> Modelo -> Botones en móvil).
- [x] **Motor 3D Realista:** 
    - Acabado de plástico pulido estilo Apple (`metalness: 0.05`).
    - Sombras de contacto suaves (`ContactShadows`) y elevación equilibrada.
    - Animación de levitación fluida (`Float`).
- [x] **Identidad Visual:** Integración de favicon y corrección de visibilidad del logo dinámico.

## 4. Próximos Pasos (Fase 2)
1.  **Shopify Storefront API:** Vincular con el catálogo real mediante GraphQL.
2.  **Color Picker Dinámico:** Cambiar el material del modelo según la variante de Shopify.
3.  **Shopping Experience:** Carrito lateral e integración de Checkout seguro.
