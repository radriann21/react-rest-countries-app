import { DarkModeButton } from "./DarkModeButton";

export const Header = () => {
  return (
    <header 
      className="w-full flex items-center justify-between py-4 px-10 dark:bg-dark-mode-element bg-light-mode-element dark:text-white text-black font-global shadow-md"
    >
      <h1 className="text-lg font-semibold">Where in the world?</h1>
     <DarkModeButton />
    </header>
  )
}