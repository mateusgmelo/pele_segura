import { ArrowLeft, CircleAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function DutiesListPage() {
  return (
    <div className="flex flex-col h-full bg-[#C8E6C9]">
      <div className="pt-6 px-6 pb-2">
         <Link href="/rights">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Deveres do(a) cuidador(a)</h1>
          <CircleAlert size={40} className="text-primary/80" strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-y-auto">
        <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm">
          <ol className="list-decimal list-outside pl-5 space-y-4 text-primary text-sm font-medium leading-relaxed">
            <li>Manter identificação de acompanhante (crachá/etiqueta) em local visível;</li>
            <li>Higienizar as mãos sempre que entrar e sair do quarto;</li>
            <li>Permanecer junto ao paciente, prestando os cuidados necessários;</li>
            <li>Usar adequadamente avental, máscaras e luvas, quando indicado pelos profissionais de saúde do hospital;</li>
            <li>Usar adequadamente roupas e calçados apropriados ao ambiente hospitalar;</li>
            <li>Evitar circular pelos corredores e não visitar pacientes em outros leitos ou</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
