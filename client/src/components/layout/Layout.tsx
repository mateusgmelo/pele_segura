import { MobileFrame } from "./MobileFrame";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <MobileFrame>
      {/* Wrapper relativo para a BottomNav ficar presa no fundo do frame */}
      <div className="relative flex flex-col min-h-full">
        {/* Conteúdo com padding-bottom pra não ficar por baixo da nav */}
        <div className="flex flex-col min-h-full pb-[92px]">
          {children}
        </div>

        <BottomNav />
      </div>
    </MobileFrame>
  );
}
