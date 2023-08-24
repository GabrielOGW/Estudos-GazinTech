'use client'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { PessoaContext } from '@/app/services/context/pessoaContext'
import { useParams } from 'next/navigation'

export default function editarPessoa() {
  const { formData = {}, handleChange, errors = {}, getPessoa, atualizarPessoa } = useContext(PessoaContext);
  let params = useParams()

  useEffect(() => {
    getPessoa(params.pessoaId)
  }, [])

  return (
    <div className="mt-12">
      <form
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
        onSubmit={atualizarPessoa}
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
            {errors.nome && (<span className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.nome[0]}</span>)}
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
            {errors.email && (<span className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.email[0]}</span>)}
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
              value={formData.data_nascimento}
              onChange={handleChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.data_nascimento && (<span className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.data_nascimento[0]}</span>)}
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
            {errors.idade && (<span className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.idade[0]}</span>)}
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
            {errors.cargo && (<span className='mt-2 text-sm text-red-600 dark:text-red-500'>{errors.cargo[0]}</span>)}
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md" type="submit">
            Atualizar
          </button>
          <Link
            href="../"
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
