# GUÍA DE IMPLEMENTACIÓN GHOST + REACT

## 1. VARIABLES DE ENTORNO

Crear archivo `.env` en la raíz del proyecto:

```env
# Ghost CMS
VITE_GHOST_URL=https://tudominio.com
VITE_GHOST_API_KEY=tu_content_api_key_aqui

# Supabase (ya las tenés)
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_key

# Groq API (para tutor IA)
VITE_GROQ_API_KEY=tu_groq_key
```

## 2. OBTENER GHOST API KEY

1. Ir a tu Ghost Admin: `https://tudominio.com/ghost`
2. Settings → Integrations
3. Click "Add custom integration"
4. Nombre: "React App"
5. Copiar el **Content API Key**
6. Pegar en `.env` como `VITE_GHOST_API_KEY`

## 3. ESTRUCTURA DE TAGS EN GHOST

Crear estos tags en Ghost Admin para organizar contenido:

**Tags principales:**
- `conferencia` - Para conferencias de Neville
- `libro` - Para libros
- `video` - Para videoteca
- `taller` - Para talleres
- `aggiornato` - Para contenido Aggiornato
- `testimonio` - Para testimonios
- `biblia` - Para Biblia Metafísica

**Tags de autor (26 autores):**
- `neville-goddard`
- `joseph-murphy`
- `florence-scovel-shinn`
- etc...

## 4. EJEMPLOS DE USO

### A. Biblioteca de Conferencias

```typescript
// client/src/pages/Biblioteca.tsx
import { useState } from 'react';
import { ghost, useGhostPosts } from '@/lib/ghost';

export function Biblioteca() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  
  // Construir filtro dinámico
  const filter = [
    'tag:conferencia',
    selectedYear && `tag:${selectedYear}`,
    selectedTechnique && `tag:${selectedTechnique}`
  ].filter(Boolean).join('+');
  
  const { posts: conferencias, loading } = useGhostPosts({ 
    filter,
    limit: 50,
    order: 'published_at DESC'
  });
  
  if (loading) return <LoadingSpinner />;
  
  return (
    <div>
      {/* Filtros */}
      <div className="filters">
        {/* ... */}
      </div>
      
      {/* Grid de conferencias */}
      <div className="grid grid-cols-3 gap-6">
        {conferencias.map(conf => (
          <ConferenceCard key={conf.id} conference={conf} />
        ))}
      </div>
    </div>
  );
}
```

### B. Single Conferencia

```typescript
// client/src/pages/Conference.tsx
import { useParams } from 'wouter';
import { useGhostPost } from '@/lib/ghost';

export function ConferencePage() {
  const { slug } = useParams();
  const { post, loading } = useGhostPost(slug);
  
  if (loading) return <LoadingSpinner />;
  if (!post) return <NotFound />;
  
  return (
    <article className="max-w-4xl mx-auto">
      <header>
        <h1 className="text-5xl font-bold">{post.title}</h1>
        {/* ... */}
      </header>
      
      <div 
        className="prose prose-invert max-w-none mt-8"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
```
