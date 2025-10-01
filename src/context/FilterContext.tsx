import { useContext, createContext, useState } from "react";

interface FilterContextType {
  searchTerm: string | undefined;
  region: string;
  setSearchTerm: (term: string) => void;
  setRegion: (region: string) => void;
}

const FilterContext = createContext<FilterContextType | null>(null)

interface FilterContextProviderProps {
  children: React.ReactNode
}

export const FilterContextProvider = ({ children }: FilterContextProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>("")
  const [region, setRegion] = useState<string>("")

  return (
    <FilterContext.Provider value={{
      searchTerm,
      region,
      setSearchTerm,
      setRegion
    }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error("useFilterContext must be used within a FilterContextProvider")
  }

  return context
}