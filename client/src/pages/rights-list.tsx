import { ArrowLeft, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function RightsListPage() {
  return (
    <div className="flex flex-col h-full bg-[#E8F5E9]">
      <div className="pt-6 px-6 pb-2">
         <Link href="/rights">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Direitos do(a) cuidador(a)</h1>
          <Check size={40} className="text-primary/80" strokeWidth={2} />
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-y-auto">
        <div className="bg-[#C8E6C9] rounded-3xl p-6 shadow-sm">
          <ol className="list-decimal list-outside pl-5 space-y-4 text-primary text-sm font-medium leading-relaxed">
            <li>Permanecer junto ao paciente, prestando os cuidados necessários;</li>
            <li>Ser tratado(a) com dignidade e respeito, sem nenhum tipo de preconceito;</li>
            <li>Ter assegurada a preservação de sua imagem, identidade e respeito a seus valores éticos, morais e culturais;</li>
            <li>Receber informação sobre as normas, rotinas e os regulamentos do hospital;</li>
            <li>Receber informações claras, objetivas e compreensíveis sobre o estado de saúde do paciente que acompanha;</li>
            <li>Caso o paciente não consiga decidir</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
