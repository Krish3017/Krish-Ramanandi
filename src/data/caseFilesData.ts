import type { CaseFileDetail } from "../components/CaseFileModal";
import supportFlowImg from "../assets/SupportFlow.png";
import bullionImg from "../assets/bullion.png";
import nexusImg from "../assets/Nexus.png";
import cyberkavachImg from "../assets/cyberkavach.png";
import scrummindImg from "../assets/scrummind.png";
import dataforgeImg from "../assets/dataforge.png";

export const caseFilesMap: Record<string, CaseFileDetail> = {
  "EXHIBIT A": {
    id: "supportflow-ai",
    exhibitLetter: "EXHIBIT A",
    sub: "SUPPORTFLOW.AI",
    title: "SupportFlow AI",
    headline: "A multi-agent workforce replacing traditional customer support",
    subtitle: "Evidence indicates the subject engineered an autonomous customer support platform where specialized AI agents collaborate to resolve tickets, retrieve knowledge, prioritize urgency, and escalate only when necessary.",
    byline: "THE INVESTIGATION DESK",
    figCaption: "multi-agent control center handling customer conversations in real time.",
    bodyParagraph1: "Investigators identified SupportFlow AI as one of the subject's most sophisticated engineering projects. Rather than relying on a single chatbot, the platform orchestrates multiple specialized agents capable of reasoning, retrieving information, prioritizing requests, and producing accurate responses across support channels.",
    bodyParagraph2: "The backend combines LangGraph, LangChain, FastAPI, ChromaDB, and Groq-powered large language models to coordinate agent execution. Customer history, ticket priority, retrieval pipelines, and escalation logic operate together as a unified autonomous workflow.",
    pullQuote: "A support team that never sleeps — autonomous, context-aware, and engineered for production.",
    bodyParagraph3: "Evidence shows significant emphasis on modular architecture, scalable APIs, secure knowledge retrieval, and human-in-the-loop escalation, allowing organizations to automate repetitive support while preserving reliability for critical cases.",
    frontend: "Next.js · React · Tailwind CSS",
    data: "ChromaDB · SQLite · PostgreSQL",
    admin: "Multi-Agent Operations Dashboard",
    role: "AI Engineer & Full Stack Developer",
    entered: "2026",
    status: "Production Ready",
    relatedExhibits: [
      { name: "EXHIBIT B", title: "Bullion Admin" },
      { name: "EXHIBIT C", title: "NexusRAG" }
    ],
    link: "#",
    imageBg: "bg-[#101010]",
    imageUrl: supportFlowImg
  },
  "EXHIBIT B": {
    id: "bullion-admin",
    exhibitLetter: "EXHIBIT B",
    sub: "BULLION.ADMIN",
    title: "Bullion Admin",
    headline: "Engineering enterprise procurement infrastructure for agricultural operations",
    subtitle: "Evidence confirms the subject contributed to a production-grade administrative platform that streamlines procurement, inventory, user operations, and business workflows for an AgriTech organization.",
    byline: "THE INVESTIGATION DESK",
    figCaption: "enterprise administration dashboard coordinating procurement, inventory, and operational workflows.",
    bodyParagraph1: "During an industry internship, investigators observed the subject working on Bullion Admin, an enterprise-scale administrative platform developed for agricultural procurement. Unlike conventional dashboard projects, the system supports real business operations by centralizing procurement processes, inventory tracking, analytics, and administrative management within a unified interface.",
    bodyParagraph2: "The platform was built using Next.js 15 and Django REST Framework with PostgreSQL as its primary datastore. Development focused on scalable frontend architecture, secure REST APIs, modular backend services, authentication, role-based workflows, and responsive administrative interfaces capable of handling production workloads.",
    pullQuote: "Enterprise software isn't about building pages — it's about building reliable business operations.",
    bodyParagraph3: "The investigation identified extensive work on UI engineering, dashboard architecture, API integration, reusable components, performance optimization, and production-ready development practices. The project provided firsthand experience collaborating within a professional engineering environment while following modern software development workflows and enterprise coding standards.",
    frontend: "Next.js 15 · React · TypeScript · Tailwind CSS",
    data: "PostgreSQL · Django REST Framework",
    admin: "Enterprise Procurement Dashboard",
    role: "Full Stack Developer Intern",
    entered: "2026",
    status: "Production Deployment",
    relatedExhibits: [
      { name: "EXHIBIT E", title: "CyberKavach" },
      { name: "EXHIBIT A", title: "SupportFlow AI" }
    ],
    link: "#",
    imageBg: "bg-[#101010]",
    imageUrl: bullionImg
  },
  "EXHIBIT C": {
    id: "nexus-rag",
    exhibitLetter: "EXHIBIT C",
    sub: "NEXUSRAG.AI",
    title: "NexusRAG",
    headline: "Building an intelligence layer over unstructured knowledge",
    subtitle: "Investigators discovered an advanced Retrieval-Augmented Generation system capable of transforming documents into searchable, explainable knowledge for AI reasoning.",
    byline: "THE INVESTIGATION DESK",
    figCaption: "semantic retrieval engine processing thousands of embedded knowledge chunks.",
    bodyParagraph1: "The investigation uncovered a custom-built RAG platform designed to bridge the gap between static documentation and conversational AI. Instead of relying solely on language models, the system retrieves relevant evidence before generating responses.",
    bodyParagraph2: "Using LangChain pipelines, MiniLM embeddings, vector similarity search, cosine ranking, and Groq-hosted LLMs, the platform indexes large collections of documents while maintaining contextual accuracy and explainability.",
    pullQuote: "Every response begins with evidence before intelligence.",
    bodyParagraph3: "The collected evidence demonstrates efficient document chunking strategies, optimized retrieval pipelines, and lightweight vector storage engineered for low-latency semantic search.",
    frontend: "React · TypeScript",
    data: "Custom Vector Store · JSON",
    admin: "Knowledge Management Console",
    role: "AI Engineer",
    entered: "2026",
    status: "Completed",
    relatedExhibits: [
      { name: "EXHIBIT A", title: "SupportFlow AI" },
      { name: "EXHIBIT D", title: "DataForge" }
    ],
    link: "#",
    imageBg: "bg-[#131313]",
    imageUrl: nexusImg
  },
  "EXHIBIT D": {
    id: "dataforge",
    exhibitLetter: "EXHIBIT D",
    sub: "DATAFORGE.STUDIO",
    title: "DataForge",
    headline: "Transforming raw data into visual intelligence",
    subtitle: "Evidence reveals a modern analytics platform focused on converting fragmented datasets into meaningful dashboards, reports, and predictive insights.",
    byline: "THE INVESTIGATION DESK",
    figCaption: "interactive analytics dashboard rendering real-time business intelligence.",
    bodyParagraph1: "DataForge emerged during the investigation as the subject's dedicated analytics platform, combining engineering and visualization to simplify complex business data into actionable insights.",
    bodyParagraph2: "The platform integrates Python, Power BI, SQL, and modern visualization libraries to automate reporting, exploratory analysis, statistical modeling, and decision support workflows.",
    pullQuote: "Data becomes valuable only when it tells a story.",
    bodyParagraph3: "Investigators noted careful optimization of ETL pipelines, dashboard responsiveness, and scalable reporting mechanisms capable of supporting growing organizational datasets.",
    frontend: "React · Tailwind CSS",
    data: "PostgreSQL · SQL",
    admin: "Analytics Dashboard",
    role: "Data Analyst & Full Stack Developer",
    entered: "2026",
    status: "Completed",
    relatedExhibits: [
      { name: "EXHIBIT C", title: "NexusRAG" },
      { name: "EXHIBIT E", title: "CyberKavach" }
    ],
    link: "#",
    imageBg: "bg-[#141414]",
    imageUrl: dataforgeImg
  },
  "EXHIBIT E": {
    id: "cyberkavach",
    exhibitLetter: "EXHIBIT E",
    sub: "CYBERKAVACH.ORG",
    title: "CyberKavach",
    headline: "Securing campus operations through a unified digital platform",
    subtitle: "The investigation uncovered a comprehensive management platform engineered for one of the university's cybersecurity communities, replacing fragmented manual workflows with secure digital operations.",
    byline: "THE INVESTIGATION DESK",
    figCaption: "administrative operations dashboard used for events, attendance, certificates, and member management.",
    bodyParagraph1: "CyberKavach serves as the operational backbone of the university's cybersecurity club. The subject designed and developed modules that automate member registration, event management, attendance tracking, certificates, notifications, and administrative approvals.",
    bodyParagraph2: "Security remained central throughout development, incorporating authentication, CSRF protection, role-based permissions, audit logging, secure email workflows, and automated certificate verification.",
    pullQuote: "Operational security begins with reliable software.",
    bodyParagraph3: "Evidence indicates continuous iteration driven by real organizational needs, resulting in a production-ready platform capable of supporting club operations while maintaining modern UI standards and scalable architecture.",
    frontend: "HTML · JavaScript · Tailwind CSS",
    data: "MySQL",
    admin: "Administrative Control Panel",
    role: "Full Stack Developer",
    entered: "2026",
    status: "Live",
    relatedExhibits: [
      { name: "EXHIBIT B", title: "Bullion Admin" },
      { name: "EXHIBIT F", title: "ScrumMind" }
    ],
    link: "#",
    imageBg: "bg-[#0f0f0f]",
    imageUrl: cyberkavachImg
  },
  "EXHIBIT F": {
    id: "scrummind",
    exhibitLetter: "EXHIBIT F",
    sub: "SCRUMMIND.APP",
    title: "ScrumMind",
    headline: "An AI-powered workspace for agile engineering teams",
    subtitle: "Evidence reveals a collaborative platform where sprint planning, task management, documentation, and AI assistance converge into a single operational workspace.",
    byline: "THE INVESTIGATION DESK",
    figCaption: "agile operations dashboard coordinating sprints, tasks, and team collaboration.",
    bodyParagraph1: "ScrumMind was developed to simplify agile software development by centralizing sprint planning, backlog organization, documentation, and AI-assisted productivity into one unified workspace.",
    bodyParagraph2: "Modern frontend technologies combine with scalable backend services to provide secure collaboration, task management, analytics, and intelligent workflow recommendations for engineering teams.",
    pullQuote: "Better planning creates better software.",
    bodyParagraph3: "The evidence demonstrates a focus on intuitive user experience, scalable architecture, and practical AI assistance designed to reduce administrative overhead during software development cycles.",
    frontend: "Next.js · React · Tailwind CSS",
    data: "PostgreSQL · Supabase",
    admin: "Agile Project Dashboard",
    role: "Full Stack Developer",
    entered: "2026",
    status: "In Development",
    relatedExhibits: [
      { name: "EXHIBIT A", title: "SupportFlow AI" },
      { name: "EXHIBIT E", title: "CyberKavach" }
    ],
    link: "#",
    imageBg: "bg-[#111111]",
    imageUrl: scrummindImg
  },
  "EXHIBIT G": {
    id: "supportflow-ai-g",
    exhibitLetter: "EXHIBIT G",
    sub: "SUPPORTFLOW.AI",
    title: "SupportFlow AI — Assistant",
    headline: "Autonomous customer support agent workforce utilizing LangGraph and ChromaDB memory networks",
    subtitle: "The investigation uncovered a specialized sub-module of SupportFlow AI built specifically to serve as a low-latency conversational assistant equipped with vector memory recall.",
    byline: "THE INVESTIGATION DESK",
    figCaption: "conversational execution pipeline tracing memory recall and LLM response steps.",
    bodyParagraph1: "Part of the larger SupportFlow ecosystem, this custom assistant specializes in retrieving matching database entries using cosine similarity over embedded user queries, running inside FastAPI controllers.",
    bodyParagraph2: "Its core execution steps trace state updates, query tokenization, similarity retrieval thresholds, and dynamic prompting templates designed to maximize accuracy while minimizing inference cost.",
    pullQuote: "Autonomous memory networks bring human-like recall to customer support flows.",
    bodyParagraph3: "Evidence suggests high performance on high-concurrency request benchmarks, using optimized thread pools and connection reuse strategies in Python backend setups.",
    frontend: "React · Tailwind CSS",
    data: "ChromaDB · FastAPI · Groq",
    admin: "Agent Analytics Console",
    role: "AI Developer",
    entered: "2026",
    status: "Completed",
    relatedExhibits: [
      { name: "EXHIBIT A", title: "SupportFlow AI" },
      { name: "EXHIBIT C", title: "NexusRAG" }
    ],
    link: "#",
    imageBg: "bg-[#101010]",
    imageUrl: supportFlowImg
  }
};
