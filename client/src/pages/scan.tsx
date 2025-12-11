import { Button } from "@/components/ui/button";
import { Camera, X, Zap } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function ScanPage() {
  const [, setLocation] = useLocation();
  const [scanning, setScanning] = useState(false);

  const handleCapture = () => {
    setScanning(true);
    setTimeout(() => {
      setLocation("/results");
    }, 2000);
  };

  return (
    <div className="h-full w-full bg-black relative flex flex-col">
      {/* Camera Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 text-white">
        <Link href="/home">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
            <X size={24} />
          </Button>
        </Link>
        <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
          IA Mode Ativo
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
          <Zap size={24} className={scanning ? "text-yellow-400 fill-yellow-400" : ""} />
        </Button>
      </div>

      {/* Mock Camera Viewfinder */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Image simulating camera feed */}
        <div className="absolute inset-0 bg-gray-900">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        </div>
        
        {/* Scanning Overlay Effect */}
        {scanning && (
          <div className="absolute inset-0 bg-primary/20 z-10 animate-pulse flex flex-col items-center justify-center">
             <div className="w-full h-1 bg-primary shadow-[0_0_20px_rgba(0,255,255,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
             <p className="mt-4 text-white font-bold tracking-widest animate-pulse">ANALISANDO...</p>
          </div>
        )}

        {/* Focus Frame */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 border-2 border-white/50 rounded-3xl relative">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white -mt-1 -ml-1 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white -mt-1 -mr-1 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white -mb-1 -ml-1 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white -mb-1 -mr-1 rounded-br-lg"></div>
          </div>
        </div>
        
        <div className="absolute bottom-24 left-0 right-0 text-center text-white/80 text-sm">
          Posicione a área afetada dentro do quadro
        </div>
      </div>

      {/* Controls */}
      <div className="h-32 bg-black/80 backdrop-blur-xl absolute bottom-0 left-0 right-0 flex items-center justify-center pb-6">
        <button 
          onClick={handleCapture}
          className="h-20 w-20 rounded-full border-4 border-white flex items-center justify-center bg-white/20 active:scale-95 transition-transform"
        >
          <div className="h-16 w-16 bg-white rounded-full"></div>
        </button>
      </div>
    </div>
  );
}
