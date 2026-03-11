# Plano: Landing Page Keroo PDV

## Contexto
A Keroo é uma empresa de sistema PDV (Ponto de Venda). O objetivo é criar um site institucional (landing page) em React para apresentar e comercializar o sistema PDV para potenciais clientes. O projeto parte do zero em `C:/Users/User/projetos`.

## Stack
- **Next.js 14** (App Router) — React + SSR + roteamento, serve como a camada "Node.js"
- **Tailwind CSS** — estilização utilitária, rápido e consistente
- **shadcn/ui** — componentes prontos e acessíveis
- **Lucide React** — ícones
- **Framer Motion** — animações suaves nas seções

## Estrutura do Projeto
```
projetos/
└── keroo-site/
    ├── app/
    │   ├── layout.tsx          # Font, metadata, globals
    │   ├── page.tsx            # Composição das seções
    │   └── globals.css
    ├── components/
    │   ├── Header.tsx          # Navbar com logo e CTA
    │   ├── Hero.tsx            # Headline + CTAs + mockup
    │   ├── Features.tsx        # Cards de funcionalidades
    │   ├── HowItWorks.tsx      # Passo a passo (3 steps)
    │   ├── Pricing.tsx         # 3 planos de preço
    │   ├── Testimonials.tsx    # Depoimentos de clientes
    │   ├── CtaBanner.tsx       # Banner de conversão final
    │   └── Footer.tsx          # Links, redes sociais, copyright
    ├── public/
    │   └── (logo, imagens, mockups)
    ├── package.json
    ├── tailwind.config.ts
    └── next.config.ts
```

## Seções da Landing Page

### 1. Header (fixo no topo)
- Logo Keroo à esquerda
- Links de navegação: Funcionalidades, Preços, Depoimentos, Contato
- Botão CTA: "Começar grátis" (destaque)

### 2. Hero
- Headline: _"O PDV mais simples e completo para o seu negócio"_
- Subtítulo: descrição breve do sistema
- 2 CTAs: "Testar grátis 14 dias" (primário) + "Ver demonstração" (secundário)
- Mockup/screenshot ilustrativo do painel do sistema

### 3. Funcionalidades (3 cards principais)
- **Frente de Caixa (PDV)**: vendas rápidas, busca de produtos, múltiplos pagamentos
- **Gestão de Estoque**: cadastro de produtos, alertas de baixo estoque, entradas/saídas
- **Relatórios de Vendas**: dashboard com gráficos, relatório diário/mensal, exportação

### 4. Como Funciona
- Passo 1: Cadastre seu negócio
- Passo 2: Adicione seus produtos
- Passo 3: Comece a vender

### 5. Planos e Preços
- **Básico**: Entre em contato — 1 caixa, até 500 produtos
- **Pro**: Entre em contato — 3 caixas, produtos ilimitados, relatórios avançados _(destaque)_
- **Enterprise**: Entre em contato — ilimitado, suporte dedicado

> Todos os planos exibem botão "Fale conosco" direcionando para o formulário de contato.

### 6. Depoimentos
- 3 cards com foto (placeholder), nome, empresa e texto de depoimento

### 7. CTA Final
- Banner de conversão: "Pronto para modernizar seu PDV?"
- Botão: "Começar grátis agora"

### 8. Footer
- Logo + descrição curta
- Links: Funcionalidades, Preços, Blog, Suporte
- Redes sociais
- Copyright © 2026 Keroo

## Identidade Visual
- **Cor primária**: Azul escuro (`#1E3A5F`) — confiança e profissionalismo
- **Cor de acento**: Laranja (`#F97316`) — energia e CTAs
- **Fundo**: Branco e cinza claro (`#F8FAFC`)
- **Tipografia**: Inter (Google Fonts)

> ⚠️ A paleta pode ser ajustada após aprovação se o usuário tiver uma identidade visual definida.

## Passos de Implementação

1. Instalar Node.js (necessário para rodar o projeto)
2. Inicializar projeto: `npx create-next-app@latest keroo-site --typescript --tailwind --app`
3. Instalar dependências: `shadcn/ui init`, `framer-motion`, `lucide-react`
4. Configurar tema Tailwind com cores da Keroo em `tailwind.config.ts`
5. Criar componentes na ordem das seções (de cima para baixo)
6. Compor tudo em `app/page.tsx`
7. Ajustar responsividade (mobile-first)
8. Otimizar SEO: metadata, Open Graph, favicon com logo Keroo

## Verificação
- Abrir `http://localhost:3000` e navegar por todas as seções
- Testar responsividade em mobile (375px), tablet (768px) e desktop (1280px)
- Verificar âncoras de navegação do header
- Confirmar que CTAs estão visíveis e acessíveis

## Status
- [ ] Node.js instalado
- [ ] Projeto inicializado
- [ ] Dependências instaladas
- [ ] Tailwind configurado
- [ ] Header
- [ ] Hero
- [ ] Features
- [ ] HowItWorks
- [ ] Pricing
- [ ] Testimonials
- [ ] CtaBanner
- [ ] Footer
- [ ] page.tsx composto
- [ ] Responsividade revisada
- [ ] SEO otimizado
