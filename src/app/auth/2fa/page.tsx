// auth/2fa/page.tsx
import { ArrowRight, Shield } from "lucide-react"
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

export default function TwoFactorAuthPage() {
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
            Verificação em Duas Etapas
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Verificação Adicional
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Digite o código enviado para seu e-mail ou telefone
          </p>
        </div>

        <Card className="max-w-[400px] mx-auto backdrop-blur-sm bg-background/95 border-border/50">
          <CardHeader>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">Código de Verificação</CardTitle>
            <CardDescription className="text-base">
              O código expira em 5 minutos
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code">Código</Label>
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <Input
                      key={i}
                      className="h-12 text-center text-lg font-medium"
                      maxLength={1}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Button className="w-full h-11">
              Verificar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Não recebeu o código?
              </p>
              <Button variant="link" className="text-sm">
                Reenviar código
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}