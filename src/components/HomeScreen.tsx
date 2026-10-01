import React from 'react';
import { SALON_INFO, buildWhatsAppLink } from '../data/salonData';
import { NavTab } from './Header';

interface HomeScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-12 py-10 lg:py-16 bg-[#fef8f5]">
        {/* Ambient Fluid Rose & Champagne Glow Background Elements */}
        <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-[#ffd9e3]/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 -left-24 w-[420px] h-[420px] bg-[#ffddb0]/30 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT EDITORIAL COLUMN (7 Cols Desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Eyebrow & Devanagari Pill Container */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#feb9cf]/60 text-[#802544] font-sans text-xs tracking-widest uppercase font-semibold">
                <span className="text-[#735b37] text-[11px]">✦</span>
                <span>YOUR STYLE, YOUR STORY</span>
                <span className="text-[#735b37] text-[11px]">✦</span>
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ede7e4] text-[#544246] font-sans text-xs font-semibold">
                {SALON_INFO.hindiName} • Akola
              </span>
            </div>

            {/* Main Display Editorial Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-[#802544] leading-[1.12] mb-4 tracking-tight">
              Feel Beautiful.<br />
              <span className="italic font-display text-[#9e3d5b] font-light">Look Unforgettable.</span>
            </h1>

            {/* Constrained Editorial Body Copy */}
            <p className="font-body text-base lg:text-lg text-[#544246] max-w-[62ch] mb-6 leading-relaxed">
              Premium hair artistry, specialized unisex grooming, and transformative styling tailored to your natural distinction. Experience bespoke consultations, custom coloring ceremonies, and an uplifting atmosphere in the vibrant heart of Akola.
            </p>

            {/* Social Proof Pill Chips */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffd9e3]/60 text-[#802544] font-sans text-xs font-semibold shadow-xs">
                <span className="material-symbols-outlined text-[17px] text-[#735b37]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-bold text-[#802544]">4.7★</span>
                <span className="text-[#544246] font-normal">Google Rated</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ede7e4] text-[#544246] font-sans text-xs shadow-xs">
                <span className="material-symbols-outlined text-[17px] text-[#802544]">verified</span>
                <span className="font-bold text-[#802544]">235</span>
                <span>Customer Reviews</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffddb0]/40 text-[#594422] font-sans text-xs uppercase tracking-wider font-semibold">
                <span>Govt. Certified Academy</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <a
                href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] px-8 rounded-full bg-[#9e3d5b] text-white font-sans text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-[0_4px_16px_-4px_rgba(84,38,56,0.24)] hover:bg-[#802544] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Book on WhatsApp</span>
              </a>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] px-7 rounded-full bg-white text-[#802544] font-sans text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-xs hover:bg-[#ffd9e3]/30 transition-all duration-300 border border-[#dac0c4]/40"
              >
                <span className="material-symbols-outlined text-[20px] text-[#594422]">location_on</span>
                <span>Find Us in Akola</span>
              </a>
            </div>

            {/* Verified Salon Geo Address Metadata */}
            <div className="flex items-center gap-2 text-[#544246] font-body text-xs sm:text-sm">
              <span className="material-symbols-outlined text-[17px] text-[#594422] shrink-0">pin_drop</span>
              <span className="tracking-wide">{SALON_INFO.address}</span>
            </div>
          </div>

          {/* RIGHT VISUAL COLUMN (5 Cols Desktop) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Decorative Ambient Hair-Wave Background Motif */}
            <div className="absolute -top-10 -right-8 w-72 h-72 text-[#ffddb0] opacity-60 pointer-events-none -z-10">
              <svg className="w-full h-full stroke-current" fill="none" strokeWidth="1.2" viewBox="0 0 200 200">
                <path d="M 20,40 C 70,10 110,80 180,30" strokeLinecap="round" />
                <path d="M 10,70 C 60,40 100,110 170,60" strokeLinecap="round" />
                <path d="M 30,100 C 80,70 120,140 190,90" strokeLinecap="round" />
                <path d="M 15,130 C 65,100 105,170 175,120" strokeLinecap="round" />
                <circle cx="160" cy="40" fill="currentColor" r="2.5" />
                <circle cx="180" cy="110" fill="currentColor" r="1.5" />
              </svg>
            </div>

            {/* Arch Visual Wrapper with Blush Surround */}
            <div className="relative w-full max-w-[420px] bg-[#ffd9e3]/40 p-3 sm:p-4 rounded-t-[14rem] rounded-b-[2.5rem] shadow-[0_8px_32px_-8px_rgba(84,38,56,0.12)]">
              {/* Inner Arch Silhouette Card Container */}
              <div className="relative w-full aspect-[4/5] rounded-t-[13rem] rounded-b-[2rem] overflow-hidden bg-[#f2edea] flex flex-col justify-between shadow-inner">
                {/* Real High-Fidelity Salon Placeholder Image from Prompt */}
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="Editorial photograph of an elegant high-end hair salon in Akola with warm cream lighting, blush velvet armchairs, arched champagne-framed mirrors, subtle rose-berry floral arrangements, and a professional hair stylist sculpting lustrous hair in a peaceful, upscale atmosphere."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApXrIBg_eEQvx253gcgCxRXG2Mxet9JPlR47Pop2wzyTHdc7pm56m6P-ZtT_yT2wywUHnrPYpDs5uKGCpl-mpF5E8kl_zFmzTlGMFxc7kPersB1PZVNGD8vv3kdfDd79SRFw4bw6aZIG7NnudaxJh4woepldTsCk0a_cOkW7ZakU2NoDzCph0q2O_L7bSyokSphRB9VPLrhfokGjeFFf3rRjNw-a8G2auTmKpexcKl-ncF9ZIQHQi_3w"
                  referrerPolicy="no-referrer"
                />

                {/* Soft Editorial Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#802544]/85 via-[#802544]/20 to-transparent pointer-events-none" />

                {/* Sparkling Corner Embellishment */}
                <div className="relative z-10 self-end p-5 flex items-center gap-1 text-[#ffddb0]">
                  <span className="text-xs">✦</span>
                  <span className="text-base">✦</span>
                  <span className="text-xs">✦</span>
                </div>

                {/* Inner Visual Watermark / Instruction Text */}
                <div className="relative z-10 p-6 flex flex-col items-start text-white">
                  <span className="font-sans text-xs uppercase tracking-widest text-[#ffd9e3] mb-1 font-semibold">
                    Couture Styling &amp; Education
                  </span>
                  <p className="font-display text-2xl leading-snug drop-shadow-sm font-medium">
                    Mastery in Every Strand
                  </p>
                  <p className="font-body text-xs text-[#ede7e4]/95 mt-1 italic">
                    Akola Flagship Studio
                  </p>
                </div>
              </div>

              {/* Overlapping Bottom-Left Trust Badge Card */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 max-w-[280px] bg-white p-4 rounded-xl shadow-[0_8px_24px_-4px_rgba(84,38,56,0.15)] flex items-center gap-3 border border-[#dac0c4]/40">
                <div className="w-12 h-12 rounded-full bg-[#ffd9e3]/70 shrink-0 flex items-center justify-center text-[#802544]">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-display text-xl text-[#802544] font-semibold leading-none">4.7</span>
                    <span className="material-symbols-outlined text-[16px] text-[#735b37]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-sans text-xs text-[#544246] font-bold ml-0.5">(235+)</span>
                  </div>
                  <p className="font-sans text-xs text-[#802544] font-semibold truncate mt-0.5">
                    Akola's Trusted Salon
                  </p>
                  <span className="font-body text-[11px] text-[#544246] truncate">
                    Gorakshan Rd, Kirti Nagar
                  </span>
                </div>
              </div>

              {/* Floating Academy Stamp */}
              <button
                onClick={() => onNavigate('academy')}
                className="absolute -top-3 -left-3 sm:-left-4 bg-[#ffddb0] text-[#281800] px-3.5 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="text-[#9e3d5b]">●</span>
                <span>Admissions Open</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SLIM TRUST & VALUE STRIP */}
      <section className="w-full bg-[#ffd9e3]/35 py-6 px-4 sm:px-6 lg:px-12 border-y border-[#dac0c4]/30">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 items-center">
            {/* Pillar 1: Women-Owned */}
            <div className="flex items-center gap-3 p-2 rounded-lg transition-transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#802544] shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[20px]">spa</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm md:text-base text-[#802544] leading-tight font-semibold">Women-Owned</span>
                <span className="font-body text-xs text-[#544246]">Proudly led &amp; curated</span>
              </div>
            </div>

            {/* Pillar 2: LGBTQ+ Friendly */}
            <div className="flex items-center gap-3 p-2 rounded-lg transition-transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#802544] shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[20px]">diversity_1</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm md:text-base text-[#802544] leading-tight font-semibold">LGBTQ+ Friendly</span>
                <span className="font-body text-xs text-[#544246]">Safe &amp; inclusive sanctuary</span>
              </div>
            </div>

            {/* Pillar 3: 4.7 Google Rating */}
            <div className="flex items-center gap-3 p-2 rounded-lg transition-transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#735b37] shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm md:text-base text-[#802544] leading-tight font-semibold">4.7★ Rated</span>
                <span className="font-body text-xs text-[#544246]">Authentic Google feedback</span>
              </div>
            </div>

            {/* Pillar 4: 235 Reviews */}
            <div className="flex items-center gap-3 p-2 rounded-lg transition-transform hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9e3d5b] shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm md:text-base text-[#802544] leading-tight font-semibold">235+ Reviews</span>
                <span className="font-body text-xs text-[#544246]">Delighted Akola clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK APPOINTMENT CALLOUT STRIP */}
      <section className="w-full bg-[#fef8f5] py-12 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-5xl mx-auto bg-[#f8f2ef] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_16px_-4px_rgba(84,38,56,0.06)] border border-[#dac0c4]/40">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#9e3d5b]/10 flex items-center justify-center text-[#802544] shrink-0">
              <span className="material-symbols-outlined text-[28px]">schedule</span>
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl text-[#802544] font-semibold mb-1">
                Prefer Instant Scheduling?
              </h2>
              <p className="font-body text-sm text-[#544246]">
                Direct appointment confirmations available daily with our Master Stylists from 9:30 AM – 9:00 PM.
              </p>
            </div>
          </div>
          <a
            className="min-h-[44px] min-w-[200px] whitespace-nowrap px-6 rounded-lg bg-[#802544] text-white font-sans text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#9e3d5b] transition-colors shadow-xs"
            href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Chat with Stylist</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* FEATURED DISCOVERY TILES (Services & Academy Gateway) */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-white border-t border-[#dac0c4]/30">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-[#9e3d5b] font-bold block mb-1">
                ✦ Studio Highlights
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#802544]">
                Everything for Your Hair &amp; Style
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="font-sans text-xs font-semibold px-4 py-2 rounded-lg bg-[#f8f2ef] hover:bg-[#ffd9e3] text-[#802544] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View All Services</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigate('transformations')}
                className="font-sans text-xs font-semibold px-4 py-2 rounded-lg bg-[#f8f2ef] hover:bg-[#ffd9e3] text-[#802544] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Transformation Gallery</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div
              onClick={() => onNavigate('services')}
              className="group bg-[#fef8f5] border border-[#dac0c4]/40 hover:border-[#802544] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xs cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffd9e3]/60 flex items-center justify-center text-[#802544] mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">content_cut</span>
                </div>
                <h3 className="font-display text-xl text-[#802544] font-semibold mb-2">
                  Signature Haircuts &amp; Colour
                </h3>
                <p className="font-body text-xs text-[#544246] leading-relaxed mb-4">
                  Bespoke haircuts, soft dimensional balayage, honey caramel highlights, and healthy gloss toners tailored to your facial structure.
                </p>
              </div>
              <span className="font-sans text-xs text-[#9e3d5b] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore Hair Menu &rarr;
              </span>
            </div>

            {/* Feature 2 */}
            <div
              onClick={() => onNavigate('transformations')}
              className="group bg-[#fef8f5] border border-[#dac0c4]/40 hover:border-[#802544] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xs cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffd9e3]/60 flex items-center justify-center text-[#802544] mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                </div>
                <h3 className="font-display text-xl text-[#802544] font-semibold mb-2">
                  Every Look Has a Story
                </h3>
                <p className="font-body text-xs text-[#544246] leading-relaxed mb-4">
                  Browse our real client transformations from Akola — precision layered cuts, Hollywood blowouts, and royal Indian bridal hair inspiration.
                </p>
              </div>
              <span className="font-sans text-xs text-[#9e3d5b] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Browse Visual Gallery &rarr;
              </span>
            </div>

            {/* Feature 3 */}
            <div
              onClick={() => onNavigate('academy')}
              className="group bg-[#fef8f5] border border-[#dac0c4]/40 hover:border-[#802544] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xs cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffd9e3]/60 flex items-center justify-center text-[#802544] mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <h3 className="font-display text-xl text-[#802544] font-semibold mb-2">
                  Certified Salon Academy
                </h3>
                <p className="font-body text-xs text-[#544246] leading-relaxed mb-4">
                  Professional hands-on mentorship at our Akola studio for aspiring stylists. Learn modern technique, sectioning mastery, and salon artistry.
                </p>
              </div>
              <span className="font-sans text-xs text-[#9e3d5b] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Enquire for Batches &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
