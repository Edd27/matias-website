import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        tan: {
          100: "#f5f0e8",
          200: "#ede0d3",
          300: "#e4d0be",
          400: "#dbc0a9",
          500: "#d2b48c",
          600: "#c19a6b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Quicksand", "Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-delayed": "fadeIn 1.5s ease-in-out",
        "fade-in-slow": "fadeIn 2s ease-in-out",
        "slide-down": "slideDown 1s ease-out",
        "slide-up": "slideUp 1s ease-out",
        "slide-up-delayed": "slideUp 1.5s ease-out",
        "bounce-gentle": "bounceGentle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "float-up": "floatUp 4s ease-in-out infinite",
        "float-up-1": "floatUpInfinite 12s linear infinite",
        "float-up-2": "floatUpInfinite 15s linear infinite 2s",
        "float-up-3": "floatUpInfinite 18s linear infinite 4s",
        "float-up-4": "floatUpInfinite 14s linear infinite 6s",
        "float-up-5": "floatUpInfinite 16s linear infinite 8s",
        "float-up-6": "floatUpInfinite 13s linear infinite 10s",
        twinkle: "twinkle 2s ease-in-out infinite",
        "twinkle-delayed": "twinkle 2s ease-in-out infinite 0.5s",
        "twinkle-slow": "twinkle 3s ease-in-out infinite",
        "pulse-gentle": "pulseGentle 2s ease-in-out infinite",
        "pulse-gentle-delayed": "pulseGentle 2s ease-in-out infinite 0.5s",
        "float-up-7": "floatUpInfinite 20s linear infinite 1s",
        "float-up-8": "floatUpInfinite 17s linear infinite 3s",
        "float-up-9": "floatUpInfinite 22s linear infinite 5s",
        "float-up-10": "floatUpInfinite 19s linear infinite 7s",
        "float-up-11": "floatUpInfinite 21s linear infinite 9s",
        "float-up-12": "floatUpInfinite 18s linear infinite 11s",
        "float-up-13": "floatUpInfinite 23s linear infinite 13s",
        "float-up-14": "floatUpInfinite 16s linear infinite 15s",
        "float-up-15": "floatUpInfinite 24s linear infinite 2s",
        "float-up-16": "floatUpInfinite 15s linear infinite 4s",
        "float-up-17": "floatUpInfinite 25s linear infinite 6s",
        "float-up-18": "floatUpInfinite 17s linear infinite 8s",
        "float-up-19": "floatUpInfinite 19s linear infinite 10s",
        "float-up-20": "floatUpInfinite 21s linear infinite 12s",
        "float-up-21": "floatUpInfinite 18s linear infinite 14s",
        "float-up-22": "floatUpInfinite 26s linear infinite 1.5s",
        "float-up-23": "floatUpInfinite 14s linear infinite 3.5s",
        "float-up-24": "floatUpInfinite 27s linear infinite 5.5s",
        "float-up-25": "floatUpInfinite 16s linear infinite 7.5s",
        "float-up-26": "floatUpInfinite 20s linear infinite 9.5s",
        "float-up-27": "floatUpInfinite 22s linear infinite 11.5s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        floatUpInfinite: {
          "0%": {
            transform: "translateY(100vh) translateX(0px)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100vh) translateX(20px)",
            opacity: "0",
          },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.8)" },
        },
        pulseGentle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
