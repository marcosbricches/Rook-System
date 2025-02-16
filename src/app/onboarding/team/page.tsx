// app/onboarding/team/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Settings, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function TeamConfigPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com Progresso */}
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Etapa 2 de 4</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Configuração da Equipe
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Adicione membros da sua equipe e defina suas permissões de acesso
            </p>
          </div>

          <Card className="max-w-[800px] mx-auto border-primary/20 mb-12">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Progress value={50} className="h-2" />
                </div>
                <span className="text-sm font-medium">2 de 4 etapas</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Formulário Principal */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Usuários</CardTitle>
              <CardDescription>Configure os membros da sua equipe e seus níveis de acesso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Convite de Usuários */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Users className="w-5 h-5 text-primary" />
                  <h3>Convite de Usuários</h3>
                </div>
                <Separator />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="user-email">E-mail do Usuário</Label>
                    <div className="flex gap-2">
                      <Input id="user-email" placeholder="colaborador@email.com" className="flex-1" />
                      <Button>Convidar</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funções */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Settings className="w-5 h-5 text-primary" />
                  <h3>Definição de Funções</h3>
                </div>
                <Separator />
                <Card className="border-dashed">
                  <CardContent className="pt-6">
                    <div className="grid gap-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="grid gap-2">
                          <Label>Nome</Label>
                          <Input placeholder="Nome do colaborador" />
                        </div>
                        <div className="grid gap-2">
                          <Label>Cargo</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o cargo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manager">Gerente</SelectItem>
                              <SelectItem value="chef">Chefe de Cozinha</SelectItem>
                              <SelectItem value="financial">Financeiro</SelectItem>
                              <SelectItem value="stock">Estoque</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label>Departamento</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o departamento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="operational">Operacional</SelectItem>
                              <SelectItem value="kitchen">Cozinha</SelectItem>
                              <SelectItem value="financial">Financeiro</SelectItem>
                              <SelectItem value="administrative">Administrativo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">Adicionar Outro Colaborador</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Permissões */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3>Configuração de Permissões</h3>
                </div>
                <Separator />
                <Card className="border-dashed">
                  <CardContent className="pt-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label>Cargo/Função</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o cargo para configurar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manager">Gerente</SelectItem>
                            <SelectItem value="chef">Chefe de Cozinha</SelectItem>
                            <SelectItem value="financial">Financeiro</SelectItem>
                            <SelectItem value="stock">Estoque</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Módulo Financeiro</h4>
                            <p className="text-sm text-muted-foreground">Acesso a relatórios e gestão financeira</p>
                          </div>
                          <Select defaultValue="read">
                            <SelectTrigger className="w-[140px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">Sem Acesso</SelectItem>
                              <SelectItem value="read">Visualização</SelectItem>
                              <SelectItem value="write">Edição</SelectItem>
                              <SelectItem value="admin">Administrador</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Módulo Estoque</h4>
                            <p className="text-sm text-muted-foreground">Gestão de produtos e inventário</p>
                          </div>
                          <Select defaultValue="none">
                            <SelectTrigger className="w-[140px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">Sem Acesso</SelectItem>
                              <SelectItem value="read">Visualização</SelectItem>
                              <SelectItem value="write">Edição</SelectItem>
                              <SelectItem value="admin">Administrador</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16 flex items-center justify-between">
          <Link href="/onboarding/restaurant-info">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Button>
          </Link>
          <Link href="/onboarding/settings">
            <Button className="group">
              Próxima Etapa
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}