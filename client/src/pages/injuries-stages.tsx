import { ArrowLeft, User } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function StagesPage() {
  return (
    <div className="flex flex-col h-full bg-[#C8E6C9]">
      <div className="pt-6 px-6 pb-2">
         <Link href="/injuries">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Estágios das lesões</h1>
          <div className="relative">
             <User size={32} className="text-primary/60" strokeWidth={1.5} />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-0.5">
                 <div className="h-0.5 w-0.5 bg-red-400 rounded-full"></div>
                 <div className="h-0.5 w-0.5 bg-red-400 rounded-full translate-y-1"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6 overflow-y-auto flex flex-col gap-4">
        <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm flex-1 mb-8">
          <p className="text-primary text-sm font-medium leading-relaxed text-center mb-4">
            As lesões por pressão têm começo, meio e fim — conhecer seus estágios é o primeiro passo para cuidar melhor.
          </p>
          <p className="text-primary text-sm font-medium leading-relaxed text-center">
             Entender os estágios das lesões é transformar prevenção em cuidado efetivo.
          </p>
          
          <div className="mt-8 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-sm mx-auto w-48 h-48 bg-blue-100 flex items-center justify-center">
             {/* Abstract skin layers illustration */}
             <div className="flex flex-col gap-2 p-4 w-full">
                 <div className="h-8 bg-[#E6A68E] rounded w-full flex items-center justify-center text-[10px] font-bold text-amber-900/50">1</div>
                 <div className="h-8 bg-[#D28C75] rounded w-full flex items-center justify-center text-[10px] font-bold text-amber-900/50 relative">
                    2
                    <div className="absolute h-4 w-4 bg-red-600 rounded-full blur-[1px]"></div>
                 </div>
                 <div className="h-8 bg-[#BC735E] rounded w-full flex items-center justify-center text-[10px] font-bold text-amber-900/50">3</div>
             </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 pb-2">
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
        </div>
      </div>
    </div>
  );
}
