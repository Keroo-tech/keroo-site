"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Software House
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sua ideia merece o{" "}
              <span className="text-accent">software</span>{" "}
              certo
            </h1>
            <p className="text-lg text-blue-100 mb-10 max-w-xl leading-relaxed">
              Transformamos a gestão do seu negócio através da tecnologia. Somos uma fábrica de software especializada em desenvolver soluções sob medida para pequenas e médias empresas que buscam eficiência, inovação e crescimento no mercado digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-accent/30"
              >
                Fale com a gente
                <ArrowRight size={18} />
              </a>
              <a
                href="#produtos"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 text-base"
              >
                Ver nossos produtos
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "20+", label: "projetos entregues" },
                { value: "4+", label: "anos de experiência" },
                { value: "15+", label: "clientes ativos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
              {/* Header bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="flex-1 bg-white/20 rounded-full h-5 ml-2"></div>
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { icon: Code2, label: "Desenvolvimento", value: "Sob medida", color: "bg-accent" },
                  { icon: Layers, label: "Produtos prontos", value: "Keroo PDV", color: "bg-green-500" },
                  { icon: Cpu, label: "Tecnologia", value: "Moderna", color: "bg-purple-500" },
                ].map((card) => (
                  <div key={card.label} className="bg-white/15 rounded-xl p-3">
                    <div className={`${card.color} w-8 h-8 rounded-lg flex items-center justify-center mb-2`}>
                      <card.icon size={16} className="text-white" />
                    </div>
                    <p className="text-xs text-blue-200">{card.label}</p>
                    <p className="text-white font-bold text-sm">{card.value}</p>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div className="bg-white/10 rounded-xl p-4 mb-3">
                <p className="text-xs text-blue-200 mb-3">Como trabalhamos</p>
                <div className="space-y-2">
                  {[
                    { step: "01", label: "Entendemos seu negócio" },
                    { step: "02", label: "Desenvolvemos a solução" },
                    { step: "03", label: "Entregamos e evoluímos" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3 bg-white/10 rounded-lg px-3 py-2">
                      <span className="text-xs font-bold text-accent">{item.step}</span>
                      <span className="text-xs text-blue-100">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-lg px-3 py-2">
                <span className="text-accent text-xs font-semibold">✓</span>
                <span className="text-xs text-blue-100">PMEs brasileiras transformando negócios com tecnologia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
