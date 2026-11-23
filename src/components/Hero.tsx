import React from 'react';
import { ArrowUpRight, Award, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CountUpNumber } from './CountUpNumber';

interface HeroProps {
  onRequestQuote: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onExploreProjects,
}) => {
  return (
    <section id="home" className="relative bg-[#161324] text-white overflow-hidden">
      {/* Signature vertical ochre geometric band inspired by the portfolio left edge */}
      <div 
        aria-hidden="true" 
        className="hidden md:block absolute top-0 bottom-0 left-0 w-8 lg:w-12 bg-[#b5883e] z-10"
      >
        <div className="h-full flex flex-col justify-between items-center py-8">
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          <div className="w-8 h-8 bg-[#161324] flex items-center justify-center text-white text-xs font-bold font-serif">
            <ChevronRight className="w-4 h-4 text-[#d8aa58]" />
          </div>
        </div>
      </div>

      {/* Large Hero Banner with Background Image of Construction Site */}
      <div className="relative min-h-[640px] lg:min-h-[720px] flex items-center md:pl-8 lg:pl-12">
        {/* Background Image Container with Measured High-Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={COMPANY_INFO.assets.heroBg}
            alt="Valuemarks Consultants High-Rise Construction Site and Engineering Infrastructure"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Measured multi-layer gradient scrim ensuring >= 4.5:1 WCAG contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#110e1b]/95 via-[#161324]/85 to-[#161324]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161324] via-transparent to-[#110e1b]/60" />
          
          {/* Subtle architectural grid overlay lines */}
          <div 
            aria-hidden="true"
            className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
          />
        </div>

        {/* Hero Content Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Columns: Headline, Reliability Proof, and Primary Actions */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Trust Badge / Accreditation Line */}
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase font-semibold text-[#d8aa58]">
                <span className="flex items-center gap-1.5 bg-[#231e38]/80 backdrop-blur-sm px-3 py-1.5 border border-[#b5883e]/40">
                  <ShieldCheck className="w-4 h-4 text-[#d8aa58]" />
                  <span>Registered Practice PF/006-V</span>
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-neutral-300">QSRBN Reg. 1208</span>
                <span className="text-neutral-400">·</span>
                <span className="text-neutral-300">Est. 2008</span>
              </div>

              {/* Bold Geometric Display Headline about Reliability */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white text-balance leading-[1.12]">
                Cost Reliability You Can Bank On.{' '}
                <span className="text-[#d8aa58]">Project Certainty</span> From Blueprint to Handover.
              </h1>

              {/* Proposition Prose */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
                Valuemarks Consultants is Nigeria&apos;s leading firm of licensed Quantity Surveyors 
                and Project Managers. For over 18 years, institutional developers, multinational corporations, 
                and financial institutions have trusted our rigorous financial engineering to eliminate cost 
                overruns across landmark commercial, residential, and industrial developments.
              </p>

              {/* Primary Call to Action & Secondary Explorations */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Requested "Request a quote" button */}
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#b5883e] hover:bg-[#c89b4b] active:bg-[#946b2b] transition-all duration-150 shadow-lg hover:shadow-[#b5883e]/20 cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onExploreProjects}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-neutral-200 bg-[#231e38]/90 hover:bg-[#2e274a] hover:text-white border border-[#3d345c] transition-colors cursor-pointer"
                >
                  <span>Explore Notable Projects</span>
                  <ChevronRight className="w-4 h-4 text-[#b5883e]" />
                </button>
              </div>

              {/* Key Trust Checkpoints */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300 border-t border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5883e] shrink-0" />
                  <span>Accurate BOQs & Tender Specs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b5883e] shrink-0" />
                  <span>Uncompromised Site Valuations</span>
                </div>
                
              </div>

            </div>

            {/* Right 5 Columns: Asymmetric Geometric Marquee Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#1b172c]/95 border border-[#352c52] shadow-2xl p-6 sm:p-8 space-y-6 relative">
                
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#b5883e]/20 -rotate-45 transform origin-top-right border-b border-[#b5883e]" />
                </div>

                <div className="flex items-center justify-between border-b border-[#2d2545] pb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={COMPANY_INFO.assets.niqsCrest} 
                      alt="Nigerian Institute of Quantity Surveyors Crest" 
                      className="w-11 h-11 object-contain bg-white rounded-full p-0.5 border border-[#b5883e]"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">Chartered Practice</h4>
                      <p className="text-xs text-neutral-400">Fellow & Registered Q.S. Partners</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#d8aa58] bg-[#27203d] px-2.5 py-1 border border-[#b5883e]/30">
                    NIQS PF/006-V
                  </span>
                </div>

                {/* Marquee Project Highlight */}
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Notable Project Landmark
                  </div>
                  <div className="p-4 bg-[#141022] border border-[#2c2443] space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-bold text-white leading-snug">
                        Stanbic IBTC Head Office (Project Windsor)
                      </h3>
                      <span className="text-sm font-bold text-[#d8aa58] whitespace-nowrap">
                        ₦32 Billion
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Victoria Island, Lagos · Commercial Grade A Skyscraper
                    </p>
                    <div className="text-xs text-[#d8aa58] flex items-center gap-1.5 pt-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Full Lifecycle Cost Management Delivered Completed</span>
                    </div>
                  </div>
                </div>

                {/* Additional Marquee Credentials */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 bg-[#161225] border border-[#2c2443]">
                    <div className="text-xs text-neutral-400">Heritage Place Ikoyi</div>
                    <div className="text-base font-bold text-white mt-0.5">₦19 Billion</div>
                    <div className="text-[11px] text-[#b5883e]">Nigeria&apos;s 1st LEED Tower</div>
                  </div>
                  <div className="p-3 bg-[#161225] border border-[#2c2443]">
                    <div className="text-xs text-neutral-400">Tongo Towers Ikoyi</div>
                    <div className="text-base font-bold text-white mt-0.5">₦20 Billion</div>
                    <div className="text-[11px] text-[#b5883e]">Corporate Head Office</div>
                  </div>
                </div>

               

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Full-width 4-Column Proof & KPI Strip Below Hero */}
      <div className="relative z-20 bg-[#110e1b] border-y border-[#2a233d] md:pl-8 lg:pl-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#261f36]">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className={`space-y-1 ${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums tracking-tight">
                  <span className="text-[#d8aa58]">
                    <CountUpNumber value={stat.value} duration={2200} />
                  </span>
                </div>
                <div className="text-xs font-semibold text-neutral-200">{stat.label}</div>
                <div className="text-[11px] text-neutral-400">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
