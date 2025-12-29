import { useEffect, useState } from "react";
import { ArrowLeft, HeartHandshake, Plus } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { getPatients, Patient } from "@/lib/storage";
import imagem from "@/public/Paciente_icon.png";

export default function PatientsListPage() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    setPatients(getPatients());
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-[#E8F5E9]">
      {/* Header */}
      <div className="pt-6 px-6 pb-2 relative">
        <Link href="/home">
          <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2 absolute left-6 top-6">
            <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
          </Button>
        </Link>

        <Link href="/patients/new">
          <div className="absolute right-6 top-7 bg-[#C8E6C9] px-3 py-1 rounded-md text-xs font-bold text-primary flex items-center gap-1 cursor-pointer shadow-sm">
            <Plus size={14} strokeWidth={5} /> Novo Paciente
          </div>
        </Link>

        <div className="flex flex-col items-center gap-2 mt-10">
          <h1 className="text-3xl font-extrabold text-primary tracking-wide text-center">
            Pacientes
          </h1>
          <img
            src="/Paciente_icon.png"
            alt="Pacientes"
            className="h-12 w-12 opacity-80"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 px-8 pb-6 overflow-y-auto">
        <div className="space-y-6 mt-6">
          {patients.map((p) => (
            <div key={p.id} className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-white/70 flex items-center justify-center font-bold text-primary/80">
                {p.code}
              </div>
              <span className="text-primary font-medium text-xl">{p.name}</span>
            </div>
          ))}

          {patients.length === 0 && (
            <p className="text-center text-primary/60 mt-10">
              Nenhum paciente cadastrado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
