import { ArrowLeft, User, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import imagem from "@/public/estagio1.png";
import imagem2 from "@/public/estagio2.png";
import imagem3 from "@/public/estagio3.png";
import imagem4 from "@/public/estagio4.png";
export default function Class() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      text: "Para entender a situação em que o paciente se encontra e ficar atento a chance de adquirir Lesões por Pressão, organizamos um questionário para lhe auxiliar.\n\n Marque a opção que melhor representa o paciente que você está acompanhando: ",
      image: '/.png'
    },
    {
      text:
        "Orientação: Para perceber se o paciente reage ao desconforto peça ao paciente para ele fechar os olhos, aperte levemente o dedão dos pés e a palma de uma das mãos do paciente e pergunte se ele sentiu algo, o que sentiu e em que parte do corpo. De acordo com a resposta, marque a reação:\n\n1. Não reage, não geme e nem se move. \n2. Reage com gemidos ou fica agitado, mas não sabe dizer o que sentiu e nem mostrar o local. \n3. Fala que sentiu, mas não sabe explicar o que está sentindo. \n4. Responde bem quando chamado e sente normalmente. ",
      image: "/estagio2.png",

    },
    {
      text: "Orientação: Pelo que você tem observado sobre a capacidade do paciente para se movimentar, marque a opção que mais se aproxima: \n\n1. Não sai do leito sozinho e tem muita dificuldade mesmo com ajuda. \n2. Não anda, mas com ajuda consegue se mover até outros locais com dificuldade. \n3. O paciente caminha pequenas distâncias sozinho, mas passa a maior parte do tempo sentado ou deitado. \n4. O paciente caminha várias vezes ao dia dentro e fora do quarto.",
      image: "/estagio3.png",
      
    }, 
    {
      text: "Orientação: Pelo que você observa sobre a capacidade do paciente de mudar de posição marque a que mais se aproxima:\n\n1. O paciente não consegue se virar no leito sozinho. \n2. Raramente faz pequenas mudanças de posição sem ajuda. \n3. Faz poucas mudanças na posição do corpo sem ajuda. \n4. Se movimenta livremente e sem auxílio. ",
      image: "/estagio4.png",
      
    },
    {
      text: "Orientação: Ao que você tem observado sobre o paciente deslizando ou  passando por esfregaço entre ele e o leito, marque a opção que mais se aproxima do paciente:\n\n1. Precisa de muita ajuda para se mover, e quase sempre é arrastado sobre os lençóis. \n2. Se move com dificuldade e se arrasta no leito para mudar de posição. \n3. Se move sozinho, e consegue mudar de posição sem se arrastar contra o leito.\n\n**Cada resposta deve ser somada de acordo com a numeração e ao final gerar para o cuidador uma mensagem a depender da pontuação, e as dicas:  ",
      image: "/estagio4.png",
      
    },
    {
      text: "Pequena chance de adquirir lesão por pressão: 15 a 23 pontos.\n\nParabéns por seu cuidado e atenção! Seu compromisso com o bem-estar do paciente tem feito a diferença.\n Continue seguindo as orientações. Prevenir lesões por pressão é o primeiro passo para uma boa recuperação.",
      image: "/estagio4.png",
      
    },
    {
      text: "Grande chance de adquirir lesão por pressão: 9 a 14 pontos.\n\nConverse com a equipe de profissionais que acompanham o paciente sobre a necessidade do uso de cremes, curativos e superfícies de suporte. Atente-se para a necessidade de troca de posições mais frequentes. \n\nSeu cuidado faz toda diferença! Mantenha os cuidados orientados e saiba que não está sozinho, a equipe de saúde está com você nessa jornada.",
      image: "/estagio4.png",
      
    },
    {
      text: "Dicas: Pergunte se o paciente está sentindo dor nas áreas mais vulneráveis para lesão por pressão.Mantenha os lençóis do leito bem esticados, sem dobras ou sujeiras. \n\nAuxilie durante o banho e trocas de roupa do paciente, sempre observando toda a pele.Incentive a aceitar as refeições e beber água. \n\nDeixe a cabeceira do leito com elevação de no máximo com 30 graus de altura. Não arraste o paciente no leito.",
      image: "/estagio4.png",
      
    },
    {
      text: "Mantenha as roupas de cama limpas, secas e bem esticadas, observando se não tem nenhum objeto ou sujeira que possa machucar a pele.\n Peça ajuda para mais uma pessoa ao movimentar ou reposicionar o paciente, se ele não conseguir sozinho.\n Pergunte se o paciente se sente confortável no leito ou na cadeira de rodas. \nSe o paciente utilizar fraldas, fique atento à necessidade de trocas.Utilize sabonetes líquidos e neutros durante o banho, e colônias sem álcool.\nHidrate a pele do paciente com hidratantes que contenham ureia.",
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
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Classificação de risco</h1>
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

         <div className="bg-[#E8F5E9] rounded-3xl p-6 shadow-sm mb-4">
          
          <div className="flex flex-col">
            <p className="text-primary text-sm font-medium leading-relaxed text-justify whitespace-pre-line">
      
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

