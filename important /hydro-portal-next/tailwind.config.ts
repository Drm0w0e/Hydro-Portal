import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          0: "#04060d",
          1: "#070a17",
          2: "#0b1024",
        },
        neon: {
          cyan: "#33e1ff",
          blue: "#3a7dff",
          violet: "#7a4dff",
          magenta: "#c84bff",
          pink: "#ff4dd0",
        },
        line: {
          DEFAULT: "rgba(120,160,255,.12)",
          strong: "rgba(140,180,255,.28)",
        },
        text: {
          DEFAULT: "#e7ecff",
          dim: "#8a93b8",
          mid: "#b6bedc",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        neon: "linear-gradient(135deg,#33e1ff 0%,#3a7dff 35%,#7a4dff 70%,#c84bff 100%)",
        "neon-soft":
          "linear-gradient(135deg,rgba(51,225,255,.18),rgba(122,77,255,.18) 60%,rgba(200,75,255,.18))",
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        spinSlow: "spin 30s linear infinite",
        spinSlower: "spin 60s linear infinite reverse",
        flow: "flow 3.5s ease-in-out infinite",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: ".35" },
        },
        flow: {
          "0%": { width: "10%" },
          "50%": { width: "95%" },
          "100%": { width: "30%" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
