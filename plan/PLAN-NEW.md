# Plano de Mudanças — Keroo Tech (Software House)

## Visão Geral
O site atual é focado em um único produto (PDV). A proposta é transformá-lo no site institucional da **Keroo Tech**, uma software house, com uma seção dedicada aos produtos que a empresa oferece.

**Nova proposta de valor:**
> "Transformamos a gestão do seu negócio através da tecnologia. Somos uma fábrica de software especializada em desenvolver soluções sob medida para pequenas e médias empresas que buscam eficiência, inovação e crescimento no mercado digital."

---

## Mudanças por Componente

### 1. `Header.tsx`
- Remover o badge "PDV"
- Atualizar logo para "Keroo Tech"
- Trocar links de nav: `Funcionalidades` → `Serviços`, adicionar `Produtos`
- Trocar CTA "Começar grátis" → "Fale com a gente"

### 2. `Hero.tsx`
- Novo headline principal: algo como *"Sua ideia merece o software certo"*
- Subheading: o texto da proposta de valor acima
- Trocar os stats (500+ empresas, uptime...) por algo mais institucional: *Projetos entregues, Anos de experiência, Clientes ativos*
- Substituir o mockup de dashboard por uma ilustração ou cards de produtos/serviços

### 3. `Features.tsx` → renomear para `Services.tsx`
- Mudar foco de "funcionalidades do PDV" para **serviços da software house**:
  - Desenvolvimento sob medida
  - Integração de sistemas
  - Consultoria técnica
  - Manutenção e suporte
  - UX/UI e Design de produto

### 4. Nova seção: `Products.tsx` *(a ser criada)*
- Grid de cards de produtos próprios da Keroo Tech
- Cada card: nome, descrição curta, categoria (ex: "Varejo"), badge de status (ex: "Disponível", "Em breve"), e CTA
- **Produto inicial**: Keroo PDV — já existente
- Estrutura pensada para crescer com novos produtos

### 5. `HowItWorks.tsx`
- Trocar o fluxo de onboarding por **como a Keroo trabalha**:
  - Etapa 1: Entendemos seu negócio
  - Etapa 2: Desenvolvemos a solução
  - Etapa 3: Entregamos e evoluímos

### 6. `Pricing.tsx`
- Adaptar ou remover — software house geralmente não tem pricing público
- Alternativa: seção de **modelos de contratação** (Projeto fechado, Squad dedicado, Suporte contínuo)

### 7. `Testimonials.tsx`
- Adaptar depoimentos para clientes de software house (não apenas PDV)

### 8. `CtaBanner.tsx`
- Trocar "Pronto para modernizar seu PDV?" por CTA institucional
- Ex: *"Tem um projeto em mente? Vamos conversar."*

### 9. `Footer.tsx`
- Atualizar tagline e links para refletir a software house

---

## Ordem de Desenvolvimento

| Prioridade | Tarefa | Impacto |
|---|---|---|
| 1 | Header — rebrand e novos links | Alto |
| 2 | Hero — nova copy e stats | Alto |
| 3 | Nova seção `Products.tsx` | Alto |
| 4 | `Features` → `Services` com novo conteúdo | Alto |
| 5 | `HowItWorks` — novo fluxo | Médio |
| 6 | `CtaBanner` — novo CTA | Médio |
| 7 | `Footer` — atualização | Baixo |
| 8 | `Pricing` → modelos de contratação | Baixo |
| 9 | `Testimonials` — adaptar depoimentos | Baixo |

---

## Sobre a seção de Produtos

A ideia é um grid de cards como este:

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  Keroo PDV      │  │  Produto 2      │  │  Em breve...    │
│  ─────────────  │  │  ─────────────  │  │                 │
│  Sistema de     │  │  Descrição      │  │  Novo produto   │
│  ponto de venda │  │  do produto     │  │  em             │
│  para varejo    │  │                 │  │  desenvolvimento│
│                 │  │                 │  │                 │
│  [Varejo]       │  │  [Categoria]    │  │                 │
│  ✓ Disponível   │  │  ✓ Disponível   │  │  🔒 Em breve   │
│  [Saiba mais →] │  │  [Saiba mais →] │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

### Estrutura de dados de cada produto
```ts
{
  name: string;           // Nome do produto
  description: string;    // Descrição curta
  category: string;       // Ex: "Varejo", "Gestão", "Financeiro"
  status: "available" | "coming_soon";
  ctaLabel?: string;      // Ex: "Saiba mais", "Acessar"
  ctaHref?: string;
}
```

---

## Pendências / Perguntas em Aberto
- [ ] Quais outros produtos além do Keroo PDV serão listados?
- [ ] Há um link/página dedicada para cada produto ou apenas apresentação?
- [ ] Os depoimentos serão reais ou fictícios inicialmente?
- [ ] Manter seção de pricing ou substituir por modelos de contratação?
