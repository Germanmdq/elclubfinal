import { motion } from "framer-motion";
import { Check } from "lucide-react";

const transformations = [
    "Manifestar ingresos específicos y oportunidades financieras",
    "Atraer relaciones alineadas con tu versión ideal",
    "Sanar limitaciones mentales y emocionales profundas",
    "Crear claridad absoluta sobre tu propósito de vida",
    "Dominar el estado del 'deseo cumplido' a voluntad",
    "Transformar creencias limitantes en convicciones poderosas",
];

export default function TransformationSection() {
    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="wrapper relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-white/60 uppercase tracking-[0.3em] text-sm mb-6 font-medium">
                            Resultados Reales
                        </p>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            De la teoría a la
                            <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                                manifestación tangible
                            </span>
                        </h2>

                        <p className="text-xl text-white/80 mb-12 leading-relaxed">
                            No más conceptos abstractos. Aprende el método exacto que Neville Goddard
                            enseñó para crear tu realidad de forma sistemática y reproducible.
                        </p>

                        {/* Transformations List */}
                        <div className="space-y-4">
                            {transformations.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                                        <Check className="w-4 h-4 text-black" strokeWidth={3} />
                                    </div>
                                    <p className="text-white/90 text-lg">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Image/Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: "2,000+", label: "Miembros Activos" },
                                { number: "500+", label: "Recursos Premium" },
                                { number: "24/7", label: "Soporte IA" },
                                { number: "100%", label: "Satisfacción" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-8 rounded-2xl text-center cursor-pointer"
                                >
                                    <div className="text-5xl font-bold text-black mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-black/60 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
