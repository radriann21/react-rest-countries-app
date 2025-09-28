import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    const isDark = savedMode === "dark";
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      localStorage.setItem("mode", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("mode");
      document.documentElement.classList.remove("dark");
    }
  };

  return {
    isDarkMode,
    toggleDarkMode
  }
}