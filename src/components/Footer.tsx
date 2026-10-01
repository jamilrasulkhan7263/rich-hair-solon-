import React from 'react';
import { SALON_INFO, buildWhatsAppLink } from '../data/salonData';
import { NavTab } from './Header';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#542638] text-[#fef8f5] pt-16 pb-12 border-t border-[#d6b78c]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#d6b78c]/20">
          {/* Brand info */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left cursor-pointer focus:outline-none"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wider uppercase text-[#fef8f5] mb-1">
                RICH HAIR
              </h3>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#ffd9e0] block mb-2 font-semibold">
                SALON &amp; ACADEMY • AKOLA
              </span>
            </button>

            <span className="font-sans text-xs text-[#d6b78c] block mb-3 font-medium">
              {SALON_INFO.hindiName}
            </span>

            <p className="font-body text-xs sm:text-sm text-[#fef8f5]/75 max-w-sm mb-6 leading-relaxed">
              Professional hair, grooming, and styling in Akola. A women-owned, LGBTQ+ inclusive salon dedicated to comfortable, elevated beauty experiences and real-world academy mentorship.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] font-sans font-semibold text-[#ffd9e3] border border-[#ffd9e3]/30 px-3 py-1 rounded-full">
                Women-Owned
              </span>
              <span className="text-[11px] font-sans font-semibold text-[#ffd9e3] border border-[#ffd9e3]/30 px-3 py-1 rounded-full">
                LGBTQ+ Friendly
              </span>
              <span className="text-[11px] font-sans font-semibold text-[#ffd9e3] border border-[#ffd9e3]/30 px-3 py-1 rounded-full">
                4.7★ Google Rated
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-display text-lg sm:text-xl text-[#d6b78c] mb-4 font-semibold tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#fef8f5]/80">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#ffd9e3] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#ffd9e3] transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('transformations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#ffd9e3] transition-colors cursor-pointer text-left"
                >
                  Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#ffd9e3] transition-colors cursor-pointer text-left"
                >
                  Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#ffd9e3] transition-colors cursor-pointer text-left"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#ffd9e3] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="font-display text-lg sm:text-xl text-[#d6b78c] mb-4 font-semibold tracking-wide">
              Visit &amp; Contact
            </h4>
            <div className="font-body text-xs sm:text-sm text-[#fef8f5]/80 space-y-3 leading-relaxed">
              <p>
                <strong className="text-white block font-sans font-semibold">Address:</strong>
                {SALON_INFO.address}
              </p>
              <p>
                <strong className="text-white block font-sans font-semibold">Phone:</strong>
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="text-[#ffd9e3] hover:underline font-semibold"
                >
                  {SALON_INFO.phone}
                </a>
              </p>
              <p>
                <strong className="text-white block font-sans font-semibold">Hours:</strong>
                [Confirm with owner] • 9:30 AM – 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#fef8f5]/60 font-body">
          <p>© 2026 Rich Hair Salon &amp; Academy. All rights reserved. Crafted with Modern Berry elegance.</p>
          <p className="flex items-center gap-2">
            <span>Unisex Hairdresser</span>
            <span>•</span>
            <span>Akola, Maharashtra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
