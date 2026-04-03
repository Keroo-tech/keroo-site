"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

type Product = {
  name: string;
  description: string;
  category: string;
  status: "available" | "coming_soon";
  ctaLabel?: string;
  ctaHref?: string;
};

const products: Product[] = [
  {
    name: "Keroo PDV",
    description:
      "Sistema de ponto de venda simples e completo para o varejo. Gerencie vendas, estoque e relatórios em tempo real.",
    category: "Varejo",
    status: "available",
    ctaLabel: "Saiba mais",
    ctaHref: "#contato",
  },
  {
    name: "Em breve",
    description: "Novos produtos estão sendo desenvolvidos. Fique de olho nas novidades da Keroo Tech.",
    category: "",
    status: "coming_soon",
  },
  {
    name: "Em breve",
    description: "Novas soluções para PMEs brasileiras chegando em breve.",
    category: "",
    status: "coming_soon",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Produtos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Nossas soluções prontas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Além do desenvolvimento sob medida, a Keroo Tech cria produtos próprios pensados para as necessidades das PMEs brasileiras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={`${product.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 border transition-shadow flex flex-col ${
                product.status === "available"
                  ? "bg-white border-gray-100 shadow-sm hover:shadow-md"
                  : "bg-gray-50 border-dashed border-gray-200"
              }`}
            >
              {product.status === "available" ? (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                      Disponível
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{product.name}</h3>
                  {product.category && (
                    <span className="text-xs text-accent font-semibold mb-3 inline-block">{product.category}</span>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{product.description}</p>
                  {product.ctaLabel && (
                    <a
                      href={product.ctaHref}
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
                    >
                      {product.ctaLabel}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                    <Lock size={20} className="text-gray-400" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full mb-4">
                    Em breve
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
