import { useQuery } from "@tanstack/react-query"
import { getAllCountries } from "../services/getAllCountries"
import { useMemo, useState } from "react"
import { useFilterContext } from "../context/FilterContext"

export const useGetCountries = () => {
  const { searchTerm, region } = useFilterContext()
  const [actualPage, setActualPage] = useState<number>(1)
  const itemsPerPage = 20

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


  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage)

  const handleChangePage = (newPage: number) => {
    setActualPage(newPage)
  }

  const handleNextPage = () => {
    if (actualPage < totalPages) {
      setActualPage(actualPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1)
    }
  }

  const paginatedCountries = useMemo(() => {
    const startIndex = (actualPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredCountries.slice(startIndex, endIndex)
  }, [filteredCountries, actualPage])

  return {
    error,
    isLoading,
    paginatedCountries,
    totalPages,
    handleChangePage,
    handleNextPage,
    handlePrevPage
  }
}