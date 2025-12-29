import React from "react";

interface MobileFrameProps {
  children: React.ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100 sm:items-center sm:py-8">
      {/* Frame */}
      <div
        className="
          w-full min-h-screen
          sm:w-[390px] sm:h-[844px] sm:min-h-0
          bg-background sm:rounded-[40px] sm:shadow-2xl
          overflow-hidden relative flex flex-col
          border-x border-gray-200 sm:border sm:border-gray-800
        "
      >
        {/* Notch (desktop/frame only) */}
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-50"></div>

        {/* Status Bar Mockup */}
        <div className="h-[44px] w-full flex justify-between items-center px-6 pt-2 text-xs font-medium z-40 bg-background/80 backdrop-blur-md absolute top-0">
          <span></span>
          <div className="flex items-center gap-1"></div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide pt-[44px] flex flex-col">
          <div className="flex-1 min-h-0 flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
}
