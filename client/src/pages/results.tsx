import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Share2, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/abstract_medical_skin_scan_visualization.png";

export default function ResultsPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 pt-6 pb-4 flex items-center justify-between border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <Link href="/home">
          <Button variant="ghost" size="icon" className="-ml-2">
            <ArrowLeft size={24} />
          </Button>
        </Link>
        <h1 className="font-bold text-lg">Resultado da Análise</h1>
        <Button variant="ghost" size="icon">
          <Share2 size={20} />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Main Result Card */}
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="h-48 w-full relative bg-gray-900">
             <img src={heroImage} className="w-full h-full object-cover opacity-80" alt="Skin analysis" />
             <div className="absolute bottom-4 left-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Baixo Risco
             </div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Lesão Benigna</h2>
                <p className="text-muted-foreground text-sm">Probabilidade de confiança: 94%</p>
              </div>
              <CheckCircle className="text-green-500 h-8 w-8" />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-sm font-medium">
                  <span>Simetria</span>
                  <span className="text-green-600">Regular</span>
                </div>
                <Progress value={90} className="h-2 bg-gray-100" indicatorClassName="bg-green-500" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm font-medium">
                  <span>Bordas</span>
                  <span className="text-green-600">Definidas</span>
                </div>
                <Progress value={85} className="h-2 bg-gray-100" indicatorClassName="bg-green-500" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm font-medium">
                  <span>Cor</span>
                  <span className="text-yellow-600">Leve Variação</span>
                </div>
                <Progress value={60} className="h-2 bg-gray-100" indicatorClassName="bg-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Info size={18} className="text-primary" />
            Recomendações
          </h3>
          <Card className="border-l-4 border-l-green-500 bg-white shadow-sm">
            <CardContent className="p-4 text-sm text-gray-600 leading-relaxed">
              Com base na análise, a lesão apresenta características benignas. Recomendamos manter o monitoramento mensal e usar protetor solar diariamente.
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 items-start">
          <AlertTriangle className="text-orange-500 shrink-0 mt-0.5" size={18} />
          <p className="text-xs text-orange-700 leading-relaxed">
            <strong>Aviso Importante:</strong> Este resultado é gerado por inteligência artificial e não substitui um diagnóstico médico profissional. Consulte sempre um dermatologista.
          </p>
        </div>

        <Link href="/home">
           <Button className="w-full h-12 text-base rounded-xl shadow-lg shadow-primary/20">
             Voltar ao Início
           </Button>
        </Link>
      </div>
    </div>
  );
}
