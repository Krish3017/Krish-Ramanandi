import React from "react";
import { useSuratWeather } from "../hooks/useSuratWeather";

interface MetricsStripProps {
  variant?: "standalone" | "hero";
}

export const MetricsStrip: React.FC<MetricsStripProps> = ({ variant = "hero" }) => {
  const weather = useSuratWeather();

  const content = (
    <div className="grid grid-cols-2 sm:grid-cols-4 divide-y-0 divide-[#111111]">
      {/* Box 1 */}
      <div className="pr-2 sm:pr-6 border-r border-[#111111] sm:border-r-0 py-1.5 sm:py-0 flex flex-col justify-center">
        <h3 className="font-newspaper-title text-xl sm:text-2xl md:text-3xl font-normal text-[#111111]">
          24DCS107
        </h3>
        <p className="font-mono-meta text-[8.5px] sm:text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
          EDITION · FIRST PRINTING
        </p>
      </div>

      {/* Box 2 */}
      <div className="pl-3 sm:px-6 py-1.5 sm:py-0 flex flex-col justify-center sm:border-l border-[#111111]">
        <h3 className="font-newspaper-title text-xl sm:text-2xl md:text-3xl font-normal text-[#111111]">
          {weather.temp !== null ? `${weather.temp}°C` : "--°C"}
        </h3>
        <p className="font-mono-meta text-[8.5px] sm:text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
          SURAT · {weather.condition}
        </p>
      </div>

      {/* Box 3 */}
      <div className="pr-2 sm:px-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-r border-[#111111] sm:border-r-0 flex flex-col justify-center">
        <h3 className="font-newspaper-title text-xl sm:text-2xl md:text-3xl font-normal text-[#111111]">
          Global
        </h3>
        <p className="font-mono-meta text-[8.5px] sm:text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
          CIRCULATION · REMOTE
        </p>
      </div>

      {/* Box 4 */}
      <div className="pl-3 sm:pl-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#111111] flex flex-col justify-center sm:border-l border-[#111111]">
        <h3 className="font-newspaper-title text-xl sm:text-2xl md:text-3xl font-normal text-[#111111]">
          Late Final
        </h3>
        <p className="font-mono-meta text-[8.5px] sm:text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
          SHIPS WHEN IT'S READY
        </p>
      </div>
    </div>
  );

  if (variant === "standalone") {
    return (
      <div className="w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px] mt-0 mb-6">
        <div className="border-t-4 border-[#111111] mb-2" />
        <div className="border border-[#111111] py-3.5 bg-[#F2ECE0] px-4">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="border-t-4 border-[#111111] pt-2">
      {content}
    </div>
  );
};
