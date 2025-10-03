import { useGetCountries } from "../hooks/useGetCountries"
import { CountryCard } from "./CountryCard"

export const CountryList = () => {
  const { paginatedCountries, isLoading, error, handleNextPage, handlePrevPage } = useGetCountries()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <section
        className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {
          paginatedCountries?.map((country, index) => (
            <CountryCard
              key={country.name.common}
              country={country}
              index={index}
            />
          ))
        }
      </section>
      <div className="max-w-full flex items-center justify-center gap-x-10 mt-20">
        <div className="py-2 px-6 shadow-lg bg-white font-global rounded-md font-semibold transition-all duration-200 cursor-pointer hover:bg-gray-200 hover:shadow-sm" onClick={handlePrevPage}>Back</div>
        <div className="py-2 px-6 shadow-lg bg-white font-global rounded-md font-semibold transition-all duration-200 cursor-pointer hover:bg-gray-200 hover:shadow-sm" onClick={handleNextPage}>Next</div>
      </div>
    </>
  )
}