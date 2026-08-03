import React, { useState } from "react";
import { useForm, ValidationError, FormspreeProvider } from "@formspree/react";

export const FORMSPREE_FORM_ID = "mgoggzkl";

const ContactFormInner: React.FC = () => {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "NAME IS REQUIRED";
    }

    if (!formData.email.trim()) {
      newErrors.email = "EMAIL IS REQUIRED";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "ENTER A VALID EMAIL ADDRESS";
    }

    if (!formData.message.trim()) {
      newErrors.message = "MESSAGE IS REQUIRED";
    }

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    await handleSubmit(e);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setFormErrors({});
    if (typeof reset === "function") {
      reset();
    }
  };

  return (
    <section id="contact" className="w-full py-5 md:py-6 bg-transparent">
      <div className="max-w-[1250px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
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
            {state.succeeded ? (
              <div className="p-4 text-center my-4">
                <h4 className="font-newspaper-title text-2xl sm:text-3xl text-[#111111] mb-2">
                  Transmission Received.
                </h4>
                <p className="font-sans text-[13.5px] leading-[1.55] text-[#333333]">
                  Your letter has been dispatched to the desk. He will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 font-mono-meta text-[10.5px] tracking-widest text-[#111111] underline font-bold hover:text-[#555555] transition-colors cursor-pointer uppercase"
                >
                  SEND ANOTHER LETTER
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate>
                <h3 className="font-newspaper-title text-2xl sm:text-3xl text-[#111111] font-normal mb-1.5">
                  Put it in writing
                </h3>
                <p className="font-sans text-[13.5px] leading-[1.55] text-[#333333] mb-4">
                  A project in mind, a role to fill, or just a good question — send it through and he'll get back to you.
                </p>

                {state.errors !== null && (
                  <div className="mb-4 p-3 border-2 border-[#A8382B] bg-[#FDF2F0] text-[#A8382B]">
                    <p className="font-mono-meta text-[10.5px] tracking-[0.15em] font-bold uppercase mb-1">
                      TRANSMISSION ERROR
                    </p>
                    <p className="font-sans text-xs text-[#822B22]">
                      Unable to send message at this time. Please check your details and try again.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                      YOUR NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      className={`w-full bg-white border-2 ${formErrors.name ? 'border-[#A8382B]' : 'border-[#111111]'} p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none`}
                    />
                    {formErrors.name && (
                      <span className="block font-mono-meta text-[10px] text-[#A8382B] tracking-[0.1em] font-bold mt-1 uppercase">
                        {formErrors.name}
                      </span>
                    )}
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="block font-mono-meta text-[10px] text-[#A8382B] tracking-[0.1em] font-bold mt-1 uppercase" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                      EMAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      className={`w-full bg-white border-2 ${formErrors.email ? 'border-[#A8382B]' : 'border-[#111111]'} p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none`}
                    />
                    {formErrors.email && (
                      <span className="block font-mono-meta text-[10px] text-[#A8382B] tracking-[0.1em] font-bold mt-1 uppercase">
                        {formErrors.email}
                      </span>
                    )}
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="block font-mono-meta text-[10px] text-[#A8382B] tracking-[0.1em] font-bold mt-1 uppercase" />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-subject" className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                    SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="A new product, a rebuild, a contract..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border-2 border-[#111111] p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="block font-mono-meta text-[10px] text-[#A8382B] tracking-[0.1em] font-bold mt-1 uppercase" />
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-message" className="block font-mono-meta text-[10px] text-[#111111] tracking-[0.15em] font-bold mb-1 uppercase">
                    THE STORY
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell him what you're building."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                    }}
                    className={`w-full bg-white border-2 ${formErrors.message ? 'border-[#A8382B]' : 'border-[#111111]'} p-2.5 font-sans text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none resize-y`}
                  />
                  {formErrors.message && (
                    <span className="block font-mono-meta text-[10px] text-[#A8382B] tracking-[0.1em] font-bold mt-1 uppercase">
                      {formErrors.message}
                    </span>
                  )}
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="block font-mono-meta text-[10px] text-[#A8382B] tracking-[0.1em] font-bold mt-1 uppercase" />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-1">
                  <span className="font-mono-meta text-[9.5px] tracking-[0.15em] text-[#666666] uppercase">
                    USUALLY REPLIES WITHIN 24 HOURS
                  </span>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="magnify-hover bg-[#111111] text-[#F7F3EA] border border-[#111111] px-6 py-2.5 font-mono-meta text-[11px] tracking-[0.2em] font-semibold hover:bg-[#efeadd] hover:text-[#111111] transition-colors cursor-pointer uppercase whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "SENDING..." : "SEND THE LETTER"}
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
                krishramanandi30@gmail.com
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
                href="https://www.linkedin.com/in/krish-ramanandi"
                target="_blank"
                rel="noopener noreferrer"
                className="magnify-hover w-9 h-9 border border-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[#F7F3EA] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/krish_ramanandi30"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Profile"
                className="magnify-hover w-9 h-9 border border-[#111111] flex items-center justify-center hover:bg-[#111111] hover:text-[#F7F3EA] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="mailto:krishramanandi30@gmail.com"
                title="Email Direct Line"
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

export const Contact: React.FC = () => {
  return (
    <FormspreeProvider>
      <ContactFormInner />
    </FormspreeProvider>
  );
};