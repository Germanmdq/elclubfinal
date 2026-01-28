import { motion } from "framer-motion";

export default function FAQSection() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="wrapper max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">Preguntas Frecuentes</h2>
                <div className="space-y-8">
                    {[
                        { q: "¿Es esto para principiantes?", a: "Sí, el programa está diseñado para llevarte de la mano desde los fundamentos." },
                        { q: "¿Cuánto tiempo toma ver resultados?", a: "La manifestación es instantánea en la imaginación, y los resultados físicos dependen de tu persistencia." },
                        { q: "¿Tengo acceso de por vida?", a: "La suscripción anual te da acceso a todas las actualizaciones y contenido nuevo." }
                    ].map((faq, i) => (
                        <div key={i} className="border-b border-gray-100 pb-8">
                            <h3 className="text-xl font-bold text-black mb-4">{faq.q}</h3>
                            <p className="text-gray-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
