"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Ideal para quem está começando",
    highlight: false,
    features: [
      "1 terminal (frente de caixa)",
      "Produtos e clientes ilimitados",
      "Gestão de estoque completa",
      "Relatórios por período",
      "Impressão de comprovante",
      "Suporte por e-mail",
      "14 dias grátis",
    ],
  },
  {
    name: "Pro",
    description: "Para negócios em crescimento",
    highlight: true,
    badge: "Mais popular",
    features: [
      "Até 3 terminais simultâneos",
      "Tudo do plano Básico",
      "Sincronização entre terminais",
      "Crédito de cliente (fiado)",
      "Relatórios avançados por terminal",
      "Suporte prioritário",
      "14 dias grátis",
    ],
  },
  {
    name: "Enterprise",
    description: "Para redes e grandes operações",
    highlight: false,
    features: [
      "Terminais ilimitados",
      "Tudo do plano Pro",
      "Dashboard administrativo web",
      "Suporte dedicado 24/7",
      "Implantação assistida",
      "SLA garantido",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Planos e Preços</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Todos os planos incluem 14 dias de teste gratuito. Sem cartão de crédito.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star size={12} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-primary"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>
                {plan.description}
              </p>

              <div className={`text-2xl font-bold mb-8 ${plan.highlight ? "text-accent" : "text-primary"}`}>
                Fale conosco
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-accent" : "text-accent"}`}
                    />
                    <span className={plan.highlight ? "text-blue-100" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`block text-center font-semibold py-3 px-6 rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30"
                    : "bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20"
                }`}
              >
                Fale conosco
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
