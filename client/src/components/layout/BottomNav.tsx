import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function BottomNav() {
  const [location] = useLocation();

  const items = [
    { label: "Início", href: "/", icon: "/Início.png" },
    { label: "Pacientes", href: "/patients", icon: "/Pacientes.png" },
    { label: "Sobre", href: "/sobre", icon: "/Sobre.png" },
  ];

  return (
    <nav
      className="
        absolute bottom-0 left-0 right-0 z-[9999]
        bg-white
        border-t border-gray-200/60
        pb-[env(safe-area-inset-bottom)]
      "
    >
      <div className="flex justify-around py-2">
        {items.map((item) => {
          const active = location === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <a className="flex flex-col items-center gap-1 px-4 py-1">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={cn(
                    "h-7 w-7 -mt-1 transition-opacity",
                    active ? "opacity-100" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "text-xs",
                    active ? "text-primary font-semibold" : "text-primary/60"
                  )}
                >
                  {item.label}
                </span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
