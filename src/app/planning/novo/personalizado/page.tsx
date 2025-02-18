// src/app/planejamento-orcamentario/novo/personalizado/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PlanejamentoPersonalizado() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
          {/* Breadcrumb */}
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Personalizado
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Planejamento Personalizado</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Configure seu planejamento do zero
            </p>
          </div>
  
          {/* Formulário Completo */}
          <Card className="border-2 border-primary/10 shadow-lg">
          <div className="space-y-8">
  {/* Configurações Básicas */}
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
      <Label>Meta de CMV (%)</Label>
      <div className="relative">
        <Input 
          type="number"
          placeholder="30"
          className="pl-10"
        />
        <span className="absolute right-3 top-2.5 text-muted-foreground">%</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Recomendado: entre 30% e 32%
      </p>
    </div>

    <div className="space-y-2">
      <Label>Margem Mínima (%)</Label>
      <div className="relative">
        <Input 
          type="number"
          placeholder="68"
          className="pl-10"
        />
        <span className="absolute right-3 top-2.5 text-muted-foreground">%</span>
      </div>
    </div>
  </div>

  {/* Categorias Personalizadas */}
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>Categorias de Compras</span>
        <Button size="sm" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {/* Repeated for each category */}
        <div className="flex items-center gap-4">
          <Input placeholder="Nome da Categoria" className="flex-1" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="insumo">Insumo</SelectItem>
              <SelectItem value="operacional">Operacional</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Configurações de Alertas */}
  <Card>
    <CardHeader>
      <CardTitle>Configuração de Alertas</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Frequência</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Diário</SelectItem>
              <SelectItem value="weekly">Semanal</SelectItem>
              <SelectItem value="monthly">Mensal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Tipo de Alerta</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="critical">Apenas Críticos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
          </Card>
  
          {/* Botões de Ação */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">Voltar</Button>
            <Button>Criar Planejamento</Button>
          </div>
        </div>
      </div>
    )
  }