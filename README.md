# vaisShop: "Sonido Absoluto" 🎧

## 1. Visión del Proyecto
**vaisShop** es una plataforma de e-commerce Headless de alta gama, diseñada para ofrecer una experiencia de compra inmersiva y premium. El enfoque central es el **"Comercio Experiencial"**, utilizando modelos 3D interactivos de ultra-realismo para digitalizar productos estrella (Hero Products).

El MVP actual presenta unos audífonos OEM con una estética inspirada en marcas de lujo como Apple y Beats, logrando una integración fluida entre la interfaz de usuario (UI) y el canvas 3D.

## 2. Stack Tecnológico Modernizado
*   **Framework:** React Router 7 (Core de Shopify Hydrogen 2026.1).
*   **3D Engine:** Three.js + React Three Fiber (R3F) + @react-three/drei.
*   **Estilos:** Tailwind CSS v3.4 (con tipografía Inter y jerarquía visual de alto impacto).
*   **Runtime:** Shopify Hydrogen / Vite 6.
*   **Backend:** Shopify Storefront API (GraphQL).

## 3. Logros de esta Sesión (MVP Visual)
- [x] **Arquitectura Hydrogen/React Router 7:** Migración exitosa de legacy a una estructura moderna basada en `app/`.
- [x] **Premium UI Design:** Implementación de una interfaz minimalista con tipografía imponente y espacios negativos optimizados.
- [x] **Motor 3D Realista:** Configuración de iluminación de estudio, sombras de contacto (`ContactShadows`) y mapeo tonal ACES Filmic.
- [x] **Optimización SSR:** Resolución de conflictos de hidratación y manejo de streams en servidor para el Canvas 3D.
- [x] **Asset Pipeline:** Migración y optimización de modelos GLTF y assets visuales.

## 4. Próximos Pasos (Core Business)
1.  **Conexión Shopify:** Configurar Storefront API para sincronizar precios y stock reales.
2.  **Product Personalizer:** Vincular variantes de color de Shopify con los materiales del modelo 3D.
3.  **Cart Experience:** Implementar el carrito lateral (`Drawer`) con lógica de Hydrogen.
4.  **Checkout:** Redirección segura al checkout nativo de Shopify.
