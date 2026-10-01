import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem, buildWhatsAppLink } from '../data/salonData';

export const ServicesScreen: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="flex flex-col w-full py-8 lg:py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* PAGE HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-[#802544] bg-[#ffd9e3]/60 border border-[#dac0c4] px-4 py-1.5 rounded-full mb-4 shadow-2xs">
          <span className="text-[#9e3d5b]">✦</span>
          <span>Our Services</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] text-[#802544] font-normal leading-tight mb-4">
          Made for <em className="italic text-[#9e3d5b] font-normal">Your Moment</em>
        </h1>

        <p className="font-body text-base lg:text-lg text-[#544246] leading-relaxed mb-6">
          Explore styling and grooming experiences designed around your personal look. Dedicated to premium care, high-hygiene standards, and inclusive artistry in Akola.
        </p>

        {/* Trust Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 bg-[#f1d8d8]/50 border border-[#dac0c4]/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#802544] shadow-xs">
            <span className="text-[#735b37]">★</span>
            <span>4.7 Google Rated (235 Reviews)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#f1d8d8]/50 border border-[#dac0c4]/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#802544] shadow-xs">
            <span>Women-Owned &amp; LGBTQ+ Friendly</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#f1d8d8]/50 border border-[#dac0c4]/60 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#802544] shadow-xs">
            <span>Unisex Hair Salon &amp; Academy</span>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
        {SERVICES_LIST.slice(0, 6).map((service) => (
          <article
            key={service.id}
            className="bg-white border border-[#f1d8d8] rounded-2xl p-7 flex flex-col justify-between shadow-[0_10px_30px_-8px_rgba(84,38,56,0.07)] hover:shadow-[0_18px_36px_-8px_rgba(158,61,91,0.14)] hover:-translate-y-1.5 hover:border-[#dac0c4] transition-all duration-300 group"
          >
            <div>
              {/* Card Top */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-13 h-13 rounded-xl bg-[#fef8f5] border border-[#f1d8d8] flex items-center justify-center text-[#9e3d5b] group-hover:bg-[#ffd9e3]/60 group-hover:text-[#802544] group-hover:scale-105 transition-all">
                  <span className="material-symbols-outlined text-[26px]">
                    {service.iconName}
                  </span>
                </div>
                {service.confirmWithOwner && (
                  <span className="text-[11px] font-sans font-semibold text-[#9e3d5b] bg-[#f1d8d8]/60 border border-dashed border-[#9e3d5b]/40 px-2 py-0.5 rounded-md">
                    [Confirm with owner]
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h2 className="font-display text-2xl font-semibold text-[#802544] leading-snug mb-3">
                {service.title}
              </h2>

              <p className="font-body text-sm text-[#544246] leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Card Footer */}
            <div className="border-t border-[#f1d8d8]/80 pt-5 flex flex-col gap-3">
              <p className="font-body text-xs text-[#544246]/80 italic flex items-center gap-1.5">
                <span className="text-[#735b37] not-italic text-[10px]">✦</span>
                <span>Service packages and availability available on enquiry.</span>
              </p>

              <div className="flex gap-2">
                <a
                  href={buildWhatsAppLink(`Hello Rich Hair Salon, I want to enquire about ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border-1.5 border-[#9e3d5b] text-[#9e3d5b] hover:bg-[#9e3d5b] hover:text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-md"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
                <button
                  onClick={() => setSelectedService(service)}
                  title="View service details"
                  aria-label={`View details for ${service.title}`}
                  className="w-10 h-10 rounded-full border border-[#dac0c4] hover:border-[#802544] text-[#802544] hover:bg-[#ffd9e3]/40 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <span className="material-symbols-outlined text-base">info</span>
                </button>
              </div>
            </div>
          </article>
        ))}

        {/* 7th Card: Academy Training Enquiries (Featured Full Width on Desktop) */}
        {SERVICES_LIST.slice(6, 7).map((service) => (
          <article
            key={service.id}
            className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-white to-[#fff4f2] border-1.5 border-[#dac0c4] rounded-2xl p-7 lg:p-9 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#ffd9e3]/60 border border-[#dac0c4] flex items-center justify-center text-[#802544] shrink-0">
                <span className="material-symbols-outlined text-[30px]">
                  {service.iconName}
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h2 className="font-display text-2xl lg:text-3xl font-semibold text-[#802544]">
                    {service.title}
                  </h2>
                  <span className="text-[11px] font-sans font-semibold text-[#9e3d5b] bg-[#f1d8d8]/60 border border-dashed border-[#9e3d5b]/40 px-2 py-0.5 rounded-md">
                    [Confirm with owner]
                  </span>
                </div>
                <p className="font-body text-sm text-[#544246] max-w-3xl leading-relaxed mb-2">
                  {service.description}
                </p>
                <p className="font-body text-xs text-[#544246]/80 italic flex items-center gap-1.5">
                  <span className="text-[#735b37] not-italic text-[10px]">✦</span>
                  <span>Course details, structure, duration, and batch availability available on enquiry.</span>
                </p>
              </div>
            </div>

            <div className="shrink-0 flex sm:flex-col gap-2">
              <a
                href={buildWhatsAppLink("Hello Rich Hair Salon, I want to enquire about academy training courses.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-md whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Ask on WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedService(service)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 py-2 px-4 rounded-full border border-[#dac0c4] hover:bg-[#ffd9e3]/30 text-[#802544] font-sans text-xs font-semibold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">visibility</span>
                <span>Syllabus Overview</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* WIDE GUIDANCE BOOKING CARD */}
      <section className="relative w-full bg-[#f1d8d8] border-1.5 border-[#dac0c4] rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/40 blur-2xl pointer-events-none" />

        <div className="max-w-2xl relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-widest uppercase text-[#9e3d5b] mb-3">
            <span>✦</span>
            <span>Personalised Consultation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-[#802544] font-semibold leading-tight mb-3">
            Not Sure What to Choose?
          </h2>

          <p className="font-body text-base text-[#544246] leading-relaxed">
            Tell us your hair goal and get personalised guidance. Our friendly team in Akola will listen to your requirements, suggest the right hair service or transformation package, and assist with immediate slot booking.
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full sm:w-auto text-center">
          <a
            href={buildWhatsAppLink("Hello Rich Hair Salon, I am not sure what service to choose and would love some guidance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 min-h-[48px]"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Message Us on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#dac0c4] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-[#877276] hover:text-[#802544] p-1 rounded-full hover:bg-[#f8f2ef]"
              aria-label="Close details"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffd9e3] text-[#802544] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">{selectedService.iconName}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#802544]">
                  {selectedService.title}
                </h3>
                {selectedService.confirmWithOwner && (
                  <span className="text-[11px] font-sans font-semibold text-[#9e3d5b]">
                    [Confirm with owner for packages &amp; slots]
                  </span>
                )}
              </div>
            </div>

            <p className="font-body text-sm text-[#544246] leading-relaxed mb-5">
              {selectedService.description}
            </p>

            {selectedService.highlights && (
              <div className="mb-6 bg-[#fef8f5] border border-[#f1d8d8] rounded-xl p-4">
                <h4 className="font-sans text-xs uppercase tracking-wider text-[#802544] font-bold mb-2">
                  Treatment Highlights:
                </h4>
                <ul className="space-y-1.5">
                  {selectedService.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#544246]">
                      <span className="text-[#9e3d5b]">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <a
                href={buildWhatsAppLink(`Hello Rich Hair Salon, I want to book an appointment for: ${selectedService.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 bg-[#9e3d5b] text-white rounded-full font-sans text-xs font-semibold hover:bg-[#802544] transition-colors shadow-sm"
              >
                Book on WhatsApp
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-3 rounded-full border border-[#dac0c4] text-[#544246] hover:bg-[#f8f2ef] font-sans text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
