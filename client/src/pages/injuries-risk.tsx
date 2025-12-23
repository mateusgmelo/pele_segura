import { ArrowLeft, User, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
export default function estagios() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      text: "O risco para lesões por pressão está relacionado com fatores do próprio paciente e do ambiente. ",
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400",
    },
    {
      text: "Idade avançada - devido a diminuição da elasticidade da pele, a pele tem menor capacidade de cicatrização em idosos.Capacidade de se mover diminuída - pacientes acamados, que utilizam cadeira de rodas ou com dificuldade de se movimentar, ficam mais tempo em uma mesma posição, muitas vezes perdem a sensação da dor, o que faz com que não tentem aliviar as áreas de risco.",
    
  
    },
{
  text: " Doenças crônicas – doenças como a diabetes, hipertensão, problemas nos rins e no coração geralmente prejudicam a circulação sanguínea e afetam a cicatrização. Perda de urina e fezes sem querer - a umidade gerada pelas excreções deixa a pele mais sensível, amolecida e irritada. ",

    },
{
  text: "Peso - Pacientes magros têm menos gordura para amortecer a pressão, enquanto pacientes obesos possuem maior pressão sobre as áreas de risco e dificuldade no reposicionamento.Desidratação - Pacientes que não recebem a quantidade de líquidos adequadas podem desidratar e assim a pele torna - se menos elástica e mais frágil.",
      
    },
     
  ];


const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
};

return (
  <div className="flex flex-col h-full bg-[#C8E6C9]">
    <div className="pt-6 px-6 pb-2">
      <Link href="/injuries">
        <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
          <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
        </Button>
      </Link>
      <div className="flex flex-col items-center gap-2 mt-2">
        <h1 className="text-xl font-bold text-primary tracking-wide text-center">Quem tem mais riscos?</h1>
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
      <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm flex-1 mb-4 flex flex-col relative">

        <div className="flex-1 flex flex-col">
          <p className="text-primary text-sm font-medium leading-relaxed text-justify min-h-[80px]">
  {slides[currentSlide].text}
</p>





        </div>

        {/* Navigation Arrows (Optional, but good for usability) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="h-8 w-8 rounded-full bg-white/50 hover:bg-white text-primary">
            <ChevronLeft size={20} />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-1">
          <Button variant="ghost" size="icon" onClick={nextSlide} className="h-8 w-8 rounded-full bg-white/50 hover:bg-white text-primary">
            <ChevronRight size={20} />
          </Button>
        </div>

      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 pb-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-300",
              index === currentSlide ? "bg-primary" : "bg-primary/30"
            )}
          />
        ))}
        {/* Add dummy dots to match the design's look of many dots if needed, or stick to functional ones */}
        <div className="h-2 w-2 rounded-full bg-primary/10"></div>
        <div className="h-2 w-2 rounded-full bg-primary/10"></div>
        <div className="h-2 w-2 rounded-full bg-primary/10"></div>
      </div>
    </div>
  </div>
);
}

