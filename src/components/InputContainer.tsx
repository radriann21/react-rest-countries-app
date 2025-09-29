import { CountryInput } from "./CountryInput"
import { RegionInput } from "./RegionInput"

export const InputContainer = () => {
  return (
    <section className="max-w-full flex items-center justify-between">
     <CountryInput />
     <RegionInput />
    </section>
  )
}