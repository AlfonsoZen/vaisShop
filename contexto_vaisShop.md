# Project Context: vaisShop

## 1. Visión General del Proyecto
"vaisShop" es una plataforma de e-commerce con arquitectura Headless diseñada para digitalizar las ventas de PYMES, con un enfoque central en el "Comercio Experiencial". El diferenciador principal es la visualización de los productos estrella ("Hero Products") mediante modelos 3D interactivos y realistas en la web, con el objetivo de elevar las tasas de conversión y la confianza del usuario.

El MVP (Minimum Viable Product) será una tienda para la venta de audífonos OEM (estilo Apple). Se proveerá un repositorio heredado ("legacy") que servirá estrictamente como referencia visual y fuente de assets 3D, pero el código base debe generarse desde cero bajo estándares modernos.

## 2. Stack Tecnológico
* **Entorno Base:** Node.js
* **Frontend Framework:** Remix (utilizando el framework Shopify Hydrogen)
* **Estilos:** Tailwind CSS
* **Experiencia 3D (WebGL):** Three.js + React Three Fiber (R3F) + @react-three/drei
* **Backend & Motor de E-commerce:** Shopify Storefront API (vía GraphQL)
* **Gestor de Paquetes:** npm

## 3. Arquitectura del Sistema
* **Capa de Presentación (Frontend):** Controla toda la interfaz de usuario, el enrutamiento, la creación del carrito de compras virtual y la renderización en tiempo real del Canvas 3D para interactuar con los modelos (`.gltf`/`.glb`).
* **Capa de Datos y Lógica (Backend):** Shopify gestionará el catálogo de productos, inventario, precios, autenticación de usuarios y el procesamiento de pagos (Checkout seguro). Las URLs de los modelos 3D de cada producto se almacenarán en los "Metafields" (Metacampos) de Shopify para ser consumidos vía GraphQL.

## 4. Directivas de Desarrollo para gemini-cli
1.  **Análisis del Repositorio Legacy:** Revisa el código y los archivos del repositorio anterior proporcionado **únicamente** con el fin de extraer:
    * El diseño general de la interfaz (colores, tipografías, distribución).
    * Los assets estáticos (específicamente el modelo 3D de los audífonos y texturas).
    * La lógica base del setup 3D (luces, posicionamiento de cámara y sombras), si es útil.
2.  **Prohibición de Refactorización Legacy:** No intentes actualizar las dependencias, resolver conflictos ni refactorizar la arquitectura del repositorio anterior. La estructura antigua se considera obsoleta.
3.  **Generación de Nuevo Entorno:** A partir de los elementos rescatables del paso 1, inicializa un proyecto completamente nuevo utilizando el stack tecnológico definido en la sección 2.
4.  **Hitos de Desarrollo (MVP):**
    * Inicializar el boilerplate de Shopify Hydrogen.
    * Crear la conexión mediante GraphQL para extraer la información de un producto de prueba.
    * Integrar un componente base de React Three Fiber que cargue y muestre el modelo 3D de los audífonos.
    * Implementar una interacción funcional: permitir al usuario cambiar el color del modelo 3D en el Canvas, vinculado a las variantes del producto extraídas de Shopify.
