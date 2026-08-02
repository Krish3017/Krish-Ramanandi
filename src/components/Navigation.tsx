import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resumePdf from "../assets/Resume.pdf";

interface NavigationProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["hero", "work", "stack", "career", "evidence", "report", "contact"];
      const scrollPosition = window.scrollY;

      // At top of page -> HERO
      if (scrollPosition < 150) {
        setActiveSection("hero");
        return;
      }

      // At bottom of page -> CONTACT
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Determine active section based on position relative to viewport
      let currentSection = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
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
    { id: "evidence", label: "EVIDENCE" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F3EA] border-b border-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="max-w-[1300px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-[60px] xl:px-[80px] py-2.5 md:py-3 flex justify-between items-center">
        {/* Left Name Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-newspaper-title text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#111111] cursor-pointer hover:opacity-80 transition-opacity"
        >
          Krish Ramanandi
        </div>

        {/* DESKTOP Navigation Items (Untouched) */}
        <div className="hidden md:flex items-center gap-4 sm:gap-7 md:gap-9">
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
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download="Krish_Ramanandi_Resume.pdf"
            title="Download Krish Ramanandi Resume PDF"
            className="bg-[#111111] text-[#F7F3EA] font-mono-meta text-[12.5px] sm:text-[14.5px] md:text-[15px] tracking-[0.2em] font-bold px-4 sm:px-6 md:px-8 py-1.5 md:py-2 border border-[#111111] hover:bg-[#8A3B2D] transition-colors inline-block text-center shadow-xs"
          >
            RESUME
          </a>
        </div>

        {/* MOBILE Broadsheet Navigation Menu Trigger (visible on sm/xs) */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download="Krish_Ramanandi_Resume.pdf"
            title="Download Resume"
            className="bg-[#111111] text-[#F7F3EA] font-mono-meta text-[10.5px] tracking-widest font-bold px-2.5 py-1 border border-[#111111] uppercase"
          >
            RESUME
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="font-mono-meta text-[11px] font-bold tracking-widest border border-[#111111] px-3 py-1 bg-[#FAF7F2] text-[#111111] uppercase flex items-center gap-1 min-h-[44px]"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileMenuOpen ? "CLOSE ✕" : "MENU ☰"}
          </button>
        </div>
      </div>

      {/* MOBILE Broadsheet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#FAF7F2] border-b-2 border-[#111111] overflow-hidden px-4 py-4 print-lines"
          >
            <div className="flex flex-col space-y-2">
              <span className="font-mono-meta text-[9.5px] font-bold tracking-[0.22em] text-[#8A3B2D] uppercase mb-1">
                DOSSIER DIRECTORY · QUICK NAVIGATION
              </span>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`font-mono-meta text-xs tracking-[0.2em] font-bold py-2 px-3 text-left border border-[#111111]/20 flex justify-between items-center min-h-[44px] transition-colors ${
                      isActive ? "bg-[#8A3B2D] text-white border-[#8A3B2D]" : "bg-[#F2ECE0] text-[#111111]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="font-bold text-[10px] uppercase">[ACTIVE]</span>}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
