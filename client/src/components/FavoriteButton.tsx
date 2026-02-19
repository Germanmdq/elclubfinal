import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { supabase, toggleFavorite, type Favorite } from "@/lib/supabase";
import { toast } from "sonner";

interface FavoriteButtonProps {
    contentId: string; // post slug
    title: string;
    image?: string;
}

export default function FavoriteButton({ contentId, title, image }: FavoriteButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // In a real app, we'd get this from an Auth context
    const mockUserId = "user_123";

    useEffect(() => {
        const checkFavorite = async () => {
            if (!supabase) return;
            const { data } = await supabase
                .from('favorites')
                .select('*')
                .eq('user_id', mockUserId)
                .eq('content_id', contentId)
                .single();

            if (data) setIsFavorite(true);
        };

        checkFavorite();
    }, [contentId]);

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!supabase) {
            toast("Error: Supabase no está configurado");
            return;
        }

        setIsLoading(true);
        try {
            const result = await toggleFavorite({
                user_id: mockUserId,
                content_id: contentId,
                title,
                image
            });

            if (result?.action === 'added') {
                setIsFavorite(true);
                toast(`Añadido a favoritos: ${title}`);
            } else {
                setIsFavorite(false);
                toast(`Eliminado de favoritos: ${title}`);
            }
        } catch (error) {
            console.error(error);
            toast("Error al actualizar favoritos");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isLoading}
            className={`
                flex items-center justify-center p-2 rounded-full transition-all duration-300
                ${isFavorite
                    ? "bg-[#a855f7]/10 text-[#a855f7] border border-white/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"}
            `}
            title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
            <Heart
                className={`w-5 h-5 transition-all ${isFavorite ? "fill-current scale-110" : "scale-100"}`}
            />
        </button>
    );
}
