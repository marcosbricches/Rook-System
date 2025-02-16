// app/onboarding/welcome/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Building2, CheckCircle, FileText, PlayCircle, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function WelcomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      {/* Welcome Header */}
      <section className="container relative z-10 pt-16 pb-8">
        <div className="max-w-[800px]">
          <Badge variant="secondary" className="mb-4">Bem-vindo ao Rook System</Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Vamos configurar seu restaurante
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete as etapas essenciais para começar a utilizar todas as funcionalidades do sistema.
          </p>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="container relative z-10 my-8">
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <Progress value={0} className="h-2" />
              </div>
              <span className="text-sm font-medium">0 de 4 etapas</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete todas as etapas para desbloquear funcionalidades avançadas
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Essential Steps */}
      <section className="container relative z-10 mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Restaurant Info Card */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Dados do Restaurante</CardTitle>
              <CardDescription>Configure as informações básicas do seu estabelecimento</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Informações de contato</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Endereço completo</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Horário de funcionamento</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/onboarding/restaurant-info" className="w-full">
                <Button className="w-full group">
                  Iniciar Configuração
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Team Setup Card */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Configuração da Equipe</CardTitle>
              <CardDescription>Adicione membros da sua equipe e defina permissões</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Convite de usuários</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Definição de funções</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Configuração de permissões</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full group" variant="outline">
                Próxima Etapa
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Help Resources */}
      <section className="container relative z-10 mb-16">
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Recursos de Ajuda</CardTitle>
            <CardDescription>Material de suporte para auxiliar na configuração</CardDescription>
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
    </div>
  )
}