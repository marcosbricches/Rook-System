// src/app/planning/novo/page.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  ChevronRight, 
  Home,
  Calendar,
  FileSpreadsheet,
  Copy,
  LayoutTemplate,
  Settings,
  Clock,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export default function NovoPlanejamento() {
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
            <span className="text-foreground">Novo Planejamento</span>
          </div>
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Novo Planejamento
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Criar Novo Planejamento</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Configure as bases para seu novo planejamento orçamentário
            </p>
          </div>
        </div>

        {/* Basic Information */}
        <Card className="border-2 border-primary/10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-primary/5 rounded-bl-[200px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>Configure o período e informações iniciais</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Período de Referência</Label>
                <div className="relative group">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    type="month"
                    className="pl-10 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Base de Comparação</Label>
                <div className="relative group">
                  <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200 z-20" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Selecione o período base" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last">Último Período</SelectItem>
                      <SelectItem value="average-3">Média (3 meses)</SelectItem>
                      <SelectItem value="average-6">Média (6 meses)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Template Selection */}
        <Card className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[300px] h-[200px] bg-secondary/5 rounded-bl-[150px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <LayoutTemplate className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle>Modelo de Planejamento</CardTitle>
                <CardDescription>Escolha como iniciar seu planejamento</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center 
                      group-hover:scale-105 transition-transform duration-300">
                      <Copy className="w-6 h-6 text-primary" />
                    </div>
                    <Link href="/planning/novo/copiar">
                    <div>
                      <h3 className="font-semibold mb-1">Copiar Anterior</h3>
                      <p className="text-sm text-muted-foreground">
                        Use dados do último planejamento como base
                      </p>
                    </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center 
                      group-hover:scale-105 transition-transform duration-300">
                      <LayoutTemplate className="w-6 h-6 text-primary" />
                    </div>
                    <Link href="/planning/novo/template">
                    <div>
                      <h3 className="font-semibold mb-1">Usar Template</h3>
                      <p className="text-sm text-muted-foreground">
                        Inicie com um modelo predefinido
                      </p>
                    </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group cursor-pointer hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center 
                      group-hover:scale-105 transition-transform duration-300">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <Link href="/planning/novo/personalizado">
                    <div>
                      <h3 className="font-semibold mb-1">Personalizado</h3>
                      <p className="text-sm text-muted-foreground">
                        Configure tudo manualmente
                      </p>
                    </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Additional Settings */}
        <Card className="bg-secondary/5 border-secondary/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <CardTitle>Configurações Adicionais</CardTitle>
                <CardDescription>
                  Defina preferências específicas para este planejamento
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Meta de CMV (%)</Label>
                <div className="relative group">
                  <Input 
                    type="number"
                    placeholder="30"
                    className="transition-all duration-200"
                  />
                  <span className="absolute right-3 top-2.5 text-muted-foreground">%</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Recomendado: entre 30% e 32%
                </p>
              </div>

              <div className="space-y-2">
                <Label>Notificações</Label>
                <div className="relative group">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a frequência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Diárias</SelectItem>
                      <SelectItem value="weekly">Semanais</SelectItem>
                      <SelectItem value="monthly">Mensais</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-xs text-muted-foreground">
                  Frequência de alertas sobre o planejamento
                </p>
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
            Criar Planejamento
          </Button>
        </div>
      </div>
    </div>
  )
}