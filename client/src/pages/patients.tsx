import { useState } from "react";
import { ArrowLeft, HeartHandshake } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addPatient } from "@/lib/storage";
import imagem from "@/public/Paciente_icon.png";
function getInitials(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "P";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function PatientsPage() {
  const [, setLocation] = useLocation();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [mother, setMother] = useState("");
  const [hospital, setHospital] = useState("");
  const [sector, setSector] = useState("");
  const [bed, setBed] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    addPatient({
      name: name.trim(),
      dob: dob.trim(),
      age: age.trim(),
      mother: mother.trim(),
      hospital: hospital.trim(),
      sector: sector.trim(),
      bed: bed.trim(),
      initials: getInitials(name),
    });

    setLocation("/patients");
  }

  return (
    <div className="flex flex-col flex-1 bg-[#E8F5E9]">
      {/* Header */}
      <div className="pt-6 px-6 pb-2">
        <Link href="/patients">
          <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
            <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
          </Button>
        </Link>

        <div className="flex flex-col items-center gap-3 mt-2">
          <h1 className="text-3xl font-extrabold text-primary tracking-wide text-center">
            Novo Paciente
          </h1>
          <img
            src="/Paciente_icon.png"
            alt="Pacientes"
            className="h-12 w-12 opacity-80"
          />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 px-6 pb-6 overflow-y-auto">
        <div className="space-y-4 mt-6">
          <div>
            <Label className="text-xs text-primary/80 font-medium ml-1">Nome completo</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#C8E6C9] border-0 shadow-sm h-10 rounded-xl text-lg"
              placeholder=""
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
  <Label className="text-xs text-primary/80 font-medium ml-1">
    Data de nascimento
  </Label>

  <Input
    type="date"
    value={dob}
    onChange={(e) => setDob(e.target.value)}
    className="bg-[#C8E6C9] border-0 shadow-sm h-10 rounded-xl"
  />
</div>

            <div>
              <Label className="text-xs text-primary/80 font-medium ml-1">Idade</Label>
              <Input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-[#C8E6C9] border-0 shadow-sm h-10 rounded-xl"
                placeholder=""
              />
            </div>
          </div>

          <div>
            <Label className="text-xs text-primary/80 font-medium ml-1">Nome da mãe</Label>
            <Input
              value={mother}
              onChange={(e) => setMother(e.target.value)}
              className="bg-[#C8E6C9] border-0 shadow-sm h-10 rounded-xl"
              placeholder=""
            />
          </div>

          <div>
            <Label className="text-xs text-primary/80 font-medium ml-1">Hospital</Label>
            <Input
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="bg-[#C8E6C9] border-0 shadow-sm h-10 rounded-xl"
              placeholder=""
            />
          </div>

          <div>
            <Label className="text-xs text-primary/80 font-medium ml-1">Setor/Ala/Enfermaria</Label>
            <Input
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="bg-[#C8E6C9] border-0 shadow-sm h-10 rounded-xl"
              placeholder=""
            />
          </div>

          <div>
            <Label className="text-xs text-primary/80 font-medium ml-1">Leito</Label>
            <Input
              value={bed}
              onChange={(e) => setBed(e.target.value)}
              className="bg-[#C8E6C9] border-0 shadow-sm h-10 rounded-xl"
              placeholder=""
            />
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              className="w-full bg-[#C8E6C9] hover:bg-[#b0dcb2] text-primary/80 shadow-sm border-none rounded-xl h-12 font-medium"
            >
              Cadastrar paciente
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
