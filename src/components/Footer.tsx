import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ValuemarksLogo } from './ValuemarksLogo';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  return (
    <footer className="bg-[#110e1b] text-neutral-300 border-t border-[#231e34]">
      
      {/* Top CTA Banner Strip */}
      <div className="bg-[#181427] border-b border-[#28213e] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Planning a Commercial, Residential, or Civil Engineering Project?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Engage registered Quantity Surveyors and Project Managers before committing capital.
            </p>
          </div>
          <button
            type="button"
            onClick={onRequestQuote}
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#b5883e] hover:bg-[#c89b4b] active:bg-[#946b2b] transition-colors whitespace-nowrap shrink-0 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Request a Quote Today</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Statutory Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <ValuemarksLogo size="lg" textColor="light" />

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Nigeria&apos;s premier firm of chartered Quantity Surveyors and Project Managers. 
              Delivering accurate cost engineering, independent construction audits, and flawless project delivery since 2008.
            </p>

            <div className="p-3 bg-[#19142a] border border-[#2c2445] text-[11px] space-y-1 text-neutral-400">
              <div className="flex items-center gap-1.5 font-bold text-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b5883e]" />
                <span>Statutory Registrations</span>
              </div>
              <div>NIQS Practice Firm Reg: <span className="text-white font-mono">{COMPANY_INFO.niqsFirmReg}</span></div>
              <div>QSRBN Board License: <span className="text-white font-mono">{COMPANY_INFO.qsrbnReg}</span></div>
              <div>CAC Business Number: <span className="text-white font-mono">{COMPANY_INFO.cacReg}</span></div>
              <div>Federal Tax ID (TIN): <span className="text-white font-mono">{COMPANY_INFO.tin}</span></div>
            </div>
          </div>

          {/* Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consultancy Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Pre-Contract Cost Engineering</a></li>
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Bills of Quantities (BOQ)</a></li>
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Tender Evaluation & Procurement</a></li>
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Post-Contract Cost Control</a></li>
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Interim Valuations & Certification</a></li>
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Final Account Reconciliation</a></li>
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Turnkey Project Management</a></li>
              <li><a href="#services" className="hover:text-[#d8aa58] transition-colors">Bank & Lender Cost Monitoring</a></li>
            </ul>
          </div>

          {/* Direct Office & Lines (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Principal Office & Contacts
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b5883e] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#b5883e] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <div key={idx}>
                      <a href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                        {p}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#b5883e] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {COMPANY_INFO.emails.map((e, idx) => (
                    <div key={idx}>
                      <a href={`mailto:${e}`} className="hover:text-white transition-colors">
                        {e}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-[#231e34] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Valuemarks - Consultants. All rights reserved. Registered under Nigerian Law.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span>·</span>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <span>·</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span>·</span>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
