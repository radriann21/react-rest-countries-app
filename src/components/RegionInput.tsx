export const RegionInput = () => {
  return (
    <select className="p-3 rounded-md shadow-md bg-white dark:bg-dark-mode-element dark:text-white placeholder:text-sm border-2 border-transparent outline-none transition-colors duration-200 ease-out focus:border-gray-600 active:border-gray-600 text-sm cursor-pointer">
      <option value="">Select region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}
