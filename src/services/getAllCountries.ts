import type { CountryInterface } from "../interfaces/CountryInterface"

export const getAllCountries = async (): Promise<CountryInterface[]> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
    if (!response.ok) {
      throw new Error("Failed to fetch countries.")
    }

    const data = await response.json()
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid response.")
    }

    return data
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw new Error("An unknown error occurred.")
  }
}
