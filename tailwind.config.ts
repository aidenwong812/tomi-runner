import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        progress: {
          DEFAULT: "var(--progress-background)",
          foreground: "var(--progress)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive) / <alpha-value>",
          foreground: "var(--destructive-foreground) / <alpha-value>",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        select: {
          DEFAULT: "var(--select-background)",
          border: "var(--select-border)",
        }
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `calc(var(--radius) + 2px)`,
        md: `var(--radius)`,
        sm: `calc(var(--radius) - 2px)`,
        xs: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        'custom': '0 0 24px #FF008366', // Customize as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
