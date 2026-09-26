import bullAgritechEv from "../assets/evidence/BullAgritech.webp";
import gssocEv from "../assets/evidence/Gssoc.webp";
import gdgEv from "../assets/evidence/GDG.webp";
import odoo2025Ev from "../assets/evidence/Odoo2025.webp";
import nptelDbmsEv from "../assets/evidence/NPTELDBMS.webp";
import odoo2026Ev from "../assets/evidence/Odoo2026.webp";
import cyberkavachEv from "../assets/evidence/cyberkavach.webp";
import tcs2026Ev from "../assets/evidence/TCS.webp";

export interface EvidenceDetailRecord {
  caseCode: string;
  title: string;
  subtitle: string;
  status: string;
  date: string;
  location: string;
  category: string;
  statusHighlight: string;
  images: {
    url: string;
    caption: string;
    isPrimary?: boolean;
  }[];
  keyFindings: string[];
  evidenceCollected: {
    label: string;
    tag: string;
  }[];
  investigationNotes: string;
  stampText: string;
  link?: string;
  linkText?: string;
}

export const evidenceDetailMap: Record<string, EvidenceDetailRecord> = {
  "EV-001": {
    caseCode: "EV-001",
    title: "Bull Agritech — Full Stack Internship",
    subtitle: "INDUSTRY INTERNSHIP · BULL AGRITECH",
    status: "VERIFIED",
    date: "Dec 2025 – Jul 2026",
    location: "Surat / Remote, Gujarat",
    category: "Industry Internship",
    statusHighlight: "Production Software Deployed",
    images: [
      {
        url: bullAgritechEv,
        caption: "Bull Agritech Internship Verification & Procurement Platform Evidence",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Engineered Bullion — a production-grade enterprise procurement platform powering daily agricultural business operations.",
      "Architected responsive administrative dashboards and REST APIs using Next.js 15, React, TypeScript, and Django REST Framework.",
      "Implemented secure role-based access control (RBAC) and optimized high-concurrency PostgreSQL database queries.",
    ],
    evidenceCollected: [
      { label: "Deployment Transcript", tag: "[TRANSCRIPT]" },
      { label: "Bullion Platform Source Code", tag: "[CODE]" },
      { label: "Industry Internship Verification", tag: "[DOC]" },
    ],
    investigationNotes:
      "Investigation confirms seven months of intensive full-stack engineering at Bull Agritech. The subject successfully built and deployed Bullion, a mission-critical enterprise procurement platform handling daily operations with high reliability.",
    stampText: "CASE VERIFIED",
  },

  "EV-002": {
    caseCode: "EV-002",
    title: "GirlScript Summer of Code 2026",
    subtitle: "GSSOC 2026 · OPEN SOURCE CONTRIBUTOR",
    status: "SELECTED",
    date: "Summer 2026",
    location: "India (Remote)",
    category: "Open Source Initiative",
    statusHighlight: "Officially Selected Contributor",
    images: [
      {
        url: gssocEv,
        caption: "Official GSSoC 2026 Contributor Selection Certificate & Selection Record",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Selected as an official contributor for GirlScript Summer of Code (GSSoC 2026) among thousands of applicants across India.",
      "Contributed pull requests across public GitHub repositories, resolving frontend UI bugs and adding new feature components.",
      "Collaborated asynchronously with open-source project maintainers and global developer communities.",
    ],
    evidenceCollected: [
      { label: "GSSoC Contributor Certificate", tag: "[CERT]" },
      { label: "GitHub Merged Pull Requests", tag: "[PRs]" },
      { label: "Selection Badge Record", tag: "[BADGE]" },
    ],
    investigationNotes:
      "Evidence confirms active participation in GSSoC 2026. Contributions to public open-source software demonstrate clean Git discipline, asynchronous collaboration, and community-driven engineering impact across public codebases.",
    stampText: "CASE VERIFIED",
  },

  "EV-003": {
    caseCode: "EV-003",
    title: "GDG Sprintathon Hackathon 2026",
    subtitle: "GDG SPRINTATHON · 2ND RANK WINNER",
    status: "COMPLETED",
    date: "FEB 2026",
    location: "Online",
    category: "Engineering Hackathon",
    statusHighlight: "Runner Up",
    images: [
      {
        url: gdgEv,
        caption: "GDG Sprintathon 2026 2nd Rank Winner Certificate & Scoreboard",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Secured 2nd Rank overall out of all competing teams in an intensive week-long online engineering hackathon.",
      "Awarded ₹6,000 cash prize for outstanding technical prototype design and execution under continuous deadlines.",
      "Earned Top 2 Contributor distinction with 255 points and led Team #152 to a 480-point finish.",
    ],
    evidenceCollected: [
      { label: "2nd Rank Winner Certificate", tag: "[RANK 2]" },
      { label: "Cash Prize Transcript", tag: "[PRIZE]" },
      { label: "Leaderboard Score Verification", tag: "[SCORE]" },
    ],
    investigationNotes:
      "Records verify 2nd Rank placement in GDG Sprintathon 2026. The subject led Team #152 under continuous pressure, demonstrating rapid problem-solving, high individual code output (255 Pts), and effective technical collaboration.",
    stampText: "FILE ARCHIVED",
  },

  "EV-004": {
    caseCode: "EV-004",
    title: "Odoo Hackathon 2025 — Grand Finale",
    subtitle: "ODOO INDIA · NATIONAL HACKATHON",
    status: "QUALIFIED",
    date: "11–12 Aug 2025",
    location: "Gandhinagar, Gujarat",
    category: "National Hackathon",
    statusHighlight: "Top 350 Teams in India",
    images: [
      {
        url: odoo2025Ev,
        caption: "Official Odoo Hackathon 2025 Grand Finale Pass & Event Verification",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Selected among the Top 350 Teams in India after clearing competitive nationwide screening rounds.",
      "Qualified for the 24-hour non-stop onsite Grand Finale in Gandhinagar, Gujarat on August 11–12, 2025.",
      "Architected and deployed a complete functional software prototype within 24 hours under live industry evaluation.",
    ],
    evidenceCollected: [
      { label: "National Selection Record", tag: "[RECORD]" },
      { label: "Grand Finale Entry Pass", tag: "[PASS]" },
      { label: "Team Onsite Photography", tag: "[PHOTO]" },
    ],
    investigationNotes:
      "Investigation confirms the subject cleared competitive national screening rounds to compete in the 24-hour onsite Grand Finale in Gandhinagar, delivering a functional prototype under strict time constraints and live judging.",
    stampText: "CASE VERIFIED",
  },

  "EV-005": {
    caseCode: "EV-005",
    title: "NPTEL DBMS Certification — Top 1%",
    subtitle: "NPTEL / IIT · ACADEMIC EXCELLENCE",
    status: "COMPLETED",
    date: "JAN 2026 - MAR 2026",
    location: "Self Paced",
    category: "Academic Certification",
    statusHighlight: "Top 1% · Score 85%",
    images: [
      {
        url: nptelDbmsEv,
        caption: "Official NPTEL Elite + Silver Certification Transcript & Grade Card (Top 1%)",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Earned Elite + Silver certification with an 85% final score in Database Management Systems.",
      "Ranked among the Top 1% of 12,988+ registered learners nationwide across engineering institutes.",
      "Mastered relational algebra, SQL optimization, normalization (1NF–5NF), ACID transactions, and indexing.",
    ],
    evidenceCollected: [
      { label: "NPTEL Elite + Silver Certificate", tag: "[CERT]" },
      { label: "Top 1% Merit Transcript", tag: "[MERIT]" },
      { label: "Grade Transcript (85%)", tag: "[SCORE]" },
    ],
    investigationNotes:
      "Official academic transcripts verify an Elite + Silver certification with an 85% score, placing the subject in the Top 1% nationwide out of 12,988+ learners. Demonstrates deep grounding in relational database architecture.",
    stampText: "FILE ARCHIVED",
  },

  "EV-006": {
    caseCode: "EV-006",
    title: "Odoo Hackathon 2026 — National Finalist",
    subtitle: "ODOO INDIA HQ · NATIONAL FINALS",
    status: "QUALIFIED",
    date: "5–6 Sep 2026",
    location: "Odoo Headquarters, Gandhinagar, Gujarat",
    category: "National Hackathon",
    statusHighlight: "Top 850 Finalist (20,000+ Participants)",
    images: [
      {
        url: odoo2026Ev,
        caption: "Official Odoo Hackathon 2026 Finals Verification & DealFlow360 Evidence",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Advanced to the onsite Grand Finale at Odoo Headquarters among the Top 850 teams nationwide from 20,000+ applicants.",
      "Architected DealFlow360 — a self-governing B2B deal engine managing discount approvals, multi-warehouse inventory, and margins.",
      "Cleared three rigorous technical review rounds with Odoo engineering leads and received two hiring interview opportunities.",
    ],
    evidenceCollected: [
      { label: "Grand Finale Verification", tag: "[FINALS]" },
      { label: "DealFlow360 Live Platform", tag: "[PRODUCT]" },
      { label: "Odoo HQ Technical Interviews", tag: "[INTERVIEW]" },
    ],
    investigationNotes:
      "Records confirm the subject competed in the Odoo Hackathon 2026 onsite finals at Odoo HQ, advancing to Top 850 from 20,000+ applicants. Built DealFlow360 across 3 review rounds and earned two technical interview invites.",
    stampText: "CASE VERIFIED",
    link: "https://dealflowproduction.vercel.app/",
    linkText: "VIEW LIVE PROJECT",
  },

  "EV-007": {
    caseCode: "EV-007",
    title: "CyberKavach — Web Coordinator",
    subtitle: "CYBERKAVACH CLUB · LEADERSHIP",
    status: "LEADERSHIP ACTIVE",
    date: "Jul 2026 – Present",
    location: "CHARUSAT University, Anand",
    category: "Engineering Leadership",
    statusHighlight: "Web Development Coordinator",
    images: [
      {
        url: cyberkavachEv,
        caption: "CyberKavach Official Web Platform & Leadership Credentials",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Appointed as Web Development Coordinator for CyberKavach Club at CHARUSAT University.",
      "Leading technical development and maintenance of the club's official web platform.",
      "Engineered automated event attendance tracking, digital certificate verification, and member portals.",
    ],
    evidenceCollected: [
      { label: "Official Appointment Order", tag: "[APPOINTMENT]" },
      { label: "CyberKavach Web Platform Source", tag: "[SOURCE]" },
      { label: "Leadership Credential Record", tag: "[CREDENTIAL]" },
    ],
    investigationNotes:
      "Records confirm active leadership as Web Development Coordinator for CyberKavach Club. The subject leads web platform maintenance and digital infrastructure, serving hundreds of campus club members with reliable tools.",
    stampText: "CASE VERIFIED",
  },

  "EV-008": {
    caseCode: "EV-008",
    title: "TCS Technology Day 2026 — Hackathon Winner",
    subtitle: "TATA CONSULTANCY SERVICES · CHARUSAT",
    status: "WINNER",
    date: "13 Aug 2026",
    location: "CHARUSAT, Gujarat",
    category: "AI / Engineering Hackathon",
    statusHighlight: "🏆 Hackathon Winner · 1st Place",
    images: [
      {
        url: tcs2026Ev,
        caption: "TCS Technology Day 2026 Winner Record & Participation Certificate",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Secured 1st Place / Hackathon Winner among approximately 30 engineering teams in an on-campus challenge organized by TCS.",
      "Engineered an autonomous hybrid RAG chatbot combining semantic vector search, BM25 keyword retrieval, and structured synthesis.",
      "Delivered sub-3-second live query response times across institutional datasets during evaluation by senior TCS industry experts.",
    ],
    evidenceCollected: [
      { label: "TCS Participation Certificate", tag: "[CERT]" },
      { label: "Winner Evaluation Transcript", tag: "[WINNER]" },
      { label: "Hybrid RAG Pipeline Source", tag: "[CODE]" },
    ],
    investigationNotes:
      "Records confirm 1st Place / Winner distinction at TCS Technology Day 2026 among ~30 teams. In an intensive 2-hour build window, the subject engineered a hybrid RAG system achieving sub-3s query latency before TCS judges.",
    stampText: "FILE ARCHIVED",
  },
};
