import React from "react";

export const MetricsStrip: React.FC = () => {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px] mt-0 mb-6">
      {/* Thick Black Horizontal Divider Rule directly above Stat Bar (Matches Reference) */}
      <div className="border-t-4 border-[#111111] mb-2" />

      {/* Stat Bar Container (Tightly pulled up against content above) */}
      <div className="border border-[#111111] py-3.5 bg-[#F2ECE0]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#111111]">
          {/* Box 1 */}
          <div className="px-6 py-2 md:py-0 flex flex-col justify-center">
            <h3 className="font-newspaper-title text-2xl md:text-3xl lg:text-4xl font-normal text-[#111111]">
              No. 01
            </h3>
            <p className="font-mono-meta text-[9.5px] tracking-[0.18em] text-[#444444] uppercase mt-0.5">
              EDITION · FIRST PRINTING
            </p>
          </div>

          {/* Box 2 */}
          <div className="px-6 py-2 md:py-0 flex flex-col justify-center">
            <h3 className="font-newspaper-title text-2xl md:text-3xl lg:text-4xl font-normal text-[#111111]">
              34°C
            </h3>
            <p className="font-mono-meta text-[9.5px] tracking-[0.18em] text-[#444444] uppercase mt-0.5">
              SURAT · CLEAR SUMMER SUN
            </p>
          </div>

          {/* Box 3 */}
          <div className="px-6 py-2 md:py-0 flex flex-col justify-center">
            <h3 className="font-newspaper-title text-2xl md:text-3xl lg:text-4xl font-normal text-[#111111]">
              Global
            </h3>
            <p className="font-mono-meta text-[9.5px] tracking-[0.18em] text-[#444444] uppercase mt-0.5">
              CIRCULATION · REMOTE-FRIENDLY
            </p>
          </div>

          {/* Box 4 */}
          <div className="px-6 py-2 md:py-0 flex flex-col justify-center">
            <h3 className="font-newspaper-title text-2xl md:text-3xl lg:text-4xl font-normal text-[#111111]">
              Late Final
            </h3>
            <p className="font-mono-meta text-[9.5px] tracking-[0.18em] text-[#444444] uppercase mt-0.5">
              SHIPS WHEN IT'S READY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
