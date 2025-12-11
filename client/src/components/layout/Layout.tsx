import { MobileFrame } from "./MobileFrame";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <MobileFrame>
      <div className="flex flex-col min-h-full pb-[80px]">
        {children}
      </div>
      <BottomNav />
    </MobileFrame>
  );
}
