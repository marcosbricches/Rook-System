// app/onboarding/settings/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, ArrowRight, Clock, Banknote, Settings } from "lucide-react"
import Link from "next/link"

export default function SystemSettingsPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com Progresso */}
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Etapa 3 de 4</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Configurações do Sistema
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Defina as configurações iniciais para personalizar sua experiência
            </p>
          </div>

          <Card className="max-w-[800px] mx-auto border-primary/20 mb-12">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Progress value={75} className="h-2" />
                </div>
                <span className="text-sm font-medium">3 de 4 etapas</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Configurações */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Preferências do Sistema</CardTitle>
              <CardDescription>Configure as preferências iniciais de funcionamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Configurações Financeiras */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Banknote className="w-5 h-5 text-primary" />
                  <h3>Configurações Financeiras</h3>
                </div>
                <Separator />
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="tax-rate">Alíquota Padrão de Impostos (%)</Label>
                    <Input id="tax-rate" placeholder="0.00" type="number" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Moeda</Label>
                    <Select defaultValue="BRL">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BRL">Real (R$)</SelectItem>
                        <SelectItem value="USD">Dólar (US$)</SelectItem>
                        <SelectItem value="EUR">Euro (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Habilitar Controle de Fluxo de Caixa</Label>
                      <p className="text-sm text-muted-foreground">
                        Ativa o monitoramento detalhado de entradas e saídas
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3>Horário de Funcionamento</h3>
                </div>
                <Separator />
                <Card className="border-dashed">
                  <CardContent className="pt-6">
                    <div className="grid gap-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label>Horário de Abertura</Label>
                          <Input type="time" />
                        </div>
                        <div className="grid gap-2">
                          <Label>Horário de Fechamento</Label>
                          <Input type="time" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Funciona aos Domingos</Label>
                          <p className="text-sm text-muted-foreground">
                            Define se o estabelecimento abre aos domingos
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Funciona aos Feriados</Label>
                          <p className="text-sm text-muted-foreground">
                            Define se o estabelecimento abre em feriados
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Notificações */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Settings className="w-5 h-5 text-primary" />
                  <h3>Preferências de Notificação</h3>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Alertas de Estoque Baixo</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba notificações quando produtos atingirem o estoque mínimo
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Relatórios Diários</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba um resumo diário das operações
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Alertas Financeiros</Label>
                      <p className="text-sm text-muted-foreground">
                        Notificações sobre movimentações financeiras importantes
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16 flex items-center justify-between">
          <Link href="/onboarding/team">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Button>
          </Link>
          <Link href="/onboarding/finish">
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