import { Card, CardContent } from "@/components/ui/card";
import { Flower, Check, CircleAlert } from "lucide-react";
import { Link } from "wouter";
import Icon from "@/assets/Lesao_icon.png";
export default function RightsPage() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - Green Section */}
      <div className="w-full bg-[#3EAD63] px-6 pt-10 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-15 w-15 bg-white rounded-2xl flex items-center justify-center shrink-0">
             <img
                  src="/Logo.png"
                  alt="Lesão por pressão"
                  className="h-15 w-15 opacity-100 rounded-lg"
                />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wide">Pele Segura</h1>
        </div>
        
        <div className="space-y-1">
          <p className="text-white/90 text-lg font-medium leading-relaxed">
            Cuidar é um gesto de amor e responsabilidade
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pt-8 pb-4 overflow-y-auto flex flex-col gap-8">
        <p className="text-primary/90 text-center text-lg leading-relaxed">
          Para que sua missão seja mais leve e segura, conheça os direitos e deveres do(a) cuidador(a), que ajudam a garantir o bem-estar do paciente.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-auto mb-12">
          {/* Card 1: Direitos */}
          <Link href="/rights/list">
            <Card className="bg-[#F1F8E9] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                <Check size={50} className="text-primary/80" strokeWidth={2} />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                    Direitos do(a)<br/>cuidador(a)
                </span>
                </CardContent>
            </Card>
          </Link>

          {/* Card 2: Deveres */}
          <Link href="/duties/list">
            <Card className="bg-[#C8E6C9] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
                <CardContent className="p-0 flex flex-col items-center gap-4">
                <CircleAlert size={50} className="text-primary/80" strokeWidth={2} />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                    Deveres do(a)<br/>cuidador(a)
                </span>
                </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
