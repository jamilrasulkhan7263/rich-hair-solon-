import React, { useState } from 'react';
import { SALON_INFO, REVIEW_THEMES, buildWhatsAppLink } from '../data/salonData';

interface ReviewsContactScreenProps {
  initialFocus?: 'reviews' | 'contact';
}

export const ReviewsContactScreen: React.FC<ReviewsContactScreenProps> = ({ initialFocus = 'reviews' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'Haircuts & Styling (Women / Men)',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const textPayload = `Hello Rich Hair Salon,\n\nI submitted an appointment enquiry:\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Preferred Date: ${formData.date || 'Flexible'}\n• Note: ${formData.message || 'None'}`;

    setTimeout(() => {
      window.open(buildWhatsAppLink(textPayload), '_blank');
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: REVIEWS & COMMUNITY ACCREDITATION */}
      <section className="w-full py-12 md:py-16 bg-[#fef8f5] flex flex-col items-center border-b border-[#dac0c4]/30" id="reviews-section">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-12 flex flex-col items-center">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2edea] border border-[#dac0c4]/40 mb-4 shadow-2xs">
            <span className="text-[#9e3d5b] text-sm">✦</span>
            <span className="font-sans text-xs text-[#802544] uppercase tracking-widest font-bold">
              Google Reviews
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-display text-4xl sm:text-5xl text-[#802544] text-center tracking-tight mb-2">
            Trusted by Akola
          </h2>

          {/* Focal Rating Display */}
          <div className="flex flex-col items-center justify-center mt-2 mb-8 text-center">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[#802544] text-5xl md:text-6xl font-medium tracking-tight">
                4.7
              </span>
              <span className="font-display text-[#735b37] text-4xl md:text-5xl">★</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#735b37] text-2xl my-2">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="opacity-80">★</span>
            </div>

            <p className="font-body text-sm sm:text-base text-[#544246] max-w-lg mt-1">
              Based on <strong className="font-semibold text-[#802544]">235 verified Google Reviews</strong> • Authentic feedback from our community across Akola
            </p>
          </div>

          {/* Core Review Theme Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 mb-10">
            {REVIEW_THEMES.map((theme, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-[#dac0c4]/40"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ffd9e3]/50 flex items-center justify-center text-[#802544] mb-4 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{theme.icon}</span>
                  </div>
                  <h3 className="font-display text-xl text-[#802544] font-semibold mb-2">
                    {theme.title}
                  </h3>
                  <p className="font-body text-xs text-[#544246] leading-relaxed">
                    {theme.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#dac0c4]/30 flex items-center gap-1 text-[#594422] text-[11px] font-sans font-bold">
                  <span className="text-[#9e3d5b]">✦</span> Verified Client Highlight
                </div>
              </div>
            ))}
          </div>

          {/* Read Reviews Action */}
          <a
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-[#802544] font-sans text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#f2edea] transition-all duration-200 min-h-[48px] border border-[#dac0c4]/50 hover:shadow-sm"
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-lg text-[#9e3d5b]">open_in_new</span>
            <span>Read All 235 Reviews on Google Maps</span>
          </a>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL BOOKING HERO BANNER */}
      <section className="w-full bg-[#802544] text-white py-12 md:py-16 relative overflow-hidden">
        {/* Subtle Organic Wave Art */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
          <svg className="w-full h-full max-w-5xl" fill="none" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,150 C200,50 350,250 500,150 C650,50 800,250 1000,150" stroke="currentColor" strokeWidth="2" />
            <path d="M0,100 C300,200 450,20 700,180 C850,260 950,110 1000,120" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3 text-[#ffddb0] font-sans text-xs tracking-widest uppercase font-bold">
            <span>✦</span>
            <span>DIRECT ARTIST CONSULTATION</span>
            <span>✦</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-3">
            Your Next Look Is One Message Away.
          </h2>

          <p className="font-body text-sm sm:text-base text-[#ffd9e3] max-w-2xl mb-8 leading-relaxed">
            Book your appointment or speak directly with our Akola salon team. We provide thoughtful consultations for everyday cuts, custom colors, and special occasions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            {/* WhatsApp CTA */}
            <a
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#9e3d5b] text-white font-sans text-sm font-semibold shadow-md hover:bg-[#a84463] active:scale-95 transition-all min-h-[50px] whitespace-nowrap"
              href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>Book on WhatsApp</span>
            </a>

            {/* Call CTA */}
            <a
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white/10 text-white font-sans text-sm font-semibold hover:bg-white/20 active:scale-95 transition-all min-h-[50px] whitespace-nowrap border border-white/20"
              href={`tel:${SALON_INFO.phoneRaw}`}
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>Call {SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT & APPOINTMENT BOOKING DETAILS */}
      <section className="w-full py-12 md:py-16 bg-[#fef8f5]" id="contact-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2edea] mb-2 border border-[#dac0c4]/40">
              <span className="text-[#9e3d5b] text-xs">✦</span>
              <span className="font-sans text-xs text-[#802544] uppercase tracking-widest font-bold">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#802544] mb-2 font-normal">
              Visit Rich Hair
            </h2>
            <p className="font-body text-sm sm:text-base text-[#544246] max-w-xl">
              Located at IT Square, Gorakshan Road. Easy walk-in consultations, dedicated styling appointments, and professional academy admissions.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Location & Quick Access */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-[#dac0c4]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#802544] leading-tight">
                      {SALON_INFO.fullName}
                    </h3>
                    <span className="font-sans text-xs text-[#544246] block mt-1">
                      {SALON_INFO.hindiName}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ffd9e3]/60 text-[#802544] font-sans text-xs font-semibold whitespace-nowrap">
                    Women-Owned
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-4 my-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f8f2ef] flex items-center justify-center text-[#802544] shrink-0 border border-[#dac0c4]/30">
                      <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-[#802544]">Studio Location</h4>
                      <p className="font-body text-xs sm:text-sm text-[#544246] mt-0.5 leading-snug">
                        {SALON_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f8f2ef] flex items-center justify-center text-[#802544] shrink-0 border border-[#dac0c4]/30">
                      <span className="material-symbols-outlined text-xl">phone_iphone</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-[#802544]">Phone Inquiries</h4>
                      <a className="font-body text-sm text-[#9e3d5b] hover:underline font-semibold mt-0.5 block" href={`tel:${SALON_INFO.phoneRaw}`}>
                        {SALON_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f8f2ef] flex items-center justify-center text-[#802544] shrink-0 border border-[#dac0c4]/30">
                      <span className="material-symbols-outlined text-xl">schedule</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-[#802544]">Salon Hours</h4>
                      <p className="font-body text-xs sm:text-sm text-[#544246] mt-0.5">
                        {SALON_INFO.hoursNote}
                      </p>
                    </div>
                  </div>

                  {/* Recognition */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f8f2ef] flex items-center justify-center text-[#735b37] shrink-0 border border-[#dac0c4]/30">
                      <span className="material-symbols-outlined text-xl">stars</span>
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-[#802544]">Client Recognition</h4>
                      <p className="font-body text-xs sm:text-sm text-[#544246] mt-0.5">
                        4.7★ Google Rating across 235 reviews • LGBTQ+ Friendly
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Cluster */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f8f2ef] text-[#802544] font-sans text-xs font-semibold hover:bg-[#ffd9e3]/40 text-center min-h-[44px] transition-colors border border-[#dac0c4]/40"
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-base">directions</span>
                    <span>Directions</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#f8f2ef] text-[#802544] font-sans text-xs font-semibold hover:bg-[#ffd9e3]/40 text-center min-h-[44px] transition-colors border border-[#dac0c4]/40"
                    href={`tel:${SALON_INFO.phoneRaw}`}
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    <span>Call Now</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#9e3d5b] text-white font-sans text-xs font-semibold hover:bg-[#802544] text-center min-h-[44px] transition-all shadow-xs"
                    href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Map Container */}
              <div className="mt-4">
                <div className="w-full h-52 bg-[#f8f2ef] rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-[#dac0c4]/50 group relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#9e3d5b] mb-2 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">pin_drop</span>
                  </div>
                  <h5 className="font-display text-lg text-[#802544] font-semibold mb-1">
                    IT Square, Gorakshan Road
                  </h5>
                  <p className="font-body text-xs text-[#544246] max-w-xs mb-3">
                    Near Kirti Nagar, Akola, Maharashtra 444004
                  </p>
                  <a
                    className="inline-flex items-center gap-1.5 text-[#9e3d5b] font-sans text-xs font-bold hover:underline"
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Open in Google Maps App</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Quick Enquiry Form Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-[#dac0c4]/40 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#802544]">
                  Send a Quick Enquiry
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#544246] mt-1 mb-6">
                  Have a question regarding hair therapies, bridal packages, or academy batches? Drop a message for prompt assistance.
                </p>

                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="fullName">
                      Full Name <span className="text-[#9e3d5b]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fef8f5] text-[#1d1b1a] font-body text-sm border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all min-h-[46px]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="phone">
                      Phone Number <span className="text-[#9e3d5b]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 098765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fef8f5] text-[#1d1b1a] font-body text-sm border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all min-h-[46px]"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="service">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#fef8f5] text-[#1d1b1a] font-body text-sm border border-[#dac0c4]/60 appearance-none focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all min-h-[46px] pr-10"
                      >
                        <option value="Haircuts & Styling (Women / Men)">Haircuts &amp; Styling (Women / Men)</option>
                        <option value="Hair Colour, Balayage & Highlights">Hair Colour, Balayage &amp; Highlights</option>
                        <option value="Hair Spa & Keratin / Smoothening">Hair Spa &amp; Keratin / Smoothening</option>
                        <option value="Beard Grooming [Confirm with owner]">Beard Grooming [Confirm with owner]</option>
                        <option value="Bridal & Party Styling [Confirm with owner]">Bridal &amp; Party Styling [Confirm with owner]</option>
                        <option value="Makeup & Occasion [Confirm with owner]">Makeup &amp; Occasion [Confirm with owner]</option>
                        <option value="Academy Training Enquiries [Confirm with owner]">Academy Training Enquiries [Confirm with owner]</option>
                        <option value="General Inquiry / Other">General Inquiry / Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#544246] pointer-events-none text-xl">
                        keyboard_arrow_down
                      </span>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="date">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fef8f5] text-[#1d1b1a] font-body text-sm border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all min-h-[46px]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-[#802544] mb-1.5" htmlFor="message">
                      Specific Requests or Hair Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Share details about your desired style, hair length, or event timing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fef8f5] text-[#1d1b1a] font-body text-sm border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans text-sm font-semibold shadow-md active:scale-98 transition-all min-h-[48px] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">send</span>
                    <span>Send Appointment Enquiry</span>
                  </button>
                </form>

                {submitted && (
                  <div className="p-4 mt-4 rounded-xl bg-[#ffd9e3]/60 text-[#802544] font-body text-xs text-center border border-[#dac0c4]">
                    Thank you! Your request has been recorded. Redirecting to WhatsApp for immediate slot confirmation...
                  </div>
                )}
              </div>

              {/* Developer Implementation Note */}
              <div className="mt-6 pt-3 border-t border-[#dac0c4]/30">
                <p className="font-body text-[11px] text-[#544246]/70 italic flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs not-italic text-[#9e3d5b]">info</span>
                  <span>Direct WhatsApp dispatch enabled for instant confirmation with salon artists.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
