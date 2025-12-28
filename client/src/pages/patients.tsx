import { ArrowLeft, HeartHandshake } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PatientsPage() {
  return (
    <div className="flex flex-col h-full bg-[#E8F5E9]">
      <div className="pt-6 px-6 pb-2 relative">
         <Link href="/home">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2 absolute left-6 top-6">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Novo Paciente</h1>
          <HeartHandshake size={40} className="text-primary/80" strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-y-auto">
        <form className="space-y-4 mt-2">
          <div className="space-y-1">
            <Label className="text-xs text-primary/80 font-medium ml-1">Nome completo</Label>
            <Input className="bg-[#C8E6C9] border-none rounded-lg h-9 shadow-sm" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
                <Label className="text-xs text-primary/80 font-medium ml-1">Data de nascimento</Label>
                <Input className="bg-[#C8E6C9] border-none rounded-lg h-9 shadow-sm" />
            </div>
            <div className="space-y-1">
                <Label className="text-xs text-primary/80 font-medium ml-1">Idade</Label>
                <Input className="bg-[#C8E6C9] border-none rounded-lg h-9 shadow-sm" />
            </div>
          </div>

          <div className="space-y-1">
            <Label className="text-xs text-primary/80 font-medium ml-1">Nome da mãe</Label>
            <Input className="bg-[#C8E6C9] border-none rounded-lg h-9 shadow-sm" />
          </div>

          <div className="space-y-1">
            <Label className="text-xs text-primary/80 font-medium ml-1">Hospital</Label>
            <Input className="bg-[#C8E6C9] border-none rounded-lg h-9 shadow-sm" />
          </div>

          <div className="space-y-1">
            <Label className="text-xs text-primary/80 font-medium ml-1">Setor/Ala/Enfermaria</Label>
            <Input className="bg-[#C8E6C9] border-none rounded-lg h-9 shadow-sm" />
          </div>

           <div className="space-y-1">
            <Label className="text-xs text-primary/80 font-medium ml-1">Leito</Label>
            <Input className="bg-[#C8E6C9] border-none rounded-lg h-9 shadow-sm" />
          </div>

          <div className="pt-4 space-y-3">
             
             <Button className="w-full bg-[#C8E6C9] hover:bg-[#b0dcb2] text-primary/80 shadow-sm border-none rounded-lg h-10 font-medium">
                Cadastrar paciente
             </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
