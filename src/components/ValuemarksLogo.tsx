import React from 'react';

interface ValuemarksLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'light' | 'dark';
  useImage?: boolean;
}

export const ValuemarksLogo: React.FC<ValuemarksLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'light',
  useImage = true,
}) => {
  // Exact 780x559 (1.395:1) aspect ratio from the official company profile mark
  const sizeMap = {
    sm: { width: 44, height: 32, textTitle: 'text-sm', textConsultants: 'text-[11px]', textSub: 'text-[8.5px]' },
    md: { width: 54, height: 39, textTitle: 'text-base sm:text-lg', textConsultants: 'text-xs sm:text-sm', textSub: 'text-[9.5px] sm:text-[10px]' },
    lg: { width: 68, height: 49, textTitle: 'text-xl sm:text-2xl', textConsultants: 'text-sm sm:text-base', textSub: 'text-xs' },
    xl: { width: 90, height: 65, textTitle: 'text-2xl sm:text-3xl', textConsultants: 'text-base sm:text-lg', textSub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // Authentic Pantone/RGB colors extracted from company profile
  const goldColor = '#9e722c'; // warm ochre / golden bronze
  const purpleColor = '#241326'; // deep aubergine / eggplant midnight

  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* Exact VMC Mark: 3 columns x 2 rows staggered architectural block layout */}
      <div 
        className="relative shrink-0 overflow-hidden rounded-xs"
        style={{ width: `${currentSize.width}px`, height: `${currentSize.height}px` }}
      >
        {useImage ? (
          <img
            src="/assets/vmc_mark_master.png"
            alt="Valuemarks Consultants VMC Logo"
            className="w-full h-full object-contain block select-none"
            loading="eager"
          />
        ) : (
          /* High-DPI Vector SVG exact reproduction of IMG-20261106-WA0120 */
          <svg
            viewBox="0 0 780 559"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block select-none"
          >
            {/* Column 1: Left */}
            {/* Top-Left: Gold blank (height 242px) */}
            <rect x="0" y="0" width="260" height="242" fill={goldColor} />
            {/* Bottom-Left: Dark Purple with White Serif 'V' (height 317px) */}
            <rect x="0" y="242" width="260" height="317" fill={purpleColor} />
            <text
              x="130"
              y="480"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Times New Roman', 'Playfair Display', 'Cormorant Garamond', 'Baskerville', Georgia, serif"
              fontSize="235"
              fontWeight="bold"
            >
              V
            </text>

            {/* Column 2: Center */}
            {/* Top-Center: Dark Purple with White Serif 'M' (height 328px, stepped lower) */}
            <rect x="260" y="0" width="260" height="328" fill={purpleColor} />
            <text
              x="390"
              y="245"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Times New Roman', 'Playfair Display', 'Cormorant Garamond', 'Baskerville', Georgia, serif"
              fontSize="225"
              fontWeight="bold"
            >
              M
            </text>
            {/* Bottom-Center: Gold blank (height 231px) */}
            <rect x="260" y="328" width="260" height="231" fill={goldColor} />

            {/* Column 3: Right */}
            {/* Top-Right: Gold blank (height 242px) */}
            <rect x="520" y="0" width="260" height="242" fill={goldColor} />
            {/* Bottom-Right: Dark Purple with White Serif 'C' (height 317px) */}
            <rect x="520" y="242" width="260" height="317" fill={purpleColor} />
            <text
              x="648"
              y="480"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Times New Roman', 'Playfair Display', 'Cormorant Garamond', 'Baskerville', Georgia, serif"
              fontSize="235"
              fontWeight="bold"
            >
              C
            </text>

            {/* Authentic structural separation lines between columns and staggered rows */}
            <line x1="260" y1="0" x2="260" y2="559" stroke="#170c1a" strokeWidth="2.5" />
            <line x1="520" y1="0" x2="520" y2="559" stroke="#170c1a" strokeWidth="2.5" />
            <line x1="0" y1="242" x2="260" y2="242" stroke="#170c1a" strokeWidth="2.5" />
            <line x1="260" y1="328" x2="520" y2="328" stroke="#170c1a" strokeWidth="2.5" />
            <line x1="520" y1="242" x2="780" y2="242" stroke="#170c1a" strokeWidth="2.5" />
          </svg>
        )}
      </div>

      {/* Typography Lockup: Valuemarks with - Consultants directly beneath */}
      {showText && (
        <div className="flex flex-col justify-center select-none leading-tight">
          {/* Line 1: Valuemarks */}
          <span
            className={`font-bold font-display tracking-tight ${currentSize.textTitle} ${
              textColor === 'light' ? 'text-white' : 'text-[#181124]'
            }`}
          >
            Valuemarks
          </span>
          {/* Line 2: - Consultants directly beneath */}
          <div className="flex items-center gap-1">
            <span
              className={`font-semibold tracking-tight ${currentSize.textConsultants} ${
                textColor === 'light' ? 'text-[#d8aa58]' : 'text-[#9e722c]'
              }`}
            >
              - Consultants
            </span>
          </div>
          {/* Line 3: Subtitle statutory practice designation */}
          <span
            className={`tracking-wide italic font-normal mt-0.5 ${currentSize.textSub} ${
              textColor === 'light' ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Registered Quantity Surveyors &amp; Project Managers
          </span>
        </div>
      )}
    </div>
  );
};

