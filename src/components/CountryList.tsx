import { useGetCountries } from "../hooks/useGetCountries"
import { CountryCard } from "./CountryCard"

export const CountryList = () => {

  const { data: countries, isLoading, error } = useGetCountries()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <section 
      className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      {
        countries?.map((country) => (
          <CountryCard 
            key={country.name.common} 
            country={country} 
          />
        ))
      }
    </section>
  )
}