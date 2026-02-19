# Instrucciones de Mejora Visual y Funcional 🚀

Este documento detalla los cambios realizados para llevar el proyecto al nivel de excelencia requerido (Apple Style).

## 🛠️ Archivos Actualizados

### 1. HeroSection.tsx
- **Cambio:** Se eliminó el `iframe` de video (que era lento y genérico).
- **Mejora:** Se implementó un motor de **Partículas en Canvas** que carga instantáneamente y da una sensación de "energía mental" y sofisticación.
- **Detalles:** Animación de conexiones, modo responsive y typography guide aplicada.

### 2. Header.tsx
- **Cambio:** Se unificó el sistema de menús.
- **Mejora:** El menú móvil ahora es un **Overlay inmersivo full-screen**. 
- **Funcionalidad:** Bloquea el scroll del cuerpo (`body`) cuando está abierto y se cierra automáticamente al navegar.

### 3. EventsCarousel.tsx
- **Cambio:** Se ajustó el layout para pantallas pequeñas.
- **Mejora:** Las tarjetas ahora ocupan el ancho casi total en móvil (`calc(100vw-80px)`) permitiendo un scroll horizontal natural y predecible.

---

## 📋 Pasos para Mantenimiento
1. **Tipografía:** Siempre consultar `TYPOGRAPHY_GUIDE.md` antes de crear un nuevo componente.
2. **Layout:** Usar la clase `content-focused` (definida en `index.css`) para mantener el contenido centrado y sin sidebars distractores.
3. **Animaciones:** Usar `framer-motion` con duraciones entre `0.5s` y `0.8s` para efectos de entrada.

---

## 📱 Testing en Móvil
Verificar siempre que:
- El logo `ECDLI` esté a la izquierda y el menú a la derecha.
- Los botones tengan buen `tap target` (mínimo 44px de alto).
- El texto no se corte ni se desborde del contenedor.

---
"Menos es más, pero solo cuando el 'menos' es perfecto." ✨
