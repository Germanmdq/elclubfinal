
import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Save, Upload as UploadIcon } from "lucide-react";
import { toast } from "sonner";
import { uploadArticle } from "@/lib/supabase";

export default function Upload() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        author: "Neville Goddard", // Default for now
        date: new Date().toISOString().split('T')[0],
        readTime: "15 min de lectura",
        category: "Nuevo Pensamiento",
        image: "/neville-purpose.png",
        content: "",
        summary: "",
        studyGuide: "",
        analysis: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await uploadArticle(formData);
            toast("Artículo subido", {
                description: "El artículo se ha guardado correctamente en Supabase.",
            });
            // Reset form or redirect?
        } catch (error) {
            console.error(error);
            toast.error("Error", {
                description: "Hubo un problema al subir el artículo. Revisa la consola o tus credenciales.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#a855f7] selection:text-black">
            <Header />

            <div className="pt-32 pb-16 wrapper">
                <Link href="/biblioteca" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Volver a la Biblioteca
                </Link>

                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-serif">Subir Nuevo Texto</h1>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-[#a855f7] text-black px-6 py-2 rounded-full font-bold hover:bg-[#a855f7]/90 transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            {loading ? "Subiendo..." : <><UploadIcon className="w-4 h-4" /> Publicar</>}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Título</label>
                                <input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                    placeholder="Ej: Revelación del Propósito"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Subtítulo</label>
                                <input
                                    name="subtitle"
                                    value={formData.subtitle}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                    placeholder="Ej: Conferencias de Neville Goddard"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Autor</label>
                                <select
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                >
                                    <option value="Neville Goddard">Neville Goddard</option>
                                    <option value="Joseph Murphy">Joseph Murphy</option>
                                    <option value="Florence Scovel Shinn">Florence Scovel Shinn</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Categoría</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                >
                                    <option value="Nuevo Pensamiento">Nuevo Pensamiento</option>
                                    <option value="Metafísica">Metafísica</option>
                                    <option value="Cristianismo Místico">Cristianismo Místico</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Fecha</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Tiempo de Lectura</label>
                                <input
                                    name="readTime"
                                    value={formData.readTime}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                    placeholder="Ej: 15 min"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Contenido Principal (Markdown)</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="w-full h-64 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none font-mono text-sm"
                                placeholder="# Título..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Resumen Ejecutivo</label>
                            <textarea
                                name="summary"
                                value={formData.summary}
                                onChange={handleChange}
                                className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Guía de Estudio</label>
                                <textarea
                                    name="studyGuide"
                                    value={formData.studyGuide}
                                    onChange={handleChange}
                                    className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Análisis</label>
                                <textarea
                                    name="analysis"
                                    value={formData.analysis}
                                    onChange={handleChange}
                                    className="w-full h-32 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-white/10 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
