import React, { useState } from 'react';
import { TRANSFORMATIONS_LIST, TransformationItem, SALON_INFO, buildWhatsAppLink } from '../data/salonData';

export const TransformationsScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalImage, setModalImage] = useState<TransformationItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Work', count: 6 },
    { id: 'colour', label: 'Hair Colour' },
    { id: 'haircuts', label: 'Haircuts' },
    { id: 'styling', label: 'Styling' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'bridal', label: 'Bridal', verify: true },
    { id: 'academy', label: 'Academy', verify: true },
  ];

  const filteredItems = activeCategory === 'all'
    ? TRANSFORMATIONS_LIST
    : TRANSFORMATIONS_LIST.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full py-8 lg:py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Subtle Ambient Glow */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-[#ffd9e3]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Editorial Intro & Meta Bar */}
        <section className="relative z-10 w-full pt-2 pb-8 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f2edea] border border-[#dac0c4]/60 shadow-2xs mb-4">
            <span className="text-[#594422] font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
              <span className="text-[#802544]">✦</span>
              <span>Our Transformations</span>
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] text-[#802544] font-normal leading-tight mb-4">
            Every Look Has a <em className="italic text-[#9e3d5b] font-normal">Story</em>
          </h1>

          <p className="font-body text-base lg:text-lg text-[#544246] max-w-2xl mb-6 leading-relaxed">
            Explore a curated selection of styling, radiant colour, and precision grooming inspiration crafted in Akola. Each design reflects personal texture, vitality, and effortless elegance.
          </p>

          {/* Trust Meta Ribbon */}
          <div className="w-full flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f2ef] text-[#802544] font-sans shadow-xs border border-[#dac0c4]/40">
              <span className="text-[#735b37] font-bold">★ 4.7</span>
              <span className="text-[#544246] font-medium">Google Rated (235 Reviews)</span>
            </div>
            <span className="text-[#dac0c4] hidden sm:inline">•</span>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f8f2ef] text-[#802544] font-sans shadow-xs border border-[#dac0c4]/40">
              <span className="material-symbols-outlined text-base text-[#9e3d5b]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <span className="text-[#544246] font-medium">Women-Owned &amp; LGBTQ+ Friendly</span>
            </div>
            <span className="text-[#dac0c4] hidden sm:inline">•</span>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f8f2ef] text-[#802544] font-sans shadow-xs border border-[#dac0c4]/40">
              <span className="material-symbols-outlined text-base text-[#594422]">location_on</span>
              <span className="text-[#544246] font-medium">IT Square, Akola</span>
            </div>
          </div>
        </section>

        {/* Interactive Category Filter Chips */}
        <section className="relative z-10 w-full mb-10">
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-2 justify-start md:justify-center no-scrollbar"
            role="tablist"
            aria-label="Transformation categories"
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`shrink-0 min-h-[44px] px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#9e3d5b] text-white shadow-md'
                      : 'bg-white text-[#802544] hover:bg-[#f2edea] shadow-xs border border-[#dac0c4]/40'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-[#f2edea]'}`}>
                      {tab.count}
                    </span>
                  )}
                  {tab.verify && (
                    <span className="text-[10px] text-[#544246] bg-[#ede7e4] px-1.5 py-0.5 rounded">
                      Verify
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Luxury 3-Column Card Mosaic */}
        <section className="w-full mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 border border-[#dac0c4]/40"
              >
                {/* Image Frame with Placeholder Tag */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f8f2ef]">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    onClick={() => setModalImage(item)}
                    referrerPolicy="no-referrer"
                  />

                  {/* Verification Callout Badge */}
                  <div className="absolute top-4 left-4 right-4 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 text-[11px] leading-tight font-sans tracking-wider uppercase bg-white/90 backdrop-blur-md text-[#802544] px-3 py-1.5 rounded-full shadow-xs font-semibold">
                      <span className="text-[#594422]">✦</span>
                      <span>Replace with owner-approved Rich Hair Salon photo</span>
                    </span>
                  </div>

                  {/* Category Indicator Tag */}
                  <div className="absolute top-14 left-4 z-10 flex gap-1.5 pointer-events-none">
                    <span className="inline-block bg-[#802544] text-white text-[10px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 rounded-md shadow-xs">
                      {item.categoryLabel}
                    </span>
                    {item.verifyBadge && (
                      <span className="inline-block bg-[#ede7e4] text-[#802544] text-[10px] font-sans font-semibold px-2 py-1 rounded-md shadow-xs">
                        Confirm Details
                      </span>
                    )}
                  </div>

                  {/* Soft Gradient Bottom Scrim for Title Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#802544]/90 via-[#802544]/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity pointer-events-none" />

                  {/* Bottom Information Pill */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[#ffddb0] font-sans text-xs font-bold">
                        {item.tag}
                      </span>
                    </div>

                    <p className="font-body text-xs text-white/85 line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    <a
                      href={buildWhatsAppLink(item.enquiryMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-xs text-white font-sans text-xs font-semibold transition-colors min-h-[44px]"
                      aria-label={`Enquire about ${item.title} on WhatsApp`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#ffddb0]">chat</span>
                        <span>Enquire About This Look</span>
                      </span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Consultation Callout Panel */}
        <section className="w-full mb-12">
          <div className="relative bg-[#f2edea] border border-[#dac0c4] rounded-3xl p-8 md:p-12 overflow-hidden shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#ffd9e3]/40 blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-[#9e3d5b] text-xs font-sans font-bold tracking-wider uppercase mb-3">
                <span>✦ Bespoke Hair Consult</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#802544] font-semibold mb-3">
                Have a look in mind?
              </h2>
              <p className="font-body text-sm sm:text-base text-[#544246] leading-relaxed">
                Share your inspiration photo directly with our team. We'll consult with you on hair texture, scalp health, color feasibility, and realistic maintenance before booking your dedicated slot.
              </p>
            </div>

            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <a
                href={buildWhatsAppLink("Hello Rich Hair Salon, I have an inspiration photo for a hairstyle.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg min-h-[48px]"
              >
                <span className="material-symbols-outlined text-xl">send</span>
                <span>WhatsApp Your Style Idea</span>
              </a>
            </div>
          </div>
        </section>

        {/* Inclusivity & Studio Reassurance Strip */}
        <section className="w-full pb-4">
          <div className="bg-[#f8f2ef] border border-[#dac0c4]/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#dac0c4]/40 flex items-center justify-center text-[#9e3d5b] shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-[#802544]">
                  Welcoming, Safe &amp; Clean Salon Atmosphere
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#544246]">
                  Proudly women-owned and LGBTQ+ friendly. IT Square, Gorakshan Road, Kirti Nagar, Akola.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#802544] hover:bg-[#f2edea] font-sans text-xs font-semibold transition-colors min-h-[44px] shadow-xs border border-[#dac0c4]/40"
              >
                <span className="material-symbols-outlined text-sm text-[#594422]">call</span>
                <span>{SALON_INFO.phone}</span>
              </a>
              <a
                href={buildWhatsAppLink("Hello Rich Hair Salon, I would like to book a consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9e3d5b] text-white hover:bg-[#802544] font-sans text-xs font-semibold transition-colors min-h-[44px] shadow-xs"
              >
                <span>Book Visit</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#1d1b1a] flex items-center justify-center shadow-md cursor-pointer"
              aria-label="Close image modal"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <div className="relative aspect-[4/5] w-full bg-[#f8f2ef]">
              <img
                src={modalImage.imageUrl}
                alt={modalImage.altText}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display text-2xl font-semibold text-[#802544]">
                  {modalImage.title}
                </h3>
                <span className="font-sans text-xs font-bold text-[#9e3d5b]">
                  {modalImage.tag}
                </span>
              </div>
              <p className="font-body text-xs text-[#544246] mb-4">
                {modalImage.description}
              </p>
              <a
                href={buildWhatsAppLink(modalImage.enquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#9e3d5b] text-white hover:bg-[#802544] font-sans text-xs font-semibold transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Enquire About This Transformation on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
