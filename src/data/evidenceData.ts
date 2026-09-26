export interface EvidenceItemData {
  id: string;
  exhibitKey: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  date: string;
  stampText: string;
  attachmentType: "push-pin" | "paper-clip" | "polaroid-tape" | "event-badge" | "brass-pin" | "memo-tape";
  paperType: "dossier" | "certificate" | "polaroid" | "event-pass" | "academic" | "memo";
  stickyNoteText?: string;
  badgeTag?: string;
  scoreTag?: string;
  rankTag?: string;
  rotation: number; // degrees
}

export interface EvidenceStringConnection {
  fromId: string;
  toId: string;
}

export const evidenceItemsData: EvidenceItemData[] = [
  {
    id: "ev-001",
    exhibitKey: "EV-001",
    title: "INDUSTRY INTERNSHIP",
    subtitle: "Bull Agritech",
    company: "Bull Agritech",
    role: "Full Stack Developer Intern",
    date: "Dec 2025 – Jul 2026",
    stampText: "VERIFIED",
    attachmentType: "push-pin",
    paperType: "dossier",
    stickyNoteText: "Production deployment.\nEnterprise software.",
    rotation: -2.5,
  },
  {
    id: "ev-002",
    exhibitKey: "EV-002",
    title: "GSSoC 2026",
    subtitle: "Contributor",
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    date: "Summer 2026",
    stampText: "SELECTED",
    attachmentType: "paper-clip",
    paperType: "certificate",
    rotation: 2.2,
  },
  {
    id: "ev-003",
    exhibitKey: "EV-003",
    title: "GDG SPRINTATHON 2026",
    subtitle: "Hackathon",
    company: "GDG Community",
    role: "2nd Rank · ₹6000 Prize",
    date: "FEB 2026",
    stampText: "RUNNER UP",
    attachmentType: "polaroid-tape",
    paperType: "polaroid",
    stickyNoteText: "2nd Rank out of all teams!\n255 Pts Top Contributor.",
    rankTag: "🏆 2nd Rank",
    scoreTag: "480 Pts",
    rotation: -3.2,
  },
  {
    id: "ev-004",
    exhibitKey: "EV-004",
    title: "ODOO HACKATHON 2025",
    subtitle: "National Hackathon",
    company: "Odoo India",
    role: "24-Hr Grand Finale Qualifier",
    date: "Aug 11–12, 2025",
    stampText: "QUALIFIED",
    attachmentType: "event-badge",
    paperType: "event-pass",
    badgeTag: "TOP 350 TEAMS IN INDIA",
    rotation: 3.5,
  },
  {
    id: "ev-005",
    exhibitKey: "EV-005",
    title: "NPTEL DBMS CERTIFICATION",
    subtitle: "Academic Excellence",
    company: "IIT / NPTEL",
    role: "Top 1% · Score 85%",
    date: "JAN 2026 - MAR 2026",
    stampText: "ELITE + SILVER",
    attachmentType: "brass-pin",
    paperType: "academic",
    scoreTag: "85% Score · Top 1%",
    rotation: -1.8,
  },
  {
    id: "ev-006",
    exhibitKey: "EV-006",
    title: "ODOO HACKATHON 2026",
    subtitle: "National Finalist",
    company: "Odoo India",
    role: "National Finalist · DealFlow360",
    date: "5–6 Sep 2026",
    stampText: "FINALIST",
    attachmentType: "memo-tape",
    paperType: "memo",
    stickyNoteText: "Top 850 out of 20,000+!\n3 Review Rounds · 2 Interviews.",
    badgeTag: "TOP 850 FINALIST",
    scoreTag: "3 Reviews · 2 Interviews",
    rankTag: "Top 850 Finalist",
    rotation: 2.8,
  },
  {
    id: "ev-007",
    exhibitKey: "EV-007",
    title: "CYBERKAVACH CLUB",
    subtitle: "Web Development Coordinator",
    company: "CyberKavach Club, CHARUSAT",
    role: "Web Development Coordinator",
    date: "Jul 2026 – Present",
    stampText: "LEADERSHIP",
    attachmentType: "push-pin",
    paperType: "dossier",
    stickyNoteText: "Campus security platform.\nEvents & Certificates.",
    rotation: -2.2,
  },
  {
    id: "ev-008",
    exhibitKey: "EV-008",
    title: "TCS TECHNOLOGY DAY 2026",
    subtitle: "Hackathon Winner",
    company: "Tata Consultancy Services",
    role: "Lead AI / RAG Developer",
    date: "13 Aug 2026",
    stampText: "WINNER",
    attachmentType: "polaroid-tape",
    paperType: "polaroid",
    stickyNoteText: "Hackathon Winner · ~30 Teams.\nBuilt in 2-Hr sprint!",
    badgeTag: "30 TEAMS · 2-HR WINDOW",
    rankTag: "🏆 Winner",
    scoreTag: "<3s Response Time",
    rotation: -2.8,
  },
];

export const evidenceStringConnections: EvidenceStringConnection[] = [
  { fromId: "ev-004", toId: "ev-001" },
  { fromId: "ev-001", toId: "ev-003" },
  { fromId: "ev-003", toId: "ev-002" },
  { fromId: "ev-001", toId: "ev-005" },
  { fromId: "ev-005", toId: "ev-007" },
  { fromId: "ev-007", toId: "ev-006" },
  { fromId: "ev-002", toId: "ev-006" },
  { fromId: "ev-005", toId: "ev-008" },
  { fromId: "ev-008", toId: "ev-006" },
];
