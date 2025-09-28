import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

export const DarkModeButton = () => {  
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button 
      onClick={toggleDarkMode}
      className="flex items-center gap-x-2 p-2 rounded-md bg-transparent hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-sm transition-all duration-300 ease-in cursor-pointer"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      <span className="font-global text-sm">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};
