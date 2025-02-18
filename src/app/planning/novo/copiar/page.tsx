// src/app/planejamento-orcamentario/novo/copiar/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar, ChartBar } from "lucide-react"


export default function CopiarPlanejamentoAnterior() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
          {/* Breadcrumb similar às outras páginas */}
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Copiar Planejamento
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Copiar Planejamento Anterior</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Revise e ajuste os dados do último planejamento
            </p>
          </div>
  
          {/* Preview do Último Planejamento */}
          <Card className="border-2 border-primary/10 shadow-lg">
          <div className="space-y-8">
  {/* Preview de Dados */}
  <div className="grid gap-6 md:grid-cols-2">
    <div className="space-y-2">
      <Label>Período Base</Label>
      <Card className="bg-secondary/5 p-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-muted-foreground" />
          <span>Janeiro 2025</span>
        </div>
      </Card>
    </div>

    <div className="space-y-2">
      <Label>Status</Label>
      <Card className="bg-secondary/5 p-4">
        <div className="flex items-center gap-3">
          <Badge className="bg-green-500/10 text-green-500">
            Dentro da Meta
          </Badge>
        </div>
      </Card>
    </div>
  </div>

  {/* Indicadores */}
  <div className="grid gap-4 md:grid-cols-3">
    <Card className="bg-secondary/5">
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
      </CardContent>
    </Card>

    {/* Similar cards for Margem and Faturamento */}
  </div>

  {/* Configurações a Manter */}
  <Card>
    <CardHeader>
      <CardTitle>Configurações a Manter</CardTitle>
      <CardDescription>Selecione o que deseja copiar do planejamento anterior</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {/* Checkboxes for configurations */}
        <div className="flex items-center gap-2">
          <Checkbox id="metas" />
          <Label htmlFor="metas">Metas e Alertas</Label>
        </div>
        {/* More checkboxes */}
      </div>
    </CardContent>
  </Card>
</div>
          </Card>
  
          {/* Botões de Ação */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">Voltar</Button>
            <Button>Confirmar e Criar</Button>
          </div>
        </div>
      </div>
    )
  }