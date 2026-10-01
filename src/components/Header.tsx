import React, { useState } from 'react';
import { SALON_INFO, buildWhatsAppLink } from '../data/salonData';

export type NavTab = 'home' | 'services' | 'transformations' | 'academy' | 'reviews' | 'contact';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenQuickBook?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab, onOpenQuickBook }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'transformations', label: 'Transformations' },
    { id: 'academy', label: 'Academy' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#fef8f5]/90 backdrop-blur-xl shadow-[0_2px_12px_-2px_rgba(84,38,56,0.06)] border-b border-[#dac0c4]/40 transition-all">
        {/* Top Announcement Bar */}
        <div className="w-full bg-[#ede7e4]/70 py-1.5 px-4 lg:px-12 text-center border-b border-[#dac0c4]/30">
          <p className="font-sans text-xs tracking-widest uppercase text-[#594422] font-semibold flex items-center justify-center gap-2">
            <span>PREMIUM UNISEX SALON &amp; ACADEMY • AKOLA</span>
          </p>
        </div>

        {/* Main Nav Container */}
        <div className="h-20 w-full px-4 lg:px-12 flex items-center justify-between max-w-7xl mx-auto">
          {/* Brand Logo */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex flex-col text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9e3d5b]"
            aria-label="Rich Hair Salon & Academy Home"
          >
            <span className="font-display text-2xl lg:text-[28px] font-semibold text-[#802544] tracking-wide transition-colors group-hover:text-[#9e3d5b] leading-tight">
              RICH HAIR
            </span>
            <span className="font-sans text-[10px] text-[#594422] tracking-[0.2em] uppercase font-bold">
              SALON &amp; ACADEMY
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`cursor-pointer px-4 py-2 rounded-lg font-sans text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#9e3d5b] text-white shadow-sm'
                      : 'text-[#544246] hover:text-[#802544] hover:bg-[#ffd9e3]/30'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center h-11 px-5 rounded-lg bg-[#9e3d5b] text-white font-sans text-sm font-semibold shadow-[0_2px_8px_-2px_rgba(84,38,56,0.12)] hover:bg-[#802544] transition-all transform active:scale-95 whitespace-nowrap"
            >
              Book on WhatsApp
            </a>

            {/* Profile / Client Desk Trigger */}
            <button
              onClick={() => setShowProfileModal(true)}
              aria-label="Client details & quick desk info"
              className="w-9 h-9 rounded-full bg-[#802544] hover:bg-[#9e3d5b] text-white flex items-center justify-center shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">person</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="xl:hidden w-11 h-11 flex items-center justify-center text-[#802544] hover:text-[#9e3d5b] hover:bg-[#f2edea] rounded-lg transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden w-full bg-[#f8f2ef] px-6 py-4 shadow-lg border-t border-[#dac0c4]/40 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`min-h-[44px] flex items-center px-4 rounded-lg font-sans text-sm font-semibold transition-colors text-left ${
                      isActive
                        ? 'bg-[#9e3d5b] text-white'
                        : 'text-[#544246] hover:bg-white/80 hover:text-[#802544]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <a
                href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 min-h-[44px] flex items-center justify-center rounded-lg bg-[#9e3d5b] text-white font-sans text-sm font-semibold shadow-sm hover:bg-[#802544] transition-colors"
              >
                Book on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Quick Salon Desk Modal for Person icon */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-[#dac0c4]/40 text-[#1d1b1a] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-4 right-4 text-[#877276] hover:text-[#802544] p-1 rounded-full hover:bg-[#f8f2ef]"
              aria-label="Close dialog"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#ffd9e3] text-[#802544] flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">content_cut</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#802544]">
                  {SALON_INFO.name}
                </h3>
                <p className="text-xs text-[#544246] font-medium">{SALON_INFO.hindiName}</p>
              </div>
            </div>
            <div className="space-y-3 text-xs text-[#544246] mb-5">
              <div className="flex items-start gap-2 bg-[#f8f2ef] p-2.5 rounded-lg">
                <span className="material-symbols-outlined text-sm text-[#802544]">location_on</span>
                <span>{SALON_INFO.address}</span>
              </div>
              <div className="flex items-center justify-between bg-[#f8f2ef] p-2.5 rounded-lg">
                <span className="font-medium text-[#1d1b1a]">Telephone:</span>
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-[#802544] font-semibold hover:underline">
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center justify-between bg-[#f8f2ef] p-2.5 rounded-lg">
                <span className="font-medium text-[#1d1b1a]">Salon Hours:</span>
                <span className="font-semibold text-[#594422]">{SALON_INFO.hours}</span>
              </div>
              <div className="flex items-center justify-between bg-[#f8f2ef] p-2.5 rounded-lg">
                <span className="font-medium text-[#1d1b1a]">Google Trust:</span>
                <span className="font-semibold text-[#802544]">★ 4.7 (235+ Reviews)</span>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={buildWhatsAppLink("Hello Rich Hair Salon, I want to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 bg-[#9e3d5b] text-white rounded-lg font-sans text-xs font-semibold hover:bg-[#802544] transition-colors"
              >
                Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setShowProfileModal(false);
                  if (onOpenQuickBook) onOpenQuickBook();
                  else handleTabClick('contact');
                }}
                className="px-4 py-2.5 bg-[#f2edea] text-[#802544] rounded-lg font-sans text-xs font-semibold hover:bg-[#ffd9e3] transition-colors"
              >
                Quick Form
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
