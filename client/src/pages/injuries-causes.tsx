import { ArrowLeft, User, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import imagem from "@/public/2 Pressão.jpeg";
import imagem2 from "@/public/esfragaco.png";
import imagem3 from "@/public/deslizamento.png";
export default function Causes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      text: "Pressão: ocorre quando o paciente não muda de posição por conta própria ou não é reposicionado e a pressão gerada pelo próprio peso causa lesões.",
      image: '/2 Pressão.jpeg'
    },
    {
      text:
        "Esfregaço: ocorre durante a movimentação ou reposicionamento do paciente, quando há um esfregaço entre a pele e uma superfície, como um braço passando no apoio da cadeira de rodas.",
      image:"/esfragaco.png",
      alt: "Anatomia",
    },
    {
      text: "Deslizamento: ocorre quando a pele do paciente está parada e é estirada ou pinçada com o movimento de músculos ou ossos, como ocorre no deslizamento ao sentar-se escorregando no leito.",
      image: "/deslizamento.png",
      alt: "Cuidado",
    },
     
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
     <div className="min-h-screen flex flex-col bg-[#C8E6C9]">
      <div className="pt-6 px-6 pb-2">
         <Link href="/injuries">
            <Button variant="ghost" className="p-0 hover:bg-transparent -ml-2">
                <ArrowLeft className="text-primary h-8 w-8" strokeWidth={2.5} />
            </Button>
        </Link>
        <div className="flex flex-col items-center gap-2 mt-2">
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Principais Causas?</h1>
          <div className="relative">
          <img
            src="/Lesao_icon.png"
            alt="Lesão por pressão"
            className="h-16 w-16 opacity-80"
          />
        </div>
        </div>
      </div>

     <div className="flex-1 px-6 pb-6 flex flex-col gap-4">

        <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm mb-4 flex flex-col relative">
          
          <div className="flex flex-col">
            <p className="text-primary text-sm font-medium leading-relaxed text-justify min-h-[80px]">
              {slides[currentSlide].text}
            </p>


            
            <div className="mt-8 rounded-2xl overflow-hidden border-4 border-white shadow-sm mx-auto w-60 h-60 bg-gray-200 shrink-0">
                <img 
                src={slides[currentSlide].image} 
                className="w-full h-full object-cover opacity-80" 
                alt={slides[currentSlide].alt} 
                />
            </div>
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

