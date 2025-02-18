// src/app/planejamento-orcamentario/novo/template/1/page.tsx
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils } from "lucide-react"

export default function ConfigurarTemplate() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
          {/* Breadcrumb */}
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Configurar Template
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Template Básico</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ajuste as configurações do template selecionado
            </p>
          </div>
  
          {/* Configurações do Template */}
          <Card className="border-2 border-primary/10 shadow-lg">
            {/* Template Básico */}
<div className="space-y-8">
  <div className="grid gap-6 md:grid-cols-2">
    <Card className="bg-secondary/5">
      <CardHeader>
        <CardTitle>Metas Predefinidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>CMV Alvo</span>
            <span className="font-medium">30%</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Margem Mínima</span>
            <span className="font-medium">68%</span>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-secondary/5">
      <CardHeader>
        <CardTitle>Configurações de Alertas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Frequência</span>
            <Badge>Semanal</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>Tipo</span>
            <Badge>Automático</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>

  {/* Categorias Padrão */}
  <Card>
    <CardHeader>
      <CardTitle>Categorias Incluídas</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 w-8 h-8 rounded-lg flex items-center justify-center">
            <Utensils className="w-4 h-4 text-primary" />
          </div>
          <span>Proteínas</span>
        </div>
        {/* More categories */}
      </div>
    </CardContent>
  </Card>
</div>
          </Card>
  
          {/* Botões de Ação */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">Voltar</Button>
            <Button>Criar com Template</Button>
          </div>
        </div>
      </div>
    )
  }