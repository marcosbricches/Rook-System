// app/onboarding/tutorial/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function TutorialPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Tutorial</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Tutoriais em Vídeo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Aprenda a utilizar todas as funcionalidades do sistema
            </p>
          </div>
        </section>

        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <div className="grid gap-6">
            {/* Introdução */}
            <Card>
              <CardHeader>
                <CardTitle>Introdução ao Sistema</CardTitle>
                <CardDescription>Visão geral das principais funcionalidades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Duração: 5 minutos
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gestão Financeira */}
            <Card>
              <CardHeader>
                <CardTitle>Gestão Financeira</CardTitle>
                <CardDescription>Como gerenciar finanças e relatórios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Duração: 8 minutos
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Controle de Estoque */}
            <Card>
              <CardHeader>
                <CardTitle>Controle de Estoque</CardTitle>
                <CardDescription>Gerenciamento de produtos e inventário</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Duração: 6 minutos
                  </div>
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