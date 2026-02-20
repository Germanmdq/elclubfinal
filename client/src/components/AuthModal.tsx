import { useState, useEffect } from "react";
import { X, Check, Loader2, Sparkles, User, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialView?: "login" | "register";
}

export default function AuthModal({ isOpen, onClose, initialView = "register" }: AuthModalProps) {
    const [view, setView] = useState<"login" | "register">(initialView);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setIsSuccess(false);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        toast.success(view === "register" ? "Registro exitoso." : "Bienvenido de nuevo.");

        setTimeout(() => {
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-black border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
                    >
                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors z-50 text-white/50"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Content */}
                        <div className="p-10 md:p-12">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white text-black flex items-center justify-center">
                                            <Check className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-black tracking-tighter text-white mb-4">
                                            {view === "register" ? "¡Bienvenido al Club!" : "Sesión Iniciada"}
                                        </h3>
                                        <p className="text-gray-500 font-light text-lg">
                                            Redirigiendo a tu dashboard...
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="text-center mb-10">
                                            <div className="flex items-center justify-center gap-2 mb-6">
                                                <Sparkles className="w-5 h-5 text-white" />
                                                <span className="font-mono text-[10px] uppercase text-gray-500 tracking-[0.3em] font-bold">
                                                    {view === "register" ? "Nueva Cuenta" : "Acceso Portal"}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4 leading-tight">
                                                {view === "register" ? "Despertá tu Poder" : "Volvé a la Fuente"}
                                            </h2>
                                            <p className="text-gray-500 font-light text-sm">
                                                {view === "register"
                                                    ? "Unite a la comunidad élite de investigadores de la consciencia."
                                                    : "Ingresá tus credenciales para acceder a la biblioteca sagrada."}
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {view === "register" && (
                                                <div className="grid grid-cols-2 gap-4">
                                                    <InputItem
                                                        label="Nombre"
                                                        name="firstName"
                                                        placeholder="Neville"
                                                        icon={User}
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                    />
                                                    <InputItem
                                                        label="Apellido"
                                                        name="lastName"
                                                        placeholder="Goddard"
                                                        icon={User}
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            )}

                                            <InputItem
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="tu@email.com"
                                                icon={Mail}
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                            {view === "register" && (
                                                <InputItem
                                                    label="Teléfono"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+54 9..."
                                                    icon={Phone}
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            )}

                                            <InputItem
                                                label="Contraseña"
                                                name="password"
                                                type="password"
                                                placeholder="••••••••"
                                                icon={Lock}
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full mt-6 bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] py-5 rounded-full hover:bg-white/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    view === "register" ? "Crear Mi Cuenta" : "Entrar al Portal"
                                                )}
                                            </button>
                                        </form>

                                        <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                            <p className="text-gray-600 text-xs font-light">
                                                {view === "register" ? "¿Ya sos parte del club?" : "¿Todavía no tenés cuenta?"}
                                                <button
                                                    onClick={() => setView(view === "register" ? "login" : "register")}
                                                    className="ml-2 text-white font-bold hover:underline"
                                                >
                                                    {view === "register" ? "Iniciá sesión" : "Registrate gratis"}
                                                </button>
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function InputItem({ label, name, type = "text", placeholder, icon: Icon, value, onChange, required = false }: any) {
    return (
        <div>
            <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 px-1">
                {label} {required && "*"}
            </label>
            <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-700">
                    <Icon className="w-4 h-4" />
                </div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full pl-12 pr-6 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder-white/10 text-sm focus:outline-none focus:border-white/30 transition-all"
                    required={required}
                />
            </div>
        </div>
    );
}
