import { Header } from "../components/Header"

export const MainPage = () => {
  return (
    <main 
      className="max-w-full h-screen font-global text-black dark:text-white bg-light-mode-bg dark:bg-dark-mode-bg"
    >
      <Header />
    </main>
  )
}
