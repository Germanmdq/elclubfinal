import { GhostPost } from "@/lib/ghost";

export function getPostPreview(post: GhostPost, maxLength: number = 200): string {
    // 1. Custom excerpt primero
    if (post.custom_excerpt?.trim()) {
        return truncateText(post.custom_excerpt, maxLength);
    }

    // 2. Excerpt auto de Ghost
    if (post.excerpt?.trim()) {
        return truncateText(post.excerpt, maxLength);
    }

    // 3. Plaintext
    if (post.plaintext?.trim()) {
        return truncateText(post.plaintext, maxLength);
    }

    // 4. Limpiar HTML
    if (post.html?.trim()) {
        const text = stripHtml(post.html);
        return truncateText(text, maxLength);
    }

    // 5. Fallback
    return "Explorá esta profunda enseñanza sobre la consciencia e imaginación.";
}

function stripHtml(html: string): string {
    if (!html) return "";

    // Usar el DOM para extraer el texto de forma robusta
    const temp = document.createElement('div');
    temp.innerHTML = html;

    // Eliminar elementos que no queremos en el preview
    const toRemove = temp.querySelectorAll('script, style, figure, blockquote');
    toRemove.forEach(el => el.remove());

    // Obtener el texto limpio
    return temp.textContent || temp.innerText || "";
}

function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }

    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    if (lastSpace > 0) {
        return truncated.substring(0, lastSpace) + '...';
    }

    return truncated + '...';
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

export function calculateReadingTime(post: GhostPost): number {
    if (post.reading_time) {
        return post.reading_time;
    }
    const words = post.plaintext?.split(/\s+/).length || 0;
    return Math.ceil(words / 200) || 1;
}
