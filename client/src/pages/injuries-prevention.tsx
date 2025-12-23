import { ArrowLeft, User, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import imagem from "@/public/alimentacao.png";
import imagem2 from "@/public/banho.png";
import imagem3 from "@/public/hidratante.png";
import imagem4 from "@/public/curativo.png";
import imagem5 from "@/public/agua.png";
import imagem6 from "@/public/reposicionamento.png";
import imagem7 from "@/public/cadeira_roda.png";
import imagem8 from "@/public/transferencia.png";
import imagem9 from "@/public/superficie.png";
import imagem10 from "@/public/superficie2.png";
import imagem11 from "@/public/almofada.png";
import imagem12 from "@/public/furocentral.png";
import imagem13 from "@/public/visualizar_pele.png";
export default function estagios() {
  const [currentSlide, setCurrentSlide] = useState(0);
type Slide = {
  text: string;
  image?: string;   // <-- string
  alt?: string;
  hideImage?: boolean; // <-- pra remover o box só em um slide
};
  const slides: Slide[] = [
    {
      text: "Através da alimentação o corpo recebe os nutrientes necessários para ter energia, disposição e melhor renovação da pele, assim especialmente durante a internação o paciente deve ser incentivado a comer todas as refeições que lhe são oferecidas para a melhor recuperação do estado clínico e prevenção de Lesões por Pressão.",
      image: '/alimentacao.png'
    },
    {
      text:
        "Para manter a pele saudável, limpa, seca e hidratada é importante atentar-se a alguns cuidados: \n\nDurante o banho: É indicado o uso de sabonete líquido e neutro, pois este tipo de sabonete é o que mais se aproxima da composição da pele, a limpeza deve ser realizada suavemente, sem uso de buchas ou objetos que possam ferir a pele por serem ásperos",
      image:"/banho.png",
  
    },
    {
      text: "Após o banho: É importante não secar o paciente esfregando a toalha na pele, mas fazer compressões leves até a pele estar seca, logo após isso deve-se passar um hidratante por todo o corpo do paciente, de preferência hidratante com ureia, pois essa composição entra com mais facilidade na pele.\n\n Ao passar o hidratante também não deve-se esfregar a pele do paciente, mas passar a mão suavemente e em uma única direção, para não machucar a pele, como do joelho em direção aos pés",
      image: "/hidratante.png",
      
    }, 
    {
      text: "Cuidado especial deve ser dado aos pacientes que necessitam do uso de fraldas, pois a umidade se torna maior e as excreções podem irritar a pele, portanto deve-se observar quando estão sujas.\nAlém dos hidratantes, é indicado o uso de creme barreira e coberturas com várias camadas que protegem áreas vulneráveis e amortecem a pressão, mas devem ser indicados pela  equipe de saúde.",
      image: "/curativo.png",
      
    },
    
     {
      text: "No dia a dia: Além da hidratação com loções, é muito importante manter o paciente hidratado com líquidos, lhe oferecendo líquidos de forma que ao final de um dia ele tenha bebido ao menos 2 litros de líquidos entre água, chás e sucos, o que deve ser conversado com a equipe de saúde que o acompanha. ",
      image: "/agua.png",
      
    },
    {
      text: "A movimentação ou reposicionamento devem ser estimulados, além de observar se existem dobras, objetos ou restos de alimento nos lençóis, para que sejam retirados e organizados, pois quanto mais tempo na mesma posição e sem se mexer, maior a pressão nas áreas vulneráveis e maiores chances de Lesão por Pressão. \n\nQuanto ao posicionamento, idealmente deve-se estimular ou paciente ou ajudá-lo a mudar de posição no máximo a cada 2 horas e colocar sobre o leito superfície de suportes específicas que espalhem a pressão, conforme a indicação da equipe de saúde.\n A mudança de posição no leito deve ser realizada como demonstrado na imagem abaixo: ",
      image: "/reposicionamento.png",
      
    },
    {
      text: "Na cadeira de rodas, o alívio da pressão é realizado com superfícies de suporte e estratégias de reposicionamento mais frequentes devido à maior pressão do corpo nas áreas de encontro de ossos, como na coluna e quadril. \nPortanto é fundamental realizar a mudança de posição a cada 15 a 30 minutos conforme a imagem a seguir: ",
      image: "/cadeira_roda.png",
      
    },
    {
      text: "Durante a transferência de um paciente de um local para outro, como do leito para a cadeira de rodas ou para uma maca, deve-se ter o maior cuidado para não arrastar o paciente sobre o leito, para isso é necessário contar com a ajuda de pelo menos mais uma pessoa, a depender do peso e tamanho do paciente. ",
      image: "/transferencia.png",
      
    },
     {
      text: "As superfícies de apoio são camas, colchões, assentos e almofadas criadas para proteger as áreas do corpo mais sujeitas a lesões por pressão. Essas superfícies são muito importantes para a prevenção, pois melhoram a circulação do sangue por espalharem a pressão gerada pelo peso do corpo. \nPara decidir qual a melhor superfície para o paciente, é fundamental conversar com os profissionais que também o acompanham. \nEstes são alguns exemplos de superfícies de apoio: Superfície tipo caixa de ovos – ideais para pacientes com pouca chance de ser acometido por Lesões por Pressão. ",
      image: "/superficie.png",
      
    },

     {
      text: "Superfície que enche e seca de ar – ideais para pacientes com grandes chances para ter Lesão por Pressão. ",
      image: "/superficie2.png",
      
    },

     {
      text: "Almofadas e coxins - possibilitam diminuir a pressão sobre algumas áreas do corpo mais vulneráveis. ",
      image: "/almofada.png",
      
    },

     {
      text: "OBS: Não se deve utilizar almofadas com furos centrais pois aumentam a pressão e pioram a circulação do sangue. ",
      image: "/furocentral.png",
      
    },

     {
      text: "A pele do paciente deve ser observada diariamente da cabeça aos pés quanto a presença de alteração na coloração da pele, lesões e sensações, além da umidade e presença de sujeiras no leito.\n Quanto a alteração da coloração, pessoas brancas geralmente ficam com a pele avermelhada e essa vermelhidão não passa mesmo ao tocar na pele, enquanto pessoas negras podem apresentar também a coloração arroxeada, acinzentada ou não dá para notar a alteração.\nAssim, em pessoas negras é importante checar também a sensibilidade da pele, através da sensação do toque ou alteração na temperatura da pele.O momento ideal para essa observação é a hora do banho, em que é possível visualizar toda a pele.",
      image: "/visualizar_pele.png",
      
    },

    {
      text: "Existem algumas atitudes que podem piorar a situação do paciente e causar lesões por pressão por machucarem a pele, por isso devem ser evitadas.\n A seguir foram elencadas atitudes que não devem ser realizadas:Não massagear a pele;\nNão colocar compressas de calor ou frio na pele;\nNão deixar o paciente na mesma posição por muito tempo;\nNão usar colônias com álcool ou objetos agressivos para limpar a pele;\nNão usar rolos ou almofadas do tipo rosca (com furo no meio);\nNão ignorar a dor e o desconforto do paciente;\nNão trocar a fralda quando estiver suja;Não usar talco ou pós secativos;\nNão arrastar o paciente no leito; Não deixar o paciente deitado sobre lençóis enrugados.",
      hideImage: true,
      
     
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
          <h1 className="text-xl font-bold text-primary tracking-wide text-center">Como previnir</h1>
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
            <p className="text-primary text-sm font-medium leading-relaxed text-justify whitespace-pre-line">
  {slides[currentSlide].text}
</p>


            
            <div className="mt-8 rounded-2xl overflow-hidden border-4 border-white shadow-sm mx-auto w-64 h-64 bg-gray-200 shrink-0">
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

