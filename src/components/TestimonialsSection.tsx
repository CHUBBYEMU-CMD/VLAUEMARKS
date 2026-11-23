import React from 'react';
import { Quote, Star, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';
import { INSTITUTIONAL_CLIENT_ITEMS } from './InstitutionalLogos';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative bg-[#ffffff] py-20 lg:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b5883e]">
            <span className="w-6 h-0.5 bg-[#b5883e]" />
            <span>Client-Endorsed Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#161324] text-balance">
            Trusted by Nigeria&apos;s Foremost Institutions
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Leading financial institutions, industrial corporations, and commercial developers 
            rely on Valuemarks Consultants to safeguard multi-billion Naira construction investments.
          </p>
        </div>

        {/* Testimonials Grid (2x2 Grid with concrete before/after metrics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#f8f9fa] border border-neutral-200 p-8 flex flex-col justify-between space-y-6 relative hover:border-[#b5883e] transition-colors"
            >
              <div className="space-y-4">
                {/* Metric Strip Proof Adjacency */}
                <div className="p-3 bg-white border border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#916828]">
                    <CheckCircle2 className="w-4 h-4 text-[#b5883e]" />
                    <span>Audited Outcome:</span>
                  </div>
                  <span className="text-xs font-bold text-[#161324] tabular-nums">
                    {item.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#b5883e]/40" />

                <blockquote className="text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Attributable Client Info */}
              <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold font-display text-[#161324]">
                    {item.clientName}
                  </div>
                  <div className="text-xs text-neutral-600 font-medium">
                    {item.clientRole} · <span className="text-neutral-900 font-semibold">{item.organisation}</span>
                  </div>
                  <div className="text-[11px] text-[#916828] mt-0.5">
                    {item.project}
                  </div>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Client Carousel with Official Logos */}
        <div className="bg-[#161324] text-white p-6 sm:p-10 border border-[#2d2545] relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#d8aa58] font-bold">
              Institutional Footprint
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Corporate &amp; Public Sector Client Engagements
            </h3>
            <p className="text-xs text-neutral-400">
              Selected institutions whose projects have been audited or managed by Valuemarks Consultants and senior partners.
            </p>
          </div>

          {/* Smooth Modern Infinite Marquee Carousel */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Left Edge Gradient Scrim */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#161324] via-[#161324]/80 to-transparent z-10" />

            {/* Right Edge Gradient Scrim */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#161324] via-[#161324]/80 to-transparent z-10" />

            {/* Scrolling Track (duplicated for seamless continuous loop) */}
            <div className="animate-marquee-scroll flex gap-4 sm:gap-6 items-center">
              {/* First instance */}
              {INSTITUTIONAL_CLIENT_ITEMS.map((client, idx) => (
                <div
                  key={`track1-${client.id}-${idx}`}
                  className="bg-[#1c172e] hover:bg-[#231d38] border border-[#2e2648] hover:border-[#b5883e]/70 px-5 py-3.5 flex flex-col items-center justify-center min-w-[210px] sm:min-w-[230px] h-[88px] shrink-0 transition-all duration-200 group/card shadow-xs"
                >
                  <div className="flex items-center justify-center w-full h-9">
                    {client.logo}
                  </div>
                  <div className="text-[10px] text-neutral-400 group-hover/card:text-[#d8aa58] font-medium transition-colors mt-1.5 truncate max-w-[200px]">
                    {client.sector}
                  </div>
                </div>
              ))}

              {/* Duplicate instance for seamless infinite scrolling */}
              {INSTITUTIONAL_CLIENT_ITEMS.map((client, idx) => (
                <div
                  key={`track2-${client.id}-${idx}`}
                  className="bg-[#1c172e] hover:bg-[#231d38] border border-[#2e2648] hover:border-[#b5883e]/70 px-5 py-3.5 flex flex-col items-center justify-center min-w-[210px] sm:min-w-[230px] h-[88px] shrink-0 transition-all duration-200 group/card shadow-xs"
                >
                  <div className="flex items-center justify-center w-full h-9">
                    {client.logo}
                  </div>
                  <div className="text-[10px] text-neutral-400 group-hover/card:text-[#d8aa58] font-medium transition-colors mt-1.5 truncate max-w-[200px]">
                    {client.sector}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive footer note */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] text-neutral-400 border-t border-[#251f38] pt-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hover anywhere on the carousel to pause scrolling</span>
            </span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span>15 National &amp; Multinational Client Engagements</span>
          </div>
        </div>

      </div>
    </section>
  );
};

