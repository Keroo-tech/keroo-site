import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keroo PDV — O sistema de ponto de venda mais simples e completo",
  description:
    "Gerencie suas vendas, estoque e relatórios com o Keroo PDV. Sistema de ponto de venda completo para pequenas e médias empresas.",
  keywords: "PDV, ponto de venda, sistema PDV, gestão de vendas, estoque, caixa",
  openGraph: {
    title: "Keroo PDV — O PDV mais simples e completo para o seu negócio",
    description:
      "Gerencie suas vendas, estoque e relatórios com o Keroo PDV.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
