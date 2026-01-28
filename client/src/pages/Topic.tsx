
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from "wouter";

const Topic = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            <Header />

            <main className="max-w-[1400px] mx-auto pt-24">
                {/* Theme Blue Banner (Reverted) */}
                <section className="bg-gradient-to-r from-blue-900 to-[#2965ff] from-0% to-90% border border-white/10 px-10 py-12 text-white relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 bg-[#2965ff]/5"></div>
                    <div className="max-w-[1200px] mx-auto relative z-10">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 mb-6 opacity-80 text-sm font-medium">
                            <Link href="/" className="hover:underline">Inicio</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <Link href="/foro" className="hover:underline">Foro</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span>Neville Goddard</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight leading-tight">Debate: La "Locura" del Despertar Espiritual</h1>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-[#2965ff]"></span>
                                <span className="font-semibold uppercase tracking-wider text-[10px]">Discusión Abierta</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm font-medium text-white/80">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">visibility</span>
                                    <span>2.4k vistas</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">chat_bubble</span>
                                    <span>48 respuestas</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-lg">schedule</span>
                                    <span>Última actividad hace 4m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Discussion Body Layout */}
                <div className="flex flex-col lg:flex-row gap-8 px-6 py-8 md:px-10 max-w-[1400px] mx-auto">
                    {/* Posts Column */}
                    <div className="flex-1 space-y-px bg-white/5 rounded-xl shadow-sm border border-white/10 overflow-hidden">
                        {/* Single Message / Post #1 */}
                        <article className="p-8 border-b border-white/5">
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-xl bg-center bg-cover border border-white/10" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/44.jpg')" }}></div>
                                    <span className="bg-[#2965ff]/10 text-[#2965ff] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Moderador</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-white">Lucía Méndez</h4>
                                            <p className="text-xs font-medium uppercase tracking-[0.05em] text-slate-400">Editora Senior • hace 2h</p>
                                        </div>
                                        <div className="text-slate-400">
                                            <span className="material-symbols-outlined cursor-pointer hover:text-[#2965ff]">more_horiz</span>
                                        </div>
                                    </div>
                                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed mb-6">
                                        <p>En el texto de hoy, "Revelación del Propósito", Neville cita a William Blake diciendo: "Hay estados en los que todos los hombres visionarios son hombres locos".</p>
                                        <p>Me impactó mucho esta conexión entre la visión espiritual y la percepción de "locura" por parte del mundo. Como si el despertar requiriera romper con la lógica convencional.</p>
                                        <p>¿Alguno ha sentido esa "locura" o incomprensión al intentar explicar estos conceptos a otros? ¿Cómo interpretan el "nacimiento del niño" en este contexto?</p>
                                    </div>
                                    {/* Reaction Bar */}
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-slate-500 transition-colors">
                                            <span className="material-symbols-outlined text-xl">thumb_up</span>
                                            <span className="text-xs font-bold">24</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-slate-500 transition-colors">
                                            <span className="material-symbols-outlined text-xl">share</span>
                                            <span className="text-xs font-bold">8</span>
                                        </button>
                                        <div className="ml-auto flex gap-2">
                                            <button className="px-4 py-1.5 rounded-lg text-sm font-semibold border border-white/20 text-slate-400 hover:bg-white/5">Citar</button>
                                            <button className="px-4 py-1.5 rounded-lg text-sm font-semibold shadow-md bg-[#2965ff] text-white hover:bg-[#2965ff]/90">Responder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Single Message / Post #2 */}
                        <article className="p-8 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-14 h-14 rounded-xl bg-center bg-cover border border-white/10" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/32.jpg')" }}></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-white">Germán González</h4>
                                            <p className="text-xs font-medium uppercase tracking-[0.05em] text-slate-400">Miembro • hace 45m</p>
                                        </div>
                                    </div>
                                    <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed mb-6">
                                        <blockquote className="border-l-4 border-[#2965ff] pl-4 py-1 italic bg-[#2965ff]/5 rounded-r-lg mb-4 text-slate-400">
                                            "Lo que era demasiado claro no podía despertar las facultades para actuar"
                                        </blockquote>
                                        <p>Esa frase de la carta al Dr. Trussler es clave. Si todo fuera lógico y racional, no habría búsqueda interna.</p>
                                        <p>Personalmente, creo que esa "locura" es simplemente ver la realidad desde la dimensión del "Padre" en lugar del "Esclavo". Cuando Neville dice que somos 'serpientes ardientes', suena a locura para el intelecto, pero resuena como verdad en la imaginación.</p>
                                    </div>
                                    {/* Reaction Bar */}
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2965ff]/10 text-[#2965ff] transition-colors">
                                            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
                                            <span className="text-xs font-bold">12</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-slate-500 transition-colors">
                                            <span className="material-symbols-outlined text-xl">share</span>
                                        </button>
                                        <div className="ml-auto flex gap-2">
                                            <button className="px-4 py-1.5 rounded-lg text-sm font-semibold border border-white/20 text-slate-400 hover:bg-white/5">Citar</button>
                                            <button className="px-4 py-1.5 rounded-lg text-sm font-semibold shadow-md bg-[#2965ff] text-white hover:bg-[#2965ff]/90">Responder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Reply Editor (Simplified) */}
                        <div className="p-8 bg-[#0a0a0a]/50">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/20"></div>
                                <div className="flex-1 rounded-xl border-2 border-dashed border-white/10 p-4 flex items-center justify-between text-slate-400 cursor-text hover:border-[#2965ff]/50 transition-colors">
                                    <span>Escribe una respuesta...</span>
                                    <div className="flex gap-3">
                                        <span className="material-symbols-outlined">image</span>
                                        <span className="material-symbols-outlined">link</span>
                                        <span className="material-symbols-outlined">mood</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 space-y-6">
                        {/* Topic Summary Card */}
                        <div className="bg-[#0f1523] text-white rounded-xl p-6 shadow-xl border border-white/10">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Resumen del Tema</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-400">Texto Analizado</span>
                                    <span className="text-sm font-medium">Rev. del Propósito</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-400">Participantes</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full border border-[#0f1523] bg-slate-500"></div>
                                        <div className="w-6 h-6 rounded-full border border-[#0f1523] bg-slate-600"></div>
                                        <div className="w-6 h-6 rounded-full border border-[#0f1523] bg-slate-700"></div>
                                        <div className="w-6 h-6 rounded-full border border-[#0f1523] bg-[#2965ff] flex items-center justify-center text-[8px] font-bold text-white">+12</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-slate-400">Estado</span>
                                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold uppercase">Activo</span>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-2.5 bg-[#2965ff] text-white rounded-lg font-bold text-sm shadow-lg hover:bg-[#2965ff]/90 transition-colors">
                                Seguir Discusión
                            </button>
                        </div>

                        {/* Related Topics */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 px-2">Temas Relacionados</h3>
                            <div className="space-y-3">
                                <div className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:border-[#2965ff]/50 hover:shadow-md">
                                    <p className="text-[10px] font-bold text-[#2965ff] mb-1">BIBLIOTECA</p>
                                    <h4 className="text-sm font-bold text-white group-hover:text-[#2965ff] transition-colors leading-snug">La Imaginación Crea la Realidad: Puntos Clave</h4>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-[11px] text-slate-400">22 respuestas • 1d</span>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-[#2965ff] text-lg">arrow_forward</span>
                                    </div>
                                </div>
                                <div className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:border-[#2965ff]/50 hover:shadow-md">
                                    <p className="text-[10px] font-bold text-amber-500 mb-1">DEBATE</p>
                                    <h4 className="text-sm font-bold text-white group-hover:text-[#2965ff] transition-colors leading-snug">¿Es el "libre albedrío" una ilusión?</h4>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-[11px] text-slate-400">89 respuestas • 3d</span>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-[#2965ff] text-lg">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Topic;
