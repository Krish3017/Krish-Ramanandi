import bullAgritechEv from "../assets/evidence/BullAgritech.png";
import gssocEv from "../assets/evidence/Gssoc.png";
import gdgEv from "../assets/evidence/GDG.png";
import odoo2025Ev from "../assets/evidence/Odoo2025.jpeg";
import nptelDbmsEv from "../assets/evidence/NPTELDBMS.png";
import odoo2026Ev from "../assets/evidence/Odoo2026.png";
import cyberkavachEv from "../assets/evidence/cyberkavach.png";

export interface EvidenceDetailRecord {
  caseCode: string;
  title: string;
  subtitle: string;
  status: "VERIFIED" | "SELECTED" | "COMPLETED" | "QUALIFIED" | "LEADERSHIP ACTIVE";
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
  stampText: "CASE VERIFIED" | "FILE ARCHIVED";
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
      "Implemented secure role-based access control (RBAC) and optimized high-concurrency PostgreSQL database queries."
    ],
    evidenceCollected: [
      { label: "Deployment Transcript", tag: "[TRANSCRIPT]" },
      { label: "Bullion Platform Source Code", tag: "[CODE]" },
      { label: "Industry Internship Verification", tag: "[DOC]" },
    ],
    investigationNotes:
      "This investigation confirms seven months of intensive full-stack engineering at Bull Agritech. The subject successfully built and deployed Bullion, a mission-critical procurement platform handling real business transactions and inventory workflows with high uptime and reliability.",
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
      "Demonstrated proficiency in Git branch management, pull request workflows, and peer code reviews.",
    ],
    evidenceCollected: [
      { label: "GSSoC Contributor Certificate", tag: "[CERT]" },
      { label: "GitHub Merged Pull Requests", tag: "[PRs]" },
      { label: "Selection Badge Record", tag: "[BADGE]" },
    ],
    investigationNotes:
      "Evidence confirms the subject's selection and active participation in GSSoC 2026. Contributions to public open-source software demonstrate real-world asynchronous collaboration, clean Git discipline, and community-driven engineering impact.",
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
      "Awarded ₹6000 prize for outstanding technical prototype design and execution under continuous deadlines.",
      "Scored 480 team points and personally earned Top 2 Contributor distinction with 255 points.",
      "Engineered rapid full-stack features, FastAPI backend endpoints, and responsive user interfaces.",
    ],
    evidenceCollected: [
      { label: "2nd Rank Winner Certificate", tag: "[RANK 2]" },
      { label: "Cash Prize Transcript", tag: "[PRIZE]" },
      { label: "Leaderboard Score Verification", tag: "[SCORE]" },
    ],
    investigationNotes:
      "Records verify 2nd Rank placement in GDG Sprintathon 2026. The subject led Team #152 under continuous pressure, demonstrating rapid problem-solving, high individual code output (255 Pts), and effective team collaboration.",
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
      "Architected and deployed a complete functional software prototype within 24 hours under strict deadlines.",
      "Collaborated within a team of four under live evaluation from industry judges and Odoo leads.",
    ],
    evidenceCollected: [
      { label: "National Selection Record", tag: "[RECORD]" },
      { label: "Grand Finale Entry Pass", tag: "[PASS]" },
      { label: "Team Onsite Photography", tag: "[PHOTO]" },
    ],
    investigationNotes:
      "This investigation confirms that the subject successfully progressed through national selection rounds before competing in the 24-hour Grand Finale in Gandhinagar. The experience strengthened rapid development, collaboration, and problem-solving under real project constraints.",
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
      "Applied theoretical database principles to production full-stack database architectures.",
    ],
    evidenceCollected: [
      { label: "NPTEL Elite + Silver Certificate", tag: "[CERT]" },
      { label: "Top 1% Merit Transcript", tag: "[MERIT]" },
      { label: "Grade Transcript (85%)", tag: "[SCORE]" },
    ],
    investigationNotes:
      "Official academic transcripts verify an Elite + Silver certification with an 85% score, placing the subject in the Top 1% nationwide out of 12,988+ learners. This credential demonstrates rigorous grounding in database design and query performance.",
    stampText: "FILE ARCHIVED",
  },

  "EV-006": {
    caseCode: "EV-006",
    title: "Odoo Hackathon 2026 — Re-Selected",
    subtitle: "ODOO INDIA · NATIONAL HACKATHON",
    status: "QUALIFIED",
    date: "SEP 2026",
    location: "Gandhinagar, Gujarat",
    category: "National Hackathon",
    statusHighlight: "Consecutive Year Finalist",
    images: [
      {
        url: odoo2026Ev,
        caption: "Odoo 2026 Selection Confirmation Memo & Team Registration Record",
        isPrimary: true,
      },
    ],
    keyFindings: [
      "Selected once again as a National Finalist in Odoo Hackathon 2026.",
      "Demonstrated sustained competitive engineering performance across consecutive hackathon seasons.",
      "Qualified through rigorous technical screening evaluating system design, code quality, and logic.",
    ],
    evidenceCollected: [
      { label: "Selection Confirmation Memo", tag: "[MEMO]" },
      { label: "National Finalist Badge", tag: "[BADGE]" },
    ],
    investigationNotes:
      "Investigation confirms consecutive re-selection for Odoo Hackathon 2026. This multi-year record highlights sustained proficiency and rapid execution across national engineering hackathons.",
    stampText: "CASE VERIFIED",
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
      "Directing web development projects, conducting code reviews, and maintaining security standards.",
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
};
