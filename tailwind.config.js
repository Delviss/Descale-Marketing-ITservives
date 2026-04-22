/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // red-700
        background: "var(--color-background)", // white
        foreground: "var(--color-foreground)", // gray-900
        primary: {
          DEFAULT: "var(--color-primary)", // red-700
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // blue-700
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-50
          foreground: "var(--color-muted-foreground)", // gray-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // orange-500
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-900
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-900
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        // Brand Surface Colors
        surface: "var(--color-surface)", // gray-50
        'text-primary': "var(--color-text-primary)", // gray-900
        'text-secondary': "var(--color-text-secondary)", // gray-500
      },
      borderRadius: {
        lg: "var(--radius-lg)", // 12px
        md: "var(--radius-md)", // 8px
        sm: "var(--radius-sm)", // 4px
        xl: "var(--radius-xl)", // 16px
        full: "var(--radius-full)", // 9999px
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
        headline: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        cta: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        accent: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      fontSize: {
        'brand-xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        'brand-sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'brand-base': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'brand-lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'brand-xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        'brand-2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        'brand-3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        'brand-4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        'brand-5xl': ['3rem', { lineHeight: '1' }], // 48px
        'brand-6xl': ['3.75rem', { lineHeight: '1' }], // 60px
        'brand-7xl': ['4.5rem', { lineHeight: '1' }], // 72px
        'brand-8xl': ['6rem', { lineHeight: '1' }], // 96px
        'brand-9xl': ['8rem', { lineHeight: '1' }], // 128px
      },
      spacing: {
        'brand-xs': 'var(--spacing-xs)', // 4px
        'brand-sm': 'var(--spacing-sm)', // 8px
        'brand-md': 'var(--spacing-md)', // 16px
        'brand-lg': 'var(--spacing-lg)', // 24px
        'brand-xl': 'var(--spacing-xl)', // 32px
        'brand-2xl': 'var(--spacing-2xl)', // 48px
        'brand-3xl': 'var(--spacing-3xl)', // 64px
      },
      boxShadow: {
        'brand-xs': 'var(--shadow-xs)',
        'brand-sm': 'var(--shadow-sm)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
        'brand-xl': 'var(--shadow-xl)',
        'brand': 'var(--shadow-brand)',
        'brand-strong': 'var(--shadow-brand-lg)',
      },
      animation: {
        'fade-in': 'fadeIn var(--animation-duration-normal) var(--animation-easing) forwards',
        'slide-up': 'slideUp var(--animation-duration-normal) var(--animation-easing) forwards',
        'scale-in': 'scaleIn var(--animation-duration-fast) var(--animation-easing) forwards',
        'counter': 'counter 2.5s var(--animation-easing) forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
      transitionDuration: {
        'brand-fast': 'var(--animation-duration-fast)', // 300ms
        'brand-normal': 'var(--animation-duration-normal)', // 500ms
        'brand-slow': 'var(--animation-duration-slow)', // 600ms
      },
      transitionTimingFunction: {
        'brand': 'var(--animation-easing)', // cubic-bezier(0.25, 0.46, 0.45, 0.94)
      },
      backdropBlur: {
        'brand': '8px',
        'brand-lg': '16px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      aspectRatio: {
        'brand-video': '16 / 9',
        'brand-square': '1 / 1',
        'brand-portrait': '3 / 4',
        'brand-landscape': '4 / 3',
      },
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        counter: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}