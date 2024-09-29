"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full border hover:bg-gradient-to-r from-btn-secondary via-btn to-primary dark:border-copy hover:border-primary dark:hover:skill-shadow-light hover:skill-shadow-dark hover:text-copy text-btn dark:text-white transition-all duration-300"
    >
      {theme === "light" ? (
        <div className=" font-bold text-3xl ">
          <BsFillMoonStarsFill />
        </div>
      ) : (
        <div className=" font-bold text-3xl">
          <MdLightMode />
        </div>
      )}
    </button>
  );
};

export default ThemeBtn;
