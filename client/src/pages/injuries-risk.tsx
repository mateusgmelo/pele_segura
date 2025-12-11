import { ArrowLeft, User } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function RiskPage() {
  return (
    <div className="flex flex-col h-full bg-[#C8E6C9]">
      <div className="pt-6 px-6 pb-2">
         <Link href="/injuries">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Quem tem maior risco?</h1>
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
          <p className="text-primary text-sm font-medium leading-relaxed text-center">
            Nem todas as pessoas têm a mesma chance de desenvolver uma lesão por pressão. O risco é maior em quem passa muito tempo deitado ou sentado, como pessoas acamadas ou que usam cadeira de rodas.
          </p>
          
          <div className="mt-8 rounded-2xl overflow-hidden border-4 border-white shadow-sm mx-auto w-48 h-40 bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400" 
              className="w-full h-full object-cover opacity-80" 
              alt="Risco" 
            />
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 pb-2">
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
           <div className="h-2 w-2 rounded-full bg-primary/30"></div>
        </div>
      </div>
    </div>
  );
}
