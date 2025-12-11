import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function AlarmsPage() {
  return (
    <div className="flex flex-col h-full bg-[#E8F5E9]">
      <div className="pt-6 px-6 pb-2">
         <Link href="/home">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Alarmes e lembretes</h1>
          <Clock size={40} className="text-primary/80" strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-y-auto">
        <h2 className="text-sm font-bold text-primary mb-4 ml-1">Paciente A</h2>
        
        <div className="space-y-4">
          <div className="bg-[#C8E6C9] rounded-xl p-4 flex items-center justify-between shadow-sm">
            <span className="text-primary font-medium text-sm">Reposicionar o paciente</span>
            <Switch defaultChecked className="data-[state=checked]:bg-primary" />
          </div>

          <div className="bg-[#C8E6C9] rounded-xl p-4 flex items-center justify-between shadow-sm">
            <span className="text-primary font-medium text-sm">Hidratar a pele</span>
            <Switch className="data-[state=checked]:bg-primary" />
          </div>

          <div className="text-center mt-6">
            <button className="text-primary font-medium text-sm hover:underline">
               + Novo alarme/lembrete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
