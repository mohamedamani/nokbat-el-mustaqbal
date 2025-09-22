/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern, comfortable primary colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Warm, reassuring secondary colors
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Success colors with Algerian inspiration
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Algerian flag colors
        algerian: {
          green: '#006233',
          white: '#ffffff',
          red: '#d21034',
        },
        // Neutral grays for comfort
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Warm accent colors
        accent: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        arabic: ['Noto Naskh Arabic', 'serif'],
        latin: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.15)',
        'strong': '0 8px 40px 0 rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Gradients
    'bg-gradient-to-r',
    'bg-gradient-to-l',
    'bg-gradient-to-t',
    'bg-gradient-to-b',
    'bg-gradient-to-tr',
    'bg-gradient-to-tl',
    'bg-gradient-to-br',
    'bg-gradient-to-bl',
    // Colors (all variants)
    {
      pattern: /bg-(primary|secondary|success|algerian|neutral|accent)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /text-(primary|secondary|success|algerian|neutral|accent)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /border-(primary|secondary|success|algerian|neutral|accent)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    // Layout and spacing
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
    },
    {
      pattern: /(p|m|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64)/,
    },
    // Typography
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Common utilities
    'rounded-2xl',
    'rounded-xl',
    'rounded-lg',
    'rounded-md',
    'rounded-sm',
    'shadow-soft',
    'shadow-medium',
    'shadow-strong',
    'transition-all',
    'duration-200',
    'duration-300',
    'ease-in-out',
    'transform',
    'hover:scale-105',
    'active:scale-95',
    // Responsive classes
    {
      pattern: /(sm|md|lg|xl|2xl):(block|hidden|flex|grid|w-full|w-auto)/,
    },
    // Arabic/RTL support
    'dir-rtl',
    'dir-ltr',
    'text-right',
    'text-left',
    'text-center',
    // Accessibility
    'sr-only',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    {
      pattern: /focus:ring-(primary|secondary|success)-(400|500|600)/,
    },
  ],
}