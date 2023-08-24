'use client'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { PessoaContext } from '@/app/services/context/pessoaContext'
import { useParams } from 'next/navigation'

export default function deletarPessoa() {
  const { formData = {}, getPessoa, deletarPessoa } = useContext(PessoaContext);
  let params = useParams()

  useEffect(() => {
    getPessoa(params.pessoaId)
  }, [])

  return (
    <div className="mt-12">
      <form
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
        onSubmit={deletarPessoa}
      >
        <div className="space-y-6">
          <p className="mb-4 text-lg font-semibold">
            Tem certeza de que deseja excluir a pessoa abaixo?
          </p>
          <div className="mb-4">
            <label htmlFor="nome" className="block mb-2 text-sm font-medium">
              Nome:
            </label>
            <p>{formData.nome}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email:
            </label>
            <p>{formData.email}</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="data_nascimento"
              className="block mb-2 text-sm font-medium"
            >
              Data de Nascimento:
            </label>
            <p>{formData.data_nascimento}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="idade" className="block mb-2 text-sm font-medium">
              Idade:
            </label>
            <p>{formData.idade}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="cargo" className="block mb-2 text-sm font-medium">
              Cargo:
            </label>
            <p>{formData.cargo}</p>
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <button className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md" type="submit">
            Deletar
          </button>
          <Link
            href="../"
            className="font-medium text-indigo-600 hover:underline"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
