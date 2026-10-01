import React from 'react';
import { buildWhatsAppLink } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="group relative inline-flex items-center gap-2.5 bg-[#9e3d5b] text-white px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_8px_24px_-4px_rgba(84,38,56,0.35)] hover:bg-[#802544] hover:scale-105 active:scale-95 transition-all duration-300 min-h-[48px] border border-white/20"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="hidden sm:inline-block font-sans text-xs font-semibold tracking-wide pr-1">
          Book on WhatsApp
        </span>
      </a>
    </aside>
  );
};
