# Tony Robbins Design System - Análisis del HTML Original

## Colores Principales (extraídos del HTML)

### Colores de Marca
- **Primary Blue**: #2764ff (azul principal - muy usado)
- **Primary Orange**: #ff9700 (naranja/amarillo para CTAs)
- **Primary Green**: #3ceba0 (verde lima para acentos)

### Colores de Fondo
- **bg-black**: Negro puro para secciones oscuras
- **bg-white**: Blanco para secciones claras
- **bg-contrast**: Color de contraste (probablemente verde lima)
- **bg-primary-1**: Fondo primario 1
- **bg-primary-2**: Fondo primario 2

### Colores de Texto
- **text-white**: Texto blanco
- **text-black**: Texto negro
- **text-contrast**: Texto en color de contraste
- **text-primary**: Texto en color primario
- **text-label**: Texto para etiquetas

### Colores Adicionales
- #424242 - Gris oscuro
- #7c7c7c - Gris medio
- #bcbcbc - Gris claro
- #074169 - Azul oscuro
- #8840ff - Púrpura
- #3470cb - Azul medio
- #05775c - Verde oscuro
- #f77a81 - Rosa/coral
- #4d1235 - Borgoña
- #fbf073 - Amarillo claro
- #6ecf55 - Verde claro
- #37b1ff - Azul claro
- #21b8cd - Turquesa

## Tipografía

### Pesos de Fuente
- **font-medium**: Peso principal (219 usos - el más común)
- **font-bold**: Para títulos importantes (8 usos)
- **font-mono**: Para etiquetas y textos pequeños (13 usos)
- **font-sans**: Fuente sans-serif base

### Tracking (espaciado de letras)
- **tracking-wide**: Espaciado amplio (33 usos)
- **tracking-tighter**: Espaciado más cerrado para títulos grandes (10 usos)

### Tamaños de Texto
- **text-xs**: Extra pequeño (68 usos)
- **text-sm**: Pequeño (65 usos)
- **text-base**: Base (46 usos)
- **text-xl**: Extra grande (9 usos)
- **text-xxl**: Doble extra grande (17 usos)
- **text-xxxl**: Triple extra grande (9 usos)
- **text-3xl**: 3 extra grande (2 usos)

## Temas
- **theme--dark**: Tema oscuro (21 usos)
- **theme--light**: Tema claro (5 usos)

## Estructura de Clases Principales

### Botones
```
cursor-pointer group inline-flex items-center justify-center gap-2 
font-medium text-center tracking-wide rounded-full duration-500 
border border-contrast bg-contrast hover:bg-contrast/80 text-primary 
w-auto text-xs md:text-sm py-3 md:py-4 px-6 md:px-8
```

### Cards de Eventos
```
relative flex aspect-portrait translate-x-0 items-end overflow-hidden 
rounded-2xl bg-white/10 text-white
```

### Gradientes
- **bg-gradient-to-t**: Gradiente hacia arriba (27 usos)
- **bg-gradient-to-b**: Gradiente hacia abajo (7 usos)
- Ejemplo: `from-black/80` para overlay oscuro

## Espaciado y Layout
- **wrapper**: Contenedor principal
- **container**: Contenedor secundario
- Padding responsivo: `py-10 md:py-20`
- Espaciado: `space-y-5 lg:space-y-10`

## Bordes y Esquinas
- **rounded-full**: Para botones
- **rounded-2xl**: Para cards
- **rounded-xl**: Para elementos medianos

## Animaciones
- **duration-500**: Transición de 500ms
- **hover:translate-x-1**: Movimiento en hover
- **hover:opacity-100**: Cambio de opacidad
