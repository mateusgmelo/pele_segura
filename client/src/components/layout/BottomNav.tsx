import { Link, useLocation } from "wouter";
import { Home, Search, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Início", path: "/home" },
    { icon: Search, label: "Pesquisar", path: "/search" },
    { icon: HeartHandshake, label: "Pacientes", path: "/patients" },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border px-6 pb-6 pt-2 z-40 h-[80px]">
      <div className="flex justify-between items-center px-4">
        {navItems.map((item) => {
          const isActive = location.startsWith(item.path);
          return (
            <Link key={item.path} href={item.path}>
              <div
                className={cn(
                  "flex flex-col items-center gap-1 cursor-pointer",
                  isActive ? "text-primary" : "text-primary/70"
                )}
              >
                <item.icon
                  size={28}
                  strokeWidth={2.5}
                />
                <span className="text-[12px] font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
