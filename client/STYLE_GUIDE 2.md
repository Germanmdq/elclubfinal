# Guía de Estilos y Design System

Esta guía documenta las clases y componentes globales definidos en `src/index.css` para asegurar la consistencia visual en todas las páginas.

## Colores y Temas

El sistema soporta temas claro y oscuro, además de temas específicos de sección.

### Variables Principales (CSS Variables)
Se usan automáticamente con las clases de utilidad de Tailwind, pero están disponibles si necesitas valores raw.
- `--color-tr-blue`: `#2764ff` (Azul Principal)
- `--color-tr-orange`: `#ff9700` (Naranja Acción)
- `--color-tr-green`: `#3ceba0` (Verde/Lima Acento)

### Clases de Tema
Aplica estas clases a un contenedor padre (como un `section` o `div`) para cambiar el contexto de color.
- `.theme--dark`: Fondo negro (`#0a0a0a`), texto blanco. (Estándar para secciones oscuras)
- `.theme--light`: Fondo blanco, texto negro.
- `.theme--blue`: Fondo azul corporativo, texto blanco.
- `.theme--orange`: Fondo naranja, texto negro.

## Layout y Estructura

### Contenedores
- `.wrapper`: El contenedor principal para secciones de ancho completo. Limita el ancho a `1400px` y añade padding lateral responsivo (`px-5 md:px-10`).
  ```tsx
  <div className="wrapper">
    {/* Contenido aquí */}
  </div>
  ```
- `.section-spacing`: Añade padding vertical estándar (`py-10 md:py-20`). Úsalo en etiquetas `<section>`.

### Ejemplo de Sección Estándar
```tsx
<section className="theme--dark section-spacing">
  <div className="wrapper">
    <h2 className="text-xxl mb-5">Título de Sección</h2>
    {/* Contenido */}
  </div>
</section>
```

## Tipografía

El proyecto usa una escala tipográfica personalizada.

- `.text-xxxl`: Para títulos de héroe o muy grandes (`text-3xl` a `text-6xl`).
- `.text-xxl`: Para títulos de sección principales (`text-2xl` a `text-4xl`).
- `.text-label`: Para subtítulos pequeños, etiquetas o categorías. (Monospace, uppercase, tracking-wide).
- `h1` a `h6`: Tienen aplicados por defecto `font-medium` y `tracking-tight`.

## Componentes UI

### Botones
Clases predefinidas para botones consistentes.
- `.btn-contrast`: Botón principal de acción. Fondo verde lima (`#3ceba0`), texto negro.
- `.btn-white`: Botón estilo "glassmorphism". Fondo blanco semitransparente, efecto blur. Ideal sobre fondos oscuros o imágenes.
- `.btn-outline`: Botón con borde blanco, fondo transparente.

```tsx
<button className="btn-contrast">
  Comenzar Ahora
</button>
```

### Cards (Tarjetas)
- `.card-event`: Estilo base para tarjetas. Bordes redondeados (`rounded-2xl`), fondo semitransparente (`bg-white/10`), texto blanco.
- `.card-portrait`: Fuerza una relación de aspecto 3:4 (vertical).
- `.card-video`: Fuerza una relación de aspecto 16:9 (video).

### Elementos de Navegación
- `.nav-pill`: Botones redondos pequeños (frecuentemente usados para flechas de carrusel). Fondo verde, `w-10 h-10`.

## Utilidades Visuales

### Gradientes
Para superposiciones de texto sobre imágenes.
- `.gradient-overlay-bottom`: Gradiente negro desde abajo hacia transparente.
- `.gradient-overlay-top`: Gradiente negro desde arriba hacia transparente.

## Iconos
Se recomienda usar la librería `lucide-react` para iconos, manteniendo coherencia con el diseño existente.
