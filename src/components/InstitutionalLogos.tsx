import React from 'react';

export interface InstitutionalClientItem {
  id: string;
  name: string;
  sector: string;
  logo: React.ReactNode;
}

export const INSTITUTIONAL_CLIENT_ITEMS: InstitutionalClientItem[] = [
  {
    id: 'stanbic-ibtc',
    name: 'Stanbic IBTC Bank Plc',
    sector: 'Tier-1 Commercial Banking',
    logo: (
      <svg viewBox="0 0 180 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stanbic Blue Shield with curved loop */}
        <g transform="translate(4, 2)">
          <path d="M0 6C0 2.68629 2.68629 0 6 0H28C31.3137 0 34 2.68629 34 6V24C34 32.8366 26.8366 40 18 40H16C7.16344 40 0 32.8366 0 24V6Z" fill="#0033a0" />
          {/* White inner forward ribbon loop */}
          <path d="M17 10C12.5817 10 9 13.5817 9 18C9 22.4183 12.5817 26 17 26C21.4183 26 25 22.4183 25 18H21C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18H25C25 13.5817 21.4183 10 17 10Z" fill="#ffffff" />
          <path d="M22 14L28 18L22 22V14Z" fill="#ffffff" />
        </g>
        {/* Typography */}
        <text x="46" y="22" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="15" fontWeight="bold" letterSpacing="0.5">
          Stanbic IBTC
        </text>
        <text x="46" y="34" fill="#8ea2c6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="600" letterSpacing="1.2">
          BANK PLC
        </text>
      </svg>
    ),
  },
  {
    id: 'access-bank',
    name: 'Access Bank Plc',
    sector: 'Commercial Banking Network',
    logo: (
      <svg viewBox="0 0 170 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Access Bank Chevron Interlocking Arrows */}
        <g transform="translate(6, 6)">
          <path d="M0 16L11 4L22 16L18 20L11 12L4 20L0 16Z" fill="#f58220" />
          <path d="M11 20L22 8L33 20L29 24L22 16L15 24L11 20Z" fill="#002b49" stroke="#f58220" strokeWidth="1" />
          <path d="M6 24L11 20L16 24L11 28L6 24Z" fill="#f58220" />
        </g>
        {/* Wordmark */}
        <text x="46" y="24" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="17" fontWeight="bold" letterSpacing="-0.5">
          access
        </text>
        <circle cx="112" cy="18" r="3" fill="#f58220" />
        <text x="46" y="35" fill="#f58220" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="1.5">
          BANK PLC
        </text>
      </svg>
    ),
  },
  {
    id: 'standard-chartered',
    name: 'Standard Chartered Bank',
    sector: 'Multinational Banking',
    logo: (
      <svg viewBox="0 0 195 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Dual Helix Ribbon Emblem */}
        <g transform="translate(4, 4)">
          <path d="M16 6C11 6 7 10 7 15C7 20 11 24 16 24C21 24 25 28 25 33C25 38 21 42 16 42" stroke="#0091ff" strokeWidth="4" strokeLinecap="round" />
          <path d="M12 2C17 2 21 6 21 11C21 16 17 20 12 20C7 20 3 24 3 29C3 34 7 38 12 38" stroke="#2ebd59" strokeWidth="4" strokeLinecap="round" />
        </g>
        {/* Typography */}
        <text x="38" y="20" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="13" fontWeight="bold" letterSpacing="0.2">
          Standard
        </text>
        <text x="38" y="34" fill="#2ebd59" fontFamily="'Outfit', sans-serif" fontSize="13" fontWeight="bold" letterSpacing="0.2">
          Chartered
        </text>
      </svg>
    ),
  },
  {
    id: 'citibank',
    name: 'Citibank Group',
    sector: 'Global Institutional Banking',
    logo: (
      <svg viewBox="0 0 150 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Iconic Red Arc */}
        <path d="M38 11C47 4 58 4 67 11" stroke="#ed1b2d" strokeWidth="3.5" strokeLinecap="round" />
        {/* Citi Wordmark */}
        <text x="14" y="30" fill="#003b70" className="drop-shadow-xs" fontFamily="'Outfit', sans-serif" fontSize="26" fontWeight="bold" letterSpacing="-1">
          citi
        </text>
        <text x="16" y="30" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="26" fontWeight="bold" letterSpacing="-1">
          citi
        </text>
        <text x="75" y="30" fill="#8ea2c6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="bold" letterSpacing="1">
          GROUP
        </text>
      </svg>
    ),
  },
  {
    id: 'nestle',
    name: 'Nestle Nigeria Plc',
    sector: 'FMCG & Industrial Manufacturing',
    logo: (
      <svg viewBox="0 0 160 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nest with bird and chicks */}
        <g transform="translate(6, 6)">
          <ellipse cx="14" cy="22" rx="14" ry="7" fill="#005ca9" />
          <path d="M4 22C4 22 8 16 14 16C20 16 24 22 24 22" stroke="#ffffff" strokeWidth="1.5" />
          {/* Mother bird */}
          <path d="M12 12C12 9 15 6 18 6C20 6 21 8 20 10C21 11 22 13 20 15L14 16Z" fill="#ffffff" />
          {/* Fledglings */}
          <circle cx="9" cy="19" r="2" fill="#ffffff" />
          <circle cx="15" cy="19" r="2" fill="#ffffff" />
        </g>
        {/* Nestlé wordmark with signature upper N-bar */}
        <text x="42" y="24" fill="#ffffff" fontFamily="'Times New Roman', serif" fontSize="19" fontWeight="bold" letterSpacing="0.5">
          Nestlé
        </text>
        <path d="M42 9H98" stroke="#ffffff" strokeWidth="2" />
        <text x="42" y="35" fill="#a0b8d8" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="bold" letterSpacing="1">
          NIGERIA PLC
        </text>
      </svg>
    ),
  },
  {
    id: 'unilever',
    name: 'Unilever Plc',
    sector: 'Multinational Manufacturing',
    logo: (
      <svg viewBox="0 0 160 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Unilever Intricate U Monogram */}
        <g transform="translate(6, 4)">
          <path d="M4 4C4 18 6 32 18 32C30 32 32 18 32 4" stroke="#4170ff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="8" cy="8" r="2.5" fill="#4170ff" />
          <circle cx="28" cy="8" r="2.5" fill="#4170ff" />
          <path d="M12 18L18 24L24 18" stroke="#4170ff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="14" r="2" fill="#d8aa58" />
        </g>
        {/* Typography */}
        <text x="46" y="24" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="18" fontWeight="bold" letterSpacing="0.2">
          Unilever
        </text>
        <text x="46" y="35" fill="#8ea2c6" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="bold" letterSpacing="1.2">
          PLC NIGERIA
        </text>
      </svg>
    ),
  },
  {
    id: 'british-council',
    name: 'British Council',
    sector: 'International Cultural Organisation',
    logo: (
      <svg viewBox="0 0 170 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 4 dots cluster emblem */}
        <g transform="translate(6, 8)">
          <circle cx="7" cy="7" r="5" fill="#ffffff" />
          <circle cx="21" cy="7" r="5" fill="#ffffff" />
          <circle cx="7" cy="21" r="5" fill="#ffffff" />
          <circle cx="21" cy="21" r="5" fill="#ffffff" />
        </g>
        {/* Typography */}
        <text x="42" y="20" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="extrabold" letterSpacing="1">
          BRITISH
        </text>
        <text x="42" y="33" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="extrabold" letterSpacing="1">
          COUNCIL
        </text>
      </svg>
    ),
  },
  {
    id: 'punch-nigeria',
    name: 'Punch Nigeria Limited',
    sector: 'Media & Industrial Print Complex',
    logo: (
      <svg viewBox="0 0 160 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Red PUNCH badge */}
        <rect x="6" y="8" width="28" height="28" rx="2" fill="#e11b22" />
        <text x="20" y="29" fill="#ffffff" fontFamily="'Impact', 'Arial Black', sans-serif" fontSize="22" fontWeight="bold" textAnchor="middle">
          P
        </text>
        {/* Wordmark */}
        <text x="42" y="25" fill="#e11b22" fontFamily="'Times New Roman', serif" fontSize="20" fontWeight="bold" letterSpacing="1">
          PUNCH
        </text>
        <text x="42" y="35" fill="#a3a3a3" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7.5" fontWeight="bold" letterSpacing="1.5">
          NIGERIA LIMITED
        </text>
      </svg>
    ),
  },
  {
    id: 'updc',
    name: 'UACN Property Development Company (UPDC)',
    sector: 'Real Estate Investment & Infrastructure',
    logo: (
      <svg viewBox="0 0 170 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* UAC Heritage Green & Gold Shield */}
        <g transform="translate(6, 4)">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H26C28.2091 0 30 1.79086 30 4V22C30 30 15 36 15 36C15 36 0 30 0 22V4Z" fill="#005a36" />
          <path d="M7 10L15 6L23 10V18C23 23 15 28 15 28C15 28 7 23 7 18V10Z" fill="#d4af37" />
          <text x="15" y="21" fill="#005a36" fontFamily="'Outfit', sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle">
            UAC
          </text>
        </g>
        {/* Wordmark */}
        <text x="44" y="22" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="17" fontWeight="bold" letterSpacing="1">
          UPDC
        </text>
        <text x="44" y="34" fill="#d4af37" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.8">
          UACN PROPERTY PLC
        </text>
      </svg>
    ),
  },
  {
    id: 'lasg',
    name: 'Lagos State Government',
    sector: 'Public Works & Civic Infrastructure',
    logo: (
      <svg viewBox="0 0 180 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lagos State Official Crest */}
        <g transform="translate(6, 4)">
          <circle cx="18" cy="18" r="18" fill="#1b4d3e" stroke="#d4af37" strokeWidth="1.5" />
          {/* Eyo Cap (Akete) silhouette */}
          <path d="M12 24C12 18 18 10 18 10C18 10 24 18 24 24H12Z" fill="#ffffff" />
          <ellipse cx="18" cy="24" rx="7" ry="2" fill="#d4af37" />
          {/* Sun / Rays above */}
          <circle cx="18" cy="8" r="2" fill="#d4af37" />
        </g>
        {/* Text */}
        <text x="48" y="20" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="12" fontWeight="bold" letterSpacing="0.5">
          LAGOS STATE
        </text>
        <text x="48" y="32" fill="#d4af37" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="700" letterSpacing="1">
          GOVERNMENT
        </text>
      </svg>
    ),
  },
  {
    id: 'lasu',
    name: 'Lagos State University (LASU)',
    sector: 'Tertiary Education Infrastructure',
    logo: (
      <svg viewBox="0 0 160 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Academic Shield & Book */}
        <g transform="translate(6, 4)">
          <path d="M4 2H28C28 2 30 18 16 34C2 18 4 2 4 2Z" fill="#0b2341" stroke="#d8aa58" strokeWidth="1.5" />
          <path d="M10 12C12 10 16 11 16 14C16 11 20 10 22 12V20C20 18 16 19 16 22C16 19 12 18 10 20V12Z" fill="#ffffff" />
        </g>
        <text x="42" y="21" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="16" fontWeight="bold" letterSpacing="1">
          LASU
        </text>
        <text x="42" y="33" fill="#d8aa58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.8">
          LAGOS STATE UNIVERSITY
        </text>
      </svg>
    ),
  },
  {
    id: 'union-homes',
    name: 'Union Homes Real Estate Investment Trust',
    sector: 'Real Estate Investment Trust (REIT)',
    logo: (
      <svg viewBox="0 0 170 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Royal Blue Stallion Badge */}
        <g transform="translate(6, 6)">
          <rect width="28" height="28" rx="3" fill="#0033a0" />
          {/* Galloping horse silhouette */}
          <path d="M8 20C9 17 12 15 15 14L18 10L21 11L19 14L22 15C22 17 20 19 18 19L16 22H13L15 19C13 20 10 20 8 20Z" fill="#ffffff" />
          <circle cx="19" cy="9" r="1.5" fill="#ffffff" />
        </g>
        <text x="42" y="21" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="14" fontWeight="bold" letterSpacing="0.3">
          UNION HOMES
        </text>
        <text x="42" y="33" fill="#0091ff" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="700" letterSpacing="1">
          REIT NIGERIA
        </text>
      </svg>
    ),
  },
  {
    id: 'first-concept',
    name: 'First Concept & Properties Ltd',
    sector: 'Luxury High-Rise Real Estate',
    logo: (
      <svg viewBox="0 0 170 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Architectural Twin Towers */}
        <g transform="translate(6, 6)">
          <rect x="4" y="8" width="9" height="22" fill="#c5a059" />
          <rect x="15" y="2" width="10" height="28" fill="#e6c37a" />
          <line x1="7" y1="12" x2="10" y2="12" stroke="#161324" strokeWidth="1" />
          <line x1="7" y1="18" x2="10" y2="18" stroke="#161324" strokeWidth="1" />
          <line x1="18" y1="8" x2="22" y2="8" stroke="#161324" strokeWidth="1" />
          <line x1="18" y1="14" x2="22" y2="14" stroke="#161324" strokeWidth="1" />
          <line x1="18" y1="20" x2="22" y2="20" stroke="#161324" strokeWidth="1" />
        </g>
        <text x="38" y="20" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="13" fontWeight="bold" letterSpacing="0.5">
          FIRST CONCEPT
        </text>
        <text x="38" y="32" fill="#c5a059" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="600" letterSpacing="1">
          &amp; PROPERTIES LTD
        </text>
      </svg>
    ),
  },
  {
    id: 'oouth',
    name: 'Olabisi Onabanjo University Teaching Hospital',
    sector: 'Healthcare & Specialized Medical',
    logo: (
      <svg viewBox="0 0 170 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Healthcare Caduceus Shield */}
        <g transform="translate(6, 4)">
          <path d="M2 4C2 1.79 3.79 0 6 0H26C28.21 0 30 1.79 30 4V22C30 30 16 36 16 36C16 36 2 30 2 22V4Z" fill="#1b2a47" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Medical Red / Gold Cross */}
          <rect x="14" y="8" width="4" height="16" fill="#ef4444" />
          <rect x="8" y="14" width="16" height="4" fill="#ef4444" />
        </g>
        <text x="44" y="20" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="15" fontWeight="bold" letterSpacing="0.8">
          OOUTH
        </text>
        <text x="44" y="33" fill="#93c5fd" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.5">
          TEACHING HOSPITAL
        </text>
      </svg>
    ),
  },
  {
    id: 'fgn',
    name: 'Federal Government of Nigeria',
    sector: 'National Sovereign Infrastructure',
    logo: (
      <svg viewBox="0 0 180 44" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nigerian Coat of Arms Motif */}
        <g transform="translate(6, 4)">
          {/* Black Shield with Silver Y pall */}
          <path d="M8 8H26V24C26 28 17 34 17 34C17 34 8 28 8 24V8Z" fill="#111111" stroke="#d4af37" strokeWidth="1" />
          <path d="M12 10L17 17L22 10M17 17V30" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          {/* Red Eagle top */}
          <path d="M14 6C14 4 17 2 17 2C17 2 20 4 20 6H14Z" fill="#dc2626" />
          {/* Green-White-Green base wreath */}
          <rect x="10" y="32" width="4.5" height="2" fill="#008751" />
          <rect x="14.5" y="32" width="5" height="2" fill="#ffffff" />
          <rect x="19.5" y="32" width="4.5" height="2" fill="#008751" />
        </g>
        <text x="44" y="20" fill="#ffffff" fontFamily="'Outfit', sans-serif" fontSize="12" fontWeight="bold" letterSpacing="0.5">
          FEDERAL REPUBLIC
        </text>
        <text x="44" y="32" fill="#22c55e" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="700" letterSpacing="1">
          OF NIGERIA
        </text>
      </svg>
    ),
  },
];
