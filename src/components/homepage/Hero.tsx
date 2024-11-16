"use client";

import { useState, ChangeEvent } from "react";

// Define a type for the themes
type ThemeKey = "purple" | "emerald" | "rose" | "cyan";

type Theme = {
  accent: string;
  text: string;
  curves: string;
};

const themes: Record<ThemeKey, Theme> = {
  purple: {
    accent: "from-purple-500 to-purple-600",
    text: "text-purple-500",
    curves: "text-purple-400/10",
  },
  emerald: {
    accent: "from-emerald-500 to-emerald-600",
    text: "text-emerald-500",
    curves: "text-emerald-400/10",
  },
  rose: {
    accent: "from-rose-500 to-rose-600",
    text: "text-rose-500",
    curves: "text-rose-400/10",
  },
  cyan: {
    accent: "from-cyan-500 to-cyan-600",
    text: "text-cyan-500",
    curves: "text-cyan-400/10",
  },
};

export default function Component() {
  const [theme, setTheme] = useState<ThemeKey>("purple");

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as ThemeKey);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background curves */}
      <div className="fixed inset-0 overflow-hidden">
        <svg
          className={`absolute w-full h-full ${themes[theme].curves}`}
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,1000 C300,800 400,600 500,500 C600,400 700,200 1000,0 L1000,1000 Z"
            fill="currentColor"
          />
        </svg>
      </div>


      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Hi, I&apos;m{" "}
                <span
                  className={`bg-gradient-to-r ${themes[theme].accent} bg-clip-text text-transparent`}
                >
                  Mehataj Khandokar
                </span>
              </h1>
              <p className="text-xl text-gray-400">
                I develop 3D visuals, user interfaces and web applications
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded bg-gradient-to-r ${themes[theme].accent} text-white`}
              >
                View Work
              </button>
              <button className="px-4 py-2 rounded border border-white/20 text-white hover:bg-white/10">
                Contact Me
              </button>
            </div>
          </div>

          {/* 3D Workspace Illustration */}
          <div className="relative">
            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Workspace Setup"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div
              className={`absolute -top-4 -left-4 w-24 h-24 ${themes[theme].text} opacity-50`}
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="40" strokeWidth="8" />
              </svg>
            </div>
            <div
              className={`absolute -bottom-4 -right-4 w-24 h-24 ${themes[theme].text} opacity-50`}
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <rect x="20" y="20" width="60" height="60" strokeWidth="8" />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
