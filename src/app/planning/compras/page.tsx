// src/app/planejamento-orcamentario/compras/page.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  ChevronRight,
  Home,
  Package,
  Upload,
  FileSpreadsheet,
  ShoppingCart,
  Calendar,
  GanttChart,
  Tags,
  CircleDollarSign,
  Scale,
} from "lucide-react"
import Link from "next/link"

export default function ComprasCategorizada() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px] opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
        {/* Header Navigation */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link 
              href="/planejamento-orcamentario" 
              className="hover:text-primary transition-colors"
            >
              Planejamento Orçamentário
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Compras Categorizada</span>
          </div>
          
          <div className="space-y-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5">
              Gestão de Compras
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Compras Categorizada</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Registre e classifique suas compras por categoria para análise detalhada de custos
            </p>
          </div>
        </div>

        {/* File Upload Section */}
        <Card className="border-2 border-primary/10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[400px] h-[300px] bg-primary/5 rounded-bl-[200px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle>Importar Dados</CardTitle>
                <CardDescription>Importe seus dados de compras via planilha</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="relative z-10 space-y-6">
            <Alert className="bg-secondary/10 border-secondary/20">
              <FileSpreadsheet className="h-4 w-4" />
              <AlertDescription>
                Aceitos arquivos nos formatos CSV ou Excel (.xlsx)
              </AlertDescription>
            </Alert>

            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-colors">
              <div className="bg-primary/10 w-12 h-12 rounded-full mx-auto flex items-center justify-center">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Arraste seu arquivo ou</p>
                <Button variant="outline" size="sm">Selecione um Arquivo</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Purchase Entry Form */}
        <Card className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[300px] h-[200px] bg-secondary/5 rounded-bl-[150px]" />
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle>Registro de Compra</CardTitle>
                <CardDescription>Cadastre manualmente uma nova compra</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Product Description */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Descrição do Produto
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Package className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="Ex: Camarão, Farinha de Trigo" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Purchase Date */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Data da Compra
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    type="date" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Categoria
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <GanttChart className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200 z-20" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="proteina">Proteína Animal</SelectItem>
                      <SelectItem value="graos">Grãos e Cereais</SelectItem>
                      <SelectItem value="laticinios">Laticínios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Subcategory */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Subcategoria
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Tags className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200 z-20" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Selecione uma subcategoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carnes-nobres">Carnes Nobres</SelectItem>
                      <SelectItem value="massas">Massas Artesanais</SelectItem>
                      <SelectItem value="leite">Leite e Derivados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Quantidade
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Scale className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    type="number" 
                    placeholder="0" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Unit of Measure */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Unidade de Medida
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <Scale className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200 z-20" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Selecione uma unidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Quilograma (kg)</SelectItem>
                      <SelectItem value="l">Litro (L)</SelectItem>
                      <SelectItem value="un">Unidade (un)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Unit Value */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1">
                  Valor Unitário
                  <span className="text-destructive">*</span>
                </Label>
                <div className="relative group">
                  <CircleDollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground 
                    group-hover:text-primary transition-colors duration-200" />
                  <Input 
                    placeholder="R$ 0,00" 
                    className="pl-10 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Total Value (Calculated) */}
              <div className="space-y-2">
                <Label>Valor Total</Label>
                <div className="relative group">
                  <CircleDollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="R$ 0,00" 
                    disabled 
                    className="pl-10 bg-muted/20"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Calculado automaticamente</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button 
            variant="outline" 
            className="hover:bg-secondary/80 transition-colors"
          >
            Cancelar
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 transition-colors"
          >
            Registrar Compra
          </Button>
        </div>
      </div>
    </div>
  )
}