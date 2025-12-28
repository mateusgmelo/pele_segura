import { ArrowLeft, User, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import imagem from "@/public/lesao.png";

export default function WhatAreInjuriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      text: "As Lesões por Pressão são machucados que aparecem na pele de pacientes que têm dificuldade para se movimentar. Essas lesões podem ser tão graves que o ferimento na pele pode mostrar o osso. Geralmente elas aparecem perto do encontro de ossos, onde a pele é fina, com pouco músculo e gordura.",

    },
    {
      text:
        "O peso do corpo aperta a pele contra o leito ou cadeira de rodas, assim o sangue acaba não passando por todas as áreas, comprometendo a circulação e causando as lesões por pressão, que começam com uma mudança na coloração na pele e podem virar feridas abertas. O contato com lençóis ou roupas ásperas, e a forma como o paciente é posicionado também podem causar as lesões.",
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400",
      alt: "Anatomia",
    },
    {
      text: "Partes do corpo que tem mais chance de desenvolver lesões:",
      image: "/lesao.png",
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
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">O que são?</h1>
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
        <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm mb-4 flex flex-col relative">
  <div className="flex flex-col">
    <p className="text-primary text-sm font-medium leading-relaxed text-justify">
      {slides[currentSlide].text}
    </p>

    {/* só aparece no último slide */}
    {currentSlide === slides.length - 1 && slides[currentSlide].image && (
      <div className="mt-6 rounded-2xl overflow-hidden border-4 border-white shadow-sm mx-auto w-60 h-60 bg-gray-200">
        <img
          src={slides[currentSlide].image}
          className="w-full h-full object-cover opacity-80"
          alt={slides[currentSlide].alt ?? "Imagem"}
        />
      </div>
    )}
  </div>

  {/* setas */}
  <div className="absolute top-1/2 -translate-y-1/2 left-1">
    <Button
      variant="ghost"
      size="icon"
      onClick={prevSlide}
      className="h-8 w-8 rounded-full bg-white/50 hover:bg-white text-primary"
    >
      <ChevronLeft size={20} />
    </Button>
  </div>

  <div className="absolute top-1/2 -translate-y-1/2 right-1">
    <Button
      variant="ghost"
      size="icon"
      onClick={nextSlide}
      className="h-8 w-8 rounded-full bg-white/50 hover:bg-white text-primary"
    >
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
