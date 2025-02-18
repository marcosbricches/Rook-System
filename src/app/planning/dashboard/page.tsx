// src/app/planning/dashboard/page.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ChevronRight, 
  Home,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  DollarSign,
  ShoppingCart,
  Package,
  ChartBar,
  FileSpreadsheet,
  AlertCircle,
  Clock,
  Building,
  Target,
  Plus
} from "lucide-react"
import Link from "next/link"

export default function PlanejamentoOrcamentarioDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Planejamento Orçamentário</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
                Visão Geral
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">Dashboard Financeiro</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Acompanhe seus principais indicadores e gerencie seu planejamento orçamentário
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/planning/historico">
              <Button variant="outline" className="gap-2">
                <Clock className="w-4 h-4" />
                Histórico
              </Button>
                </Link>
                <Link href="/planning/novo">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Novo Planejamento
              </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/planning">
            <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px]" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <FileSpreadsheet className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Dados Financeiros</p>
                    <p className="font-medium">Preencher Informações</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Última atualização: 2h atrás</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/planning/compras">
            <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px]" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <ShoppingCart className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Compras</p>
                    <p className="font-medium">Registrar Compras</p>
                    <div className="flex items-center gap-1 text-sm">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-500">5 compras pendentes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/planning/cmv">
            <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
              <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px]" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <ChartBar className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">CMV</p>
                    <p className="font-medium">Análise de CMV</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Target className="w-4 h-4 text-green-500" />
                      <span className="text-green-500">Dentro da meta</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Financial Overview */}
        <Card className="border-2 border-primary/10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-primary/5 rounded-bl-[200px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Visão Geral Financeira</CardTitle>
                <CardDescription>Principais indicadores do período atual</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <div className="grid gap-6 md:grid-cols-4">
              {/* CMV Card */}
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <ChartBar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CMV</p>
                      <p className="text-2xl font-bold">31.2%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowUp className="w-4 h-4 text-red-500" />
                    <span className="text-red-500">2.1% vs último mês</span>
                  </div>
                </CardContent>
              </Card>

              {/* Margin Card */}
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Margem</p>
                      <p className="text-2xl font-bold">68.8%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowDown className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">2.1% vs último mês</span>
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Card */}
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Faturamento</p>
                      <p className="text-2xl font-bold">R$ 101K</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">5.4% vs último mês</span>
                  </div>
                </CardContent>
              </Card>

              {/* Expenses Card */}
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Despesas</p>
                      <p className="text-2xl font-bold">R$ 40.3K</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowDown className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">1.2% vs último mês</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[300px] h-[200px] bg-secondary/5 rounded-bl-[150px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle>Atividades Recentes</CardTitle>
                <CardDescription>
                  Últimas atualizações do planejamento orçamentário
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Dados Financeiros Atualizados</p>
                    <span className="text-sm text-muted-foreground">2h atrás</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Atualização dos dados financeiros do período atual
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Nova Compra Registrada</p>
                    <span className="text-sm text-muted-foreground">5h atrás</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Registro de compra: Insumos - Categoria Proteínas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Estoque Atualizado</p>
                    <span className="text-sm text-muted-foreground">1d atrás</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Atualização do estoque final do período
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alerts and Recommendations */}
        <Card className="bg-secondary/5 border-secondary/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <CardTitle>Alertas e Recomendações</CardTitle>
                <CardDescription>
                  Pontos de atenção e sugestões para otimização
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-white/50 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-yellow-500/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">CMV Próximo do Limite</p>
                      <p className="text-sm text-muted-foreground">
                        O CMV está em 31.2%, próximo do limite superior recomendado de 32%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-green-500/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Margem Estável</p>
                      <p className="text-sm text-muted-foreground">
                        Margem de contribuição mantém-se estável nos últimos 3 períodos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/50 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                      <Package className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Compras Pendentes</p>
                      <p className="text-sm text-muted-foreground">
                        5 registros de compras aguardando categorização
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button 
            variant="outline" 
            className="hover:bg-secondary/80 transition-colors"
          >
            Exportar Relatório
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 transition-colors gap-2"
          >
            <Plus className="w-4 h-4" />
            Novo Planejamento
          </Button>
        </div>
      </div>
    </div>
  )
}