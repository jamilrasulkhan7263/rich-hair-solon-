/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, NavTab } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { ServicesScreen } from './components/ServicesScreen';
import { TransformationsScreen } from './components/TransformationsScreen';
import { AcademyScreen } from './components/AcademyScreen';
import { ReviewsContactScreen } from './components/ReviewsContactScreen';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickBookModal } from './components/QuickBookModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [quickBookOpen, setQuickBookOpen] = useState(false);

  // Sync hash routing with activeTab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTab;
      if (['home', 'services', 'transformations', 'academy', 'reviews', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fef8f5] text-[#1d1b1a] flex flex-col antialiased selection:bg-[#ffd9e3] selection:text-[#802544]">
      {/* Fixed Sticky Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenQuickBook={() => setQuickBookOpen(true)}
      />

      {/* Main Content Area (padding-top 112px to account for announcement bar + 80px header) */}
      <main className="w-full pt-28 flex-1">
        {activeTab === 'home' && <HomeScreen onNavigate={handleTabChange} />}
        {activeTab === 'services' && <ServicesScreen />}
        {activeTab === 'transformations' && <TransformationsScreen />}
        {activeTab === 'academy' && <AcademyScreen />}
        {activeTab === 'reviews' && <ReviewsContactScreen initialFocus="reviews" />}
        {activeTab === 'contact' && <ReviewsContactScreen initialFocus="contact" />}
      </main>

      {/* Global Luxury Footer */}
      <Footer onNavigate={handleTabChange} />

      {/* Persistent Floating WhatsApp CTA Button */}
      <FloatingWhatsApp />

      {/* Quick Booking Modal */}
      <QuickBookModal
        isOpen={quickBookOpen}
        onClose={() => setQuickBookOpen(false)}
      />
    </div>
  );
}
