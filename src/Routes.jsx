import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Next from "./Pages/Next";

export default function RoutesApp () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proximaetapa" element={<Next />} />
      </Routes>
    </BrowserRouter>
  )
}