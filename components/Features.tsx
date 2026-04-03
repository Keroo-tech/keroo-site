"use client";

import { motion } from "framer-motion";
import { Code2, Plug, MessageSquare, Wrench, Palette, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento sob medida",
    description: "Criamos sistemas, plataformas e aplicações customizadas para as necessidades específicas do seu negócio.",
    items: [
      "Sistemas web e mobile",
      "APIs e integrações",
      "Painéis administrativos",
      "Automação de processos internos",
    ],
    color: "bg-primary",
  },
  {
    icon: Plug,
    title: "Integração de sistemas",
    description: "Conectamos suas ferramentas e plataformas para que seus dados fluam sem fricção entre sistemas.",
    items: [
      "Integração com ERPs e CRMs",
      "Conexão com marketplaces",
      "Webhooks e automações",
      "Migração de dados",
    ],
    color: "bg-accent",
  },
  {
    icon: Smartphone,
    title: "Aplicativos mobile",
    description: "Desenvolvemos apps para iOS e Android com foco em performance, usabilidade e escalabilidade.",
    items: [
      "Apps nativos e híbridos",
      "Design responsivo",
      "Publicação nas lojas",
      "Manutenção contínua",
    ],
    color: "bg-green-600",
  },
  {
    icon: Palette,
    title: "UX/UI e Design de produto",
    description: "Interfaces intuitivas e bonitas que colocam o usuário no centro e aumentam a conversão.",
    items: [
      "Pesquisa com usuários",
      "Prototipagem e wireframes",
      "Design system",
      "Testes de usabilidade",
    ],
    color: "bg-purple-600",
  },
  {
    icon: Wrench,
    title: "Manutenção e suporte",
    description: "Acompanhamos seu software após o lançamento, garantindo estabilidade, segurança e evolução contínua.",
    items: [
      "Monitoramento 24/7",
      "Correção de bugs com agilidade",
      "Atualizações de segurança",
      "Evolução de funcionalidades",
    ],
    color: "bg-teal-600",
  },
];

const extras = [
  { icon: MessageSquare, label: "Consultoria técnica especializada" },
  { icon: Code2, label: "Code review e auditoria de código" },
  { icon: Plug, label: "Squads dedicados por projeto" },
];

export default function Features() {
  return (
    <section id="servicos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            O que a Keroo Tech faz
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Do levantamento de requisitos à entrega em produção. Tecnologia que resolve problemas reais de negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 md:w-2/3 mx-auto">
          {services.slice(3).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
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
