// app/onboarding/support/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, HeadphonesIcon, MessageSquare, SearchIcon, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Suporte</Badge>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Central de Ajuda
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Encontre ajuda ou entre em contato com nossa equipe
            </p>
          </div>
        </section>

        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          {/* Busca */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  className="pl-9" 
                  placeholder="Busque por dúvidas frequentes..."
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Chat ao Vivo */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Chat ao Vivo</CardTitle>
                    <CardDescription>Fale com um especialista</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Link href="/onboarding/support/chat">
                <Button className="w-full">Iniciar Chat</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Suporte por Telefone */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <HeadphonesIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Suporte por Telefone</CardTitle>
                    <CardDescription>Atendimento telefônico</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">0800 123 4567</Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQs */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
              <CardDescription>Respostas para as dúvidas mais comuns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link href="/onboarding/support/faq/reset-password">
                <Button variant="ghost" className="w-full justify-between text-left">
                  Como faço para resetar minha senha?
                  <ChevronRight className="w-4 h-4" />
                </Button>
                </Link>
                <Button variant="ghost" className="w-full justify-between text-left">
                  Como adicionar novos usuários?
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between text-left">
                  Como gerar relatórios personalizados?
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
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