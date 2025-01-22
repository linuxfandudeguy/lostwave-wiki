import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'], // Enable dark mode support based on class
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include all page files for Tailwind's purging
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include all components for purging
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include the app directory for purging
    '*.{js,ts,jsx,tsx,mdx}' // Include the root directory as well
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'background-light': 'hsl(var(--background-light))',
        'foreground-light': 'hsl(var(--foreground-light))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary-hover))',
                textDecoration: 'none'
              }
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '600',
              color: 'hsl(var(--foreground))'
            },
            'p, ul, ol': {
              color: 'hsl(var(--foreground))',
            },
            code: {
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--muted))',
              padding: '0.2rem 0.4rem',
              borderRadius: '4px'
            },
            blockquote: {
              borderLeft: '4px solid hsl(var(--secondary))',
              paddingLeft: '1rem',
              marginLeft: '0',
              fontStyle: 'italic'
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              padding: '1rem',
              borderRadius: '4px',
              overflowX: 'auto'
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '1.5rem'
            },
            'table th, table td': {
              padding: '0.75rem',
              border: '1px solid hsl(var(--border))'
            },
            hr: {
              borderTop: '1px solid hsl(var(--border))',
              margin: '2rem 0'
            },
            img: {
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'), // Animation support
    require('@tailwindcss/typography') // Tailwind Typography plugin
  ]
};

export default config;
