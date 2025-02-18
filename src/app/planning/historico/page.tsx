// src/app/planning/historico/page.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  ChevronRight, 
  Home,
  Clock,
  FileSpreadsheet,
  Download,
  Calendar,
  Filter,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function HistoricoPlanejamento() {
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
            <Link 
              href="/planning/dashboard"
              className="hover:text-primary transition-colors"
            >
              Planejamento Orçamentário
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Histórico</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
                Histórico
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">Histórico de Planejamento</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Visualize e analise o histórico completo dos seus planejamentos orçamentários
              </p>
            </div>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Exportar Dados
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        <Card className="border-2 border-primary/10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-primary/5 rounded-bl-[200px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Filter className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Filtros</CardTitle>
                <CardDescription>Refine sua visualização de dados</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Período</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-3">Últimos 3 meses</SelectItem>
                    <SelectItem value="last-6">Últimos 6 meses</SelectItem>
                    <SelectItem value="last-12">Último ano</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Indicador</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o indicador" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cmv">CMV</SelectItem>
                    <SelectItem value="margin">Margem</SelectItem>
                    <SelectItem value="revenue">Faturamento</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="within">Dentro da Meta</SelectItem>
                    <SelectItem value="above">Acima da Meta</SelectItem>
                    <SelectItem value="below">Abaixo da Meta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Ordenação</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Data (mais recente)</SelectItem>
                    <SelectItem value="date-asc">Data (mais antiga)</SelectItem>
                    <SelectItem value="cmv-desc">CMV (maior)</SelectItem>
                    <SelectItem value="cmv-asc">CMV (menor)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Historical Data Table */}
        <Card className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[300px] h-[200px] bg-secondary/5 rounded-bl-[150px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle>Histórico de Períodos</CardTitle>
                <CardDescription>
                  Análise comparativa dos últimos períodos
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Período</TableHead>
                  <TableHead>CMV</TableHead>
                  <TableHead>Margem</TableHead>
                  <TableHead>Faturamento</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Variação</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="group hover:bg-secondary/5 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Jan 2025</span>
                    </div>
                  </TableCell>
                  <TableCell>31.2%</TableCell>
                  <TableCell>68.8%</TableCell>
                  <TableCell>R$ 101.000,00</TableCell>
                  <TableCell>
                    <Badge className="bg-green-500/10 text-green-500">
                      Dentro da Meta
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="w-4 h-4" />
                      <span>2.1%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Detalhes
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                
                <TableRow className="group hover:bg-secondary/5 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Dez 2024</span>
                    </div>
                  </TableCell>
                  <TableCell>29.1%</TableCell>
                  <TableCell>70.9%</TableCell>
                  <TableCell>R$ 98.500,00</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-500/10 text-yellow-500">
                      Abaixo da Meta
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-red-500">
                      <TrendingDown className="w-4 h-4" />
                      <span>1.8%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Detalhes
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Period Comparison */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-secondary/5 border-secondary/20">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-primary" />
                    <span className="font-medium">CMV Médio</span>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500">
                    Estável
                  </Badge>
                </div>
                <div>
                  <p className="text-3xl font-bold">30.8%</p>
                  <p className="text-sm text-muted-foreground">
                    Média dos últimos 6 meses
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/5 border-secondary/20">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-medium">Margem Média</span>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500">
                    Em Alta
                  </Badge>
                </div>
                <div>
                  <p className="text-3xl font-bold">69.2%</p>
                  <p className="text-sm text-muted-foreground">
                    Média dos últimos 6 meses
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/5 border-secondary/20">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ChevronDown className="w-5 h-5 text-primary" />
                    <span className="font-medium">Variação Média</span>
                  </div>
                  <Badge className="bg-yellow-500/10 text-yellow-500">
                    Atenção
                  </Badge>
                </div>
                <div>
                  <p className="text-3xl font-bold">±1.8%</p>
                  <p className="text-sm text-muted-foreground">
                    Variação média mensal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}