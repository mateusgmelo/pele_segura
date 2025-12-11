import { Button } from "@/components/ui/button";
import { User, Settings, Bell, Shield, LogOut, ChevronRight } from "lucide-react";
import userAvatar from "@assets/generated_images/professional_user_avatar.png";

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white p-6 pb-8 pt-10 flex flex-col items-center border-b border-gray-100">
        <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mb-4">
          <img src={userAvatar} className="w-full h-full object-cover" alt="Profile" />
        </div>
        <h2 className="text-xl font-bold">Carlos Silva</h2>
        <p className="text-muted-foreground text-sm">carlos.silva@email.com</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Conta</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <MenuItem icon={User} label="Dados Pessoais" />
            <div className="h-[1px] bg-gray-100 mx-4" />
            <MenuItem icon={Bell} label="Notificações" />
            <div className="h-[1px] bg-gray-100 mx-4" />
            <MenuItem icon={Shield} label="Privacidade e Segurança" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">App</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <MenuItem icon={Settings} label="Configurações" />
          </div>
        </div>

        <Button variant="destructive" className="w-full h-12 rounded-xl mt-4" >
          <LogOut className="mr-2 h-4 w-4" /> Sair
        </Button>
      </div>
    </div>
  );
}

function MenuItem({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Icon size={16} />
        </div>
        <span className="font-medium text-sm">{label}</span>
      </div>
      <ChevronRight size={16} className="text-gray-300" />
    </div>
  );
}
