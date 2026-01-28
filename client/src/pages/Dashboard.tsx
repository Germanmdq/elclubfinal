
import React from 'react';
import { Link } from "wouter";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#f6f8f7] dark:bg-[#0a0a0a] text-white font-sans selection:bg-[#2965ff] selection:text-[#0a0a0a]">
            {/* Top Navigation Bar - Replaced with Global Header */}
            <Header />

            {/* Added pt-24 (padding-top) to prevent content being hidden behind the fixed header */}
            <main className="max-w-[1200px] mx-auto px-6 py-10 pt-32 space-y-12">
                {/* Profile Header Section */}
                <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-6">
                        <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[#2965ff] to-blue-500 p-1">
                            <div
                                className="w-full h-full rounded-[14px] bg-[#0a0a0a] bg-center bg-cover"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}
                            ></div>
                        </div>
                        <div>
                            <h1 className="text-[1.875rem] leading-[2.25rem] font-bold text-white">Miembro del Club</h1>
                            <div className="flex items-center gap-3 mt-1">
                                <p className="text-white/60 text-base">usuario@ejemplo.com</p>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold">Plan Actual:</span>
                                    <span className="text-[#2965ff] text-xs font-bold px-2 py-0.5 rounded-full bg-[#2965ff]/10 border border-[#2965ff]/20">SUSCRIPTOR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm bg-white text-[#0a0a0a] font-semibold transition-transform active:scale-95 hover:bg-white/90">Editar Perfil</button>
                        <button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm bg-[#2965ff] text-white font-semibold transition-transform active:scale-95 hover:bg-[#2965ff]/90">Mejorar Plan</button>
                    </div>
                </section>

                {/* Stats Row */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-6 rounded-xl flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <p className="text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold">Créditos de Tutor</p>
                            <span className="material-symbols-outlined text-[#2965ff]">token</span>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-white tracking-tight">1,240<span className="text-white/20 text-lg font-medium ml-2">/ 5,000</span></h3>
                            <p className="text-[#2965ff] text-sm mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs">trending_up</span>
                                +12% este mes
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-6 rounded-xl flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <p className="text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold">Libros Leídos</p>
                            <span className="material-symbols-outlined text-white/60">auto_stories</span>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-white tracking-tight">42</h3>
                            <p className="text-white/40 text-sm mt-2 flex items-center gap-1">
                                3 pendientes de reseña
                            </p>
                        </div>
                    </div>

                    {/* Next Meeting Card - Highlighted */}
                    <div className="bg-[#2965ff]/10 border border-[#2965ff]/20 backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#2965ff]/10 rounded-bl-full -mr-4 -mt-4"></div>
                        <div className="flex justify-between items-start relative z-10">
                            <p className="text-xs uppercase tracking-[0.05em] text-[#2965ff] font-bold">Próxima Reunión</p>
                            <div className="animate-pulse">
                                <span className="material-symbols-outlined text-[#2965ff] fill-1">videocam</span>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white tracking-tight">Jueves 20:00hs</h3>
                            <a href="#" className="inline-flex items-center gap-2 text-white bg-[#2965ff] hover:bg-[#2965ff]/90 text-xs font-bold px-3 py-2 rounded-lg mt-3 transition-colors">
                                <span>UNIRSE AHORA</span>
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-6 rounded-xl flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <p className="text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold">Racha Lectora</p>
                            <span className="material-symbols-outlined text-white/60">local_fire_department</span>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-white tracking-tight">12<span className="text-lg font-medium"> días</span></h3>
                            <p className="text-white/40 text-sm mt-2 flex items-center gap-1">
                                ¡Sigue leyendo!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Consultation History */}
                    <section className="lg:col-span-2 space-y-4">
                        <div className="flex items-center justify-between px-1">
                            <h2 className="text-xl font-bold text-white">Actividad Reciente</h2>
                            <a href="#" className="text-[#2965ff] text-sm font-medium hover:underline">Ver todo</a>
                        </div>
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-[8px] rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-white/5 border-b border-white/10">
                                        <tr>
                                            <th className="px-6 py-4 text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold">Fecha</th>
                                            <th className="px-6 py-4 text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold">Actividad</th>
                                            <th className="px-6 py-4 text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold">Estado</th>
                                            <th className="px-6 py-4 text-xs uppercase tracking-[0.05em] text-[#a1a1aa] font-semibold text-right">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-6 py-5 text-white/60 text-sm">Hoy</td>
                                            <td className="px-6 py-5 text-white font-medium">Lectura: "Ficciones"</td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2965ff]/10 text-[#2965ff] border border-[#2965ff]/20">En Progreso</span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-white/40 group-hover:text-[#2965ff] transition-colors text-sm font-bold">LEER</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-6 py-5 text-white/60 text-sm">Ayer</td>
                                            <td className="px-6 py-5 text-white font-medium">Comentario en Foro: "Realismo Mágico"</td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Publicado</span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-white/40 group-hover:text-[#2965ff] transition-colors text-sm font-bold">VER</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-6 py-5 text-white/60 text-sm">20 Oct</td>
                                            <td className="px-6 py-5 text-white font-medium">Asistencia: Taller de Borges</td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2965ff]/10 text-[#2965ff] border border-[#2965ff]/20">Completado</span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-white/40 group-hover:text-[#2965ff] transition-colors text-sm font-bold">VER GRABACIÓN</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-6 py-5 text-white/60 text-sm">15 Oct</td>
                                            <td className="px-6 py-5 text-white font-medium">Chat con Tutor IA: "Estructura Narrativa"</td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2965ff]/10 text-[#2965ff] border border-[#2965ff]/20">Completado</span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-white/40 group-hover:text-[#2965ff] transition-colors text-sm font-bold">CONTINUAR</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Favorites */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between px-1">
                            <h2 className="text-xl font-bold text-white">Accesos Directos</h2>
                            <button className="p-1 hover:bg-white/5 rounded">
                                <span className="material-symbols-outlined text-white/60">add</span>
                            </button>
                        </div>
                        <div className="space-y-3">
                            <button className="w-full py-3 rounded-xl border border-dashed border-white/20 text-white/40 text-sm font-medium hover:border-[#2965ff]/40 hover:text-white transition-colors cursor-pointer">
                                Administrar Marcadores
                            </button>
                            <div className="bg-white/[0.03] border border-white/10 backdrop-filter backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-4 rounded-xl flex items-center gap-4 cursor-pointer group">
                                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center text-[#2965ff] group-hover:bg-[#2965ff]/20 transition-colors">
                                    <span className="material-symbols-outlined">library_books</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-medium text-sm">Biblioteca Digital</h4>
                                    <p className="text-white/40 text-xs">Acceder a lecturas</p>
                                </div>
                                <span className="material-symbols-outlined text-[#2965ff] fill-1">arrow_forward_ios</span>
                            </div>
                            <div className="bg-white/[0.03] border border-white/10 backdrop-filter backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-4 rounded-xl flex items-center gap-4 cursor-pointer group">
                                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                                    <span className="material-symbols-outlined">video_library</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-medium text-sm">Grabaciones Talleres</h4>
                                    <p className="text-white/40 text-xs">Ver clases pasadas</p>
                                </div>
                                <span className="material-symbols-outlined text-[#2965ff] fill-1">arrow_forward_ios</span>
                            </div>
                            <Link href="/foro">
                                <div className="bg-white/[0.03] border border-white/10 backdrop-filter backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-4 rounded-xl flex items-center gap-4 cursor-pointer group">
                                    <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center text-orange-400 group-hover:bg-orange-400/20 transition-colors">
                                        <span className="material-symbols-outlined">forum</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-medium text-sm">Foro de Discusión</h4>
                                        <p className="text-white/40 text-xs">Comunidad de lectores</p>
                                    </div>
                                    <span className="material-symbols-outlined text-[#2965ff] fill-1">arrow_forward_ios</span>
                                </div>
                            </Link>
                            <div className="bg-white/[0.03] border border-white/10 backdrop-filter backdrop-blur-[8px] hover:border-[#2965ff] transition-colors duration-200 p-4 rounded-xl flex items-center gap-4 cursor-pointer group">
                                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-400/20 transition-colors">
                                    <span className="material-symbols-outlined">smart_toy</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-medium text-sm">Tutor IA Neville</h4>
                                    <p className="text-white/40 text-xs">Consultas literarias</p>
                                </div>
                                <span className="material-symbols-outlined text-[#2965ff] fill-1">arrow_forward_ios</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer - Replaced with Global Footer */}
            <Footer />
        </div>
    );
};

export default Dashboard;
