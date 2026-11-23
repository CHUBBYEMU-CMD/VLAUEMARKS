import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  Search, 
  ArrowUpRight, 
  X, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  ShieldAlert,
  Coins
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/companyData';
import { Project, ProjectCategory, ProjectStage } from '../types';
import { filterProjects } from '../utils/calculator';

interface ProjectsSectionProps {
  onRequestQuoteForProject?: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onRequestQuoteForProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Commercial & Office',
    'Residential',
    'Industrial & Logistics',
    'Healthcare & Institutional',
    'Banking & Corporate',
  ];

  const filteredProjects = filterProjects(
    PROJECTS_DATA,
    searchQuery,
    selectedCategory,
    'All'
  );

  return (
    <section id="projects" className="relative bg-[#ffffff] py-20 lg:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b5883e]">
              <span className="w-6 h-0.5 bg-[#b5883e]" />
              <span>Notable Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#161324] text-balance">
              ₦125B+ in Monitored Landmark Developments
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Explore 30+ completed projects delivered by Valuemarks Consultants and senior partners, 
              ranging from Nigeria&apos;s iconic commercial skyscrapers to national industrial manufacturing plants.
            </p>
          </div>

          <div className="p-4 bg-neutral-50 border border-neutral-200 self-start md:self-auto shrink-0 text-right">
            <div className="text-xs uppercase text-neutral-500 font-semibold">Delivered Works</div>
            <div className="text-2xl font-bold font-display text-[#161324] tabular-nums">
              {filteredProjects.length} <span className="text-xs text-neutral-500 font-normal">of {PROJECTS_DATA.length} recorded</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#f8f9fa] border border-neutral-200 p-4 sm:p-6 mb-10 space-y-4">
          
          <div className="grid grid-cols-1 gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by project name, client, or location (e.g., Stanbic, Ikoyi, Punch)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-neutral-300 text-sm pl-10 pr-4 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#b5883e]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Typology Categories Horizontal Scroll/Wrap */}
          <div className="pt-2 border-t border-neutral-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mr-2">Typology:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#b5883e] text-white shadow-xs'
                    : 'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-neutral-50 border border-neutral-200 space-y-3">
            <Building2 className="w-8 h-8 text-neutral-400 mx-auto" />
            <h3 className="text-base font-bold text-neutral-800">No projects match the selected criteria</h3>
            <p className="text-xs text-neutral-500">Try adjusting your search terms or clearing the filters.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#161324] hover:bg-[#b5883e] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isMegaProject = project.approxValueNum >= 10000;
              return (
                <div
                  key={project.sn}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white border border-neutral-200 hover:border-[#b5883e] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                >
                  {/* Visual Accent Top Bar */}
                  <div className={`h-1 w-full ${isMegaProject ? 'bg-[#b5883e]' : 'bg-neutral-200 group-hover:bg-[#b5883e]'} transition-colors`} />

                  <div className="p-6 space-y-4 flex-1">
                    
                    {/* Value & Stage Bar */}
                    <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                      <div className="text-lg font-bold font-display text-[#161324] group-hover:text-[#916828] transition-colors tabular-nums">
                        {project.approxValue}
                      </div>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 border ${
                        project.stage === 'Completed'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : project.stage === 'In Progress' || project.stage === 'Post-Contract'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}>
                        {project.stage}
                      </span>
                    </div>

                    {/* Project Title */}
                    <div className="space-y-1">
                      <h3 className="text-base font-bold font-display text-[#161324] leading-snug group-hover:text-[#b5883e] transition-colors">
                        {project.name}
                      </h3>
                      <div className="text-xs text-neutral-500 font-medium">
                        {project.category}
                      </div>
                    </div>

                    {/* Client & Location */}
                    <div className="space-y-1.5 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                  </div>

                  {/* Footer Action */}
                  <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-700 group-hover:text-[#b5883e] transition-colors">
                    <span>Inspect Project Details</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-[#161324]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white border-2 border-[#161324] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#161324] text-white p-6 sm:p-8 flex items-start justify-between gap-4 sticky top-0 z-10">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-[#d8aa58] font-bold">
                  Project Record #{selectedProject.sn} · {selectedProject.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="text-neutral-400 hover:text-white p-1 hover:bg-[#251f38] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Key Specs Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-neutral-50 border border-neutral-200">
                <div>
                  <div className="text-[11px] uppercase text-neutral-500 font-semibold">Contract Capital</div>
                  <div className="text-base font-bold font-display text-[#161324] mt-0.5 tabular-nums">
                    {selectedProject.approxValue}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase text-neutral-500 font-semibold">Delivery Stage</div>
                  <div className="text-sm font-bold text-[#b5883e] mt-0.5">
                    {selectedProject.stage}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[11px] uppercase text-neutral-500 font-semibold">Location</div>
                  <div className="text-sm font-medium text-neutral-800 mt-0.5 truncate">
                    {selectedProject.location}
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="space-y-1">
                <div className="text-xs uppercase text-neutral-500 font-bold tracking-wider">
                  Client / Employer
                </div>
                <div className="text-base font-semibold text-neutral-900">
                  {selectedProject.client}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="text-xs uppercase text-neutral-500 font-bold tracking-wider">
                  Development Scope & Architecture
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-3">
                <div className="text-xs uppercase text-neutral-500 font-bold tracking-wider">
                  Valuemarks Consultants Responsibilities
                </div>
                <ul className="space-y-2 text-xs text-neutral-700">
                  {selectedProject.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b5883e] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regulatory Assurance */}
              <div className="p-4 bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-[#b5883e]" />
                  <span>Statutory Professional Assurance</span>
                </div>
                <p>
                  Governed in strict conformity with the Nigerian Institute of Quantity Surveyors (NIQS) 
                  Code of Professional Conduct and QSRBN Decree No. 31 of 1986.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => {
                    const prName = selectedProject.name;
                    setSelectedProject(null);
                    if (onRequestQuoteForProject) {
                      onRequestQuoteForProject(prName);
                    }
                  }}
                  className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#b5883e] hover:bg-[#c89b4b] transition-colors text-center cursor-pointer"
                >
                  Request Similar Project Quote
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-6 text-xs font-semibold uppercase text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
