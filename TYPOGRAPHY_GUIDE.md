# Guía de Tipografía - ECDLI 2024 (Apple Edition) 🍏

Este documento define el sistema tipográfico oficial para el proyecto, asegurando consistencia y un look premium "Apple Style" en todo el sitio.

## 🏁 Fundamentos
- **Fuente:** `Inter` (Sans-Serif) para todo.
- **Tracking:** Siempre negativo en títulos (`tracking-tighter` o `tracking-tight`).
- **Color:** Blanco puro o Gris suave (`text-gray-400/500`).

---

## 🏗️ Clases de Utilidad (Copy-Paste)

### 1. Títulos Gigantes (Hero)
Para secciones principales o Hero sections.
```tsx
<h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] text-white">
  Tu Título Aquí
</h1>
```

### 2. Títulos de Sección (H2)
Para encabezados de secciones internas.
```tsx
<h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
  Nombre de la Sección
</h2>
```

### 3. Subtítulos / Etiquetas (Badges)
Para texto arriba de los títulos.
```tsx
<div className="flex items-center gap-2 mb-6">
  <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
    Categoría / Etiqueta
  </span>
</div>
```

### 4. Cuerpo de Texto (Body)
Para lectura prolongada y descripciones.
```tsx
<p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed tracking-tight">
  Contenido descriptivo con aire y elegancia.
</p>
```

### 5. Botones (Primary)
```tsx
<button className="bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-white/90 transition-all active:scale-95">
  Acción Principal
</button>
```

---

## 🚫 Reglas de Oro
1. **Nunca** uses fuentes Serif (Playfair, etc.).
2. **Nunca** uses tracking normal en títulos (siempre `tighter`).
3. **Nunca** uses colores vibrantes fuera de pequeños detalles tácticos.
4. **Foco en el vacío:** Deja espacio suficiente entre elementos tipográficos.

---
"La arquitectura de la información comienza en la tipografía." ✍️
