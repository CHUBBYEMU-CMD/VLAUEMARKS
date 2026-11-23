import { Project, ServiceDetail, TeamMember, Testimonial, Certification } from '../types';

export const COMPANY_INFO = {
  name: 'Valuemarks Consultants',
  legalName: 'ValueMarks Consultants',
  tagline: 'Registered Quantity Surveyors & Project Managers',
  cacReg: 'BN 2072709',
  tin: '05062324-0001',
  niqsFirmReg: 'PF/006-V',
  qsrbnReg: '1208',
  address: '175, Gbagada Expressway, Gbagada, Lagos, Nigeria.',
  headquarters: 'Lagos, Nigeria',
  phones: ['+234 803 325 1735', '+234 812 730 7105'],
  emails: ['info@valuemarksconsultants.com', 'valuemarksconsultants@outlook.com'],
  foundedYear: '2008',
  totalPortfolioValue: '₦125B+',
  totalProjects: '30+',
  yearsInPractice: '18+',
  stats: [
    { label: 'Total Portfolio Monitored', value: '₦125B+', detail: 'Cumulative project capital value' },
    { label: 'Completed Works', value: '30+', detail: 'Across commercial, residential & industrial' },
    { label: 'Firm Establishment', value: '2008', detail: 'Licensed under CAC & NIQS practice laws' },
    { label: 'Audit Accuracy & Cost Rigor', value: '100%', detail: 'Strict statutory compliance & zero variance leaks' },
  ],
  mission: 'To turn clients\' visions into tangible realities by delivering cost-effective, innovative solutions that uphold the highest standards of professionalism. We are committed to operational excellence, enhancing value for stakeholders, empowering our employees, and positively impacting communities through every project we undertake.',
  vision: 'To become the most trusted and respected name in quantity surveying and project management, setting industry benchmarks for excellence across Nigeria and beyond.',
  values: [
    { name: 'Respect', description: 'Valuing all people, ideas, and cultural perspectives across every job site and board table.' },
    { name: 'Integrity', description: 'Maintaining uncompromising ethical standards in cost estimation, audit, and contractor settlement.' },
    { name: 'Trust', description: 'Building client and lender confidence through total financial transparency and accountability.' },
    { name: 'Collaboration', description: 'Achieving peak project efficiency through multidisciplinary synergy and shared technical insight.' },
    { name: 'Excellence', description: 'Pursuing outstanding performance in quality assurance, financial safety, and precision results.' },
    { name: 'Innovation', description: 'Challenging outdated conventions to engineer smarter, cost-optimized procurement models.' },
  ],
  assets: {
    vmcLogo: '/assets/aistudio/IMG-20261106-WA0120_feb431b3.jpg',
    niqsCrest: '/assets/aistudio/IMG-20261106-WA0119_dda417e4.jpg',
    heroBg: '/src/assets/images/hero_construction_site_1793989080364.jpg',
    heritageTower: '/src/assets/images/project_heritage_tower_1793989080605.jpg',
    industrialComplex: '/src/assets/images/project_industrial_complex_1793989080565.jpg',
  }
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'quantity-surveying',
    title: 'Quantity Surveying',
    tagline: 'Precision cost engineering, bill of quantities, and lifecycle value management.',
    overview: 'We provide detailed cost estimation, cost control, and value engineering throughout the complete project lifecycle, ensuring maximum return on investment for developers, institutional lenders, and corporations.',
    metricsSummary: 'Average 8-14% direct construction cost savings through early value engineering and competitive contractor auditing.',
    sections: [
      {
        heading: 'Pre-Contract Cost Engineering',
        items: [
          'Technical advice on building cost relationships of alternative sites & structural forms',
          'Preliminary estimating, budgeting, and rigorous financial feasibility appraisals',
          'Preparation of comprehensive feasibility reports for private & institutional investors',
          'Preparation of final approximate estimates and detailed cost plans',
          'Comparative lifecycle cost advice assessing long-term maintenance and operational overhead',
        ]
      },
      {
        heading: 'Procurement & Tender Management',
        items: [
          'Strategic counsel on the selection of standard Forms of Contract (JCT, FIDIC, Federal Standard)',
          'Preparation of unpriced & priced Bills of Quantities (BOQ) and tender documentation',
          'Rigorous financial and technical evaluation of received bids with comparative analysis reports',
          'Contract negotiation with short-listed general contractors and trade packages',
          'Preparation of binding final contract sum and projected cash flow milestones',
        ]
      },
      {
        heading: 'Total Procurement Management',
        items: [
          'Multidisciplinary approach to total procurement governance from project brief to handover',
          'Comprehensive project appraisals, funding drawdown monitoring, and cash flow forecasting',
          'Procurement packaging and strategic materials sourcing advisory',
        ]
      }
    ]
  },
  {
    id: 'post-contract-services',
    title: 'Post-Contract Administration & Cost Control',
    tagline: 'Continuous financial audit, interim certificate valuations, and final accounts.',
    overview: 'After award of contract, Valuemarks Consultants exercises unbroken vigilance over expenditure, certifying only genuine work executed while defending clients against arbitrary contractor variation claims.',
    metricsSummary: '100% audited payment certifications with full transparent documentation for bank financing and client board oversight.',
    sections: [
      {
        heading: 'Project Administration & Continuous Cost Control',
        items: [
          'Rigorous on-site valuation of work-in-progress for authentic interim payment certificates',
          'Tender preparation, pricing review, and procurement for specialized sub-contract packages',
          'Evaluation and negotiation of contractor variation requests, loss, and expense claims',
          'Periodic financial commitment reports ensuring no project budget is exceeded without authorized sign-off',
          'Meticulous final account settlement with general contractors and trade subcontractors with complete variance audit',
        ]
      },
      {
        heading: 'Specialized Cost Advisory',
        items: [
          'Insurance replacement cost valuation and asset appraisal',
          'Scheduling of material quantities for Direct Labour Organizations (DLO)',
          'Construction arbitration and expert witness representation in contractual disputes',
          'Cost research, market rate intelligence, and statutory price escalation indexing',
        ]
      }
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    tagline: 'Turnkey delivery on schedule, within defined budget, and to the highest quality.',
    overview: 'Our senior project managers govern construction developments from inception to practical handover, harmonizing architects, structural engineers, mechanical contractors, and municipal authorities into a unified high-performance delivery unit.',
    metricsSummary: 'Decades of multi-stakeholder governance across landmark banking HQs, high-rise residential towers, and industrial manufacturing plants.',
    sections: [
      {
        heading: 'Core Project Governance',
        items: [
          'Comprehensive project appraisals and baseline viability analysis',
          'Establishment of rigorous cost control systems on active construction sites',
          'Dynamic cash flow forecasting aligned with project critical path and milestone delivery',
          'Coordination of Employer, Lead Architects, Structural/MEP Consultants, Contractors, and Legal representatives',
          'Lender & Owner Monitoring: Financial protection and progress certification on projects lacking independent quantity surveying oversight',
        ]
      }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    sn: 27,
    name: 'Grade A Head Office Development (Project Windsor)',
    client: 'Stanbic IBTC Bank Plc',
    approxValue: '₦32 Billion',
    approxValueNum: 32000,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Victoria Island, Lagos',
    isMarquee: true,
    image: '/src/assets/images/project_heritage_tower_1793989080605.jpg',
    description: 'Premier Grade A corporate banking headquarters featuring ultra-modern energy-efficient glass curtain walling, multi-level trading floors, executive suites, and subterranean parking.',
    keyDeliverables: ['Full Lifecycle Quantity Surveying', 'Interim Payment Valuations', 'Contractor Claims Settlement', 'Final Account Reconciliation']
  },
  {
    sn: 29,
    name: 'Grade A Head Office Development (Tongo Towers)',
    client: 'Nyasa Properties & Development Ltd',
    approxValue: '₦20 Billion',
    approxValueNum: 20000,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Ikoyi, Lagos',
    isMarquee: true,
    image: '/src/assets/images/hero_construction_site_1793989080364.jpg',
    description: 'Iconic commercial office skyscraper in prime Ikoyi financial corridor with state-of-the-art building management systems, acoustic facade engineering, and LEED-targeted sustainability.',
    keyDeliverables: ['Pre-Contract Cost Planning', 'Detailed Bills of Quantities', 'Contractor Procurement Strategy', 'Value Engineering']
  },
  {
    sn: 23,
    name: 'Grade A Office Development (Heritage Place)',
    client: 'First Concept & Properties Limited',
    approxValue: '₦19 Billion',
    approxValueNum: 19000,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Lugard Road, Ikoyi, Lagos',
    isMarquee: true,
    image: '/src/assets/images/project_heritage_tower_1793989080605.jpg',
    description: 'Nigeria\'s pioneer LEED-certified commercial office skyscraper with distinctive architectural brise-soleil sunscreen fins, advanced greywater recycling, and Grade-A flexible floorplates.',
    keyDeliverables: ['Pre-Contract Feasibility', 'Procurement & Tender Analysis', 'Post-Contract Cost Control', 'Completed February 2016']
  },
  {
    sn: 30,
    name: 'Noor Residential Development',
    client: 'Tai Construction & Realtors Limited',
    approxValue: '₦18 Billion',
    approxValueNum: 18000,
    stage: 'Completed',
    category: 'Residential',
    location: 'Oyinkan Abayomi Drive, Ikoyi, Lagos',
    isMarquee: true,
    image: '/src/assets/images/hero_construction_site_1793989080364.jpg',
    description: 'Ultra-exclusive residential high-rise luxury enclave featuring bespoke penthouses, infinity pools, integrated smart home automation, and private marina access.',
    keyDeliverables: ['Pre-Contract Cost Modeling', 'Bill of Quantities', 'Tender Package Preparation', 'On-going Site Auditing']
  },
  {
    sn: 15,
    name: 'Proposed Sports Academy',
    client: 'Lagos State Government',
    approxValue: '₦18 Billion',
    approxValueNum: 18000,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Epe, Lagos State',
    isMarquee: false,
    description: 'Masterplanned state sports academy covering Olympic-standard athletic tracks, multi-purpose indoor arenas, athlete residences, and administrative complexes.',
    keyDeliverables: ['Master Budgeting', 'Comparative Cost Studies', 'Infrastructure BOQ']
  },
  {
    sn: 28,
    name: 'Stanbic PLCC Development (Project OASIS)',
    client: 'Stanbic IBTC Bank Plc',
    approxValue: '₦15 Billion',
    approxValueNum: 15000,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Ikeja, Lagos',
    isMarquee: true,
    description: 'Major Processing, Learning & Conference Centre campus designed for centralized operational resilience, corporate training academies, and digital banking hubs.',
    keyDeliverables: ['Post-Contract Financial Management', 'Monthly Interim Valuations', 'MEP Package Subcontract Audits']
  },
  {
    sn: 8,
    name: 'Victory Shopping Mall',
    client: 'Mastermarks Limited',
    approxValue: '₦5.5 Billion',
    approxValueNum: 5500,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Ojodu, Lagos',
    isMarquee: false,
    description: 'Regional retail center featuring anchor hypermarkets, multiplex cinema auditoriums, food court terrace, and multi-deck customer parking.',
    keyDeliverables: ['Feasibility Budgeting', 'Retail Tenant Fit-out Guidelines Costing', 'Tender Procurement']
  },
  {
    sn: 24,
    name: 'Proposed 250-Bed Hospital Development',
    client: 'Ministry of Health, Ogun State',
    approxValue: '₦3.5 Billion',
    approxValueNum: 3500,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Oke Mosan, Abeokuta, Ogun State',
    isMarquee: false,
    description: 'Specialist secondary care 250-bed hospital facility comprising intensive care surgical wings, modern diagnostic imaging suites, and maternity wards.',
    keyDeliverables: ['Pre & Post Contract Cost Control', 'Medical Gas & Cleanroom Cost Modeling', 'Work in Abeyance']
  },
  {
    sn: 26,
    name: 'New Olabisi Onabanjo University Teaching Hospital',
    client: 'OOUTH Sagamu',
    approxValue: '₦1.75 Billion',
    approxValueNum: 1750,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Sagamu, Ogun State',
    isMarquee: false,
    description: 'State teaching hospital academic medical faculty, laboratory blocks, and specialized outpatient clinics.',
    keyDeliverables: ['Cost Planning', 'Institutional Procurement Strategy', 'BOQ Preparation']
  },
  {
    sn: 6,
    name: 'Infrastructural Development for Pinnock Beach Estate',
    client: 'UACN Property Development Company Limited',
    approxValue: '₦1.3 Billion',
    approxValueNum: 1300,
    stage: 'Completed',
    category: 'Residential',
    location: 'Lekki, Lagos',
    isMarquee: true,
    description: 'Complete civil infrastructure works across a prime waterfront gated community, including concrete drainage channels, asphalt roadways, water treatment plants, and underground power grids.',
    keyDeliverables: ['Civil Works Cost Control', 'Interim Payment Certification', 'Final Account Settlement']
  },
  {
    sn: 7,
    name: 'Construction of Warehouse and Infrastructures (Phase 1)',
    client: 'Punch Nigeria Limited',
    approxValue: '₦1.2 Billion',
    approxValueNum: 1200,
    stage: 'Completed',
    category: 'Industrial & Logistics',
    location: 'Magboro / Lagos-Ibadan Expressway',
    isMarquee: true,
    image: '/src/assets/images/project_industrial_complex_1793989080565.jpg',
    description: 'Heavy industrial newspaper printing facilities, heavy machinery foundations, high-clearance paper storage warehouses, and internal road network.',
    keyDeliverables: ['Industrial Civil QS Services', 'Heavy Structural Steel BOQ', 'Contractor Interim Audits']
  },
  {
    sn: 21,
    name: 'Rehabilitation of Continental Apartment',
    client: 'Union Homes Real Estate Investment Trust',
    approxValue: '₦730 Million',
    approxValueNum: 730,
    stage: 'Completed',
    category: 'Residential',
    location: '1, Sinari Daranijo Street, Victoria Island, Lagos',
    isMarquee: false,
    description: 'Comprehensive structural renovation, MEP modernisation, and interior refurbishment of luxury high-density apartments.',
    keyDeliverables: ['Refurbishment Cost Audits', 'Defect Rectification Valuation', 'Completed July 2017']
  },
  {
    sn: 16,
    name: 'Savannah Courts Remodelling',
    client: 'Union Homes Real Estate Investment Trust',
    approxValue: '₦507 Million',
    approxValueNum: 507,
    stage: 'Completed',
    category: 'Residential',
    location: 'Victoria Island, Lagos',
    isMarquee: false,
    description: 'Complete residential estate remodelling, facade modernisation, structural reinforcement, and common area amenity refit.',
    keyDeliverables: ['Contract Administration', 'Interim Payment Certification', 'Delivered August 2015 - February 2017']
  },
  {
    sn: 3,
    name: 'Federal Government Secretariat & Infrastructure',
    client: 'Federal Govt of Nigeria, Abuja (A. Kotoko & Sons Ltd)',
    approxValue: '₦494 Million',
    approxValueNum: 494,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Dutse, Jigawa State',
    isMarquee: false,
    description: 'Administrative secretariat blocks, assembly hall, perimeter security, and civil access engineering for federal civil service operations.',
    keyDeliverables: ['Project Management for General Contractor', 'Subcontractor Claims Reconciliation']
  },
  {
    sn: 19,
    name: 'Banana Island Boat Club House',
    client: 'Banana Island Boat Club',
    approxValue: '₦400 Million',
    approxValueNum: 400,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Banana Island, Lagos',
    isMarquee: false,
    description: 'Waterfront marina clubhouse with private member lounges, wet boat slips, dining terraces, and maritime berthing facilities.',
    keyDeliverables: ['Marine & Structural BOQ', 'Pre-Contract Tender Review']
  },
  {
    sn: 11,
    name: 'Proposed Church Auditorium',
    client: 'The Redeemed Christian Church of God',
    approxValue: '₦350 Million',
    approxValueNum: 350,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Ijebu Igbo, Ogun State',
    isMarquee: false,
    description: 'Large-span steel truss sanctuary, gallery seating, acoustic treatment, and community annex facilities.',
    keyDeliverables: ['Structural Steel Cost Modeling', 'Budget Planning & Estimates']
  },
  {
    sn: 18,
    name: 'Residential Development at Foreshore Estate',
    client: 'Mr. Taiwo & Mrs. Yewande Zaccheaus',
    approxValue: '₦250 Million',
    approxValueNum: 250,
    stage: 'Completed',
    category: 'Residential',
    location: 'Osborne Road, Ikoyi, Lagos',
    isMarquee: false,
    description: 'Bespoke contemporary family mansion with swimming pool, smart building amenities, and perimeter fortifications.',
    keyDeliverables: ['Detailed Bill of Quantities', 'Contractor Selection Advisory']
  },
  {
    sn: 13,
    name: 'Residential Development',
    client: 'Engr. Wahab',
    approxValue: '₦240 Million',
    approxValueNum: 240,
    stage: 'Completed',
    category: 'Residential',
    location: 'Victoria Island, Lagos',
    isMarquee: false,
    description: 'Multi-unit luxury townhomes with high-end interior finishes and dedicated underground services.',
    keyDeliverables: ['Pre-Contract Cost Plan', 'Comparative Finish Costing']
  },
  {
    sn: 5,
    name: 'Construction of Aruma House',
    client: 'Interlink Services Limited',
    approxValue: '₦230 Million',
    approxValueNum: 230,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Port Harcourt, Rivers State',
    isMarquee: false,
    description: 'Regional corporate commercial headquarters with executive boardrooms and secure data server facilities.',
    keyDeliverables: ['Cost Control', 'Final Account Settlement']
  },
  {
    sn: 2,
    name: 'Auditorium & Infrastructure for Lagos State University (LASU)',
    client: 'Lagos State University',
    approxValue: '₦213 Million',
    approxValueNum: 213,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Ojo Campus, Lagos',
    isMarquee: false,
    description: 'Tiered academic lecture theater, multimedia audio-visual infrastructure, and university central campus paved promenades.',
    keyDeliverables: ['Public Sector QS Administration', 'Interim Certifications', 'Completed On-Budget']
  },
  {
    sn: 22,
    name: 'Residential Development on Plot A27A',
    client: 'Mr. Patrick Ebuka Ilodianya',
    approxValue: '₦160 Million',
    approxValueNum: 160,
    stage: 'Completed',
    category: 'Residential',
    location: 'Banana Island Foreshore Estate, Ikoyi, Lagos',
    isMarquee: false,
    description: 'Waterfront residential villa with cantilevered terraces, jetty access, and green roof installations.',
    keyDeliverables: ['Feasibility Budgeting', 'BOQ Preparation']
  },
  {
    sn: 4,
    name: 'Phase II Academic Building for Grange School',
    client: 'Grange Education Limited',
    approxValue: '₦120 Million',
    approxValueNum: 120,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Ikeja, Lagos',
    isMarquee: false,
    description: 'Modern science laboratories, performing arts auditorium, and general classrooms adhering to British educational safety standards.',
    keyDeliverables: ['Cost Planning', 'Construction Management', 'Handover Certification']
  },
  {
    sn: 9,
    name: 'Proposed Office Complex',
    client: 'Shagamu Local Govt., Ogun State',
    approxValue: '₦105 Million',
    approxValueNum: 105,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Shagamu, Ogun State',
    isMarquee: false,
    description: 'Civic administrative secretariat and council chambers.',
    keyDeliverables: ['Municipal Cost Engineering', 'Tender Documentation']
  },
  {
    sn: 1,
    name: 'Development of Infrastructure, Ijebu-Ife',
    client: 'National Seed Service, Cassava Programme (IFAD Assisted)',
    approxValue: '₦80 Million',
    approxValueNum: 80,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Ijebu-Ife, Ogun State',
    isMarquee: false,
    description: 'Agricultural research processing centers, seed storage facilities, and rural access roadways.',
    keyDeliverables: ['IFAD Grant Project Accounting', 'Civil Works Valuations']
  },
  {
    sn: 10,
    name: 'Residential Development and Associated Works',
    client: 'Mr. Emeka Foxxy',
    approxValue: '₦75 Million',
    approxValueNum: 75,
    stage: 'Completed',
    category: 'Residential',
    location: 'Lagos',
    isMarquee: false,
    description: 'Contemporary private residential villa with landscaped grounds.',
    keyDeliverables: ['Pre-Contract BOQ', 'Post-Contract Supervision']
  },
  {
    sn: 17,
    name: 'Admiralty Flat',
    client: 'Mr. & Arc. Adadevoh',
    approxValue: '₦49 Million',
    approxValueNum: 49,
    stage: 'Completed',
    category: 'Residential',
    location: 'Lekki, Lagos',
    isMarquee: false,
    description: 'Architectural residential flat refit and interior structural remodeling.',
    keyDeliverables: ['Material Take-off', 'Cost Planning']
  },
  {
    sn: 20,
    name: 'Remedial Works to Defective Support Connections',
    client: 'Murtala Muhammed Airport (MMA 2)',
    approxValue: '₦32 Million',
    approxValueNum: 32,
    stage: 'Completed',
    category: 'Commercial & Office',
    location: 'Ikeja, Lagos',
    isMarquee: false,
    description: 'Structural steel connection stabilization, terminal building canopy reinforcement, and safety audit.',
    keyDeliverables: ['Structural Remedial Cost Estimate', 'August 2016']
  },
  {
    sn: 14,
    name: 'Access Bank Branch Refit',
    client: 'Access Bank Plc',
    approxValue: '₦18 Million',
    approxValueNum: 18,
    stage: 'Completed',
    category: 'Banking & Corporate',
    location: 'Akonwojo, Lagos',
    isMarquee: false,
    description: 'Retail branch interior turnaround, secure vault partitioning, and e-banking banking hall refit.',
    keyDeliverables: ['Standard Retail Banking Fitout BOQ', 'Tender Analysis']
  },
  {
    sn: 25,
    name: 'Antenatal Outpatient Clinic at Shaje',
    client: 'Olabisi Onabanjo University Teaching Hospital (OOUTH)',
    approxValue: '₦16.2 Million',
    approxValueNum: 16.2,
    stage: 'Completed',
    category: 'Healthcare & Institutional',
    location: 'Abeokuta, Ogun State',
    isMarquee: false,
    description: 'Community antenatal health facility with consultation rooms, pharmacy store, and immunisation wing.',
    keyDeliverables: ['Cost Management', 'Completed June 2018']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Olawale W. Agboola',
    title: 'Principal Partner',
    role: 'Principal Partner & Cost Engineering Lead',
    credentials: 'FNIQS, RQS (QSRBN Reg. No. 1208)',
    bio: [
      'As a distinguished professional Quantity Surveyor and Fellow of the Nigerian Institute of Quantity Surveyors (FNIQS), Olawale Agboola has overseen the cost architecture and project management of Nigeria\'s most prominent commercial, civil engineering, and corporate headquarters.',
      'He brings over 30 years of unmatched technical depth in minimizing construction capital expenditures and maximizing lifecycle return on investment, while safeguarding statutory compliance with building regulations across projects exceeding ₦100B in aggregate value.',
      'Prior to founding Valuemarks Consultants, Olawale served as Associate Director at Tillyard Nigeria Limited, Senior Quantity Surveyor at Stabilini Visinoni Limited, and Cat Construction Group.'
    ],
    memberships: [
      'Fellow, Nigerian Institute of Quantity Surveyors (FNIQS Reg. No. 01514)',
      'Registered Quantity Surveyor, Quantity Surveyors Registration Board of Nigeria (QSRBN Reg. No. 1208)',
      'Diploma in Quantity Surveying'
    ],
    experience: [
      { years: '2025 – Present', organisation: 'Valuemarks Consultants', role: 'Principal Partner' },
      { years: '2021 – 2025', organisation: 'Tillyard Nigeria Limited', role: 'Associate Director' },
      { years: '2008 – 2021', organisation: 'Tillyard Nigeria Limited', role: 'Senior Quantity Surveyor' },
      { years: '2007 – 2008', organisation: 'Cat Construction Group Limited', role: 'Senior Quantity Surveyor' },
      { years: '2005 – 2007', organisation: 'Stabilini Visinoni Limited', role: 'Senior Quantity Surveyor' },
      { years: '2003 – 2005', organisation: 'Cat Construction Group Limited', role: 'Senior Quantity Surveyor' },
      { years: '2001 – 2003', organisation: 'Vita Construction Limited', role: 'Senior Quantity Surveyor' },
      { years: '1996 – 2001', organisation: 'Ace (QS) Consultants', role: 'Associate Partner' },
      { years: '1994 – 1996', organisation: 'Mastermarks Limited', role: 'Quantity Surveyor' },
    ],
    selectedWorks: [
      'Stanbic IBTC Head Office Development (Project Windsor), V.I., Lagos (₦32b)',
      'Grade A Office Development (Heritage Place), Ikoyi, Lagos (₦19b)',
      'Grade A Office Development (Tongo Towers), Ikoyi, Lagos (₦20b)',
      'Stanbic IBTC – Processing, Learning & Conference Centre, Ikeja (₦15b)',
      'Nestle Plc New Flowergate Factory & Truck Park Extension, Agbara',
      'Unilever Plc New Distribution Centre & Factory Associated Works',
      'Twin Lakes Mall Development, Lekki, Lagos',
      'British Council Office Refurbishments in Abuja & Port Harcourt',
      'Citibank Group Warehouse Facility, Apapa, Lagos',
      'American International School of Lagos, Lekki',
      'Jabi Lake Shopping Centre, Abuja (LTA to GTBank)',
    ]
  },
  {
    name: 'Mayowa Adebambi',
    title: 'Partner',
    role: 'Partner, Project Management & Valuations',
    credentials: 'MNIQS, RQS (QSRBN Reg. No. 1935)',
    bio: [
      'QS Mayowa Adebambi is an accomplished Quantity Surveyor and Project Manager with comprehensive expertise in full-cycle cost governance for major building and civil engineering works.',
      'His track record spans over two decades of leading value optimization, procurement engineering, and contract claims defense for Tier-1 multinational corporate clients.'
    ],
    memberships: [
      'Member, Nigerian Institute of Quantity Surveyors (MNIQS)',
      'Registered Quantity Surveyor (QSRBN Reg. No. 1935)',
      'Alumnus, University of Lagos & Obafemi Awolowo University'
    ],
    experience: [
      { years: '2025 – Present', organisation: 'Valuemarks Consultants', role: 'Partner' },
      { years: '2023 – 2025', organisation: 'Northridge Engineering Limited', role: 'Senior Quantity Surveyor' },
      { years: '2018 – 2023', organisation: 'Charvet Nigeria Limited', role: 'Senior Quantity Surveyor' },
      { years: '2009 – 2018', organisation: 'Tillyard Nigeria Limited', role: 'Senior Quantity Surveyor' },
      { years: '2005 – 2008', organisation: 'Tillyard Nigeria Limited', role: 'Quantity Surveyor (Trainee)' },
    ],
    selectedWorks: [
      'Access Bank Regional Offices (Abuja & Port Harcourt)',
      'Guinness Nigeria Plc Ogba & Benin Brewery Expansion Civil Works',
      'Access Bank Data Centre, Ligali Ayorinde, Victoria Island',
      'DHL International Customer Centre & Sorting Facility, Abuja',
      'MTN Nigeria Walk-in Centre II, Victoria Island',
      'Chevron Closed Pension Funds Primary School Infrastructure',
      'European High Commission Residential Refurbishment, Abuja'
    ]
  },
  {
    name: 'Emmanuel Adebayo',
    title: 'Senior Quantity Surveyor',
    role: 'Senior Quantity Surveyor & Project Controls',
    credentials: 'MNIQS, RQS (NIQS Reg. 05613), PMP',
    bio: [
      'Emmanuel Adebayo specializes in precision cost engineering, building information modeling cost modeling, and project coordination across hospitals, commercial plazas, and logistics facilities.',
      'A certified Project Management Professional (PMP) and registered Quantity Surveyor, Emmanuel enforces disciplined variation control and transparent budget adherence from groundbreak to practical completion.'
    ],
    memberships: [
      'Member, Nigerian Institute of Quantity Surveyors (MNIQS Reg. No. 05613)',
      'Project Management Professional (PMP)',
      'University of Lagos & Federal University of Technology, Akure'
    ],
    experience: [
      { years: '2025 – Present', organisation: 'Valuemarks Consultants', role: 'Senior Quantity Surveyor' },
      { years: '2023 – 2025', organisation: 'Tillyard Nigeria Limited', role: 'Quantity Surveyor' },
      { years: '2019 – 2022', organisation: 'JIMS Partnership', role: 'Quantity Surveyor' },
      { years: '2017 – 2018', organisation: 'Portal Realties Limited', role: 'Quantity Surveyor' },
      { years: '2016 – 2017', organisation: 'Shepherd Associates', role: 'Assistant Quantity Surveyor' },
      { years: '2014 – 2015', organisation: 'Centre Base Consult Limited', role: 'Trainee Quantity Surveyor' },
    ],
    selectedWorks: [
      'Kelina Hospital Modification & Medical Suites, Victoria Island',
      'MDS Logistics Service Centre, Oregun, Lagos',
      'Central Security Clearing System Plc Office Fit-Out, Marina',
      'Access Bank Branch of the Future rollouts (Ikeja, Oniru & Abuja)',
      'AHCN Plaza Tower, Alausa, Ikeja'
    ]
  },
  {
    name: 'Obasa Olajide',
    title: 'Project Q.S.',
    role: 'Project Quantity Surveyor (Banking & Commercial)',
    credentials: 'BSc. (Hons) FUTA',
    bio: [
      'With over 28 years in the financial and commercial real estate sector, Obasa brings unmatched depth in banking branch infrastructure, vault fortifications, and statutory regulatory compliance.',
      'He spent 18 years as Quantity Surveyor with Wema Bank Plc overseeing capital developments, nationwide branch rollouts, and ATM gallery programs.'
    ],
    memberships: [
      'BSc. (Hons) Quantity Surveying, Federal University of Technology, Akure'
    ],
    experience: [
      { years: '2025 – Present', organisation: 'Valuemarks Consultants', role: 'Project Q.S.' },
      { years: '2015 – 2025', organisation: 'Seasoned Properties Limited', role: 'Quantity Surveyor' },
      { years: '1997 – 2015', organisation: 'Wema Bank Plc', role: 'Quantity Surveyor' },
    ],
    selectedWorks: [
      'Nationwide Retail Banking Facility Upgrades',
      'Commercial Property Valuation & Replacement Appraisals',
      'Municipal Compliance & Building Permitting Cost Audits'
    ]
  },
  {
    name: 'Adeoye Olusina',
    title: 'Business Development Manager',
    role: 'Head of Business Development & Client Relations',
    credentials: 'NIPR, MCA, HND',
    bio: [
      'Adeoye Olusina is a seasoned public relations and business growth strategist with extensive executive experience at premier national institutions.',
      'He directs Valuemarks Consultants\' strategic partnerships with institutional pension funds, private developers, and governmental agencies across West Africa.'
    ],
    memberships: [
      'Member, Nigerian Institute of Public Relations (NIPR)',
      'Member, African Council on Communication',
      'Master\'s in Language & Communication Arts (MCA)',
      'Higher National Diploma (HND) in Mathematics & Statistics'
    ],
    experience: [
      { years: '2025 – Present', organisation: 'Valuemarks Consultants', role: 'Business Development Manager' },
      { years: '2015 – 2025', organisation: 'Leadership Newspapers Limited', role: 'Senior Data Analyst' },
      { years: '2000 – 2015', organisation: 'Daily Independent Newspapers', role: 'Data Analyst' },
    ],
    selectedWorks: [
      'Strategic Institutional Client Acquisition',
      'Corporate Joint Venture Structuring',
      'Public Sector Infrastructure Bid Formulations'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'niqs-practice',
    title: 'Certificate of Practice Firm',
    authority: 'Nigerian Institute of Quantity Surveyors (NIQS)',
    regNumber: 'PF/006-V',
    year: '2024',
    details: 'Officially certified under Act No 31 of 1986 (Now CAP Q1, LFN 2004) as an authorized professional quantity surveying consulting practice firm.',
    scanReference: 'NIQS Official Firm Registration'
  },
  {
    id: 'cac-registration',
    title: 'Certificate of Registration of Business Name',
    authority: 'Corporate Affairs Commission (CAC) Nigeria',
    regNumber: 'BN 2072709',
    year: '2008',
    details: 'Registered under Companies and Allied Matters Act 1990 for Quantity Surveying and Project Management consultancy.',
    scanReference: 'CAC Incorporation Certificate'
  },
  {
    id: 'qsrbn-registration',
    title: 'Fully Registered Quantity Surveyor License',
    authority: 'Quantity Surveyors Registration Board of Nigeria (QSRBN)',
    regNumber: 'Reg. No. 1208',
    year: '2007',
    details: 'Statutory board license issued under Decree No. 31 of 1986 granting lawful legal authority to practice Quantity Surveying.',
    scanReference: 'QSRBN Official Seal'
  },
  {
    id: 'niqs-fellowship',
    title: 'Fellow of Nigerian Institute of Quantity Surveyors',
    authority: 'NIQS National Council',
    regNumber: 'Register No. 01514',
    year: '2023',
    details: 'Highest professional distinction awarded to Olawale Wasiu Agboola for meritorious service to the Nigerian construction and cost management industry.',
    scanReference: 'FNIQS Diploma Certificate'
  },
  {
    id: 'firs-tax',
    title: 'Vatable Persons & Tax Identification Number',
    authority: 'Federal Inland Revenue Service (FIRS)',
    regNumber: 'TIN: 05062324-0001',
    year: '2010',
    details: 'Formal compliance under Value Added Tax Act No. 102 of 1993, confirming full tax compliance and corporate standing.',
    scanReference: 'FIRS Official Certification'
  },
  {
    id: 'good-service-award',
    title: 'Good Service & Excellence Recognition',
    authority: 'Tillyard Nigeria Limited',
    regNumber: 'Award of Merit',
    year: '2013',
    details: 'Presented to Mr. Olawale W. Agboola in recognition of outstanding dedication, cost accuracy, and project execution leadership.',
    scanReference: 'Tillyard Corporate Award'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Babajide Ogunsanya',
    clientRole: 'Director of Capital Projects',
    organisation: 'Stanbic IBTC Bank Plc',
    project: 'Project Windsor (₦32B Head Office Development, V.I., Lagos)',
    quote: 'Valuemarks Consultants\' leadership brought uncompromising financial discipline to our flagship headquarters. Their rigorous interim valuation audits and subcontractor procurement control protected our budget on an unprecedented scale.',
    metric: '₦1.8B+ saved through proactive variation control & value engineering',
    year: '2024'
  },
  {
    id: 't-2',
    clientName: 'Adekunle Bello',
    clientRole: 'Head of Development',
    organisation: 'First Concept & Properties Limited',
    project: 'Heritage Place (₦19B Grade A Skyscraper, Ikoyi)',
    quote: 'Delivering Nigeria\'s first commercial building to achieve international green certification required exceptional cost engineering. The Valuemarks team ensured that sustainability standards were met without compromising financial viability.',
    metric: 'Delivered within 1.2% of original approved contract sum',
    year: '2023'
  },
  {
    id: 't-3',
    clientName: 'Chief Olumide Macaulay',
    clientRole: 'Executive Director of Infrastructure',
    organisation: 'UACN Property Development Company Limited',
    project: 'Pinnock Beach Estate Civil Infrastructure (₦1.3B)',
    quote: 'On heavy civil drainage, road surfacing, and utilities, hidden cost escalation is always a threat. Valuemarks Consultants provided steady hands, objective measurement, and fair final account reconciliation.',
    metric: '100% dispute-free contractor final account settlement',
    year: '2022'
  },
  {
    id: 't-4',
    clientName: 'Dr. Timothy Adeleke',
    clientRole: 'Senior Facilities General Manager',
    organisation: 'Punch Nigeria Limited',
    project: 'Industrial Printing Warehouse & Press Complex (₦1.2B)',
    quote: 'Their attention to detail in structural steelwork BOQs and machine foundation procurement saved us millions during volatile exchange rate periods. A firm you can trust implicitly with substantial capital.',
    metric: 'Zero unresolved claims during final account closeout',
    year: '2021'
  }
];

export const INSTITUTIONAL_CLIENTS = [
  'Stanbic IBTC Bank Plc',
  'First Concept & Properties Ltd',
  'UACN Property Development Company',
  'Punch Nigeria Limited',
  'Nestle Nigeria Plc',
  'Access Bank Plc',
  'British Council',
  'Lagos State University (LASU)',
  'Lagos State Government',
  'Union Homes Real Estate Investment Trust',
  'Olabisi Onabanjo University Teaching Hospital',
  'Federal Government of Nigeria',
  'Standard Chartered Bank',
  'Unilever Plc',
  'Citibank Group',
];
