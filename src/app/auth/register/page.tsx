import { ArrowRight, UserPlus } from "lucide-react"
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

export default function RegisterPage() {
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
            Cadastro Simplificado
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Comece sua jornada no Rook
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Otimize a gestão do seu restaurante em poucos passos
          </p>
        </div>

        {/* Registration Card */}
        <Card className="max-w-[500px] mx-auto backdrop-blur-sm bg-background/95 border-border/50 hover:border-border/80 transition-colors">
          <CardHeader>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
              <UserPlus className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">Cadastro Inicial</CardTitle>
            <CardDescription className="text-base">
              Preencha os dados essenciais para criar sua conta
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nome
                </Label>
                <Input 
                  id="name"
                  placeholder="Digite seu nome completo"
                  className="h-11 transition-all hover:border-primary/50 focus:border-primary"
                />
              </div>

              {/* CNPJ/CPF */}
              <div className="space-y-2">
                <Label htmlFor="document" className="text-sm font-medium">
                  CNPJ ou CPF
                </Label>
                <Input 
                  id="document"
                  placeholder="Digite apenas números"
                  className="h-11 transition-all hover:border-primary/50 focus:border-primary"
                />
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Telefone
                </Label>
                <Input 
                  id="phone"
                  placeholder="(00) 00000-0000"
                  className="h-11 transition-all hover:border-primary/50 focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="h-11 transition-all hover:border-primary/50 focus:border-primary"
                />
              </div>
            </div>

            {/* Continue Button */}
            <Link href="/auth/register/complete" className="block">
              <Button 
                className="w-full h-11 text-base font-medium"
                size="lg"
              >
                Continuar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Login Link */}
            <div className="text-center text-sm text-muted-foreground">
              Já possui uma conta?{" "}
              <Link href="/auth/login">
                <Button variant="link" className="px-2 text-sm font-medium">
                  Faça login
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}