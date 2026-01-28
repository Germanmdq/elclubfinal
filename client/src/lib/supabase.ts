
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.warn('Missing Supabase env variables');
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '');

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

export async function uploadArticle(article: Article) {
    const { data, error } = await supabase
        .from('articles')
        .insert([article])
        .select();

    if (error) throw error;
    return data;
}
