"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [dark, setDark] = useState(false);

  // when the page first loads
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // when user clicks button
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`px-5 py-3 text-lg rounded-lg ${
        dark ? "bg-gray-800" : "bg-gray-300"
      } ${dark ? "text-white" : "text-black"} border-0 cursor-pointer`}
    >
      Switch to {dark ? "Light" : "Dark"} Mode
    </button>
  );
}
