import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, HeartHandshake, Plus } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PatientsListPage() {
  const patients = [
    
  ];

  return (
    <div className="flex flex-col h-full bg-[#E8F5E9]">
      <div className="pt-6 px-6 pb-2 relative">
         <Link href="/home">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2 absolute left-6 top-6">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <Link href="/patients/new">
            <div className="absolute right-6 top-8 bg-[#C8E6C9] px-2 py-1 rounded text-xs font-bold text-primary flex items-center gap-1 cursor-pointer shadow-sm">
                <Plus size={12} strokeWidth={3} /> Novo
            </div>
        </Link>

        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Pacientes</h1>
          <HeartHandshake size={40} className="text-primary/80" strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex-1 px-8 pb-6 overflow-y-auto">
        <div className="space-y-4 mt-4">
            {patients.map((patient, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full ${patient.color} flex items-center justify-center text-xs font-bold text-primary/70 shrink-0`}>
                        {patient.initials}
                    </div>
                    <span className="text-primary font-medium">{patient.name}</span>
                </div>
            ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap gap-2 text-[10px] text-primary/70 font-medium justify-center">
          
        </div>
      </div>
    </div>
  );
}
