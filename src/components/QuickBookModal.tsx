import React, { useState } from 'react';
import { buildWhatsAppLink } from '../data/salonData';

interface QuickBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuickBookModal: React.FC<QuickBookModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Signature Haircuts & Styling');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = `Hello Rich Hair Salon,\n\nI want to book an appointment:\n• Name: ${name}\n• Phone: ${phone}\n• Service: ${service}\n• Date: ${preferredDate || 'Earliest available'}\n• Time: ${preferredTime}\n• Notes: ${notes || 'None'}`;

    window.open(buildWhatsAppLink(payload), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#dac0c4] relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#877276] hover:text-[#802544] p-1.5 rounded-full hover:bg-[#f8f2ef] cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#ffd9e3] text-[#802544] flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">calendar_month</span>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#802544]">
              Book an Appointment
            </h3>
            <p className="font-body text-xs text-[#544246]">
              Instant confirmation with Rich Hair Master Stylists
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block font-sans text-xs font-bold text-[#802544] mb-1" htmlFor="quickName">
              Full Name <span className="text-[#9e3d5b]">*</span>
            </label>
            <input
              id="quickName"
              type="text"
              required
              placeholder="e.g. Ananya Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#fef8f5] text-[#1d1b1a] text-sm rounded-xl px-3.5 py-2.5 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b]"
            />
          </div>

          <div>
            <label className="block font-sans text-xs font-bold text-[#802544] mb-1" htmlFor="quickPhone">
              Phone Number <span className="text-[#9e3d5b]">*</span>
            </label>
            <input
              id="quickPhone"
              type="tel"
              required
              placeholder="e.g. 098765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#fef8f5] text-[#1d1b1a] text-sm rounded-xl px-3.5 py-2.5 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b]"
            />
          </div>

          <div>
            <label className="block font-sans text-xs font-bold text-[#802544] mb-1" htmlFor="quickService">
              Service
            </label>
            <select
              id="quickService"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#fef8f5] text-[#1d1b1a] text-sm rounded-xl px-3.5 py-2.5 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b]"
            >
              <option value="Signature Haircuts & Styling">Signature Haircuts &amp; Styling</option>
              <option value="Hair Colour & Highlights">Hair Colour &amp; Highlights</option>
              <option value="Hair Spa & Treatments">Hair Spa &amp; Treatments</option>
              <option value="Beard Grooming">Beard Grooming</option>
              <option value="Bridal & Party Styling">Bridal &amp; Party Styling</option>
              <option value="Makeup & Occasion Styling">Makeup &amp; Occasion Styling</option>
              <option value="Academy Training Consultation">Academy Training Consultation</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-sans text-xs font-bold text-[#802544] mb-1" htmlFor="quickDate">
                Date
              </label>
              <input
                id="quickDate"
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-[#fef8f5] text-[#1d1b1a] text-xs rounded-xl px-3 py-2.5 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b]"
              />
            </div>
            <div>
              <label className="block font-sans text-xs font-bold text-[#802544] mb-1" htmlFor="quickTime">
                Preferred Time
              </label>
              <select
                id="quickTime"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#fef8f5] text-[#1d1b1a] text-xs rounded-xl px-3 py-2.5 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b]"
              >
                <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1 PM - 5 PM)</option>
                <option value="Evening (5:00 PM - 8:30 PM)">Evening (5 PM - 8:30 PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs font-bold text-[#802544] mb-1" htmlFor="quickNotes">
              Notes or Special Request (optional)
            </label>
            <textarea
              id="quickNotes"
              rows={2}
              placeholder="Hair type, reference look, or specific stylist..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#fef8f5] text-[#1d1b1a] text-xs rounded-xl px-3 py-2 border border-[#dac0c4]/60 focus:outline-none focus:ring-2 focus:ring-[#9e3d5b] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full bg-[#9e3d5b] hover:bg-[#802544] text-white font-sans text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer mt-2"
          >
            Confirm on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};
