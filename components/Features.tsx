"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Package, BarChart2, CreditCard, Bell, Download } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Frente de Caixa (PDV)",
    description: "Registre vendas rapidamente com busca ágil de produtos, múltiplas formas de pagamento e emissão de comprovante.",
    items: ["Busca de produtos por nome ou código", "Pagamento em dinheiro, cartão e Pix", "Comprovante digital ou impresso"],
    color: "bg-primary",
  },
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Cadastre produtos, monitore quantidades e receba alertas antes de ficar sem estoque.",
    items: ["Cadastro ilimitado de produtos", "Alertas de baixo estoque", "Entradas e saídas com histórico"],
    color: "bg-accent",
  },
  {
    icon: BarChart2,
    title: "Relatórios de Vendas",
    description: "Visualize o desempenho do seu negócio com dashboards intuitivos e relatórios exportáveis.",
    items: ["Dashboard com gráficos em tempo real", "Relatório diário e mensal", "Exportação em PDF e Excel"],
    color: "bg-green-600",
  },
];

const extras = [
  { icon: CreditCard, label: "Múltiplos pagamentos" },
  { icon: Bell, label: "Alertas automáticos" },
  { icon: Download, label: "Exportação de dados" },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Funcionalidades</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Tudo que seu negócio precisa
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ferramentas poderosas em uma interface simples. Do caixa ao relatório gerencial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {extras.map((extra) => (
            <div key={extra.label} className="flex items-center gap-2 text-gray-500 text-sm">
              <extra.icon size={16} className="text-accent" />
              {extra.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
