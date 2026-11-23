import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  HardHat, 
  FileText 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

interface ServicesSectionProps {
  onRequestQuoteWithScope: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestQuoteWithScope,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pre-contract' | 'post-contract' | 'project-management'>('all');

  return (
    <section id="services" className="relative bg-[#f8f9fa] py-20 lg:py-28 border-b border-neutral-200">
      
      {/* Visual Header with Brand Motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b5883e]">
            <span className="w-6 h-0.5 bg-[#b5883e]" />
            <span>Practice Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#161324] text-balance">
            Complete Cost Engineering & Turnkey Project Governance
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            From preliminary pre-contract feasibility through continuous post-contract site audits 
            to dispute-free final accounts, our registered partners ensure your construction capital 
            is guarded with uncompromising rigor.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-200/80 mb-12 max-w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'all'
                ? 'bg-[#161324] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60'
            }`}
          >
            All Services
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pre-contract')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'pre-contract'
                ? 'bg-[#161324] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60'
            }`}
          >
            Pre-Contract Costing
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('post-contract')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'post-contract'
                ? 'bg-[#161324] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60'
            }`}
          >
            Post-Contract Administration
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('project-management')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'project-management'
                ? 'bg-[#161324] text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-300/60'
            }`}
          >
            Project Management
          </button>
        </div>

        {/* Service Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const shouldShow =
                activeTab === 'all' ||
                (activeTab === 'pre-contract' && service.id === 'quantity-surveying') ||
                (activeTab === 'post-contract' && service.id === 'post-contract-services') ||
                (activeTab === 'project-management' && service.id === 'project-management');

              if (!shouldShow) return null;

              return (
                <div
                  key={service.id}
                  className="bg-white border border-neutral-300/80 shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md"
                >
                  <div className="p-8 space-y-6">
                    {/* Header with index & icon */}
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                      <span className="text-xs font-bold text-[#b5883e] tracking-widest uppercase">
                        Service 0{index + 1}
                      </span>
                      <div className="w-10 h-10 bg-[#161324] text-[#d8aa58] flex items-center justify-center">
                        {index === 0 ? (
                          <FileText className="w-5 h-5" />
                        ) : index === 1 ? (
                          <BarChart3 className="w-5 h-5" />
                        ) : (
                          <HardHat className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-display text-[#161324] leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-[#916828]">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.overview}
                    </p>

                    {/* Service Subsections with Detailed Points */}
                    <div className="space-y-5 pt-2">
                      {service.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-2.5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                            {section.heading}
                          </h4>
                          <ul className="space-y-2 text-xs text-neutral-600">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#b5883e] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Value impact highlight */}
                    <div className="p-3.5 bg-neutral-50 border-l-2 border-[#b5883e] text-xs text-neutral-700 leading-relaxed">
                      <span className="font-semibold text-neutral-900">Proven Impact: </span>
                      {service.metricsSummary}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-6 bg-neutral-50 border-t border-neutral-200">
                    <button
                      type="button"
                      onClick={() => onRequestQuoteWithScope(service.title)}
                      className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#161324] hover:bg-[#b5883e] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};
