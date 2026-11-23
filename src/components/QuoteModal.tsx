import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Coins, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Mail, 
  Phone, 
  User, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import { calculateEstimatedFees, formatNaira, validateQuoteForm } from '../utils/calculator';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
  initialBudget?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialScope,
  initialBudget,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    projectTitle: '',
    projectType: initialScope || 'Commercial & Office Skyscraper',
    projectLocation: 'Lagos, Nigeria',
    estimatedBudgetRange: initialBudget ? String(initialBudget) : '1500000000',
    servicesNeeded: ['pre-contract', 'post-contract'],
    projectStage: 'Pre-Tender Feasibility',
    targetStartDate: 'Within 30 Days',
    projectDetails: '',
  });

  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const currentBudget = Number(formData.estimatedBudgetRange) || 1_000_000_000;
  const calculation = calculateEstimatedFees({
    projectType: formData.projectType,
    estimatedBudgetNaira: currentBudget,
    servicesNeeded: formData.servicesNeeded,
    projectDurationMonths: 18,
  });

  const handleServiceToggle = (svcKey: string) => {
    if (formData.servicesNeeded.includes(svcKey)) {
      if (formData.servicesNeeded.length > 1) {
        setFormData({
          ...formData,
          servicesNeeded: formData.servicesNeeded.filter((s) => s !== svcKey),
        });
      }
    } else {
      setFormData({
        ...formData,
        servicesNeeded: [...formData.servicesNeeded, svcKey],
      });
    }
  };

  const handleNext = () => {
    const validation = validateQuoteForm(formData);
    // If on step 1, validate only project title and type
    if (step === 1) {
      const step1Errors: Record<string, string> = {};
      if (!formData.projectTitle.trim()) {
        step1Errors.projectTitle = 'Please specify the project title or name';
      }
      if (Object.keys(step1Errors).length > 0) {
        setErrors(step1Errors);
        return;
      }
      setErrors({});
      setStep(2);
      return;
    }

    if (step === 2) {
      if (formData.servicesNeeded.length === 0) {
        setErrors({ servicesNeeded: 'Please select at least one service' });
        return;
      }
      setErrors({});
      setStep(3);
      return;
    }

    if (step === 3) {
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }
      // Generate confirmation code
      const code = `VMC-RFP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(code);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      projectTitle: '',
      projectType: 'Commercial & Office Skyscraper',
      projectLocation: 'Lagos, Nigeria',
      estimatedBudgetRange: '1500000000',
      servicesNeeded: ['pre-contract', 'post-contract'],
      projectStage: 'Pre-Tender Feasibility',
      targetStartDate: 'Within 30 Days',
      projectDetails: '',
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#110e1b]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white border-2 border-[#161324] max-w-4xl w-full my-8 shadow-2xl relative overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#161324] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#2d2545]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d8aa58]">
              <ShieldCheck className="w-4 h-4 text-[#b5883e]" />
              <span>Official Request for Quotation (RFQ)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              Request a Professional Quote
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote modal"
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#251f38] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Multi-step progress header */}
        {!submitted && (
          <div className="bg-neutral-100 border-b border-neutral-200 px-6 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <span className={`font-semibold ${step === 1 ? 'text-[#b5883e]' : 'text-neutral-500'}`}>
                1. Project Specs
              </span>
              <span className="text-neutral-300">/</span>
              <span className={`font-semibold ${step === 2 ? 'text-[#b5883e]' : 'text-neutral-500'}`}>
                2. Scope of Services
              </span>
              <span className="text-neutral-300">/</span>
              <span className={`font-semibold ${step === 3 ? 'text-[#b5883e]' : 'text-neutral-500'}`}>
                3. Contact & Transmission
              </span>
            </div>
            <span className="text-neutral-500 font-mono">Step {step} of 3</span>
          </div>
        )}

        {/* Modal Content */}
        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto rounded-full">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#b5883e]">
                Quotation Request Transmitted
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#161324]">
                Thank You, {formData.fullName}
              </h3>
              <p className="text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
                Your quotation brief for <span className="font-semibold text-neutral-900">{formData.projectTitle}</span> has been logged under reference code:
              </p>
              <div className="font-mono text-lg font-bold text-[#b5883e] bg-neutral-100 py-2 px-4 inline-block border border-neutral-200">
                {confirmationCode}
              </div>
            </div>

            {/* Summary matrix */}
            <div className="max-w-lg mx-auto p-4 bg-neutral-50 border border-neutral-200 text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Project Typology:</span>
                <span className="font-semibold text-neutral-900">{formData.projectType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Estimated Capital Budget:</span>
                <span className="font-bold text-neutral-900 font-display tabular-nums">
                  {formatNaira(currentBudget)}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200">
                <span className="text-neutral-500">Estimated QS Fee Range:</span>
                <span className="font-bold text-[#b5883e] tabular-nums">
                  {calculation.estimatedFeeMinFormatted} – {calculation.estimatedFeeMaxFormatted}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">Projected Capital Savings:</span>
                <span className="font-bold text-emerald-700 tabular-nums">
                  {calculation.projectedCostSavingsFormatted}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              Our Principal Partner Olawale Agboola or a designated associate will review your brief 
              and schedule a preliminary consultation call within 24 business hours.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#161324] hover:bg-[#b5883e] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 flex-1">
            
            {/* Form Steps Column (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
              
              {/* STEP 1: Project Specs */}
              {step === 1 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-display text-[#161324]">
                      Project Title & Typology
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Define the physical nature and location of your development.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-project-title" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                      Project Title or Working Name *
                    </label>
                    <input
                      id="quote-project-title"
                      type="text"
                      placeholder="e.g. Proposed 12-Storey Commercial Complex, Victoria Island"
                      value={formData.projectTitle}
                      onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                      className={`w-full bg-neutral-50 border text-sm p-3 focus:outline-none ${
                        errors.projectTitle ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                      }`}
                    />
                    {errors.projectTitle && <p className="text-[11px] text-red-600">{errors.projectTitle}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="quote-project-type" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Development Typology
                      </label>
                      <select
                        id="quote-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 text-sm p-3 focus:outline-none focus:border-[#b5883e]"
                      >
                        <option value="Commercial & Office Skyscraper">Commercial & Office Skyscraper</option>
                        <option value="Multi-Unit Luxury Residential">Multi-Unit Luxury Residential</option>
                        <option value="Industrial Logistics & Warehouse">Industrial Logistics & Warehouse</option>
                        <option value="Healthcare & Hospital Complex">Healthcare & Hospital Complex</option>
                        <option value="Educational & Civic Infrastructure">Educational & Civic Infrastructure</option>
                        <option value="Banking & Retail Corporate Fitout">Banking & Retail Corporate Fitout</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="quote-project-location" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Project Location
                      </label>
                      <input
                        id="quote-project-location"
                        type="text"
                        placeholder="e.g. Ikoyi, Lagos / Abuja / Port Harcourt"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 text-sm p-3 focus:outline-none focus:border-[#b5883e]"
                      >
                      </input>
                    </div>
                  </div>

                  {/* Budget Slider */}
                  <div className="space-y-2 p-4 bg-neutral-50 border border-neutral-200">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold uppercase tracking-wider text-neutral-700">
                        Estimated Capital Budget
                      </span>
                      <span className="text-base font-bold font-display text-[#b5883e] tabular-nums">
                        {formatNaira(currentBudget)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={50_000_000}
                      max={30_000_000_000}
                      step={50_000_000}
                      value={currentBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudgetRange: e.target.value })}
                      className="w-full h-2 bg-neutral-300 appearance-none cursor-pointer accent-[#b5883e]"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                      <span>₦50M</span>
                      <span>₦5B</span>
                      <span>₦15B</span>
                      <span>₦30B+</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Scope of Services */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-display text-[#161324]">
                      Required Quantity Surveying Scope
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Select all services required for your upcoming development.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        key: 'pre-contract',
                        title: 'Pre-Contract Cost Engineering',
                        desc: 'Feasibility studies, approximate budgeting, Bills of Quantities (BOQ), tender documents & contractor bid analysis.',
                      },
                      {
                        key: 'post-contract',
                        title: 'Post-Contract Cost Administration',
                        desc: 'Monthly interim valuations, site audits, contractor variation claims vetting, and dispute-free final account settlement.',
                      },
                      {
                        key: 'project-management',
                        title: 'Turnkey Project Management',
                        desc: 'Multi-stakeholder site coordination, schedule monitoring, and full turnkey project governance.',
                      },
                      {
                        key: 'value-engineering',
                        title: 'Value Engineering & Lifecycle Optimization',
                        desc: 'Alternative materials analysis, design cost-effectiveness, and operational maintenance cost minimization.',
                      },
                      {
                        key: 'lender-monitoring',
                        title: 'Bank & Lender Financial Protection',
                        desc: 'Independent monthly project audits and drawdown certification for financial institutions and investors.',
                      },
                    ].map((svc) => {
                      const isChecked = formData.servicesNeeded.includes(svc.key);
                      return (
                        <div
                          key={svc.key}
                          onClick={() => handleServiceToggle(svc.key)}
                          className={`p-4 border transition-colors cursor-pointer flex items-start gap-3 ${
                            isChecked
                              ? 'bg-amber-50/50 border-[#b5883e]'
                              : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          <div className={`w-4 h-4 mt-0.5 border flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-[#b5883e] border-[#b5883e]' : 'border-neutral-400'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-neutral-900">{svc.title}</div>
                            <div className="text-[11px] text-neutral-600 leading-relaxed mt-0.5">{svc.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.servicesNeeded && <p className="text-[11px] text-red-600">{errors.servicesNeeded}</p>}
                </div>
              )}

              {/* STEP 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-display text-[#161324]">
                      Transmission & Client Contact
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Who should our Principal Partners contact with the formal quotation proposal?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="quote-contact-full-name" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Full Name *
                      </label>
                      <input
                        id="quote-contact-full-name"
                        type="text"
                        placeholder="e.g. Engr. Babatunde Adeleke"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-neutral-50 border text-sm p-3 focus:outline-none ${
                          errors.fullName ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="quote-contact-company-name" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Company / Organization
                      </label>
                      <input
                        id="quote-contact-company-name"
                        type="text"
                        placeholder="e.g. Apex Property Holdings Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 text-sm p-3 focus:outline-none focus:border-[#b5883e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="quote-contact-email" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Email Address *
                      </label>
                      <input
                        id="quote-contact-email"
                        type="email"
                        placeholder="e.g. babatunde@apexproperty.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-neutral-50 border text-sm p-3 focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="quote-contact-phone" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="quote-contact-phone"
                        type="tel"
                        placeholder="+234 803 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-neutral-50 border text-sm p-3 focus:outline-none ${
                          errors.phone ? 'border-red-500' : 'border-neutral-300 focus:border-[#b5883e]'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="quote-contact-details" className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                      Specific Notes, Drawings Status, or RFP Details
                    </label>
                    <textarea
                      id="quote-contact-details"
                      rows={3}
                      placeholder="Mention whether architectural drawings are complete, tender timelines, or specific lender requirements..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 text-sm p-3 focus:outline-none focus:border-[#b5883e]"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#b5883e] hover:bg-[#c89b4b] active:bg-[#946b2b] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{step === 3 ? 'Submit Request for Quote' : 'Continue to Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Instant Estimate Sidebar (4 cols) */}
            <div className="lg:col-span-4 bg-[#f8f9fa] p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="pb-3 border-b border-neutral-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#b5883e]">
                    Preliminary Assessment
                  </span>
                  <h4 className="text-base font-bold font-display text-[#161324] mt-0.5">
                    Live Calculation Preview
                  </h4>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-white border border-neutral-200 space-y-1">
                    <div className="text-neutral-500">Capital Construction Budget</div>
                    <div className="text-base font-bold text-[#161324] font-display tabular-nums">
                      {formatNaira(currentBudget)}
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-neutral-200 space-y-1">
                    <div className="text-neutral-500">Estimated QS & PM Fee Range</div>
                    <div className="text-base font-bold text-[#b5883e] font-display tabular-nums">
                      {calculation.estimatedFeeMinFormatted} – {calculation.estimatedFeeMaxFormatted}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-mono">
                      Scale: {calculation.feePercentageRange}
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-200 space-y-1">
                    <div className="text-emerald-800 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Projected Capital Savings</span>
                    </div>
                    <div className="text-sm font-bold text-emerald-900 tabular-nums">
                      {calculation.projectedCostSavingsFormatted}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-500 leading-relaxed border-t border-neutral-200 pt-3">
                  <span className="font-semibold text-neutral-700">Guarantee: </span>
                  Valuemarks Consultants is bound by the professional code of ethics of the Nigerian Institute of Quantity Surveyors (NIQS).
                </div>
              </div>

              <div className="p-3 bg-[#161324] text-white text-[11px] space-y-1">
                <div className="font-bold text-[#d8aa58]">Statutory Compliance</div>
                <div className="text-neutral-300">NIQS Practice Firm PF/006-V · QSRBN 1208</div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
