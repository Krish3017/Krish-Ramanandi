import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-5 md:py-6 bg-[#F2ECE0]">
      <div className="max-w-[1200px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        {/* Section Header */}
        <div className="flex justify-between items-end pb-2">
          <div>
            <span className="font-mono-meta text-[11px] md:text-[12px] tracking-[0.2em] font-bold text-[#111111] uppercase">
              SUBMIT A TIP
            </span>
            <h2 className="font-newspaper-title text-3xl md:text-4xl lg:text-5xl text-[#111111] font-normal mt-0.5">
              Letters &amp; Commissions
            </h2>
          </div>
          <span className="font-mono-meta text-[10px] md:text-[11px] tracking-[0.18em] text-[#111111] font-bold uppercase hidden sm:inline">
            THE DESK IS OPEN FOR SELECT WORK — 2026
          </span>
        </div>
        <div className="border-b-2 border-[#111111] mb-5" />

        {/* Bordered Panel — Classifieds Box with Comfortable Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#111111] bg-[#F7F3EA]">
          {/* LEFT — Form */}
          <div className="lg:col-span-7 p-5 sm:p-6 lg:p-7 lg:border-r border-[#111111]">
            {submitted ? (
              <div className="p-4 text-center my-4">
                <h4 className="font-newspaper-title text-2xl text-[#111111] mb-2">
                  Transmission Received.
                </h4>
                <p className="font-sans text-[13.5px] text-[#333333]">
                  Your message has been logged. Krish will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 font-mono-meta text-[10.5px] tracking-widest text-[#111111] underline font-bold"
                >
                  SEND ANOTHER LETTER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-newspaper-title text-2xl sm:text-3xl text-[#111111] font-normal mb-1.5">
                  Put it in writing
                </h3>
                <p className="font-sans text-[13.5px] leading-[1.55] text-[#333333] mb-4">
                  A project in mind, a role to fill, or just a good question — send it through and he'll get back to you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border-2 border-[#111111] p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border-2 border-[#111111] p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="A new product, a rebuild, a contract..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border-2 border-[#111111] p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                    THE STORY
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell him what you're building."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border-2 border-[#111111] p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-1">
                  <span className="font-mono-meta text-[9.5px] tracking-[0.15em] text-[#666666] uppercase">
                    USUALLY REPLIES WITHIN 24 HOURS
                  </span>
                  <button
                    type="submit"
                    className="magnify-hover bg-[#111111] text-[#F7F3EA] border border-[#111111] px-6 py-2.5 font-mono-meta text-[11px] tracking-[0.2em] font-semibold hover:bg-[#333333] transition-colors cursor-pointer uppercase whitespace-nowrap"
                  >
                    SEND THE LETTER
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT — Info panel */}
          <div className="lg:col-span-5 p-5 sm:p-6 lg:p-7 bg-[#EFE9DC] flex flex-col justify-between">
            <div>
              <p className="font-mono-meta text-[10px] tracking-[0.15em] font-bold text-[#111111] uppercase mb-1">
                DIRECT LINE
              </p>
              <p className="font-newspaper-title text-base sm:text-lg text-[#111111] mb-1">
                krish@example.com
              </p>
              <p className="font-sans text-[12.5px] leading-[1.45] text-[#555555]">
                For commissions, contracts, and the occasional good argument about RAG pipelines.
              </p>
            </div>

            <div className="border-t border-[#C8C2B4] my-3.5" />

            <div>
              <p className="font-mono-meta text-[10px] tracking-[0.15em] font-bold text-[#111111] uppercase mb-1">
                THE DESK
              </p>
              <p className="font-newspaper-title text-base sm:text-lg text-[#111111] mb-1">
                Surat, India
              </p>
              <p className="font-sans text-[12.5px] leading-[1.45] text-[#555555]">
                IST — working with teams worldwide, remote-first.
              </p>
            </div>

            <div className="border-t border-[#C8C2B4] my-3.5" />

            <div>
              <p className="font-mono-meta text-[10px] tracking-[0.15em] font-bold text-[#111111] uppercase mb-1">
                AVAILABILITY
              </p>
              <p className="font-newspaper-title text-base sm:text-lg text-[#111111] mb-1">
                Freelance &amp; contract only
              </p>
              <p className="font-sans text-[12.5px] leading-[1.45] text-[#555555]">
                Studying full-time, so he takes on select freelance / contract projects on the side.
              </p>
            </div>

            <div className="border-t border-[#C8C2B4] my-3.5" />

            <div className="mt-auto flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/Krish3017"
                target="_blank"
                rel="noopener noreferrer"
                className="magnify-hover w-9 h-9 border border-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[#F7F3EA] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="magnify-hover w-9 h-9 border border-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[#F7F3EA] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:krish@example.com"
                className="magnify-hover w-9 h-9 border border-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[#F7F3EA] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};