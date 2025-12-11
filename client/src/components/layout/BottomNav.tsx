import { Link, useLocation } from "wouter";
import { Home, ScanLine, User, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Início", path: "/home" },
    { icon: ScanLine, label: "Scan", path: "/scan" },
    { icon: Activity, label: "Histórico", path: "/history" },
    { icon: User, label: "Perfil", path: "/profile" },
  ];


  return (
    <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border px-6 pb-8 pt-3 sm:pb-6 z-40">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = location === item.path;
          return (
            <Link key={item.path} href={item.path}>
              <div
                className={cn(
                  "flex flex-col items-center gap-1 cursor-pointer transition-colors duration-200",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon
                  size={24}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={cn("transition-transform", isActive && "scale-110")}
                />
                <span className="text-[10px] font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
