// app/onboarding/restaurant-info/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Building2, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function RestaurantInfoPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com Progresso */}
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Etapa 1 de 4</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Dados do Restaurante
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Configure as informações básicas do seu estabelecimento para começar
            </p>
          </div>

          <Card className="max-w-[800px] mx-auto border-primary/20 mb-12">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Progress value={25} className="h-2" />
                </div>
                <span className="text-sm font-medium">1 de 4 etapas</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Formulário */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>Preencha os dados principais do seu estabelecimento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Informações de Contato */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3>Informações de Contato</h3>
                </div>
                <Separator />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="restaurant-name">Nome do Restaurante</Label>
                    <Input id="restaurant-name" placeholder="Digite o nome do seu estabelecimento" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="contato@seurestaurante.com" />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3>Endereço</h3>
                </div>
                <Separator />
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" placeholder="00000-000" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="street">Rua</Label>
                      <Input id="street" placeholder="Nome da rua" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="number">Número</Label>
                      <Input id="number" placeholder="123" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Sala, andar, referência (opcional)" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="neighborhood">Bairro</Label>
                      <Input id="neighborhood" placeholder="Nome do bairro" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" placeholder="Nome da cidade" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" placeholder="UF" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navegação */}
        <section className="relative z-10 max-w-[800px] mx-auto mb-16 flex items-center justify-between">
          <Link href="/onboarding/welcome">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar
            </Button>
          </Link>
          <Link href="/onboarding/team">
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