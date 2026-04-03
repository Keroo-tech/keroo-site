"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const models = [
  {
    name: "Projeto fechado",
    description: "Ideal para quem tem escopo definido",
    highlight: false,
    features: [
      "Escopo e prazo definidos",
      "Orçamento fixo",
      "Entregas por etapas",
      "Documentação completa",
      "Suporte pós-entrega",
      "Reuniões de alinhamento semanais",
    ],
  },
  {
    name: "Squad dedicado",
    description: "Para quem precisa de velocidade e flexibilidade",
    highlight: true,
    badge: "Mais contratado",
    features: [
      "Time alocado ao seu produto",
      "Sprints semanais ou quinzenais",
      "Priorização dinâmica de backlog",
      "Code review contínuo",
      "Deploy frequente",
      "Relatório de progresso mensal",
    ],
  },
  {
    name: "Suporte contínuo",
    description: "Para manter e evoluir o que já existe",
    highlight: false,
    features: [
      "Manutenção e correção de bugs",
      "Atualizações de segurança",
      "Melhorias incrementais",
      "Monitoramento de produção",
      "SLA definido em contrato",
      "Canal direto com a equipe",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Modelos de contratação</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Como podemos trabalhar juntos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cada projeto é único. Escolha o modelo que melhor se encaixa na sua necessidade e orçamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                model.highlight
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {model.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star size={12} />
                    {model.badge}
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-1 ${model.highlight ? "text-white" : "text-primary"}`}>
                {model.name}
              </h3>
              <p className={`text-sm mb-6 ${model.highlight ? "text-blue-200" : "text-gray-400"}`}>
                {model.description}
              </p>

              <div className={`text-2xl font-bold mb-8 ${model.highlight ? "text-accent" : "text-primary"}`}>
                Fale conosco
              </div>

              <ul className="space-y-3 mb-8">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-accent"
                    />
                    <span className={model.highlight ? "text-blue-100" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all ${
                  model.highlight
                    ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30"
                    : "bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20"
                }`}
              >
                Solicitar proposta
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
