import { useQuery } from "@tanstack/react-query"
import { getAllCountries } from "../services/getAllCountries"
import { useMemo } from "react"
import { useFilterContext } from "../context/FilterContext"

export const useGetCountries = () => {
  const { searchTerm, region } = useFilterContext()

  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries
  })
  
  const filteredCountries = useMemo(() => {
    if (!data) return []

    return data.filter((country) => {
      const matchesSearch = country.name.common.toLocaleLowerCase().includes(searchTerm?.toLocaleLowerCase() || "")

      const matchesRegion = region === "" || country.region.toLowerCase().includes(region.toLowerCase())

      return matchesSearch && matchesRegion
    })
  }, [data, region, searchTerm])

  return {
    error,
    isLoading,
    filteredCountries
  }
}