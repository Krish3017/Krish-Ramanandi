import React from "react";
import { useSuratWeather } from "../hooks/useSuratWeather";

interface MetricsStripProps {
  variant?: "standalone" | "hero";
}

export const MetricsStrip: React.FC<MetricsStripProps> = ({ variant = "hero" }) => {
  const weather = useSuratWeather();

  const content = (
    <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#111111]">
      {/* Box 1 */}
      <div className="pr-4 sm:pr-6 py-2 sm:py-0 flex flex-col justify-center">
        <h3 className="font-newspaper-title text-2xl md:text-3xl font-normal text-[#111111]">
          24DCS107
        </h3>
        <p className="font-mono-meta text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
          EDITION · FIRST PRINTING
        </p>
      </div>

      {/* Box 2 */}
      <div className="px-4 sm:px-6 py-2 sm:py-0 flex flex-col justify-center">
        <h3 className="font-newspaper-title text-2xl md:text-3xl font-normal text-[#111111]">
          {weather.temp !== null ? `${weather.temp}°C` : "--°C"}
        </h3>
        <p className="font-mono-meta text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
          SURAT · {weather.condition}
        </p>
      </div>

      {/* Box 3 */}
      <div className="px-4 sm:px-6 py-2 sm:py-0 flex flex-col justify-center">
        <h3 className="font-newspaper-title text-2xl md:text-3xl font-normal text-[#111111]">
          Global
        </h3>
        <p className="font-mono-meta text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
          CIRCULATION · REMOTE-FRIENDLY
        </p>
      </div>

      {/* Box 4 */}
      <div className="pl-4 sm:pl-6 py-2 sm:py-0 flex flex-col justify-center">
        <h3 className="font-newspaper-title text-2xl md:text-3xl font-normal text-[#111111]">
          Late Final
        </h3>
        <p className="font-mono-meta text-[9px] tracking-[0.16em] text-[#444444] uppercase mt-0.5">
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
