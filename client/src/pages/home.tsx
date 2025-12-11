import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ScanLine, ChevronRight, Sun, Calendar, Info } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 px-6 pt-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-muted-foreground text-sm">Bem-vindo de volta,</p>
          <h2 className="text-2xl font-bold text-foreground">Carlos Silva</h2>
        </div>
        <div className="h-10 w-10 rounded-full bg-secondary overflow-hidden border border-border">
          {/* We'll use the generated avatar here later, for now placeholder */}
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Avatar" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Main Action Card */}
      <Link href="/scan">
        <Card className="bg-primary text-primary-foreground border-0 shadow-xl shadow-primary/25 overflow-hidden relative group cursor-pointer">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <ScanLine size={120} />
          </div>
          <CardContent className="p-6 flex flex-col gap-4 relative z-10">
            <div className="h-12 w-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <ScanLine className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Novo Escaneamento</h3>
              <p className="text-primary-foreground/80 text-sm">Analise manchas e sinais suspeitos agora.</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium mt-2 bg-white/10 w-fit px-3 py-1.5 rounded-full">
              Começar agora <ChevronRight size={16} />
            </div>
          </CardContent>
        </Card>
      </Link>

      {/* Status Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="border-0 shadow-sm bg-orange-50/50">
          <CardContent className="p-4 flex flex-col gap-2">
            <Sun className="h-5 w-5 text-orange-500" />
            <span className="text-xs text-muted-foreground">Índice UV Hoje</span>
            <span className="text-lg font-bold text-orange-700">Alto (7)</span>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-blue-50/50">
          <CardContent className="p-4 flex flex-col gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            <span className="text-xs text-muted-foreground">Próxima Consulta</span>
            <span className="text-lg font-bold text-blue-700">14 Dez</span>
          </CardContent>
        </Card>
      </div>

      {/* Health Tips Section */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Dicas de Saúde</h3>
          <span className="text-xs text-primary font-medium cursor-pointer">Ver todas</span>
        </div>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 pb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-[240px] h-[140px] shrink-0 rounded-2xl bg-secondary/30 border border-border overflow-hidden relative p-4 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={`https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbiUyMGNhcmV8ZW58MHx8MHx8fDA%3D`} 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="Dica"
                />
                <div className="relative z-20 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Prevenção</span>
                  <h4 className="font-bold text-sm mt-1 whitespace-normal">Como proteger sua pele do sol corretamente</h4>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

       {/* Recent History */}
       <div className="space-y-3 pb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Histórico Recente</h3>
        </div>
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white border border-border shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">
                  IMG
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Escaneamento #{i}023</h4>
                  <p className="text-xs text-muted-foreground">10 Dez, 2025 • Braço esquerdo</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                Baixo Risco
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
