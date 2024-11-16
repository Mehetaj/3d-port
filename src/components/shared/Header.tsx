'use client'

import Link from "next/link";
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

const Header = () => {
  const [theme, setTheme] = useState<ThemeKey>("purple");

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as ThemeKey);
  };
  return (
    <nav className="relative z-10 flex items-center justify-between p-6 bg-black">
      <div className="text-xl font-bold text-white"><Link href={'/'}>Mehataj</Link></div>
      <div className="flex items-center gap-8">
        <div className="hidden sm:flex items-center space-x-8 text-sm">
          <button className="text-white hover:text-white/80">About</button>
          <button className="text-white hover:text-white/80">Work</button>
          <button className="text-white hover:text-white/80">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;