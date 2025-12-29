import { ReactNode } from "react";
import BottomNav from "./BottomNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full min-h-0">
      {/* MAIN: precisa ser transparente e permitir o filho esticar */}
      <main className="flex-1 min-h-0 bg-transparent">
        {/* WRAPPER que garante altura total */}
        <div className="flex flex-col h-full min-h-0">
          {children}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
