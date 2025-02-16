// app/onboarding/finish/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Rocket, ArrowLeft, ArrowRight, PlayCircle, FileText, Settings } from "lucide-react"
import Link from "next/link"

export default function FinishOnboardingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com Progresso */}
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Etapa 4 de 4</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Configuração Concluída!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Seu restaurante está pronto para começar a usar o Rook System
            </p>
          </div>

          <Card className="max-w-[800px] mx-auto border-primary/20 mb-12">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Progress value={100} className="h-2" />
                </div>
                <span className="text-sm font-medium">Configuração Completa!</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resumo das Configurações */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Configurações Realizadas</CardTitle>
              <CardDescription>Confira o resumo das suas configurações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Dados do Restaurante</h3>
                    <p className="text-sm text-muted-foreground">
                      Informações básicas, endereço e contatos configurados
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Equipe Configurada</h3>
                    <p className="text-sm text-muted-foreground">
                      Membros da equipe adicionados e permissões definidas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Preferências do Sistema</h3>
                    <p className="text-sm text-muted-foreground">
                      Configurações financeiras e operacionais definidas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximos Passos */}
          <Card className="bg-primary-foreground/5 mb-8">
            <CardHeader>
              <CardTitle>Próximos Passos</CardTitle>
              <CardDescription>Recursos para começar a usar o sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/onboarding/tutorial">
                  <Card className="group hover:shadow-lg transition-all">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <PlayCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Tutorial</CardTitle>
                        <CardDescription>Vídeos explicativos</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/onboarding/documentation">
                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Documentação</CardTitle>
                      <CardDescription>Guias detalhados</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                </Link>

                <Link href="/onboarding/support">
                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Settings className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Suporte</CardTitle>
                      <CardDescription>Central de ajuda</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16 flex items-center justify-between">
          <Link href="/onboarding/settings">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="group">
              Ir para o Dashboard
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}