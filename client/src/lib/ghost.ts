// ============================================
// GHOST API - PAQUETE COMPLETO
// ============================================
// Uso: Copiar todo este archivo a client/src/lib/ghost.ts

import { useState, useEffect } from 'react';

// ============================================
// 1. TYPES - TODOS LOS CAMPOS DE GHOST
// ============================================

export interface GhostPost {
    // IDs
    id: string;
    uuid: string;
    slug: string;

    // Contenido
    title: string;
    html: string;
    plaintext: string;
    excerpt: string;
    custom_excerpt: string | null;

    // Imágenes
    feature_image: string | null;
    feature_image_alt: string | null;
    feature_image_caption: string | null;

    // SEO
    meta_title: string | null;
    meta_description: string | null;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;

    // Fechas
    created_at: string;
    updated_at: string;
    published_at: string;

    // URLs
    url: string;
    canonical_url: string | null;

    // Relaciones
    tags?: GhostTag[];
    primary_tag?: GhostTag | null;
    authors?: GhostAuthor[];
    primary_author?: GhostAuthor | null;

    // Membresía
    visibility: 'public' | 'members' | 'paid' | 'tiers';
    tiers?: GhostTier[];

    // Otros
    featured: boolean;
    reading_time: number;
    access: boolean;
    comment_id: string;

    // Code injection
    codeinjection_head: string | null;
    codeinjection_foot: string | null;

    // Custom fields
    custom?: Record<string, any>;
}

export interface GhostTag {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    feature_image: string | null;
    visibility: 'public' | 'internal';
    meta_title: string | null;
    meta_description: string | null;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    canonical_url: string | null;
    accent_color: string | null;
    url: string;
    count?: { posts: number };
}

export interface GhostAuthor {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: string | null;
    location: string | null;
    facebook: string | null;
    twitter: string | null;
    meta_title: string | null;
    meta_description: string | null;
    url: string;
    count?: { posts: number };
}

export interface GhostTier {
    id: string;
    name: string;
    description: string | null;
    slug: string;
    active: boolean;
    type: 'free' | 'paid';
    welcome_page_url: string | null;
    created_at: string;
    updated_at: string;
    visibility: 'public' | 'none';
    benefits: string[];
    currency?: string;
    monthly_price?: number;
    yearly_price?: number;
}

export interface GhostSettings {
    title: string;
    description: string;
    logo: string | null;
    icon: string | null;
    accent_color: string;
    cover_image: string | null;
    lang: string;
    timezone: string;
    navigation: Array<{ label: string; url: string }>;
    secondary_navigation: Array<{ label: string; url: string }>;
}

export interface GhostQueryParams {
    filter?: string;
    include?: string;
    fields?: string;
    formats?: string;
    limit?: number | 'all';
    page?: number;
    order?: string;
}

// ============================================
// 2. CLIENT - API COMPLETA
// ============================================

class GhostClient {
    private url: string;
    private key: string;

    constructor(url: string, key: string) {
        this.url = url.replace(/\/$/, '');
        this.key = key;
    }

