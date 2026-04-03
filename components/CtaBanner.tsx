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
            Vamos conversar
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Tem um projeto em mente?<br />Vamos conversar.
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Conte-nos o seu desafio e a Keroo Tech transforma em solução. Sem enrolação.
          </p>

          <div className="flex flex-col items-center gap-4 justify-center mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&to=suporte@kerootech.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/30"
            >
              Enviar e-mail
              <ArrowRight size={18} />
            </a>
            <span className="text-blue-200 text-sm">
              suporte@kerootech.com.br
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            {[
              "Resposta em até 24h",
              "Proposta sem compromisso",
              "Time especializado",
              "Foco em PMEs brasileiras",
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
