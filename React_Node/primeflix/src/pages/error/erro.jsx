import React from "react";
import { Link } from "react-router-dom";
import "../../styles/erro.css";

export default function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Voltar à pagina principal</Link>
    </div>
  );
}