    private buildUrl(endpoint: string, params?: GhostQueryParams): string {
        const url = new URL(`${this.url}/ghost/api/content/${endpoint}/`);
        url.searchParams.set('key', this.key);

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    url.searchParams.set(key, String(value));
                }
            });
        }

        return url.toString();
    }

    private async fetch<T>(endpoint: string, params?: GhostQueryParams): Promise<T> {
        const url = this.buildUrl(endpoint, params);

        try {
            const response = await window.fetch(url);
            if (!response.ok) throw new Error(`Ghost API Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Ghost API error:', error);
            throw error;
        }
    }

    // POSTS
    async getPosts(params?: GhostQueryParams): Promise<GhostPost[]> {
        const data = await this.fetch<{ posts: GhostPost[] }>('posts', {
            include: 'tags,authors',
            formats: 'html,plaintext',
            ...params
        });
        return data.posts;
    }

    async getPostBySlug(slug: string): Promise<GhostPost> {
        const data = await this.fetch<{ posts: GhostPost[] }>(`posts/slug/${slug}`, {
            include: 'tags,authors',
            formats: 'html,plaintext'
        });
        return data.posts[0];
    }

    async getPostById(id: string): Promise<GhostPost> {
        const data = await this.fetch<{ posts: GhostPost[] }>(`posts/${id}`, {
            include: 'tags,authors',
            formats: 'html,plaintext'
        });
        return data.posts[0];
    }

    async getPostsByTag(tagSlug: string, params?: GhostQueryParams): Promise<GhostPost[]> {
        return this.getPosts({ filter: `tag:${tagSlug}`, ...params });
    }

    async getPostsByTags(tagSlugs: string[], params?: GhostQueryParams): Promise<GhostPost[]> {
        return this.getPosts({ filter: `tag:[${tagSlugs.join(',')}]`, ...params });
    }

    async getFeaturedPosts(params?: GhostQueryParams): Promise<GhostPost[]> {
        return this.getPosts({ filter: 'featured:true', ...params });
    }

    // PAGES
    async getPages(params?: GhostQueryParams): Promise<GhostPost[]> {
        const data = await this.fetch<{ pages: GhostPost[] }>('pages', params);
        return data.pages;
    }

    async getPageBySlug(slug: string): Promise<GhostPost> {
        const data = await this.fetch<{ pages: GhostPost[] }>(`pages/slug/${slug}`);
        return data.pages[0];
    }

    // TAGS
    async getTags(params?: GhostQueryParams): Promise<GhostTag[]> {
        const data = await this.fetch<{ tags: GhostTag[] }>('tags', {
            include: 'count.posts',
            ...params
        });
        return data.tags;
    }

    async getTagBySlug(slug: string): Promise<GhostTag> {
        const data = await this.fetch<{ tags: GhostTag[] }>(`tags/slug/${slug}`, {
            include: 'count.posts'
        });
        return data.tags[0];
    }

    async getPublicTags(): Promise<GhostTag[]> {
        return this.getTags({ filter: 'visibility:public' });
    }

    // AUTHORS
    async getAuthors(params?: GhostQueryParams): Promise<GhostAuthor[]> {
        const data = await this.fetch<{ authors: GhostAuthor[] }>('authors', {
            include: 'count.posts',
            ...params
        });
        return data.authors;
    }

    async getAuthorBySlug(slug: string): Promise<GhostAuthor> {
        const data = await this.fetch<{ authors: GhostAuthor[] }>(`authors/slug/${slug}`, {
            include: 'count.posts'
        });
        return data.authors[0];
    }

    // TIERS
    async getTiers(): Promise<GhostTier[]> {
        const data = await this.fetch<{ tiers: GhostTier[] }>('tiers');
        return data.tiers;
    }

    // SETTINGS
    async getSettings(): Promise<GhostSettings> {
        const data = await this.fetch<{ settings: GhostSettings }>('settings');
        return data.settings;
    }
}

// ============================================
// 3. INSTANCIA SINGLETON
// ============================================

const GHOST_URL = import.meta.env.VITE_GHOST_URL;
const GHOST_KEY = import.meta.env.VITE_GHOST_API_KEY;

if (!GHOST_URL || !GHOST_KEY) {
    console.warn('⚠️ Ghost credentials missing. Set VITE_GHOST_URL and VITE_GHOST_API_KEY');
}

export const ghost = new GhostClient(
    GHOST_URL || 'https://demo.ghost.io',
    GHOST_KEY || '22444f78447824223cefc48062'
);

// ============================================
// 4. REACT HOOKS
// ============================================

export function useGhostPosts(params?: GhostQueryParams) {
    const [posts, setPosts] = useState<GhostPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        ghost.getPosts(params)
            .then(setPosts)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [JSON.stringify(params)]);

    return { posts, loading, error };
}

export function useGhostPost(slug: string) {
    const [post, setPost] = useState<GhostPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!slug) return;

        ghost.getPostBySlug(slug)
            .then(setPost)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [slug]);

    return { post, loading, error };
}

export function useGhostTags() {
    const [tags, setTags] = useState<GhostTag[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        ghost.getPublicTags()
            .then(setTags)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { tags, loading, error };
}

export function useGhostTag(slug: string) {
    const [tag, setTag] = useState<GhostTag | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!slug) return;
        ghost.getTagBySlug(slug)
            .then(setTag)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [slug]);

    return { tag, loading, error };
}

export function useGhostAuthors() {
    const [authors, setAuthors] = useState<GhostAuthor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        ghost.getAuthors()
            .then(setAuthors)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { authors, loading, error };
}

export function useGhostAuthor(slug: string) {
    const [author, setAuthor] = useState<GhostAuthor | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!slug) return;
        ghost.getAuthorBySlug(slug)
            .then(setAuthor)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [slug]);

    return { author, loading, error };
}

export function useGhostSettings() {
    const [settings, setSettings] = useState<GhostSettings | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ghost.getSettings()
            .then(setSettings)
            .finally(() => setLoading(false));
    }, []);

    return { settings, loading };
}
