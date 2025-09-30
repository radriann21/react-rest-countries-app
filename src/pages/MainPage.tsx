import { Header } from "../components/Header"
import { InputContainer } from "../components/InputContainer"
import { CountryList } from "../components/CountryList"

export const MainPage = () => {
  return (
    <main 
      className="max-w-full h-screen font-global text-black dark:text-white bg-light-mode-bg dark:bg-dark-mode-bg"
    >
      <Header />
      <section className="max-w-full px-10 py-12">
        <InputContainer />
        <CountryList />
      </section>
    </main>
  )
}
