'use client'
import { useContext } from 'react';
import Link from 'next/link';
import { PessoaContext } from '@/app/services/context/pessoaContext';

export default function Criar() {
  const { formData, handleChange, salvarPessoa } = useContext(PessoaContext)

  return (
    <div className="mt-12">
      <form
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
        onSubmit={salvarPessoa}
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-2 text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="data_nascimento"
              className="block mb-2 text-sm font-medium"
            >
              Data de Nascimento
            </label>
            <input
              type="date"
              name="data_nascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="idade" className="block mb-2 text-sm font-medium">
              Idade
            </label>
            <input
              type="text"
              name="idade"
              value={formData.idade}
              readOnly
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cargo" className="block mb-2 text-sm font-medium">
              Cargo
            </label>
            <input
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md" type="submit">
            Criar
          </button>
          <Link
            href="../pessoas"
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
