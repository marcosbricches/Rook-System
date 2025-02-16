// auth/reset/page.tsx
import { ArrowRight, Lock } from "lucide-react"
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

export default function ResetPasswordPage() {
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
            Nova Senha
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Redefina sua Senha
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Digite e confirme sua nova senha
          </p>
        </div>

        {/* Reset Password Card */}
        <Card className="max-w-[400px] mx-auto backdrop-blur-sm bg-background/95 border-border/50">
          <CardHeader>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 border border-primary/20">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="text-2xl">Nova Senha</CardTitle>
            <CardDescription className="text-base">
              A senha deve conter no mínimo 6 caracteres com letras maiúsculas, minúsculas, números e caracteres especiais
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Password Fields */}
            <div className="space-y-4">
              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Nova Senha</Label>
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

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="h-11 pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full h-11">
              Salvar Nova Senha
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* Password Requirements */}
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Sua senha deve conter:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Mínimo de 6 caracteres</li>
                <li>Letras maiúsculas e minúsculas</li>
                <li>Números</li>
                <li>Caracteres especiais</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}