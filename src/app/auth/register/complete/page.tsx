import {
    Building2,
    Briefcase,
    User,
    ArrowLeft
  } from "lucide-react"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import Link from "next/link"
  
  export default function CompleteRegisterPage() {
    return (
      <main className="min-h-screen relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
  
        {/* Main Content */}
        <div className="container relative z-10 mx-auto px-4 pt-12 pb-24">
          {/* Header Section */}
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <Badge 
              variant="outline" 
              className="mb-4 hover:bg-primary/5 transition-colors"
            >
              Complete seu Cadastro
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Configure seu Estabelecimento
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Forneça informações adicionais para personalizar sua experiência
            </p>
          </div>
  
          {/* Main Card */}
          <Card className="max-w-[800px] mx-auto backdrop-blur-sm bg-background/95 border-border/50">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-2xl">Dados do Estabelecimento</CardTitle>
              <CardDescription className="text-base">
                Escolha o tipo de perfil e preencha as informações necessárias
              </CardDescription>
            </CardHeader>
  
            <CardContent className="space-y-6">
              <Tabs defaultValue="pj" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="pj" className="space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Pessoa Jurídica</span>
                  </TabsTrigger>
                  <TabsTrigger value="pf" className="space-x-2">
                    <User className="w-4 h-4" />
                    <span>Pessoa Física</span>
                  </TabsTrigger>
                </TabsList>
  
                {/* Pessoa Jurídica Form */}
                <TabsContent value="pj" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input 
                        id="cnpj"
                        placeholder="00.000.000/0000-00"
                        className="h-11"
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="razao-social">Razão Social</Label>
                      <Input 
                        id="razao-social"
                        placeholder="Nome da empresa"
                        className="h-11"
                        disabled
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="faturamento">Faturamento Médio (12 meses)</Label>
                      <Input 
                        id="faturamento"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="regime">Regime Tributário</Label>
                      <Select>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Selecione o regime" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simples">Simples Nacional</SelectItem>
                          <SelectItem value="presumido">Lucro Presumido</SelectItem>
                          <SelectItem value="real">Lucro Real</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ticket">Ticket Médio</Label>
                      <Input 
                        id="ticket"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="clientes">Quantidade de Clientes Diários</Label>
                      <Input 
                        id="clientes"
                        type="number"
                        placeholder="0"
                        className="h-11"
                      />
                    </div>
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="estabelecimento">Nome do Estabelecimento</Label>
                    <Input 
                      id="estabelecimento"
                      placeholder="Nome do seu restaurante"
                      className="h-11"
                    />
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="tipo-culinaria">Tipo de Culinária</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="italiana">Italiana</SelectItem>
                        <SelectItem value="japonesa">Japonesa</SelectItem>
                        <SelectItem value="brasileira">Brasileira</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
  
                {/* Pessoa Física Form */}
                <TabsContent value="pf" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF</Label>
                      <Input 
                        id="cpf"
                        placeholder="000.000.000-00"
                        className="h-11"
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="ticket-pf">Ticket Médio</Label>
                      <Input 
                        id="ticket-pf"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="faturamento-pf">Faturamento Médio Esperado</Label>
                      <Input 
                        id="faturamento-pf"
                        placeholder="R$ 0,00"
                        className="h-11"
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="clientes-pf">Quantidade de Clientes Diários</Label>
                      <Input 
                        id="clientes-pf"
                        type="number"
                        placeholder="0"
                        className="h-11"
                      />
                    </div>
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="estabelecimento-pf">Nome do Estabelecimento</Label>
                    <Input 
                      id="estabelecimento-pf"
                      placeholder="Nome do seu negócio"
                      className="h-11"
                    />
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="tipo-culinaria-pf">Tipo de Culinária</Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doces">Doces</SelectItem>
                        <SelectItem value="salgados">Salgados</SelectItem>
                        <SelectItem value="bebidas">Bebidas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>
  
              {/* Action Buttons */}
              <div className="flex justify-between pt-6">
                <Link href="/auth/register">
                  <Button variant="outline" className="space-x-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Voltar</span>
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="space-x-2">
                    <span>Finalizar Cadastro</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }