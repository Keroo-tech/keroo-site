# Plano: Ajuste de conteúdo do keroo-site com base no keroo-pdv

## Contexto

O keroo-site é uma landing page de marketing do sistema Keroo PDV. O conteúdo atual descreve funcionalidades de forma genérica e, em alguns pontos, incorretamente (ex.: "Até 500 produtos" no plano Básico não existe no PDV — o limite real é de terminais, não de produtos). O objetivo é atualizar os textos das seções para refletir com precisão o que o keroo-pdv realmente oferece, com base nos 4 focos do usuário: Frente de Caixa (POS), Gestão de Estoque, Gestão de Produtos e Relatórios/Caixa.

---

## Arquivos a modificar

| Arquivo | O que muda |
|---|---|
| `components/Features.tsx` | Expandir de 3 para 5 cards de funcionalidades (Gestão de Clientes removida) |
| `components/Pricing.tsx` | Corrigir itens de cada plano (alinhado ao `license_module`) |
| `components/HowItWorks.tsx` | Atualizar passo 2 (remover menção a planilha) e passo 3 (mencionar abertura de caixa) |
| `components/Hero.tsx` | Sem alterações |
| `components/Footer.tsx` | Sem alterações |

---

## Mudanças detalhadas

### 1. `components/Features.tsx`

**Problema atual:** Só 3 cards, com descrições genéricas. Não menciona: gestão de produtos, caixa, multi-terminal, papéis de usuário.

**Mudança:** Expandir para 5 cards, adicionando ícones do `lucide-react`. Atualizar itens dos cards existentes para refletir o PDV real. Card de Gestão de Clientes removido a pedido.

**Cards:**

| Card | Ícone (lucide) | Itens reais do PDV |
|---|---|---|
| Frente de Caixa (POS) | `ShoppingCart` | Busca por nome ou código de barras; Pagamentos em dinheiro, cartão, Pix e crédito; Pagamento misto em uma mesma venda; Cálculo automático de troco; Comprovante de venda |
| Gestão de Estoque | `Package` | Controle por unidade, Kg ou litro; Baixa automática ao registrar venda; Alerta de estoque mínimo por produto; Histórico completo de movimentações |
| Relatórios e Caixa | `BarChart2` | Resumo diário por forma de pagamento; Histórico de fechamentos de caixa; Relatórios por período customizado; Impressão do fechamento |
| Gestão de Produtos | `Tag` | Cadastro com código de barras e código interno; Preço de custo e preço de venda separados; Categorias de produtos; Ativação e desativação sem exclusão |
| Multi-terminal | `Monitor` | Vários caixas no mesmo estabelecimento; Sincronização automática entre terminais; Funciona offline — vende mesmo sem internet; Perfis: operador, gerente e admin |

**Extras (rodapé da seção):**
- `CreditCard` → "Pagamento misto (cartão + dinheiro)"
- `Bell` → "Alerta de estoque mínimo"
- `Users` → "Controle por perfil de usuário"

---

### 2. `components/Pricing.tsx`

**Problema atual:** "Até 500 produtos" no Básico não existe no PDV. Plano Pro não menciona sync multi-terminal nem crédito de cliente. Enterprise não menciona terminais ilimitados de forma explícita.

**Baseado no `license_module` (features reais: `maxTerminals`, `cloudSync`, `clientCredit`, `hardwarePrinter`, `adminDashboard`):**

**Básico:**
```
- 1 terminal (frente de caixa)
- Produtos e clientes ilimitados
- Gestão de estoque completa
- Relatórios por período
- Impressão de comprovante
- Suporte por e-mail
- 14 dias grátis
```

**Pro (destaque):**
```
- Até 3 terminais simultâneos
- Tudo do plano Básico
- Sincronização entre terminais
- Crédito de cliente (fiado)
- Relatórios avançados por terminal
- Suporte prioritário
- 14 dias grátis
```

**Enterprise:**
```
- Terminais ilimitados
- Tudo do plano Pro
- Dashboard administrativo web
- Suporte dedicado 24/7
- Implantação assistida
- SLA garantido
```

---

### 3. `components/HowItWorks.tsx`

**Passo 2 — Adicione seus produtos:**
- Removida a menção "Importe uma planilha ou adicione um a um"
- **Novo:** "Cadastre seus produtos com nome, preço e estoque inicial."

**Passo 3 — Comece a vender:**
- Atualizado para mencionar abertura de caixa, que é um passo obrigatório no PDV antes de vender.
- **Novo:** "Abra o caixa informando o valor inicial, registre vendas e feche com o relatório do dia. Acompanhe tudo em tempo real."

---

## Verificação

Após as mudanças, verificar visualmente:
1. `npm run dev` no diretório `keroo-site`
2. Conferir seção Funcionalidades: 5 cards em grid, todos com dados reais do PDV
3. Conferir seção Preços: itens corretos por plano, sem menção a "500 produtos"
4. Conferir seção Como funciona: passo 2 sem menção a planilha; passo 3 menciona abertura e fechamento de caixa
5. Responsividade em mobile (grid deve empilhar corretamente)
