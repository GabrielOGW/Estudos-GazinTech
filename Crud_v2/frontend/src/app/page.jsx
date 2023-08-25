'use client'
import React, { useContext, useEffect } from "react";
import { PessoaContext } from "./services/context/pessoaContext";

export default function Home() {
  const { pessoas, getPessoas } = useContext(PessoaContext);

  useEffect(() => {
    getPessoas();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Lista de Pessoas Cadastradas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pessoas.slice(0, 6).map((pessoa) => (
          <div
            key={pessoa.id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-2">{pessoa.nome}</h2>
            <p className="text-gray-600 mb-2">Email: {pessoa.email}</p>
            <p className="text-gray-600 mb-2">Idade: {pessoa.idade}</p>
            <p className="text-gray-600">Cargo: {pessoa.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
