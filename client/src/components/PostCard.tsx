import { motion } from "framer-motion";
import { Clock, Lock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { GhostPost } from "@/lib/ghost";
import { getPostPreview, formatDate, calculateReadingTime } from "@/lib/postHelpers";

interface PostCardProps {
    post: GhostPost;
    index?: number;
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
    const isPremium = post.visibility !== 'public';
    const tagName = post.primary_tag?.name || 'Artículo';

    // Debug: Ver qué tiene el post (Detallado para diagnóstico)
    console.log('POST DEBUG DETALLADO:', {
        title: post.title,
        hasCustomExcerpt: !!post.custom_excerpt,
        customExcerptLength: post.custom_excerpt?.length || 0,
        hasExcerpt: !!post.excerpt,
        excerptLength: post.excerpt?.length || 0,
        hasPlaintext: !!post.plaintext,
        plaintextLength: post.plaintext?.length || 0,
        hasHtml: !!post.html,
        htmlLength: post.html?.length || 0
    });

    const preview = getPostPreview(post, 180);
    console.log('PREVIEW GENERADO:', preview);

    const publishDate = formatDate(post.published_at);
    const readingTime = calculateReadingTime(post);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
        >
            <Link href={`/biblioteca/texto/${post.slug}`}>
                <article className="group relative bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 cursor-pointer h-full flex flex-col">

                    {/* Image */}
                    {post.feature_image && (
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={post.feature_image}
                                alt={post.title}
                                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {isPremium && (
                                <div className="absolute top-4 right-4">
                                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                                        <Lock className="w-3 h-3 text-white/60" />
                                        <span className="text-xs font-bold uppercase text-white/60">Premium</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">

                        {/* Meta */}
                        <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 font-bold tracking-tight uppercase">
                            <span className="text-white/60">{tagName}</span>
                            <span className="text-white/20">•</span>
                            <span className="text-white/40">{publishDate}</span>
                            <span className="text-white/20">•</span>
                            <div className="flex items-center gap-1 text-white/40">
                                <Clock className="w-3 h-3" />
                                <span>{readingTime} min</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-black tracking-tighter text-white mb-3 line-clamp-2 leading-tight">
                            {post.title}
                        </h3>

                        {/* Preview */}
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1 font-light">
                            {preview}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-white transition-colors">
                                {isPremium ? 'Desbloquear' : 'Leer'}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
