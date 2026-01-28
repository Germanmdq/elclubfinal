
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from "wouter";

const Forum = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
            <Header />

            <main className="max-w-[1280px] mx-auto px-6 py-8 pt-32">
                <div className="grid grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <aside className="col-span-12 lg:col-span-2 space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs font-medium uppercase tracking-[0.05em] text-[#a1a1aa] px-3 mb-4">Navegación</p>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#2965ff]/10 text-[#2965ff] font-semibold transition-colors border border-[#2965ff]/20">
                                <span className="material-symbols-outlined">home</span>
                                <span>Inicio</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined">schedule</span>
                                <span>Recientes</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined">trending_up</span>
                                <span>Tendencias</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined">category</span>
                                <span>Categorías</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined">bookmark</span>
                                <span>Guardados</span>
                            </a>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-xs font-medium uppercase tracking-[0.05em] text-[#a1a1aa] px-3 mb-4">Mis Categorías</p>
                            <ul className="space-y-2 px-3">
                                <li className="flex items-center gap-2 text-sm text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Escritura
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-amber-500"></span> Análisis
                                </li>
                                <li className="flex items-center gap-2 text-sm text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> Club de Lectura
                                </li>
                            </ul>
                        </div>
                        <button className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 mt-6 shadow-lg bg-[#2965ff] text-white hover:bg-[#2965ff]/90 transition-colors">
                            <span className="material-symbols-outlined text-xl">add_circle</span>
                            <span>Nuevo Tema</span>
                        </button>
                    </aside>

                    {/* Feed Content */}
                    <div className="col-span-12 lg:col-span-7 space-y-6">
                        {/* Tabs */}
                        <div className="border-b border-white/10 flex items-center gap-8 mb-4">
                            <button className="pb-3 border-b-2 border-[#2965ff] text-[#2965ff] font-bold text-sm">Todos</button>
                            <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm transition-colors">Escritura</button>
                            <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm transition-colors">Lectura</button>
                            <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm transition-colors">Q&A</button>
                        </div>

                        {/* Featured Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/foro/tema/1">
                                <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex flex-col justify-between group cursor-pointer hover:border-[#2965ff]/50 transition-all h-full">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2 py-0.5 bg-emerald-900/30 text-emerald-400 rounded text-[10px] font-bold uppercase tracking-wider">Fijado</span>
                                            <span className="text-slate-400 text-xs">• Escritura</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#2965ff] transition-colors">Cómo crear personajes inolvidables</h3>
                                        <p className="text-slate-400 text-sm line-clamp-2">Una guía profunda sobre la construcción de arcos de personajes y motivaciones realistas...</p>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-cover bg-center" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/44.jpg')" }}></div>
                                            <div className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-cover bg-center" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/32.jpg')" }}></div>
                                            <div className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-cover bg-center" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/65.jpg')" }}></div>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">chat_bubble</span> 45</span>
                                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 1.2k</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div className="p-6 border border-white/10 bg-white/5 rounded-2xl flex flex-col justify-between group cursor-pointer hover:border-[#2965ff]/50 transition-all h-full">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-0.5 bg-amber-900/30 text-amber-400 rounded text-[10px] font-bold uppercase tracking-wider">Tendencia</span>
                                        <span className="text-slate-400 text-xs">• Análisis</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#2965ff] transition-colors">El simbolismo en Borges: Una discusión abierta</h3>
                                    <p className="text-slate-400 text-sm line-clamp-2">Explorando los laberintos, espejos y tigres en la obra de Jorge Luis Borges.</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-cover bg-center" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/85.jpg')" }}></div>
                                        <div className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-cover bg-center" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/12.jpg')" }}></div>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">chat_bubble</span> 120</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 3.4k</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Topic List */}
                        <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                            <div className="grid grid-cols-12 px-6 py-4 border-b border-white/10 text-xs font-medium uppercase tracking-[0.05em] text-slate-400">
                                <div className="col-span-8">Tema</div>
                                <div className="col-span-2 text-center">Respuestas</div>
                                <div className="col-span-2 text-right">Actividad</div>
                            </div>

                            {/* Topic Item 1 */}
                            <div className="grid grid-cols-12 px-6 py-4 hover:bg-white/[0.02] cursor-pointer border-b border-white/5 transition-colors">
                                <div className="col-span-8 flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-slate-400">psychology</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white hover:text-[#2965ff] transition-colors">Bloqueo del escritor: ¿Cómo lo superan?</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="px-2 py-0.5 bg-white/10 text-slate-400 rounded text-[10px] font-bold">CONSEJOS</span>
                                            <span className="text-xs text-slate-400">por María García</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-center text-slate-400 font-medium">28</div>
                                <div className="col-span-2 flex items-center justify-end text-slate-400 text-xs">2h</div>
                            </div>

                            {/* Topic Item 2 */}
                            <div className="grid grid-cols-12 px-6 py-4 hover:bg-white/[0.02] cursor-pointer border-b border-white/5 transition-colors">
                                <div className="col-span-8 flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-slate-400">menu_book</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white hover:text-[#2965ff] transition-colors">Club de Lectura: Discusión 'Cien Años de Soledad'</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="px-2 py-0.5 bg-white/10 text-slate-400 rounded text-[10px] font-bold">CLUB</span>
                                            <span className="text-xs text-slate-400">por Juan Pérez</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-center text-slate-400 font-medium">15</div>
                                <div className="col-span-2 flex items-center justify-end text-slate-400 text-xs">5h</div>
                            </div>

                            {/* Topic Item 3 */}
                            <div className="grid grid-cols-12 px-6 py-4 hover:bg-white/[0.02] cursor-pointer border-b border-white/5 transition-colors">
                                <div className="col-span-8 flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-slate-400">shield</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white hover:text-[#2965ff] transition-colors">Derechos de autor al publicar en línea</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="px-2 py-0.5 bg-white/10 text-slate-400 rounded text-[10px] font-bold">LEGAL</span>
                                            <span className="text-xs text-slate-400">por Ana Lopez</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-center text-slate-400 font-medium">62</div>
                                <div className="col-span-2 flex items-center justify-end text-slate-400 text-xs">1d</div>
                            </div>

                            <div className="p-4 text-center">
                                <button className="text-[#2965ff] font-bold text-sm hover:underline">Ver más discusiones</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar Widgets */}
                    <aside className="col-span-12 lg:col-span-3 space-y-6">
                        <div className="p-6 border border-white/10 bg-white/5 rounded-2xl">
                            <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-slate-400 mb-4">Próximos Eventos</h4>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg bg-[#2965ff]/10 flex flex-col items-center justify-center shrink-0">
                                        <span className="text-[10px] font-bold text-[#2965ff] uppercase">Mar</span>
                                        <span className="text-lg font-bold text-[#2965ff] leading-none">24</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-white">Taller de Escritura</p>
                                        <p className="text-xs text-slate-400">Online • 18:00 AR</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex flex-col items-center justify-center shrink-0">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">Abr</span>
                                        <span className="text-lg font-bold text-slate-400 leading-none">02</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-white">Q&A con Autores</p>
                                        <p className="text-xs text-slate-400">Zoom • 20:00 AR</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white/5 transition-colors">Ver Calendario</button>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-[#2965ff] p-6 rounded-xl text-white">
                            <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-4">Estadísticas de la Comunidad</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-2xl font-bold">2.4k</p>
                                    <p className="text-[10px] opacity-70 font-semibold">Usuarios Activos</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">150</p>
                                    <p className="text-[10px] opacity-70 font-semibold">Temas Diarios</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/20">
                                <p className="text-sm font-bold">Únete a más de 45,000 escritores hoy.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Forum;
