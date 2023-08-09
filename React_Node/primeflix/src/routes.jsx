import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Header from "./components/header";
import Erro from "./pages/error/erro";
import Favoritos from "./pages/Favoritos";

export default function RouteApp() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filmes />} />
          <Route path="/favoritos" element={<Favoritos />} />

          <Route path="*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
