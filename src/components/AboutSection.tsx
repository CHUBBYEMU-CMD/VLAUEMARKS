import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Building, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  ChevronRight, 
  FileCheck, 
  UserCheck, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS, CERTIFICATIONS } from '../data/companyData';
import { TeamMember, Certification } from '../types';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'team' | 'certifications'>('overview');
  const [selectedLeader, setSelectedLeader] = useState<TeamMember>(TEAM_MEMBERS[0]);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="about" className="relative bg-[#f8f9fa] py-20 lg:py-28 border-b border-neutral-200">
      
      {/* Signature vertical ochre accent in desktop viewport */}
      <div 
        aria-hidden="true" 
        className="hidden xl:block absolute top-0 bottom-0 left-0 w-3 bg-[#b5883e]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b5883e]">
            <span className="w-6 h-0.5 bg-[#b5883e]" />
            <span>Corporate Identity & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#161324] text-balance">
            Rooted in Professional Rigor. Built on Integrity.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Founded with a commitment to elevate construction economics in West Africa, 
            Valuemarks Consultants provides statutory quantity surveying and multi-disciplinary 
            project governance to developers, lenders, and institutions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-200/80 mb-12 max-w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'overview'
                ? 'bg-[#161324] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60'
            }`}
          >
            Firm Profile & Values
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('team')}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'team'
                ? 'bg-[#161324] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60'
            }`}
          >
            Leadership & Partners
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('certifications')}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'certifications'
                ? 'bg-[#161324] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#b5883e]" />
            <span>Statutory Accreditations (CAC & NIQS)</span>
          </button>
        </div>

        {/* Tab 1: Profile & Core Values */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            
            {/* Story & Heritage Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#b5883e] font-bold">
                    Firm Legacy
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#161324]">
                    Transforming Client Visions into Tangible Success
                  </h3>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  Valuemarks Consultants is a leading firm of registered quantity surveyors 
                  and project management consultants with many years of experience in various 
                  building and civil engineering construction industry projects. Our value-driven 
                  approach ensures projects are completed efficiently, cost-effectively, and to 
                  the highest standards.
                </p>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  Registered under the Companies and Allied Matters Act (CAC BN 2072709) and 
                  certified by the Nigerian Institute of Quantity Surveyors (Firm Reg. PF/006-V) 
                  and Quantity Surveyors Registration Board of Nigeria (Reg. No. 1208), our practice 
                  serves as an independent fiduciary guardian over construction expenditure.
                </p>

                <div className="pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-900">Our Mission</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {COMPANY_INFO.mission}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-900">Our Vision</div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {COMPANY_INFO.vision}
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal & Corporate Badges Panel */}
              <div className="lg:col-span-5 bg-[#161324] text-white p-8 sm:p-10 border border-[#2d2545] flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-[#2d2545]">
                    <img 
                      src={COMPANY_INFO.assets.niqsCrest} 
                      alt="NIQS Seal" 
                      className="w-12 h-12 object-contain bg-white rounded-full p-1 border border-[#b5883e]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">Statutory Practice Authority</h4>
                      <p className="text-xs text-neutral-400">Federal Republic of Nigeria</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div className="flex justify-between py-2 border-b border-[#241c38]">
                      <span className="text-neutral-400">CAC Business Reg</span>
                      <span className="font-mono font-bold text-white">{COMPANY_INFO.cacReg}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#241c38]">
                      <span className="text-neutral-400">NIQS Practice Firm</span>
                      <span className="font-mono font-bold text-[#d8aa58]">{COMPANY_INFO.niqsFirmReg}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#241c38]">
                      <span className="text-neutral-400">QSRBN Registration</span>
                      <span className="font-mono font-bold text-white">{COMPANY_INFO.qsrbnReg}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#241c38]">
                      <span className="text-neutral-400">FIRS Tax ID (TIN)</span>
                      <span className="font-mono font-bold text-white">{COMPANY_INFO.tin}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-neutral-400">Operational Base</span>
                      <span className="font-medium text-white">{COMPANY_INFO.address}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-[#1e1832] border-l-2 border-[#b5883e] text-xs text-neutral-300">
                  <span className="font-bold text-[#d8aa58]">Statutory Guarantee: </span>
                  Every valuation, BOQ, and contract certificate bears the legal stamp and seal 
                  of fully registered Fellows and Members of the Nigerian Institute of Quantity Surveyors.
                </div>
              </div>

            </div>

            {/* Core Values Section */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#b5883e] font-bold">
                  Guiding Principles
                </span>
                <h3 className="text-2xl font-bold font-display text-[#161324]">
                  Six Pillars of Technical & Professional Integrity
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COMPANY_INFO.values.map((val, idx) => (
                  <div 
                    key={val.name}
                    className="p-6 bg-white border border-neutral-200 shadow-xs hover:border-[#b5883e] transition-colors space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#b5883e]">
                        0{idx + 1}
                      </span>
                      <div className="w-2 h-2 bg-[#b5883e]" />
                    </div>
                    <h4 className="text-lg font-bold font-display text-[#161324]">
                      {val.name}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Leadership Team */}
        {activeTab === 'team' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Leadership Selectors List (5 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-2">
                Executive Partners & Specialists
              </div>
              {TEAM_MEMBERS.map((member) => {
                const isSelected = selectedLeader.name === member.name;
                return (
                  <button
                    key={member.name}
                    type="button"
                    onClick={() => setSelectedLeader(member)}
                    className={`w-full p-4 text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#161324] border-[#161324] text-white shadow-sm'
                        : 'bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold font-display">{member.name}</div>
                      <div className={`text-xs ${isSelected ? 'text-[#d8aa58]' : 'text-[#916828]'}`}>
                        {member.title}
                      </div>
                      <div className={`text-[11px] truncate max-w-[220px] ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        {member.credentials}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#d8aa58]' : 'text-neutral-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Detailed Leader Profile Showcase (8 cols) */}
            <div className="lg:col-span-8 bg-white border border-neutral-200 shadow-sm p-6 sm:p-10 space-y-8">
              
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-neutral-200">
                <div className="space-y-1.5">
                  <div className="text-xs uppercase font-bold tracking-wider text-[#b5883e]">
                    {selectedLeader.role}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#161324]">
                    {selectedLeader.name}
                  </h3>
                  <div className="text-sm font-medium text-neutral-600">
                    {selectedLeader.credentials}
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 self-start text-xs text-neutral-700 space-y-1">
                  <div className="font-bold text-[#161324] flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#b5883e]" />
                    <span>Statutory Status</span>
                  </div>
                  <div>Certified Professional Practice</div>
                </div>
              </div>

              {/* Biography Prose */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Professional Biography
                </h4>
                {selectedLeader.bio.map((paragraph, bIdx) => (
                  <p key={bIdx} className="text-sm text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Qualifications & Memberships */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#b5883e]" />
                  <span>Memberships & Qualifications</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {selectedLeader.memberships.map((m, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2 p-2.5 bg-neutral-50 border border-neutral-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b5883e] shrink-0 mt-0.5" />
                      <span className="leading-snug">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Timeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#b5883e]" />
                  <span>Distinguished Career Experience</span>
                </h4>
                <div className="border border-neutral-200 divide-y divide-neutral-200">
                  {selectedLeader.experience.map((exp, eIdx) => (
                    <div key={eIdx} className="p-3 grid grid-cols-12 text-xs hover:bg-neutral-50 transition-colors">
                      <span className="col-span-3 font-mono font-semibold text-neutral-600">
                        {exp.years}
                      </span>
                      <span className="col-span-5 font-medium text-neutral-900">
                        {exp.organisation}
                      </span>
                      <span className="col-span-4 text-neutral-600 text-right">
                        {exp.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Notable Works */}
              {selectedLeader.selectedWorks.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#b5883e]" />
                    <span>Notable Projects Led / Supervised</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                    {selectedLeader.selectedWorks.map((work, wIdx) => (
                      <li key={wIdx} className="p-2 border border-neutral-200 bg-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#b5883e] shrink-0" />
                        <span className="truncate">{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>
        )}

        {/* Tab 3: Statutory Accreditations */}
        {activeTab === 'certifications' && (
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl font-bold font-display text-[#161324]">
                Statutory Registration & Official Accreditations
              </h3>
              <p className="text-sm text-neutral-600">
                Operating under full regulatory mandates issued by Nigerian government bodies and professional chartered institutes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-white border border-neutral-200 hover:border-[#b5883e] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <FileCheck className="w-5 h-5 text-[#b5883e]" />
                      <span className="text-xs font-mono font-bold text-neutral-500">{cert.year}</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold font-display text-[#161324] leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#916828] font-semibold">
                        {cert.authority}
                      </p>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {cert.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono font-semibold text-[#161324]">
                    <span>{cert.regNumber}</span>
                    <span className="text-[#b5883e] text-[11px] font-sans font-medium flex items-center gap-1">
                      <span>View details</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal for viewing certification info */}
            {selectedCert && (
              <div 
                className="fixed inset-0 z-50 bg-[#161324]/80 backdrop-blur-xs flex items-center justify-center p-4"
                onClick={() => setSelectedCert(null)}
              >
                <div 
                  className="bg-white border-2 border-[#161324] max-w-lg w-full p-8 shadow-2xl relative space-y-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between pb-4 border-b border-neutral-200">
                    <div>
                      <span className="text-xs uppercase font-bold text-[#b5883e]">Statutory Record</span>
                      <h3 className="text-xl font-bold font-display text-[#161324] mt-1">{selectedCert.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="text-neutral-400 hover:text-neutral-900 p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 text-sm text-neutral-700">
                    <div>
                      <div className="text-xs text-neutral-500 font-bold uppercase">Issuing Authority</div>
                      <div className="font-semibold text-neutral-900">{selectedCert.authority}</div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 font-bold uppercase">Official Registration No.</div>
                      <div className="font-mono font-bold text-[#b5883e] text-base">{selectedCert.regNumber}</div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 font-bold uppercase">Statutory Mandate</div>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-1">{selectedCert.details}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="px-6 py-2.5 text-xs font-bold uppercase text-white bg-[#161324] hover:bg-[#b5883e] transition-colors"
                    >
                      Close Record
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
