import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
  const scans = [
    { id: 1, date: "10 Dez, 2025", location: "Braço esquerdo", risk: "low", riskLabel: "Baixo Risco" },
    { id: 2, date: "05 Nov, 2025", location: "Costas - Superior", risk: "medium", riskLabel: "Atenção" },
    { id: 3, date: "12 Out, 2025", location: "Perna direita", risk: "low", riskLabel: "Baixo Risco" },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50 p-6 pt-8 gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Histórico</h1>
        <p className="text-muted-foreground text-sm">Seus registros de análise</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input placeholder="Buscar exames..." className="pl-9 h-11 bg-white border-gray-200 rounded-xl" />
      </div>

      <div className="space-y-3">
        {scans.map((scan) => (
          <Card key={scan.id} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center text-xs font-bold text-gray-400">
                  IMG
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{scan.location}</h4>
                  <p className="text-xs text-muted-foreground">{scan.date}</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                scan.risk === "low" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                {scan.riskLabel}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
