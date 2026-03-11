"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShoppingCart, BarChart2, Package } from "lucide-react";

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
              Sistema PDV Completo
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              O PDV mais{" "}
              <span className="text-accent">simples</span> e{" "}
              <span className="text-accent">completo</span> para o seu negócio
            </h1>
            <p className="text-lg text-blue-100 mb-10 max-w-xl leading-relaxed">
              Gerencie suas vendas, controle o estoque e acesse relatórios em tempo real. Tudo em uma plataforma fácil de usar, pensada para pequenas e médias empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-accent/30"
              >
                Testar grátis 14 dias
                <ArrowRight size={18} />
              </a>
              <a
                href="#funcionalidades"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 text-base"
              >
                <Play size={16} />
                Ver demonstração
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "500+", label: "empresas" },
                { value: "99.9%", label: "uptime" },
                { value: "14 dias", label: "grátis" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
              {/* Header bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="flex-1 bg-white/20 rounded-full h-5 ml-2"></div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { icon: ShoppingCart, label: "Vendas hoje", value: "R$ 4.820", color: "bg-accent" },
                  { icon: Package, label: "Produtos", value: "342", color: "bg-green-500" },
                  { icon: BarChart2, label: "Ticket médio", value: "R$ 87,40", color: "bg-purple-500" },
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

              {/* Chart placeholder */}
              <div className="bg-white/10 rounded-xl p-4 mb-3">
                <p className="text-xs text-blue-200 mb-3">Vendas dos últimos 7 dias</p>
                <div className="flex items-end gap-2 h-16">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-accent/70 rounded-t"
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Recent sales */}
              <div className="space-y-2">
                {["Café + Pão de queijo", "Refrigerante 2L", "Combo almoço"].map((item) => (
                  <div key={item} className="flex justify-between items-center bg-white/10 rounded-lg px-3 py-2">
                    <span className="text-xs text-blue-100">{item}</span>
                    <span className="text-xs text-accent font-semibold">Pago</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
