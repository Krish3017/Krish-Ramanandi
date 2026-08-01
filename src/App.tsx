import { useState } from "react";
import { Masthead } from "./components/Masthead";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Stack } from "./components/Stack";
import { CareerLedger } from "./components/CareerLedger";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MagnifyingCursor } from "./components/MagnifyingCursor";
import { CaseFileModal } from "./components/CaseFileModal";
import { caseFilesMap } from "./data/caseFilesData";

export default function App() {
  const [activeCaseKey, setActiveCaseKey] = useState<string | null>(null);

  const handleOpenCase = (exhibitName: string) => {
    // Normalise exhibit string
    const key = exhibitName.toUpperCase();
    if (caseFilesMap[key]) {
      setActiveCaseKey(key);
    } else {
      // Fallback to EXHIBIT G
      setActiveCaseKey("EXHIBIT G");
    }
  };

  const handleCloseCase = () => {
    setActiveCaseKey(null);
  };

  return (
    <div className="paper-texture print-lines min-h-screen w-full text-[#111111] bg-[#F7F3EA] overflow-x-clip selection:bg-[#111111] selection:text-[#F7F3EA] relative">
      {/* Custom Outlined Magnifying Glass Cursor */}
      <MagnifyingCursor />

      {/* Top Newspaper Masthead */}
      <Masthead />

      {/* Sticky Editorial Navigation Bar (Sticks top-0 as user scrolls) */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Thick Section Separator */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-4 border-[#111111]" />
      </div>

      {/* Selected Works (Exhibits A-G) */}
      <SelectedWorks onOpenCase={handleOpenCase} />

      {/* Thick Section Separator */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-4 border-[#111111]" />
      </div>

      {/* The Lab Report / Stack */}
      <Stack />

      {/* Thick Section Separator */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-4 border-[#111111]" />
      </div>

      {/* The Career Ledger */}
      <CareerLedger />

      {/* Thick Section Separator */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-4 border-[#111111]" />
      </div>

      {/* Official Correspondence / Contact */}
      <Contact />

      {/* Thick Section Separator */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-4 border-[#111111]" />
      </div>

      {/* Newspaper Footer */}
      <Footer />

      {/* Standalone Full-Page Case File View with Smooth Transition */}
      <CaseFileModal
        caseData={activeCaseKey ? caseFilesMap[activeCaseKey] || null : null}
        onClose={handleCloseCase}
        onSelectExhibit={handleOpenCase}
      />
    </div>
  );
}