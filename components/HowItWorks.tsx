"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entendemos seu negócio",
    description: "Fazemos um diagnóstico completo dos seus processos, desafios e objetivos antes de escrever qualquer linha de código.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Desenvolvemos a solução",
    description: "Nossa equipe projeta e desenvolve a solução com metodologias ágeis, entregas frequentes e total transparência.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Entregamos e evoluímos",
    description: "Colocamos em produção, acompanhamos os resultados e continuamos evoluindo o produto junto com você.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-trabalhamos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Como trabalhamos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Do problema à solução
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Um processo claro, colaborativo e focado em resultados reais para o seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary/5 border-2 border-primary/10 rounded-2xl flex items-center justify-center">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  <span className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {step.number.replace("0", "")}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contato"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors inline-block"
          >
            Falar com nossa equipe
          </a>
        </motion.div>
      </div>
    </section>
  );
}
