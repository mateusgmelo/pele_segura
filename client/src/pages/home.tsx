import { Card, CardContent } from "@/components/ui/card";
import { BookOpenCheck, User, Bandage, Clock, Flower } from "lucide-react";
import { Link } from "wouter";
import Icon from "@/assets/Lesao_icon.png";
import Icon2 from "@/assets/Direitos e deveres.png"
import Icon3 from "@/assets/Alarmes.png"
import Icon4 from "@/assets/Com_prevenir.png" 

export default function HomePage() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - Green Section */}
      <div className="bg-primary px-9 pt-5 pb-6 shadow-sm flex flex-col gap-4">


        <div className="flex items-center gap-3">
          <img
                  src="/Logo.png"
                  alt="Lesão por pressão"
                  className="h-15 w-15 opacity-100 rounded-lg"
                />
          <h1 className="text-3xl font-bold text-white tracking-wide">Pele Segura</h1>
        </div>
        
        <div className="space-y-2">
          <p className="text-white/90 text-lg font-medium leading-relaxed">
           Olá, cuidador(a)!<br />
            Estamos aqui para ajudar você a cuidar com segurança e carinho.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 px-6 -mt-4 pb-5 flex items-center justify-center">
  <div className="grid grid-cols-2 gap-5 w-full max-w-[360px] mt-15">
          
          {/* Card 1: Direitos e deveres */}
          <Link href="/rights">
            <Card className="bg-[##EAF7EE] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-4">
                <img
                  src="/Direitos e deveres.png"
                  alt="Lesão por pressão"
                  className="h-12 w-15 opacity-80"
                />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                  Direitos e deveres do(a) cuidador(a)
                </span>
              </CardContent>
            </Card>
          </Link>

          {/* Card 2: Lesões por Pressão */}
          <Link href="/injuries">
            <Card className="bg-[#A8D5BA] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-3">
                <img
                  src="/Lesao_icon.png"
                  alt="Lesão por pressão"
                  className="h-15 w-15 opacity-80"
                />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                  Lesões por Pressão
                </span>
              </CardContent>
            </Card>
          </Link>

          {/* Card 3: Como Prevenir */}
          <Link href="/prevention">
            <Card className="bg-[#A8D5BA] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-3">
                <img
                  src="/Com_prevenir.png"
                  alt="Lesão por pressão"
                  className="h-12 w-12 opacity-80"
                />
                <span className="text-sm font-semibold text-primary/90 leading-tight">
                  Como<br/>Prevenir?
                </span>
              </CardContent>
            </Card>
          </Link>

          {/* Card 4: Alarmes e lembretes */}
          <Link href="/alarms">
            <Card className="bg-[##EAF7EE] border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer aspect-square flex flex-col items-center justify-center text-center p-2">
              <CardContent className="p-0 flex flex-col items-center gap-3">
                <img
                  src="/Alarmes.png"
                  alt="Lesão por pressão"
                  className="h-12 w-12 opacity-80"
                />
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
