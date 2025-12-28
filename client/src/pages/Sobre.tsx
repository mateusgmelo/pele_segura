import { ArrowLeft, Info } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    // min-h-full (não h-full) + flex-col
    <div className="min-h-full flex flex-col">
      {/* este wrapper é quem pinta o fundo e ocupa TODO o espaço acima da BottomNav */}
      <div className="flex-1 bg-[#C8E6C9] flex flex-col">
        {/* Top */}
        <div className="pt-6 px-6 pb-3">
          <Link href="/">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
              <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
          </Link>

          <div className="mt-2 flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold text-primary tracking-wide text-center">
              Sobre
            </h1>

            <div className="h-10 w-10 rounded-full border-2 border-primary/60 flex items-center justify-center">
              <Info className="text-primary/70 h-5 w-5" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="pt-6 px-6 pb-3">
          <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <img
                src="/logo_transparente.png"
                alt="Pele Segura"
                className="w-28 h-28 object-contain opacity-90"
              />

              <p className="mt-4 text-primary text-sm font-medium leading-relaxed text-center">
                O “Pele Segura” é um aplicativo móvel desenvolvido para ser um
                recurso educativo e prático na prevenção de Lesões por Pressão por
                cuidadores de pacientes. Nosso objetivo é fornecer as melhores e
                mais atuais evidências científicas
              </p>
            </div>
          </div>
        </div>

        {/* espaço restante agora fica verde */}
        <div className="flex-1" />
      </div>
    </div>
  );
}
