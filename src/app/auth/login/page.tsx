import { ArrowRight, Mail, Lock } from "lucide-react"
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

export default function LoginPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 pt-12 pb-24">
        {/* Header Section */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <Badge 
            variant="outline" 
            className="mb-4 hover:bg-primary/5 transition-colors"
          >
            Área Restrita
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Acesse sua Conta
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Entre com suas credenciais para acessar o Rook System
          </p>
        </div>

        {/* Login Card */}
        <Card className="max-w-[400px] mx-auto backdrop-blur-sm bg-background/95 border-border/50">
          <CardHeader>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription className="text-base">
              Digite seu e-mail e senha para entrar
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              {/* Email */}
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

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="h-11 pl-10"
                  />
                </div>
              </div>
            </div>

{/* Links Row */}
<div className="flex justify-between items-center">
  <Link href="/auth/2fa">
    <Button variant="link" className="px-0 text-sm">
      Verificação em 2 Etapas
    </Button>
  </Link>
  
  <Link href="/auth/recover">
    <Button variant="link" className="px-0 text-sm">
      Esqueceu sua senha?
    </Button>
  </Link>
</div>

            {/* Login Button */}
            <Button className="w-full h-11">
              <span>Entrar</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* Register Link */}
            <div className="text-center text-sm text-muted-foreground">
              Ainda não tem uma conta?{" "}
              <Link href="/auth/register">
                <Button variant="link" className="px-2 text-sm">
                  Cadastre-se
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}