// src/app/planejamento-orcamentario/page.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  ChevronRight, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Users, 
  Building,
  Briefcase,
  CreditCard,
  Megaphone,
  Receipt,
  Lightbulb,
  Wrench,
  Truck,
  Plus,
  Home,
  Info
} from "lucide-react"
import Link from "next/link"

export default function PlanejamentoOrcamentario() {
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
            <span className="text-foreground">Planejamento Orçamentário</span>
          </div>
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Financeiro
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Planejamento Orçamentário</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Gerencie seus indicadores financeiros e monitore o desempenho do seu negócio
            </p>
          </div>
        </div>

        {/* Required Financial Data Section */}
        <Card className="border-2 border-primary/10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-primary/5 rounded-bl-[200px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Dados Financeiros Principais</CardTitle>
                <CardDescription>Informações obrigatórias para cálculo dos indicadores</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10 space-y-8">
            {/* Inventory and Purchases */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Estoque Inicial
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Package className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Valor total do estoque no início do período</p>
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Compras do Período
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <ShoppingCart className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Total gasto em insumos no período</p>
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Estoque Final
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Package className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Valor total do estoque ao final do período</p>
              </div>
            </div>

            {/* Revenue and Customer Data */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Faturamento Total
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Receita total do período</p>
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Ticket Médio
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Receipt className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Valor médio gasto por cliente</p>
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Clientes Atendidos
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Users className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="0" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Total de clientes no período</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Optional Expenses Section */}
        <Card className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[300px] h-[200px] bg-secondary/5 rounded-bl-[150px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle>Despesas Operacionais</CardTitle>
                <CardDescription>
                  Adicione suas despesas para uma análise financeira mais precisa
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 space-y-6">
            <Alert className="bg-secondary/10 border-secondary/20">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Preencha as despesas operacionais para obter uma análise financeira mais detalhada e precisa
              </AlertDescription>
            </Alert>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label>Aluguel</Label>
                <div className="relative group">
                  <Building className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Custo mensal do aluguel</p>
              </div>
              
              <div className="space-y-2">
                <Label>Folha de Pagamento</Label>
                <div className="relative group">
                  <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Salários, encargos e benefícios</p>
              </div>
              
              <div className="space-y-2">
                <Label>Gorjetas</Label>
                <div className="relative group">
                  <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Total de gorjetas pagas aos colaboradores</p>
              </div>
              
              <div className="space-y-2">
                <Label>Marketing</Label>
                <div className="relative group">
                  <Megaphone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Campanhas publicitárias e promoções</p>
              </div>
              
              <div className="space-y-2">
                <Label>Serviços Públicos</Label>
                <div className="relative group">
                  <Lightbulb className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Água, luz, gás, telefonia e internet</p>
              </div>
              
              <div className="space-y-2">
                <Label>Manutenção e Equipamentos</Label>
                <div className="relative group">
                  <Wrench className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Reparos e substituições de equipamentos</p>
              </div>
              
              <div className="space-y-2">
                <Label>Delivery</Label>
                <div className="relative group">
                  <Truck className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Custos com plataformas de entrega</p>
              </div>
              
              <div className="space-y-2">
                <Label>Outras Despesas</Label>
                <div className="relative group">
                  <Plus className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Custos não categorizados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button 
            variant="outline" 
            className="hover:bg-secondary/80 transition-colors"
          >
            Cancelar
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 transition-colors"
          >
            Salvar Dados
          </Button>
        </div>
      </div>
    </div>
    )
}
