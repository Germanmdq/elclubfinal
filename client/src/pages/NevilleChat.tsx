import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import { getNevilleResponse, type Message as AIMessage } from "@/lib/ai";
import { Loader2 } from "lucide-react";

interface ChatMessage {
    id: number;
    role: "ai" | "user";
    content: string;
    quote?: string;
    footer?: string;
    extra?: string;
    suggestions?: string[];
    time: string;
}

export default function NevilleChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 1,
            role: "ai",
            content: "Saludos, buscador de la verdad. Debes darte cuenta de que tu mundo es tu conciencia objetivada.",
            quote: '"Asume el sentimiento del deseo cumplido y observa la ruta que sigue tu atención."',
            footer: "¿Cómo puedo ayudarte a refinar tu atmósfera mental hoy?",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: ChatMessage = {
            id: Date.now(),
            role: "user",
            content: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            // Convert current chat history to Groq format
            const history: AIMessage[] = messages.map(m => ({
                role: m.role === 'ai' ? 'assistant' : 'user',
                content: m.content
            }));
            history.push({ role: 'user', content: input });

            const response = await getNevilleResponse(history);

            const aiMsg: ChatMessage = {
                id: Date.now() + 1,
                role: "ai",
                content: response,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
            const errorMsg: ChatMessage = {
                id: Date.now() + 1,
                role: "ai",
                content: "Lo siento, mi conexión con el campo cuántico se ha visto perturbada. Por favor, intenta de nuevo.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#0a0a0a] text-white font-sans theme--dark">
            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:flex w-80 flex-shrink-0 border-r border-white/5 bg-[#0a0a0a] flex-col justify-between p-6 pt-24 text-white">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-xl bg-white/10 text-white">
                            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-bold tracking-tight uppercase text-white">Tutor Personal</h1>
                            <p className="text-xs text-slate-400">Neville Goddard v3.0</p>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-[#a855f7] text-black cursor-pointer font-semibold shadow-lg">
                            <span className="material-symbols-outlined">chat</span>
                            <span className="text-sm">Chat Actual</span>
                        </div>
                        {['Fundamentos', 'Técnicas', 'Revisión', 'SATS'].map((topic, i) => (
                            <div key={topic} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer text-slate-300">
                                <span className="material-symbols-outlined">{['psychology', 'build', 'history', 'bedtime'][i]}</span>
                                <span className="text-sm">{topic}</span>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-gray-500 italic">
                    "Toda la creación es conciencia objetivada."
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative h-full">
                <Header />

                {/* Chat Header Area */}
                <div className="pt-28 pb-6 px-4 border-b border-white/5 bg-black/40 backdrop-blur-xl">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-2 leading-none">
                            Tutor de la Consciencia
                        </h2>
                        <div className="flex items-center justify-center gap-3">
                            <span className="size-2 bg-[#a855f7] rounded-full animate-pulse shadow-[0_0_8px_#a855f7]"></span>
                            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-bold">Respuesta directa de Neville</p>
                        </div>
                    </div>
                </div>

                {/* Chat Stream */}
                <div className="flex-1 overflow-y-auto px-4 md:px-10 pb-40 pt-10 scrollbar-hide">
                    <div className="max-w-4xl mx-auto flex flex-col gap-10">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                                <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${msg.role === 'ai'
                                    ? 'bg-[#a855f7] text-black'
                                    : 'bg-white/5 border border-white/10'
                                    }`}>
                                    <span className={`material-symbols-outlined ${msg.role === 'ai' ? 'font-bold' : 'text-white/40'}`}>
                                        {msg.role === 'ai' ? 'bolt' : 'person'}
                                    </span>
                                </div>

                                <div className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[85%] md:max-w-[80%]`}>
                                    <div className="flex items-center gap-2 px-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${msg.role === 'ai' ? 'text-[#a855f7]' : 'text-white/40'}`}>
                                            {msg.role === 'ai' ? 'Neville' : 'Buscador'}
                                        </span>
                                        <span className="text-[10px] text-white/30">{msg.time}</span>
                                    </div>

                                    <div className={`p-6 rounded-2xl shadow-2xl transition-all ${msg.role === 'ai'
                                        ? 'bg-white/5 backdrop-blur-md border border-white/10 rounded-tl-none text-slate-100'
                                        : 'bg-[#a855f7] text-black font-semibold rounded-tr-none'
                                        }`}>
                                        <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>

                                        {msg.quote && (
                                            <div className="italic text-white/90 bg-white/5 p-5 rounded-xl border-l-4 border-white/10 mt-6 relative overflow-hidden group">
                                                <p className="relative z-10 text-base md:text-lg">{msg.quote}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex flex-row items-start gap-4 animate-pulse">
                                <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 rounded-tl-none">
                                    <div className="h-4 w-32 bg-white/10 rounded mb-2"></div>
                                    <div className="h-4 w-48 bg-white/5 rounded"></div>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>
                </div>

                {/* Input Bar */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-black via-black/95 to-transparent z-20">
                    <div className="max-w-4xl mx-auto relative group">
                        <div className="relative flex items-center bg-[#1a1a1a] border border-white/10 rounded-full p-2 pl-8 shadow-2xl shadow-[#a855f7]/5">
                            <input
                                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-white/20 py-4 text-base md:text-lg"
                                placeholder="Escribe tu pregunta o situación aquí..."
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                disabled={isLoading}
                            />
                            <div className="flex items-center gap-2 pr-3">
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="size-12 flex items-center justify-center rounded-full bg-[#a855f7] text-black shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : <span className="material-symbols-outlined font-black text-2xl">arrow_upward</span>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
}

// UI Refresh: Centered content and header fixes
