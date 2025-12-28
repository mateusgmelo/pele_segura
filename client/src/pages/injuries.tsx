import { ArrowLeft, User } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function InjuriesPage() {
  const topics = [
    { label: "1. O que são?", path: "/injuries/what-are" },
    { label: "2. Principais causas", path: "/injuries/causes" },
    { label: "3. Estágios das lesões", path: "/injuries/stages" },
    { label: "4. Quem tem maior risco?", path: "/injuries/risk" },

    { label: "5. Como prevenir", path: "/injuries/prevention" }
  ];

  return (
    <div className="flex-1 flex-col h-full bg-[#C8E6C9]">
      {/* Header */}
      <div className="bg-[#C8E6C9] px-6 pt-6 pb-4 flex flex-col items-center gap-4">
        <div className="w-full flex items-center justify-start">
            <Link href="/home">
                <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
                    <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
                </Button>
            </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-primary tracking-wide text-center">Lesões por Pressão</h1>
        
        <div className="relative mb-2">
            <div className="relative">
          <img
            src="/Lesao_icon.png"
            alt="Lesão por pressão"
            className="h-16 w-16 opacity-80"
          />
            </div>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 px-8 pb-8 overflow-y-auto flex flex-col gap-4 items-center">
        {topics.map((topic, index) => (
            <Link key={index} href={topic.path} className="w-full">
                <div 
                    className="w-full bg-[#F1F8E9] rounded-xl py-4 px-6 text-center shadow-sm cursor-pointer hover:bg-white transition-colors"
                >
                    <span className="text-primary font-medium text-lg">{topic.label}</span>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
