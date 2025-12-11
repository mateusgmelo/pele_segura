import { Card, CardContent } from "@/components/ui/card";
import { BookOpenCheck, User, Bandage, Clock, Flower } from "lucide-react";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - Green Section */}
      <div className="bg-primary px-6 pt-8 pb-12 rounded-b-[30px] shadow-sm flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shrink-0">
             <Flower className="text-primary h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wide">Pele Segura</h1>
        </div>
        
        <div className="space-y-1">
          <p className="text-white/90 text-lg font-medium leading-relaxed">
            Olá, cuidador(a)!<br />
            Estamos aqui para ajudar você a cuidar com segurança e carinho.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 px-6 -mt-4 pb-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          
          {/* Card 1: Direitos e deveres */}
          <Link href="/rights">
            <Card className="bg-[#F1F8E9] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-3">
                <BookOpenCheck size={40} className="text-primary/80" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                  Direitos e deveres do(a) cuidador(a)
                </span>
              </CardContent>
            </Card>
          </Link>

          {/* Card 2: Lesões por Pressão */}
          <Link href="/injuries">
            <Card className="bg-[#C8E6C9] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-3">
                <div className="relative">
                  <User size={40} className="text-primary/80" strokeWidth={1.5} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
                     <div className="h-1 w-1 bg-red-400 rounded-full"></div>
                     <div className="h-1 w-1 bg-red-400 rounded-full translate-y-2"></div>
                  </div>
                </div>
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                  Lesões por Pressão
                </span>
              </CardContent>
            </Card>
          </Link>

          {/* Card 3: Como Prevenir */}
          <Link href="/prevention">
            <Card className="bg-[#C8E6C9] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-3">
                <Bandage size={40} className="text-primary/80" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                  Como<br/>Prevenir?
                </span>
              </CardContent>
            </Card>
          </Link>

          {/* Card 4: Alarmes e lembretes */}
          <Link href="/alarms">
            <Card className="bg-[#F1F8E9] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-3">
                <Clock size={40} className="text-primary/80" strokeWidth={1.5} />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                  Alarmes e lembretes
                </span>
              </CardContent>
            </Card>
          </Link>

        </div>
      </div>
    </div>
  );
}
