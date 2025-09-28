import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "../pages/MainPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}