
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('CRITICAL: Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
}

export const supabase = (supabaseUrl && supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : null as any; // Using 'as any' to allow the rest of the app to load, though Supabase calls will fail.

export type Article = {
    id?: string;
    title: string;
    subtitle?: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string;
    summary: string;
    studyGuide: string;
    analysis: string;
};

export type Favorite = {
    user_id: string;
    content_id: string; // Ghost post slug
    title: string;
    image?: string;
};

export async function toggleFavorite(favorite: Favorite) {
    if (!supabase) return;

    // Check if exists
    const { data: existing } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', favorite.user_id)
        .eq('content_id', favorite.content_id)
        .single();

    if (existing) {
        const { error } = await supabase
            .from('favorites')
            .delete()
            .eq('user_id', favorite.user_id)
            .eq('content_id', favorite.content_id);
        if (error) throw error;
        return { action: 'removed' };
    } else {
        const { error } = await supabase
            .from('favorites')
            .insert([favorite]);
        if (error) throw error;
        return { action: 'added' };
    }
}

export async function getFavorites(userId: string) {
    if (!supabase) return [];
    const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', userId);
    if (error) throw error;
    return data;
}

export async function uploadArticle(article: Article) {
    if (!supabase) return;
    const { data, error } = await supabase
        .from('articles')
        .insert([article])
        .select();

    if (error) throw error;
    return data;
}
