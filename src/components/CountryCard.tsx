import type { CountryInterface } from "../interfaces/CountryInterface"
import { motion } from "motion/react"

export const CountryCard = ({ country, index }: { country: CountryInterface, index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: (index) * 0.1 }}
      className="rounded-md shadow-md overflow-hidden dark:bg-dark-mode-element cursor-pointer hover:scale-105 transition-all duration-200 ease-in hover:shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={country.flags.svg}
        alt={country.flags.alt}
      />
      <div className="p-4">
        <h2 className="font-bold font-global text-xl dark:text-white">{country.name.common}</h2>
        <div className="mt-2">
          <div>
            <span className="font-bold dark:text-white">Population: </span>
            {country.population.toLocaleString("en")}
          </div>
          <div>
            <span className="font-bold dark:text-white">Region: </span>
            {country.region}
          </div>
          <div>
            <span className="font-bold dark:text-white">Capital: </span>
            {country.capital}
          </div>
        </div>
      </div>
    </motion.article>
  )
}