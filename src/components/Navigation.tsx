import React from "react";

interface NavigationProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F3EA] border-b border-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px] py-2.5 md:py-3 flex justify-between items-center">
        {/* Left Name Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-newspaper-title text-2xl md:text-3xl font-semibold tracking-tight text-[#111111] cursor-pointer hover:opacity-80 transition-opacity"
        >
          Krish Ramanandi
        </div>

        {/* Right Navigation Items (Increased font size) */}
        <div className="flex items-center gap-6 sm:gap-9">
          <button 
            onClick={() => scrollTo("work")}
            className="magnify-hover font-mono-meta text-[13.5px] sm:text-[15px] tracking-[0.2em] font-bold text-[#111111] hover:text-[#8A3B2D] transition-colors"
          >
            WORK
          </button>
          <button 
            onClick={() => scrollTo("stack")}
            className="magnify-hover font-mono-meta text-[13.5px] sm:text-[15px] tracking-[0.2em] font-bold text-[#111111] hover:text-[#8A3B2D] transition-colors"
          >
            STACK
          </button>
          <button 
            onClick={() => scrollTo("contact")}
            className="magnify-hover font-mono-meta text-[13.5px] sm:text-[15px] tracking-[0.2em] font-bold text-[#111111] hover:text-[#8A3B2D] transition-colors"
          >
            CONTACT
          </button>
          
          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume PDF: Krish Ramanandi — AI Engineer");
            }}
            className="bg-[#111111] text-[#F7F3EA] font-mono-meta text-[13.5px] sm:text-[15px] tracking-[0.2em] font-bold px-6 sm:px-8 py-2 border border-[#111111] hover:bg-[#333333] transition-colors inline-block text-center"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
};
