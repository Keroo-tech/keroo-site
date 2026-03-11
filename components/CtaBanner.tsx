"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contato" className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Comece hoje mesmo
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para modernizar<br />seu PDV?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Teste grátis por 14 dias. Sem cartão de crédito. Cancele quando quiser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:contato@keroo.com.br"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/30"
            >
              Começar grátis agora
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/5500000000000"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              Falar com consultor
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            {[
              "14 dias grátis",
              "Sem cartão de crédito",
              "Suporte incluso",
              "Cancele a qualquer momento",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-accent">✓</span> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
