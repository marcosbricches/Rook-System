// app/onboarding/documentation/financial-reports/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"

export default function FinancialReportsDocPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Badge variant="outline">Documentação</Badge>
              <span className="text-muted-foreground">/</span>
              <Badge>Relatórios Financeiros</Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Como criar relatórios financeiros
            </h1>
            <p className="text-xl text-muted-foreground">
              Guia completo para geração e análise de relatórios financeiros no sistema
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <Card>
            <CardContent className="pt-6 space-y-8">
              {/* Introdução */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Introdução</h2>
                <p className="text-muted-foreground mb-4">
                  Os relatórios financeiros são ferramentas essenciais para monitorar o desempenho do seu restaurante. 
                  Neste guia, você aprenderá como criar, personalizar e analisar diferentes tipos de relatórios disponíveis no sistema.
                </p>
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Todos os relatórios podem ser gerados em diferentes períodos: diário, semanal, mensal ou personalizado, 
                        permitindo uma análise precisa conforme sua necessidade.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              {/* Tipos de Relatórios */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tipos de Relatórios Disponíveis</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Demonstrativo de Resultados (DRE)</h3>
                    <p className="text-muted-foreground">
                      Apresenta uma visão completa das receitas, custos e lucros do seu estabelecimento. 
                      Ideal para análise de performance financeira e tomada de decisões estratégicas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Fluxo de Caixa</h3>
                    <p className="text-muted-foreground">
                      Monitora todas as entradas e saídas financeiras do seu negócio. 
                      Essencial para controle de liquidez e planejamento financeiro.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Relatório de Vendas</h3>
                    <p className="text-muted-foreground">
                      Detalha o desempenho das vendas por período, produto, categoria ou forma de pagamento. 
                      Fundamental para análise de tendências e estratégias comerciais.
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Como Gerar */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Como Gerar um Relatório</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    Siga os passos abaixo para gerar qualquer relatório no sistema:
                  </p>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="text-muted-foreground">
                      Acesse o menu Financeiro no painel principal
                    </li>
                    <li className="text-muted-foreground">
                      Clique no botão Gerar Relatório localizado no topo da página
                    </li>
                    <li className="text-muted-foreground">
                      Selecione o tipo de relatório desejado entre as opções disponíveis
                    </li>
                    <li className="text-muted-foreground">
                      Configure o período de análise (diário, semanal, mensal ou personalizado)
                    </li>
                    <li className="text-muted-foreground">
                      Adicione filtros específicos se necessário (opcional)
                    </li>
                    <li className="text-muted-foreground">
                      Clique em Gerar para criar o relatório
                    </li>
                  </ol>
                </div>
              </div>

              <Separator />

              {/* Personalização */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Personalizando seus Relatórios</h2>
                <p className="text-muted-foreground mb-4">
                  Todos os relatórios podem ser personalizados de acordo com suas necessidades específicas:
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Colunas Personalizáveis</h3>
                    <p className="text-muted-foreground">
                      Adicione ou remova colunas para visualizar exatamente as informações que você precisa.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Filtros Avançados</h3>
                    <p className="text-muted-foreground">
                      Utilize filtros específicos para focar em dados particulares ou períodos específicos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Modelos Salvos</h3>
                    <p className="text-muted-foreground">
                      Salve suas configurações preferidas como modelos para uso futuro, economizando tempo.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16 flex items-center justify-between">
          <Link href="/onboarding/documentation">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para Documentação
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}