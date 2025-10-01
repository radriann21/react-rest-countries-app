import { useFilterContext } from "../context/FilterContext"

export const CountryInput = () => {
  const { setSearchTerm } = useFilterContext()

  return (
    <input
      className="p-3 rounded-md shadow-md bg-white dark:bg-dark-mode-element dark:text-white w-[420px] placeholder:text-sm border-2 border-transparent outline-none transition-colors duration-200 ease-out focus:border-gray-600 active:border-gray-600"
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
