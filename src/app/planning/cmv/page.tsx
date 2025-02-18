// src/app/planejamento-orcamentario/cmv/page.tsx

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ChevronRight, 
  Home,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  AlertCircle,
  DollarSign,
  ShoppingCart,
  Package,
  ChartBar,
  Target,
  ArrowUpDown,
  Info
} from "lucide-react"
import Link from "next/link"

export default function CmvAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
        {/* Header Navigation */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/planejamento-orcamentario" className="hover:text-primary transition-colors">
              Planejamento Orçamentário
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Análise de CMV</span>
          </div>
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Análise Financeira
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Análise de CMV</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Monitore e analise seus indicadores de Custo de Mercadoria Vendida
            </p>
          </div>
        </div>

        {/* CMV Overview Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px]" />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Package className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Estoque Inicial</p>
                  <p className="text-2xl font-semibold tracking-tight">R$ 45.000,00</p>
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">12% vs último mês</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px]" />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <ShoppingCart className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Compras do Período</p>
                  <p className="text-2xl font-semibold tracking-tight">R$ 28.500,00</p>
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowDown className="w-4 h-4 text-red-500" />
                    <span className="text-red-500">8% vs último mês</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-[100px]" />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Package className="w-7 h-7 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Estoque Final</p>
                  <p className="text-2xl font-semibold tracking-tight">R$ 42.000,00</p>
                  <div className="flex items-center gap-1 text-sm">
                    <ArrowDown className="w-4 h-4 text-red-500" />
                    <span className="text-red-500">6% vs último mês</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CMV Calculation Card */}
        <Card className="border-2 border-primary/10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-primary/5 rounded-bl-[200px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <ChartBar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Cálculo do CMV</CardTitle>
                <CardDescription>
                  CMV = Estoque Inicial + Compras do Período - Estoque Final
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">CMV Calculado</p>
                      <p className="text-3xl font-bold tracking-tight">R$ 31.500,00</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Estoque Inicial</span>
                      <span className="font-medium">R$ 45.000,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">( + ) Compras</span>
                      <span className="font-medium">R$ 28.500,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">( - ) Estoque Final</span>
                      <span className="font-medium">R$ 42.000,00</span>
                    </div>
                    <div className="pt-4 border-t border-border flex justify-between items-center">
                      <span className="font-medium">CMV Total</span>
                      <span className="font-bold text-primary">R$ 31.500,00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <ArrowUpDown className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">CMV sobre Faturamento</p>
                      <p className="text-3xl font-bold tracking-tight">31.2%</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">CMV Total</span>
                      <span className="font-medium">R$ 31.500,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Faturamento Total</span>
                      <span className="font-medium">R$ 101.000,00</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="bg-secondary/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-primary mt-0.5" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Análise do Indicador</p>
                            <p className="text-sm text-muted-foreground">
                              Seu CMV está em 31.2%, dentro da faixa ideal (30-32%). Continue monitorando para manter este equilíbrio.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Margin Analysis */}
        <Card className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[300px] h-[200px] bg-secondary/5 rounded-bl-[150px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle>Análise de Margens</CardTitle>
                <CardDescription>
                  Indicadores relacionados ao CMV e suas margens
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Margem de Contribuição</p>
                      <p className="text-2xl font-bold">68.8%</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receita Total - CMV
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Lucro Operacional</p>
                      <p className="text-2xl font-bold">28.5%</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Margem de Contribuição - Despesas Operacionais
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-yellow-500/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status do CMV</p>
                      <p className="text-lg font-medium text-green-500">Dentro da Meta</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Recomendações:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Manter controle de estoques</li>
                      <li>• Monitorar variações de preços</li>
                      <li>• Avaliar fornecedores regularmente</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}