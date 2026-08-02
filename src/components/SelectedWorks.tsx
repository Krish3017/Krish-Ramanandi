import React from "react";
import { motion } from "framer-motion";
import supportFlowImg from "../assets/black-white/SupportFlow.png";
import bullionImg from "../assets/black-white/bullion.png";
import nexusImg from "../assets/black-white/Nexus.png";
import cyberkavachImg from "../assets/black-white/cyberkavach.png";
import scrummindImg from "../assets/black-white/scrummind.png";
import dataforgeImg from "../assets/black-white/dataforge.png";

interface Project {
  exhibit: string;
  sub: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  link: string;
  imageBg: string;
  imageUrl?: string;
}

interface SelectedWorksProps {
  onOpenCase?: (exhibitName: string) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onOpenCase }) => {
  const projects: Project[] = [
    {
      exhibit: "EXHIBIT B",
      sub: "BULLION.ADMIN",
      title: "Bullion Admin",
      description: "A production-grade administrative platform streamlining procurement, inventory, user operations, and business workflows for an AgriTech enterprise.",
      tags: ["Next.js 15", "React", "TypeScript", "Tailwind", "Django REST", "PostgreSQL"],
      date: "2026",
      link: "#",
      imageBg: "bg-[#101010]",
      imageUrl: bullionImg
    },
    {
      exhibit: "EXHIBIT C",
      sub: "NEXUSRAG.AI",
      title: "NexusRAG",
      description: "An advanced RAG platform transforming unstructured documents into searchable, explainable knowledge using LangChain, vector similarity search, and Groq-hosted LLMs.",
      tags: ["React", "TypeScript", "LangChain", "Vector Store"],
      date: "2026",
      link: "#",
      imageBg: "bg-[#131313]",
      imageUrl: nexusImg
    },
    {
      exhibit: "EXHIBIT D",
      sub: "DATAFORGE.STUDIO",
      title: "DataForge",
      description: "A modern analytics and visualization platform converting fragmented datasets into interactive real-time dashboards, statistical models, and business intelligence.",
      tags: ["React", "Python", "SQL", "PostgreSQL", "Power BI"],
      date: "2026",
      link: "#",
      imageBg: "bg-[#141414]",
      imageUrl: dataforgeImg
    },
    {
      exhibit: "EXHIBIT E",
      sub: "CYBERKAVACH.ORG",
      title: "CyberKavach",
      description: "Operational backbone for the university cybersecurity community automating member registration, event tracking, certificates, audit logging, and role-based security.",
      tags: ["JavaScript", "Tailwind CSS", "MySQL", "HTML"],
      date: "2026",
      link: "#",
      imageBg: "bg-[#0f0f0f]",
      imageUrl: cyberkavachImg
    },
    {
      exhibit: "EXHIBIT F",
      sub: "SCRUMMIND.APP",
      title: "ScrumMind",
      description: "A collaborative workspace where sprint planning, task management, backlog organization, documentation, and AI assistance converge into a unified workspace.",
      tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Supabase"],
      date: "2026",
      link: "#",
      imageBg: "bg-[#111111]",
      imageUrl: scrummindImg
    },
    {
      exhibit: "EXHIBIT G",
      sub: "SUPPORTFLOW.AI",
      title: "SupportFlow AI — Assistant",
      description: "Autonomous customer support agent workforce utilizing LangGraph and ChromaDB memory networks for low-latency question-answering pipelines.",
      tags: ["FastAPI", "ChromaDB", "LangGraph", "Groq LLM"],
      date: "2026",
      link: "#",
      imageBg: "bg-[#101010]",
      imageUrl: supportFlowImg
    }
  ];

  const handleOpen = (exhibitName: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenCase) {
      onOpenCase(exhibitName);
    }
  };

  return (
    <section id="work" className="w-full py-5 md:py-6">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        {/* Section Header */}
        <div className="flex justify-between items-end border-b border-[#111111] pb-2">
          <div>
            <h2 className="font-newspaper-title text-3xl md:text-4xl lg:text-5xl text-[#111111] font-normal mt-0.5">
              Selected Works
            </h2>
          </div>
          <span className="font-mono-meta text-[10px] md:text-[11px] tracking-[0.18em] text-[#555555] uppercase hidden sm:inline">
            EXHIBITS A – G · ENTERED 2026
          </span>
        </div>
        <div className="border-b-2 border-[#111111] mb-5" />

        {/* FEATURED EXHIBIT A */}
        <div 
          onClick={(e) => handleOpen("EXHIBIT A", e)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#111111] bg-[#F2ECE0] p-4 sm:p-5 mb-6 hover:bg-[#FAF0DE] transition-colors duration-200 cursor-pointer group"
        >
          {/* Left Screenshot Frame with Real Image */}
          <div className="lg:col-span-7">
            <div className="border border-[#111111] bg-[#111111] p-2.5 text-white">
              <div className="flex gap-2 mb-2 pb-2 border-b border-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                <span className="font-mono text-[11px] text-gray-400 ml-3">supportflow.ai</span>
              </div>

              <div className="relative overflow-hidden border border-gray-800 bg-[#09090D] min-h-[220px] flex items-center justify-center">
                <img
                  src={supportFlowImg}
                  alt="SupportFlow AI"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[220px] sm:h-[260px] object-cover object-top transition-transform duration-300 hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 border border-[#8A3B2D] px-2 py-0.5 rounded-full text-[#8A3B2D] font-mono text-[9px] font-bold tracking-widest uppercase bg-[#F7F3EA]/90 z-10">
                  EXHIBIT A
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[9px] text-gray-200 bg-black/70 px-2 py-0.5 rounded z-10">
                  recovered from supportflow.ai
                </div>
              </div>
            </div>
          </div>

          {/* Right Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono-meta text-[11px] tracking-[0.2em] font-bold text-[#8A3B2D] uppercase block mb-0.5">
                EXHIBIT A
              </span>
              <p className="font-mono-meta text-[10px] tracking-[0.18em] text-[#555555] uppercase mb-1">
                SUPPORTFLOW.AI · FLAGSHIP
              </p>
              <h3 className="font-newspaper-title text-2xl md:text-3xl text-[#111111] font-normal mb-2">
                SupportFlow AI
              </h3>
              <p className="font-sans text-[15px] sm:text-[15.5px] leading-[1.6] text-[#333333] mb-3 text-left">
                An autonomous customer support platform where specialized AI agents collaborate using LangGraph, ChromaDB, and FastAPI to resolve tickets, prioritize urgency, and manage human-in-the-loop escalations.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {["Next.js", "React", "ChromaDB", "FastAPI", "LangGraph"].map((t) => (
                  <span key={t} className="font-mono-meta text-[10.5px] tracking-wider px-2.5 py-0.5 border border-[#111111] bg-[#F7F3EA] text-[#111111]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2.5 border-t border-[#111111]">
              <span className="font-mono-meta text-[11px] text-[#555555]">
                2026 · AI Engineer & Full Stack
              </span>
              <a
                href="#exhibit-a"
                onClick={(e) => handleOpen("EXHIBIT A", e)}
                className="magnify-hover font-mono-meta text-[13px] font-extrabold tracking-[0.18em] text-[#111111] hover:text-[#8A3B2D] underline flex items-center gap-1 cursor-pointer"
              >
                OPEN CASE FILE &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* EXHIBITS B THROUGH G */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[#111111]">
          {projects.map((proj, idx) => (
            <div
              key={proj.exhibit}
              onClick={(e) => handleOpen(proj.exhibit, e)}
              className={`magnify-hover group flex flex-col py-3.5 px-2.5 sm:px-3.5 border-b border-[#111111] text-left hover:bg-[#ECE5D5] transition-colors duration-200 cursor-pointer ${
                idx % 3 !== 2 ? "lg:border-r lg:border-[#111111]" : "lg:border-r-0"
              } ${
                idx % 2 === 0 ? "md:border-r md:border-[#111111]" : "md:border-r-0"
              }`}
            >
              {/* Exhibit label */}
              <p className="inline-block w-fit font-mono-meta text-[13px] font-semibold text-[#B5402A] tracking-widest mb-0.5 px-1 py-0.5">
                {proj.exhibit}
              </p>
              <h4 className="font-newspaper-title text-2xl text-[#111111] font-semibold mb-2">
                {proj.title}
              </h4>

              {/* Centered Image Box Frame with Real Project Image Screenshot */}
              <div className="relative mb-2.5 mx-auto w-full border border-[#111111] p-2 bg-[#EDEDED] overflow-hidden">
                {/* Tape strip */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#E4DDCF]/90 border border-[#C8C2B4] rotate-[-1deg] z-20" />

                <div className="relative overflow-hidden border border-[#111111] bg-[#111111] h-[135px] sm:h-[150px] flex items-center justify-center">
                  {proj.imageUrl ? (
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`w-full h-full ${proj.imageBg} p-3 flex flex-col justify-between`}>
                      <div className="w-full flex justify-between items-center text-[9.5px] font-mono text-gray-400">
                        <span>STATUS: ACTIVE</span>
                        <span>CONFIDENTIAL</span>
                      </div>
                      <div className="font-mono text-xs text-white font-bold my-1">
                        {proj.title}
                      </div>
                    </div>
                  )}

                  {/* Wavy hand-stamped CONFIRMED — shallow multi-curve border, crisp readable text */}
                  <div className="absolute top-0 right-[-5px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 -rotate-[9deg] pointer-events-none z-30 drop-shadow-md">
                    <svg
                      width="118"
                      height="34"
                      viewBox="0 0 124 42"
                      className="overflow-visible"
                    >
                      {/* Solid paper background fill with shallow multi-curve wavy border */}
                      <path
                        d="M 5 7 Q 18 5, 32 8.5 T 60 5.5 T 88 8.5 T 118 6 C 122 15, 119 27, 121 37 Q 92 34.5, 64 37.5 T 32 34.5 T 5 37 C 3 27, 6 15, 5 7 Z"
                        fill="#fff"
                        stroke="#8A3B2D"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Subtle inner accent stroke line */}
                      <path
                        d="M 4 6 Q 19 4, 31 8 T 61 5 T 87 8 T 119 5 C 123 16, 118 28, 122 38 Q 93 33.5, 63 36.5 T 31 33.5 T 4 36 C 2 26, 5 14, 4 6 Z"
                        fill="none"
                        stroke="#8A3B2D"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Stamped Text CONFIRMED — 100% clear & readable */}
                      <text
                        x="62"
                        y="26"
                        textAnchor="middle"
                        fill="#8A3B2D"
                        fontSize="12.5"
                        fontWeight="700"
                        fontFamily="'Permanent Marker', 'Special Elite', 'IBM Plex Mono', cursive, monospace"
                        letterSpacing="2.8"
                      >
                        CONFIRMED
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Caption Row: Exhibit label with angled (-5deg) SVG stroke drawing animation */}
                <div className="flex justify-between items-center mt-2.5 mb-0.5 px-1">
                  <div className="relative inline-flex items-center justify-center px-2.5 py-0.5">
                    <span className="font-mono text-[11.5px] sm:text-[12px] font-bold text-[#111111] tracking-widest uppercase relative z-10">
                      {proj.exhibit}
                    </span>

                    {/* Smooth SVG stroke drawing path animation */}
                    <svg
                      className="absolute -inset-x-3.5 -inset-y-1.5 w-[calc(100%+28px)] h-[calc(100%+12px)] pointer-events-none z-0 overflow-visible rotate-[-5deg]"
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M 8 20 C 8 4, 92 4, 92 20 C 92 36, 8 36, 8 20 Z"
                        fill="none"
                        stroke="#A84335"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.85, ease: "easeInOut", delay: 0.15 + idx * 0.08 }}
                      />
                    </svg>
                  </div>

                  <p className="font-mono-meta text-[10px] text-[#555555] font-semibold text-right">
                    recovered from {proj.sub.toLowerCase()}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 flex flex-col justify-between mb-2.5">
                <p className="font-newspaper-title text-[20px] font-normal leading-[1.5] text-black text-left">
                  {proj.description}
                </p>
              </div>

              {/* Tags Container */}
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {proj.tags.map((tag) => (
                  <span key={tag} className="font-mono-meta font-semibold text-[12px] tracking-wider px-2 py-0.5 border border-[#111111] bg-transparent text-[#111111]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex justify-between items-center pt-2 border-t border-[#C8C2B4]">
                <span className="font-mono-meta text-[11px] text-[#555555] font-semibold">
                  {proj.date}
                </span>
                <a
                  href={proj.link}
                  onClick={(e) => handleOpen(proj.exhibit, e)}
                  className="magnify-hover font-mono-meta text-[13px] font-extrabold tracking-widest text-[#B5402A] hover:text-[#8A3B2D] underline cursor-pointer"
                >
                  OPEN CASE FILE &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};