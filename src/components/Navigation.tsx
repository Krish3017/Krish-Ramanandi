import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["hero", "work", "stack", "career", "contact"];
      const scrollPosition = window.scrollY + 220; // Offset for sticky navbar height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    if (onNavigate) {
      onNavigate(id);
    } else {
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navItems = [
    { id: "hero", label: "HERO" },
    { id: "work", label: "WORK" },
    { id: "stack", label: "STACK" },
    { id: "career", label: "CAREER" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F3EA] border-b border-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px] py-2.5 md:py-3 flex flex-wrap justify-between items-center gap-y-3">
        {/* Left Name Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-newspaper-title text-2xl md:text-3xl font-semibold tracking-tight text-[#111111] cursor-pointer hover:opacity-80 transition-opacity"
        >
          Krish Ramanandi
        </div>

        {/* Right Navigation Items */}
        <div className="flex items-center gap-4 sm:gap-7 md:gap-9">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`magnify-hover relative font-mono-meta text-[12.5px] sm:text-[14.5px] md:text-[15px] tracking-[0.2em] font-bold py-1 transition-colors ${
                  isActive ? "text-[#8A3B2D]" : "text-[#111111] hover:text-[#8A3B2D]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#8A3B2D]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          
          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume PDF: Krish Ramanandi — AI Engineer");
            }}
            className="bg-[#111111] text-[#F7F3EA] font-mono-meta text-[12.5px] sm:text-[14.5px] md:text-[15px] tracking-[0.2em] font-bold px-4 sm:px-6 md:px-8 py-1.5 md:py-2 border border-[#111111] hover:bg-[#333333] transition-colors inline-block text-center"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
};

