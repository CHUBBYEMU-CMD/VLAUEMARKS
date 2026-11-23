import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ValuemarksLogo } from './ValuemarksLogo';

interface ContactSectionProps {
  onRequestQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a telephone contact';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // In production, sends to backend /api
    }
  };

  return (
    <section id="contact" className="relative bg-[#f8f9fa] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b5883e]">
            <span className="w-6 h-0.5 bg-[#b5883e]" />
            <span>Connect with our Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#161324] text-balance">
            Start Your Project with Guaranteed Cost Certainty
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Whether you require a preliminary feasibility appraisal, comprehensive Bill of Quantities, 
            or turnkey construction project management, our chartered partners are ready to discuss your brief.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Details & Architectural Map Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#161324] text-white p-8 border border-[#2d2545] shadow-md space-y-6">
              <div className="pb-4 border-b border-[#2d2545]">
                <ValuemarksLogo size="md" textColor="light" />
              </div>

              <div className="space-y-4 text-xs text-neutral-300">
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d8aa58] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">Principal Office</div>
                    <div className="text-sm font-medium text-white mt-0.5 leading-snug">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#d8aa58] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">Direct Lines</div>
                    <div className="text-sm font-medium text-white mt-0.5 space-y-0.5">
                      {COMPANY_INFO.phones.map((p, idx) => (
                        <div key={idx}>
                          <a href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-[#d8aa58] transition-colors">
                            {p}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#d8aa58] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">Electronic Mail</div>
                    <div className="text-sm font-medium text-white mt-0.5 space-y-0.5">
                      {COMPANY_INFO.emails.map((em, idx) => (
                        <div key={idx}>
                          <a href={`mailto:${em}`} className="hover:text-[#d8aa58] transition-colors">
                            {em}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#d8aa58] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">Practice Hours</div>
                    <div className="text-sm font-medium text-white mt-0.5">
                      Monday – Friday: 8:00 AM – 5:30 PM (WAT)
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Quote Trigger */}
              <div className="pt-4 border-t border-[#2d2545]">
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#b5883e] hover:bg-[#c89b4b] transition-colors text-center cursor-pointer shadow-sm"
                >
                  Open Comprehensive RFP / Quote Form
                </button>
              </div>

            </div>

            {/* Stylized Architectural Location Map Preview */}
            <div className="bg-white border border-neutral-300 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Strategic Office Hub
                </span>
                <span className="text-[11px] font-mono text-[#916828]">Gbagada Corridor</span>
              </div>

              {/* Architectural stylized map graphic */}
              <div className="h-44 bg-neutral-900 relative overflow-hidden flex items-center justify-center border border-neutral-200">
                {/* Abstract grid lines representing Lagos highway corridor */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Highway line */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#b5883e]/50 -translate-y-1/2 -rotate-12" />
                <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-neutral-700 -translate-x-1/2" />
                
                {/* Pin marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="px-3 py-1.5 bg-[#161324] text-white text-[11px] font-bold border border-[#b5883e] shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Building className="w-3.5 h-3.5 text-[#d8aa58]" />
                    <span>Valuemarks - Consultants</span>
                  </div>
                  <div className="w-2.5 h-2.5 bg-[#b5883e] rotate-45 -mt-1" />
                </div>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed">
                Centrally positioned along Gbagada Expressway with rapid arterial connection to Victoria Island, Ikoyi, Ikeja Industrial Estate, and Ogun State manufacturing hubs.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Message / Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-neutral-300 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto rounded-full">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#161324]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. 
                  Principal Partner Olawale Agboola or an associate partner will review your enquiry 
                  and contact you at <span className="font-mono text-neutral-900">{formData.email}</span> within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Consultation',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#161324] hover:bg-[#b5883e] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold font-display text-[#161324]">
                    Send a Direct Brief to Our Partners
                  </h3>
                  <p className="text-xs text-neutral-500">
                    All enquiries are treated under strict commercial confidentiality and professional privilege.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-full-name" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block">
                      Full Name *
                    </label>
                    <input
                      id="contact-full-name"
                      type="text"
                      placeholder="e.g. Arc. Adebisi Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-neutral-50 border text-sm px-4 py-2.5 text-neutral-900 focus:outline-none focus:bg-white ${
                        errors.name ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. adebisi@corporation.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-neutral-50 border text-sm px-4 py-2.5 text-neutral-900 focus:outline-none focus:bg-white ${
                        errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+234 803 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-neutral-50 border text-sm px-4 py-2.5 text-neutral-900 focus:outline-none focus:bg-white ${
                        errors.phone ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block">
                      Enquiry Focus
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 text-sm px-4 py-2.5 text-neutral-900 focus:outline-none focus:border-[#b5883e] focus:bg-white"
                    >
                      <option value="General Consultation">General Practice Consultation</option>
                      <option value="Pre-Contract BOQ & Tendering">Pre-Contract BOQ & Tendering</option>
                      <option value="Post-Contract Cost Control">Post-Contract Cost Control & Valuations</option>
                      <option value="Turnkey Project Management">Turnkey Project Management</option>
                      <option value="Arbitration & Claims Settlement">Arbitration & Claims Settlement</option>
                      <option value="Bank / Lender Monitoring">Bank / Lender Monitoring</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-neutral-700 block">
                    Project Brief / Query *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Provide details on project location, estimated size, site condition, or required quantity surveying services..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-neutral-50 border text-sm p-4 text-neutral-900 focus:outline-none focus:bg-white resize-y ${
                      errors.message ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#161324] hover:bg-[#b5883e] active:bg-[#946b2b] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Enquiry to Partners</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
