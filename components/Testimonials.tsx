"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Souza",
    role: "Proprietária",
    company: "Padaria São João",
    initials: "AP",
    color: "bg-purple-500",
    text: "A Keroo Tech entendeu nosso negócio desde o primeiro contato. O sistema que desenvolveram transformou nossa operação e hoje consigo ter visibilidade total das vendas em segundos.",
  },
  {
    name: "Ricardo Mendes",
    role: "Gerente",
    company: "Mercadinho Família",
    initials: "RM",
    color: "bg-primary",
    text: "Profissionalismo e agilidade do início ao fim. A equipe entregou tudo no prazo e com uma qualidade surpreendente. Recomendo para qualquer empresa que queira crescer com tecnologia.",
  },
  {
    name: "Carla Ferreira",
    role: "Sócia-proprietária",
    company: "Lanchonete Sabor Real",
    initials: "CF",
    color: "bg-accent",
    text: "Testamos outros fornecedores antes e a diferença foi clara. A Keroo Tech não entrega só código — entrega solução. O suporte pós-entrega também é excelente.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Empresas que confiaram na Keroo Tech para transformar seus negócios com tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow relative"
            >
              <Quote size={28} className="text-accent/20 absolute top-6 right-6" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`${t.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-accent text-sm">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
