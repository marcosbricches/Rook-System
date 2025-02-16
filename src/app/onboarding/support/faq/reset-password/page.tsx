// app/onboarding/support/faq/reset-password/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function ResetPasswordFaqPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative z-10 pt-16 pb-8">
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Badge variant="outline">FAQ</Badge>
              <span className="text-muted-foreground">/</span>
              <Badge>Recuperação de Senha</Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Como faço para resetar minha senha?
            </h1>
            <p className="text-xl text-muted-foreground">
              Guia passo a passo para recuperar o acesso à sua conta
            </p>
          </div>
        </section>

        <section className="relative z-10 max-w-[800px] mx-auto mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                <CardTitle>Processo de Recuperação</CardTitle>
              </div>
              <CardDescription>Siga os passos abaixo para redefinir sua senha</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">1. Acesse a página de login</h3>
                    <p className="text-sm text-muted-foreground">
                      Na tela de login, clique no link Esqueceu sua senha?
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">2. Informe seu e-mail</h3>
                    <p className="text-sm text-muted-foreground">
                      Digite o e-mail cadastrado na sua conta e clique em Enviar
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">3. Verifique seu e-mail</h3>
                    <p className="text-sm text-muted-foreground">
                      Você receberá um link para redefinição de senha no e-mail informado
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">4. Crie uma nova senha</h3>
                    <p className="text-sm text-muted-foreground">
                      Clique no link recebido e defina sua nova senha seguindo os critérios de segurança
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-muted/50 mt-6">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Se você não receber o e-mail em alguns minutos, verifique sua pasta de spam ou entre em contato com o suporte.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>

        <section className="relative z-10 max-w-[800px] mx-auto mb-16 flex items-center justify-between">
          <Link href="/onboarding/support">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para Suporte
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}