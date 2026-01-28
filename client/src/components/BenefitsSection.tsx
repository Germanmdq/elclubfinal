import { motion } from "framer-motion";
import { Brain, Target, Sparkles, Users, BookOpen, Zap } from "lucide-react";

const benefits = [
    {
        icon: Brain,
        title: "Dominio Mental",
        description: "Aprende a controlar tu diálogo interno y crear desde el estado del deseo cumplido"
    },
    {
        icon: Target,
        title: "Manifestación Precisa",
        description: "Técnicas probadas para materializar tus deseos con claridad y consistencia"
    },
    {
        icon: Sparkles,
        title: "Transformación Real",
        description: "Resultados tangibles en finanzas, relaciones, salud y crecimiento personal"
    },
    {
        icon: Users,
        title: "Comunidad Elite",
        description: "Conéctate con manifestadores conscientes comprometidos con su evolución"
    },
    {
        icon: BookOpen,
        title: "Biblioteca Completa",
        description: "Acceso ilimitado a +500 conferencias, libros y recursos de Neville Goddard"
    },
    {
        icon: Zap,
        title: "Soporte IA Avanzado",
        description: "Chatbot entrenado con toda la obra de Neville para respuestas instantáneas"
    },
];

export default function BenefitsSection() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="wrapper">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-black/60 uppercase tracking-[0.3em] text-sm mb-6 font-medium"
                    >
                        Lo que obtienes
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
                    >
                        Todo lo que necesitas para
                        <span className="block text-gray-600">dominar tu realidad</span>
                    </motion.h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-black p-8 rounded-2xl h-full hover:scale-105 transition-all duration-300 cursor-pointer">
                                <benefit.icon className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {benefit.title}
                                </h3>

                                <p className="text-white/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
