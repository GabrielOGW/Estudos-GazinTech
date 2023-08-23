'use client'
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { PessoaContext } from "../services/context/pessoaContext";
import DeleteAlert from "./deleteAlert";

export default function pessoas() {
  const { pessoas, getPessoas } = useContext(PessoaContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getPessoas();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pessoasToShow = pessoas.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(pessoas.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex justify-end m-2 p-2">
        <Link href='/pessoas/criar' className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Adicionar nova pessoa</Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Data de Nascimento
              </th>
              <th scope="col" className="px-6 py-3">
                Idade
              </th>
              <th scope="col" className="px-6 py-3">
                Cargo
              </th>
              <th scope="col" className="px-6 py-3">
                Funções
              </th>
            </tr>
          </thead>
          <tbody>
            {pessoasToShow.map((pessoa) => {
              return (
                <tr key={pessoa.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {pessoa.nome}
                  </th>
                  <td className="px-6 py-4">
                    {pessoa.email}
                  </td>
                  <td className="px-6 py-4">
                    {pessoa.data_nascimento}
                  </td>
                  <td className="px-6 py-4">
                    {pessoa.idade}
                  </td>
                  <td className="px-6 py-4">
                    {pessoa.cargo}
                  </td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <Link href={`/pessoas/${pessoa.id}/editar`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</Link>
                    <DeleteAlert />
                    {/* <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remover</a> */}
                  </td>
                </tr>)
            })}
          </tbody>
        </table>
        <nav
          className="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Apresentando{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {startIndex + 1}-{endIndex > pessoas.length ? pessoas.length : endIndex}
            </span>{" "}
            de{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {pessoas.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                onClick={goToPreviousPage}
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Anterior
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={goToNextPage}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Proximo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>);
}
