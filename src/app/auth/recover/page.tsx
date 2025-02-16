// auth/recover/page.tsx
import { ArrowLeft, Mail, Send } from "lucide-react"
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
import Link from "next/link"

export default function RecoverPasswordPage() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />

      <div className="container relative z-10 mx-auto px-4 pt-12 pb-24">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <Badge 
            variant="outline" 
            className="mb-4 hover:bg-primary/5 transition-colors"
          >
            Recuperação de Senha
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Esqueceu sua Senha?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Digite seu e-mail para receber um link de recuperação
          </p>
        </div>

        <Card className="max-w-[400px] mx-auto backdrop-blur-sm bg-background/95 border-border/50">
          <CardHeader>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
              <Send className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">Recuperar Senha</CardTitle>
            <CardDescription className="text-base">
              Enviaremos um link para seu e-mail
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="h-11 pl-10"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full h-11">
              Enviar Link de Recuperação
              <Send className="ml-2 h-4 w-4" />
            </Button>

            <div className="text-center">
              <Link href="/auth/login">
                <Button variant="ghost" className="space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar para o Login</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}