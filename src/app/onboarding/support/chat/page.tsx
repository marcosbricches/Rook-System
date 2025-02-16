// app/onboarding/support/chat/page.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, SendHorizontal } from "lucide-react"
import Link from "next/link"

export default function SupportChatPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative z-10 max-w-[800px] mx-auto pt-8">
          <Card className="h-[calc(100vh-120px)]">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/support-avatar.png" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Suporte Rook</CardTitle>
                    <p className="text-sm text-muted-foreground">Online agora</p>
                  </div>
                </div>
                <Link href="/onboarding/support">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex flex-col h-[calc(100%-140px)]">
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src="/support-avatar.png" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <p>Olá! Como posso ajudar você hoje?</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary p-3 rounded-lg text-primary-foreground max-w-[80%]">
                    <p>Oi! Preciso de ajuda para configurar as permissões dos usuários</p>
                  </div>
                  <Avatar>
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src="/support-avatar.png" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <p>Claro! Posso te ajudar com isso. Primeiro, vamos acessar a seção de Configurações no menu principal. Você já está nessa tela?</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input placeholder="Digite sua mensagem..." className="flex-1" />
                  <Button size="icon">
                    <SendHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}