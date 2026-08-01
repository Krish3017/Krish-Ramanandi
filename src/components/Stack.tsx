import React from "react";
import { motion } from "framer-motion";

interface LabReportItem {
  substance: string;
  code: string;
  detected: string;
  finding: "PRIMARY TOOL" | "COMFORTABLE" | "IN TRAINING" | "TRACE AMOUNT";
}

export const Stack: React.FC = () => {
  const labReportData: LabReportItem[] = [
    { substance: "Python / PyTorch", code: "PY/TORCH", detected: "Most days", finding: "PRIMARY TOOL" },
    { substance: "React / TS", code: "RTS", detected: "Most days", finding: "PRIMARY TOOL" },
    { substance: "Tailwind CSS", code: "TWX", detected: "Most days", finding: "PRIMARY TOOL" },
    { substance: "FastAPI / Node.js", code: "API", detected: "Most days", finding: "TRACE AMOUNT" },
    { substance: "Supabase", code: "SUPA", detected: "In projects", finding: "PRIMARY TOOL" },
    { substance: "PostgreSQL", code: "PG", detected: "In projects", finding: "COMFORTABLE" },
    { substance: "LangChain / RAG", code: "RAG", detected: "In projects", finding: "PRIMARY TOOL" },
    { substance: "AWS & Docker", code: "AWS", detected: "In projects", finding: "COMFORTABLE" },
    { substance: "Qdrant / Vector Search", code: "QDR", detected: "When needed", finding: "COMFORTABLE" },
    { substance: "C++ / Systems", code: "CPP", detected: "Occasional", finding: "TRACE AMOUNT" },
  ];

  return (
    <section id="stack" className="w-full py-4 md:py-5 bg-[#F7F3EA]">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        {/* Section Header — FORENSICS eyebrow + right-aligned note */}
        <div className="flex justify-between items-end pb-1">
          <span className="font-mono-meta text-[12px] md:text-[14px] tracking-[0.2em] font-bold text-[#111111] uppercase">
            FORENSICS
          </span>
          <span className="font-mono-meta text-[11px] md:text-[13px] tracking-[0.18em] text-[#111111] font-bold uppercase hidden sm:inline">
            SUBSTANCES DETECTED ON THE SUBJECT, AS OF THIS EDITION
          </span>
        </div>
        <h2 className="font-newspaper-title text-3xl md:text-4xl lg:text-5xl text-[#111111] font-normal mb-1.5">
          The Lab Report
        </h2>

        {/* Thin Single Divider Line */}
        <div className="border-b-2 border-[#111111] mb-3" />

        {/* The Lab Report Table Frame — Tightened layout removing excessive spacing */}
        <div className="border border-[#111111] bg-[#F7F3EA] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#111111] text-[#F7F3EA] font-mono-meta text-[10px] sm:text-[11px] tracking-[0.2em] uppercase">
                <th className="py-1.5 px-3 sm:px-4 font-semibold w-[36%] border-r border-[#333333]">
                  SUBSTANCE
                </th>
                <th className="py-1.5 px-3 sm:px-4 font-semibold w-[16%] border-r border-[#333333]">
                  CODE
                </th>
                <th className="py-1.5 px-3 sm:px-4 font-semibold w-[24%] border-r border-[#333333]">
                  DETECTED
                </th>
                <th className="py-1.5 px-3 sm:px-4 font-semibold w-[24%] text-right">
                  FINDING
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#C8C2B4] font-sans text-sm text-[#111111]">
              {labReportData.map((row, idx) => {
                const targetRotate =
                  row.finding === "PRIMARY TOOL"
                    ? -2
                    : row.finding === "COMFORTABLE"
                    ? 2
                    : row.finding === "IN TRAINING"
                    ? -1
                    : 1;

                return (
                  <tr
                    key={row.substance}
                    className="hover:bg-[#EFE9DC] transition-colors bg-[#F7F3EA]"
                  >
                    <td className="py-1 px-3 sm:px-4 font-newspaper-title text-lg md:text-xl text-[#111111] border-r border-[#C8C2B4]">
                      {row.substance}
                    </td>

                    <td className="py-1 px-3 sm:px-4 font-mono-meta text-[12px] text-[#333333] tracking-widest border-r border-[#C8C2B4]">
                      {row.code}
                    </td>

                    <td className="py-1 px-3 sm:px-4 font-mono-meta text-[12px] text-[#333333] tracking-wider border-r border-[#C8C2B4]">
                      {row.detected}
                    </td>

                    <td className="py-1 px-3 sm:px-4 text-right">
                      {/* Stamp animation dropping from Z-index (scale:2.2, y:-25) with fixed angle */}
                      <motion.span
                        initial={{ opacity: 0, scale: 2.2, y: -25, rotate: targetRotate }}
                        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: targetRotate }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          duration: 0.42,
                          ease: [0.175, 0.885, 0.32, 1.25],
                          delay: 0.04 + idx * 0.04,
                        }}
                        className={`inline-block border-2 font-mono-meta text-[10.5px] sm:text-[11.5px] font-extrabold tracking-widest px-2.5 py-0.5 bg-[#F7F3EA] ${
                          row.finding === "PRIMARY TOOL"
                            ? "border-[#B84937] text-[#B84937]"
                            : row.finding === "COMFORTABLE"
                            ? "border-[#111111] text-[#111111]"
                            : row.finding === "IN TRAINING"
                            ? "border-[#111111] text-[#111111]"
                            : "border-[#555555] text-[#555555]"
                        }`}
                      >
                        {row.finding}
                      </motion.span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="font-mono-meta text-[10px] tracking-[0.1em] text-[#555555] text-right mt-1.5">
          Findings are illustrative — what he reaches for day to day, not a ranking.
        </p>
      </div>
    </section>
  );
};