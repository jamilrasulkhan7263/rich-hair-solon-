import React, { useState } from 'react';
import { SALON_INFO, buildWhatsAppLink } from '../data/salonData';

export const AcademyScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    interestArea: 'Haircutting & Styling Fundamentals',
    userMessage: ''
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = `Hello Rich Hair Salon & Academy,\n\nI want to enquire about academy training:\n• Name: ${formData.fullName}\n• Phone: ${formData.phoneNumber}\n• Area of Interest: ${formData.interestArea}\n• Note: ${formData.userMessage || 'N/A'}`;

    setToastMessage('Enquiry prepared! Redirecting to WhatsApp to send your details...');
    setTimeout(() => {
      window.open(buildWhatsAppLink(payload), '_blank');
      setToastMessage(null);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full py-8 lg:py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 flex items-center gap-3 bg-white text-[#802544] px-5 py-4 rounded-xl shadow-2xl border border-[#dac0c4] max-w-sm animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="material-symbols-outlined text-[#9e3d5b]" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
          <div>
            <h4 className="font-sans text-xs font-bold text-[#802544]">Enquiry Prepared</h4>
            <p className="font-body text-xs text-[#544246]">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* SECTION 1: HERO / ACADEMY INTRO BANNER */}
      <section className="relative w-full bg-[#ffd9e3]/40 rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden mb-12 shadow-xs border border-[#dac0c4]/40">
        {/* Atmospheric ambient radial shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#feb9cf]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#ffddb0]/30 blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-2xs border border-[#dac0c4]/50">
              <span className="material-symbols-outlined text-[#594422] text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                arrow_back_ios_new
              </span>
              <span className="font-sans uppercase tracking-wider text-[#802544] text-xs font-semibold">
                Rich Hair Academy • Akola
              </span>
              <span className="text-[#594422] text-xs font-medium font-body">
                ({SALON_INFO.hindiName})
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#802544] leading-tight">
              Learn. <em className="italic text-[#9e3d5b] font-normal">Create.</em> Grow.
            </h1>

            {/* Supporting Editorial Copy */}
            <p className="font-body text-[#544246] max-w-xl text-base sm:text-lg leading-relaxed">
              Explore hair and salon learning opportunities in a professional, creative environment. Discover foundational craft, styling techniques, and hands-on salon artistry guided with warmth and inclusivity.
            </p>

            {/* Trust Chips Matrix */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#802544] shadow-xs border border-[#dac0c4]/40">
                <span className="material-symbols-outlined text-xs text-[#9e3d5b]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span>Women-Owned &amp; LGBTQ+ Friendly</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#802544] shadow-xs border border-[#dac0c4]/40">
                <span className="material-symbols-outlined text-xs text-[#735b37]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span>4.7★ Google Rated (235 Reviews)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#802544] shadow-xs border border-[#dac0c4]/40">
                <span className="material-symbols-outlined text-xs text-[#594422]" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                <span>Unisex Training Environment</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#802544] shadow-xs border border-[#dac0c4]/40">
                <span className="material-symbols-outlined text-xs text-[#9e3d5b]" style={{ fontVariationSettings: "'FILL' 1" }}>pin_drop</span>
                <span>IT Square, Gorakshan Rd, Akola</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={buildWhatsAppLink("Hello Rich Hair Salon, I want to enquire about academy training.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 min-h-[48px] text-center"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Ask on WhatsApp</span>
              </a>
              <a
                href="#academy-enquiry"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fef8f5] text-[#802544] font-sans text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-xs hover:shadow-sm transition-all min-h-[48px] text-center border border-[#dac0c4]/50"
              >
                <span>Explore Offerings</span>
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sculptural Visual Frame with Academy Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#feb9cf] to-[#ffddb0] rounded-[42px] blur-lg opacity-60" />
              <div className="relative bg-white rounded-[36px] overflow-hidden shadow-xl p-4 flex flex-col items-center border border-[#dac0c4]/40">
                <div className="relative w-full h-80 sm:h-96 rounded-[28px] overflow-hidden bg-[#f2edea] flex items-center justify-center text-center">
                  <img
                    className="w-full h-full object-cover rounded-[24px]"
                    alt="Modern upscale hair academy workshop inside Rich Hair Salon Akola."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHJ9XY0NpN0IS5PLDKqoNRhwUmIyEDIWLGOxkGoGSs-wMry7hRr_AykLzDaEcsrGnb-ZxXPmGhbulOL3tgu0L9L3SEP9K4fe39yL7xcsG_2uXlnYPQCkJ3Pq_vcLCEZyPgQP9OVPwMJO4Pg01f0cXq9kUpJ4Ivw-2jFWWKJPFSPy8f_6WtavFtuFTQZcrjNfPblA8JHFf-0VRCVxwXX9CAgX7DAXiulLwxhppOSeb63DwNCQuNZU7Xjg"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hair-wave Champagne Line Art Overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none text-[#594422]" fill="none" viewBox="0 0 400 500">
                    <path d="M-50,200 C80,120 120,380 260,260 C360,180 380,320 450,280" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                    <path d="M-20,280 C100,220 180,440 300,320 C380,240 420,380 480,340" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1.8" />
                  </svg>

                  {/* Explicit Owner Approval Label Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#802544]/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg">
                    <p className="font-sans text-white text-center tracking-wide text-xs">
                      Replace with academy photo approved by owner.
                    </p>
                  </div>
                </div>

                <div className="w-full pt-3 px-2 flex justify-between items-center text-[#802544] text-xs">
                  <span className="font-display italic font-semibold">Bespoke Salon Mentorship</span>
                  <span className="text-[#735b37] font-sans font-bold tracking-wider uppercase text-[10px]">Akola Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 3 BENEFIT CARDS */}
      <section className="w-full mb-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-sans text-[#9e3d5b] tracking-widest uppercase text-xs font-bold block mb-2">
            Our Mentorship Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#802544] mb-3">
            Foundations in Craft &amp; Artistry
          </h2>
          <p className="font-body text-[#544246] text-sm sm:text-base">
            A grounded learning space designed to nurture authentic technical precision and inclusive client care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Practice */}
          <div className="bg-white border border-[#dac0c4]/40 rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#ffd9e3]/50 flex items-center justify-center text-[#802544] mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl text-[#735b37]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  content_cut
                </span>
              </div>
              <h3 className="font-display text-2xl text-[#802544] font-semibold mb-3">
                Learn Through Practice
              </h3>
              <p className="font-body text-[#544246] text-sm leading-relaxed mb-6">
                Develop your practical technique through attentive demonstration, observing live salon workflows, and cultivating precision with everyday clients.
              </p>
            </div>
            <div className="pt-4 border-t border-[#dac0c4]/30 mt-auto">
              <div className="bg-[#f8f2ef] px-3.5 py-2 rounded-lg flex items-start gap-2 text-[#544246] text-xs leading-snug">
                <span className="material-symbols-outlined text-[#9e3d5b] text-sm shrink-0 mt-0.5">info</span>
                <span>Course structure, duration &amp; fees [Confirm with owner].</span>
              </div>
            </div>
          </div>

          {/* Card 2: Confidence */}
          <div className="bg-white border border-[#dac0c4]/40 rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#ffd9e3]/50 flex items-center justify-center text-[#802544] mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl text-[#735b37]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  auto_awesome
                </span>
              </div>
              <h3 className="font-display text-2xl text-[#802544] font-semibold mb-3">
                Build Creative Confidence
              </h3>
              <p className="font-body text-[#544246] text-sm leading-relaxed mb-6">
                Express your personal creative aesthetic in a supportive, welcoming, and inclusive salon setting where questions and learning are always encouraged.
              </p>
            </div>
            <div className="pt-4 border-t border-[#dac0c4]/30 mt-auto">
              <div className="bg-[#f8f2ef] px-3.5 py-2 rounded-lg flex items-start gap-2 text-[#544246] text-xs leading-snug">
                <span className="material-symbols-outlined text-[#9e3d5b] text-sm shrink-0 mt-0.5">info</span>
                <span>Certification &amp; batch availability [Confirm with owner].</span>
              </div>
            </div>
          </div>

          {/* Card 3: Enquire */}
          <div className="bg-white border border-[#dac0c4]/40 rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#ffd9e3]/50 flex items-center justify-center text-[#802544] mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-outlined text-2xl text-[#735b37]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  description
                </span>
              </div>
              <h3 className="font-display text-2xl text-[#802544] font-semibold mb-3">
                Enquire for Details
              </h3>
              <p className="font-body text-[#544246] text-sm leading-relaxed mb-6">
                Course structure, fees, batch schedules, and availability [Confirm with owner]. Connect directly with us to discuss your learning goals.
              </p>
            </div>
            <div className="pt-4 border-t border-[#dac0c4]/30 mt-auto">
              <div className="bg-[#f8f2ef] px-3.5 py-2 rounded-lg flex items-start gap-2 text-[#544246] text-xs leading-snug">
                <span className="material-symbols-outlined text-[#9e3d5b] text-sm shrink-0 mt-0.5">info</span>
                <span>All syllabus modules &amp; dates [Confirm with owner].</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WIDE PREMIUM ENQUIRY FORM CARD */}
      <section className="w-full mb-14" id="academy-enquiry">
        <div className="bg-white border border-[#dac0c4] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#ffd9e3]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="font-sans text-[#9e3d5b] tracking-widest uppercase text-xs font-bold block mb-2">
                Connect Directly
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#802544] mb-3">
                Begin Your Salon Learning Journey
              </h2>
              <p className="font-body text-[#544246] text-sm sm:text-base">
                Send us your enquiry or connect instantly on WhatsApp.
              </p>
            </div>

            {/* Prominent Notice Banner */}
            <div className="bg-[#ffd9e3]/50 rounded-2xl p-4 sm:p-5 mb-10 flex items-start sm:items-center gap-3.5 border border-[#dac0c4]/50">
              <span className="material-symbols-outlined text-[#802544] text-xl shrink-0 mt-0.5 sm:mt-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <p className="font-body text-[#802544] text-xs sm:text-sm font-medium leading-relaxed">
                <strong className="font-semibold">Important Note for Applicants:</strong> Course details, duration, fees, certification and batch availability [Confirm with owner]. All enquiries are handled personally by the salon team.
              </p>
            </div>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="acadFullName">
                      Full Name <span className="text-[#9e3d5b]">*</span>
                    </label>
                    <input
                      id="acadFullName"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#fef8f5] text-[#1d1b1a] text-sm rounded-xl px-4 py-3 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="acadPhoneNumber">
                      Phone Number <span className="text-[#9e3d5b]">*</span>
                    </label>
                    <input
                      id="acadPhoneNumber"
                      type="tel"
                      required
                      placeholder="e.g. 098765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full bg-[#fef8f5] text-[#1d1b1a] text-sm rounded-xl px-4 py-3 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="acadInterestArea">
                      Area of Interest
                    </label>
                    <div className="relative">
                      <select
                        id="acadInterestArea"
                        value={formData.interestArea}
                        onChange={(e) => setFormData({ ...formData, interestArea: e.target.value })}
                        className="w-full bg-[#fef8f5] text-[#1d1b1a] text-sm rounded-xl px-4 py-3 border border-[#dac0c4]/60 appearance-none focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all pr-10"
                      >
                        <option value="Haircutting & Styling Fundamentals">Haircutting &amp; Styling Fundamentals</option>
                        <option value="Hair Colour & Balayage Basics">Hair Colour &amp; Balayage Basics</option>
                        <option value="Complete Salon Artistry Mentorship">Complete Salon Artistry Mentorship</option>
                        <option value="General Academy Consultation [Confirm with owner]">General Academy Consultation [Confirm with owner]</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#544246] pointer-events-none text-lg">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="acadUserMessage">
                      Your Learning Goals or Questions
                    </label>
                    <textarea
                      id="acadUserMessage"
                      rows={3}
                      placeholder="Tell us about your learning background and questions..."
                      value={formData.userMessage}
                      onChange={(e) => setFormData({ ...formData, userMessage: e.target.value })}
                      className="w-full bg-[#fef8f5] text-[#1d1b1a] text-sm rounded-xl p-4 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm font-semibold min-h-[48px] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                      send
                    </span>
                    <span>Enquire About Academy</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Instant Reply Route */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#fef8f5] border border-[#dac0c4]/50 rounded-2xl p-6 sm:p-7">
                <div>
                  <div className="inline-flex items-center gap-2 text-[#735b37] font-sans text-xs uppercase tracking-wider mb-2 font-bold">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      bolt
                    </span>
                    <span>Instant Reply Route</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#802544] mb-3">
                    Prefer an immediate chat?
                  </h3>
                  <p className="font-body text-[#544246] text-xs sm:text-sm leading-relaxed mb-6">
                    Our founders and senior stylists respond personally to all learning and apprenticeship inquiries during studio hours.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-xs text-[#802544] font-medium">
                      <span className="material-symbols-outlined text-[#9e3d5b] text-base">check_circle</span>
                      <span>Direct conversation with salon team</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#802544] font-medium">
                      <span className="material-symbols-outlined text-[#9e3d5b] text-base">check_circle</span>
                      <span>Ask about batch schedules &amp; prerequisites</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#802544] font-medium">
                      <span className="material-symbols-outlined text-[#9e3d5b] text-base">check_circle</span>
                      <span>Warm, inclusive guidance for beginners</span>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href={buildWhatsAppLink("Hello Rich Hair Salon, I want to enquire about academy training.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all min-h-[48px] text-center font-semibold text-sm"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>Ask on WhatsApp</span>
                  </a>
                  <p className="font-body text-center text-[#544246]/70 text-[11px] mt-2">
                    Usually replies during active salon working hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DIRECT VISIT & CONTACT STRIP */}
      <section className="w-full mb-6">
        <div className="bg-[#f8f2ef] border border-[#dac0c4]/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Contact Meta Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 font-sans text-xs font-bold text-[#802544] uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm text-[#9e3d5b]">location_on</span>
                <span>Studio &amp; Academy Campus</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#802544]">
                Visit Our Akola Academy Studio
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#802544] shadow-xs border border-[#dac0c4]/40">
                    <span className="material-symbols-outlined text-lg">storefront</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#544246] font-bold mb-1">Academy Address</h4>
                    <p className="font-body text-[#802544] text-xs leading-snug">
                      {SALON_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#802544] shadow-xs border border-[#dac0c4]/40">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#544246] font-bold mb-1">Direct Call</h4>
                    <a className="font-body text-[#802544] hover:text-[#9e3d5b] font-semibold text-sm transition-colors block" href={`tel:${SALON_INFO.phoneRaw}`}>
                      {SALON_INFO.phone}
                    </a>
                    <p className="font-body text-[#544246] text-[11px] mt-0.5">Telephone bookings &amp; desk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#735b37] shadow-xs border border-[#dac0c4]/40">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#544246] font-bold mb-1">Client Trust</h4>
                    <p className="font-body text-[#802544] font-semibold text-xs">
                      4.7★ Rating <span className="font-normal text-[#544246]">(235 Google Reviews)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#802544] shadow-xs border border-[#dac0c4]/40">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-wider text-[#544246] font-bold mb-1">Academy Hours</h4>
                    <p className="font-body text-[#802544] text-xs font-medium">
                      [Confirm with owner]
                    </p>
                    <p className="font-body text-[#544246] text-[11px] mt-0.5">Prior appointment advised</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Location Map View Component */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm border border-[#dac0c4]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUy0f7c26ax5_CGcBrmsWbumkuvueuU6wMwJC0RAnv7mIusAF8fSQ0KLVZ76b-2MzfzgeNTqSmT3-rtgrxKC_dag9IIJktCOp6VEGLfgXyU50RQpm0AGD1Qinx7xujWvLPW9urANBUatGvKms3LLE28GhAzVZGNoYU55K2w5daaGC4i9Rmclz3gqw4N6QJ8vAsqb0pZmbPuGLGPx_ADd8qH88FX-7Tha0bzSXgtgaNIrzAlN35HNPaNw')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#802544]/70 via-transparent to-transparent flex items-end p-4">
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-xl text-[#802544] text-xs font-semibold shadow-sm flex items-center gap-2 hover:bg-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#9e3d5b] text-sm">near_me</span>
                    <span>Rich Hair Salon &amp; Academy • IT Square</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
