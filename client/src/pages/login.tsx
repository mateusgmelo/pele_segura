import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      setLocation("/home");
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full px-6 pt-20 pb-10 justify-between">
      <div className="flex flex-col items-center gap-6">
        <div className="h-24 w-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-4">
          <ShieldCheck className="h-12 w-12 text-primary" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">AppPeleSegura</h1>
          <p className="text-muted-foreground">Sua saúde em primeiro lugar.</p>
        </div>
      </div>

      <form onSubmit={handleLogin} className="space-y-6 w-full mt-8">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seu@email.com" className="h-12 rounded-xl bg-secondary/50 border-0" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="••••••••" className="h-12 rounded-xl bg-secondary/50 border-0" required />
        </div>
        
        <div className="flex justify-end">
          <a href="#" className="text-sm text-primary font-medium hover:underline">Esqueceu a senha?</a>
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-medium rounded-xl shadow-lg shadow-primary/20" 
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <div className="text-center mt-auto">
        <p className="text-sm text-muted-foreground">
          Não tem uma conta? <a href="#" className="text-primary font-medium hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
