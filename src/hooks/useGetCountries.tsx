import { useQuery } from "@tanstack/react-query"
import { getAllCountries } from "../services/getAllCountries"

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries
  })
}