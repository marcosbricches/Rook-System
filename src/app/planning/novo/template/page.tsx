// src/app/planejamento-orcamentario/novo/template/page.tsx
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function SelecionarTemplate() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
          {/* Breadcrumb */}
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Templates
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Selecionar Template</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Escolha um modelo predefinido para seu planejamento
            </p>
          </div>
  
          {/* Grid de Templates */}
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/planning/novo/template/1">
              <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Template Básico</h3>
                      <p className="text-sm text-muted-foreground">
                        Configurações padrão para início rápido
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            {/* Mais cards de template... */}
          </div>
        </div>
      </div>
    )
  }