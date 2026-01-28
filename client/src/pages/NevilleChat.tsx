import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";

export default function NevilleChat() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: "ai",
            content: "Saludos, buscador de la verdad. Debes darte cuenta de que tu mundo es tu conciencia objetivada.",
            quote: '"Asume el sentimiento del deseo cumplido y observa la ruta que sigue tu atención."',
            footer: "¿Cómo puedo ayudarte a refinar tu atmósfera mental hoy?",
            time: "10:42 AM"
        },
        {
            id: 2,
            role: "user",
            content: "¿Cómo mantengo el estado de ser cuando mis sentidos físicos y el mundo externo parecen negarlo por completo?",
            time: "10:43 AM"
        },
        {
            id: 3,
            role: "ai",
            content: "Este es el puente de incidentes. Cuando los sentidos niegan lo que sabes que es verdad en tu imaginación, debes practicar la **Negación Sensorial**.",
            extra: "Cierra los ojos y entra en un estado similar al sueño. En ese silencio, camina a través de tu realidad deseada como si estuviera sucediendo *ahora*. Si el mundo dice \"No\", tú debes decir obstinadamente, pero suavemente, \"Sí\" en tu interior.",
            time: "10:44 AM",
            suggestions: ["Dime más sobre el Puente", "Ejercicio Práctico"]
        }
    ]);

    const [input, setInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage = {
            id: messages.length + 1,
            role: "user",
            content: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMessage]);
        setInput("");
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a] text-white font-sans theme--dark">
            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:flex w-80 flex-shrink-0 border-r border-white/5 bg-[#0a0a0a] flex-col justify-between p-6 pt-24">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-xl bg-white/10 text-white">
                            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-bold tracking-tight uppercase text-white">Enseñanzas de Neville</h1>
                            <p className="text-xs text-slate-400">Alquimia Digital v2.4</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white text-black cursor-pointer font-semibold shadow-lg">
                            <span className="material-symbols-outlined">menu_book</span>
                            <span className="text-sm">La Ley</span>
                        </div>
                        {['Imaginación', 'Estado de Ser', 'La Promesa', 'El Sentimiento es el Secreto'].map((topic, i) => (
                            <div key={topic} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer text-slate-300">
                                <span className="material-symbols-outlined">{['Repeat', 'psychology', 'auto_fix_high', 'favorite'][i]}</span>
                                <span className="text-sm">{topic}</span>
                            </div>
                        ))}
                    </nav>
                </div>

                <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white rounded-full py-3 px-4 transition-all border border-transparent hover:border-white/30">
                    <span className="material-symbols-outlined text-xl">add_circle</span>
                    <span className="text-sm font-bold">Nueva Manifestación</span>
                </button>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative h-full">
                <Header />

                {/* Chat Header Area - Centered and Fixed height */}
                <div className="pt-28 pb-10 px-4 border-b border-white/5 bg-black/40 backdrop-blur-xl">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-2 leading-none">
                            Pregúntale a Neville
                        </h2>
                        <div className="flex items-center justify-center gap-3">
                            <span className="size-2 bg-[#3deb9f] rounded-full animate-pulse shadow-[0_0_8px_#3deb9f]"></span>
                            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-bold">Tu tutor personal 24/7</p>
                        </div>
                    </div>
                </div>

                {/* Chat Stream */}
                <div className="flex-1 overflow-y-auto px-4 md:px-10 pb-32 pt-10 custom-scrollbar scrollbar-hide">
                    <div className="max-w-4xl mx-auto flex flex-col gap-10">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                                <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${msg.role === 'ai'
                                        ? 'bg-white text-black shadow-xl shadow-white/5'
                                        : 'bg-white/5 border border-white/10'
                                    }`}>
                                    <span className={`material-symbols-outlined ${msg.role === 'ai' ? 'font-bold' : 'text-white/40'}`}>
                                        {msg.role === 'ai' ? 'bolt' : 'person'}
                                    </span>
                                </div>

                                <div className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[85%] md:max-w-[80%]`}>
                                    <div className="flex items-center gap-2 px-2">
                                        {msg.role === 'user' && <span className="text-[10px] text-white/30">{msg.time}</span>}
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${msg.role === 'ai' ? 'text-white' : 'text-white/40'}`}>
                                            {msg.role === 'ai' ? 'Neville AI' : 'Buscador'}
                                        </span>
                                        {msg.role === 'ai' && <span className="text-[10px] text-white/30">{msg.time}</span>}
                                    </div>

                                    <div className={`p-6 rounded-2xl shadow-2xl transition-all ${msg.role === 'ai'
                                            ? 'bg-white/5 backdrop-blur-md border border-white/10 rounded-tl-none text-slate-100'
                                            : 'bg-white text-black font-semibold rounded-tr-none'
                                        }`}>
                                        <p className={`${msg.role === 'ai' ? 'text-lg leading-relaxed' : ''}`}>{msg.content}</p>

                                        {msg.quote && (
                                            <div className="italic text-white/90 bg-white/5 p-5 rounded-xl border-l-4 border-white mt-6 relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <p className="relative z-10 text-base md:text-lg">{msg.quote}</p>
                                            </div>
                                        )}

                                        {msg.footer && <p className="mt-6 text-sm text-white/60">{msg.footer}</p>}

                                        {msg.extra && <p className="mt-6 leading-relaxed text-base text-white/80">{msg.extra}</p>}

                                        {msg.suggestions && (
                                            <div className="flex flex-wrap gap-2 mt-6">
                                                {msg.suggestions.map(s => (
                                                    <button key={s} className="text-[10px] font-bold uppercase tracking-tighter bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full border border-white/10 transition-all hover:scale-105 active:scale-95">
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                </div>

                {/* Input Bar Container */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black via-black/95 to-transparent z-20">
                    <div className="max-w-4xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-white/10 rounded-full blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <div className="relative flex items-center bg-[#1a1a1a] border border-white/10 rounded-full p-2 pl-8 shadow-2xl shadow-white/5">
                            <input
                                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-white/20 py-4 text-base md:text-lg"
                                placeholder="Imagina que tu deseo ya se ha cumplido..."
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <div className="flex items-center gap-3 pr-3">
                                <button className="size-12 flex items-center justify-center rounded-full text-white/40 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">mic</span>
                                </button>
                                <button
                                    onClick={handleSend}
                                    className="size-12 flex items-center justify-center rounded-full bg-white text-black shadow-xl hover:scale-105 active:scale-95 transition-all"
                                >
                                    <span className="material-symbols-outlined font-black text-2xl">arrow_upward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-4 text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">Manifestación Instantánea</p>
                </div>
            </main>

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
}
// UI Refresh: Centered content and header fixes
