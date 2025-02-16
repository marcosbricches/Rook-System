// app/onboarding/documentation/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, ChevronRight, FileText } from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Documentação</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Guias e Documentação
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Documentação completa de todas as funcionalidades
            </p>
          </div>
        </section>

        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <div className="grid gap-6">
            {/* Guias Rápidos */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <CardTitle>Guias Rápidos</CardTitle>
                </div>
                <CardDescription>Instruções passo a passo para tarefas comuns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                    <Link href="/onboarding/documentation/financial-reports">
                  <Button variant="ghost" className="w-full justify-between">
                    Como criar relatórios financeiros
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                    </Link>
                  <Button variant="ghost" className="w-full justify-between">
                    Gerenciando usuários e permissões
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    Controle de estoque básico
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Documentação Técnica */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <CardTitle>Documentação Técnica</CardTitle>
                </div>
                <CardDescription>Documentação detalhada do sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full justify-between">
                    APIs e Integrações
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    Requisitos do Sistema
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between">
                    Segurança e Privacidade
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="relative z-10 max-w-[800px] mx-auto mb-16 flex items-center justify-between">
          <Link href="/onboarding/finish">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}