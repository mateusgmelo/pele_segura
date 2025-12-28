import { ArrowLeft, User, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import imagem from "@/public/estagio1.png";
import imagem2 from "@/public/estagio2.png";
import imagem3 from "@/public/estagio3.png";
import imagem4 from "@/public/estagio4.png";
export default function estagios() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      text: "Estágio 1 - Pele sem ferimento, apenas com alteração na cor da pele. Em peles brancas é mais visível por ficarem avermelhadas, por isso o cuidado deve ser ainda maior em peles negras, para observar se está roxa ou cinza, ou se apresenta perda de sensações ou esquentamento da pele. OBS: Não se deve massagear a pele do paciente, pois a massagem pode piorar o quadro e causar lesões.",
      image: '/estagio1.png'
    },
    {
      text:
        "Estágio 2 - Perda parcial da pele, com ferimento leve, atingindo a segunda camada da pele.",
      image:"/estagio2.png",
  
    },
    {
      text: "Estágio 3: Perda total da espessura da pele, sem visualização de músculos, tendões e ossos.",
      image: "/estagio3.png",
      
    }, 
    {
      text: "Estágio 4: Perda total da espessura da pele, com exposição de músculos, tendões e ossos.",
      image: "/estagio4.png",
      
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
        <h1 className="text-xl font-bold text-primary tracking-wide text-center">
          Estágios
        </h1>

        <div className="relative">
          <img
            src="/Lesao_icon.png"
            alt="Lesão por pressão"
            className="h-16 w-16 opacity-80"
          />
        </div>
      </div>
    </div>



      <div className="flex-1 px-6 pb-6 overflow-y-auto flex flex-col gap-4">
        <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm flex-1 mb-4 flex flex-col relative">
          
          <div className="flex-1 flex flex-col">
            <p className="text-primary text-sm font-medium leading-relaxed text-justify min-h-[80px]">
  {slides[currentSlide].text}
</p>


            
            <div className="mt-8 rounded-2xl overflow-hidden border-4 border-white shadow-sm mx-auto w-64 h- bg-gray-200 shrink-0">
                <img 
                src={slides[currentSlide].image} 
                className="w-full h-full object-cover opacity-80" 
                alt={slides[currentSlide].alt} 
                />
            </div>
          </div>

      
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
        
           <div className="h-2 w-2 rounded-full bg-primary/10"></div>
           <div className="h-2 w-2 rounded-full bg-primary/10"></div>
           <div className="h-2 w-2 rounded-full bg-primary/10"></div>
        </div>
      </div>
    </div>
  );
}

