"use client";
import { createContext, useState } from "react";
import { api } from "../api/api";
import { useRouter } from "next/navigation";

export const PessoaContext = createContext();

export const PessoaProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    data_nascimento: "",
    idade: "",
    cargo: "",
  });
  const [pessoas, setPessoas] = useState([]);
  const [pessoa, setPessoa] = useState([]);
  const [errors, setErrors] = useState({});
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const router = useRouter();

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allIds = pessoas.map((pessoa) => pessoa.id);
      setSelectedIds(allIds);
    }
    setSelectAll(!selectAll);
  };

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  function calcularIdade(data_nascimento) {
    const hoje = new Date();
    const nascimento = new Date(data_nascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "data_nascimento") {
      const idade = calcularIdade(value);
      setFormData({ ...formData, idade, data_nascimento: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const getPessoas = async () => {
    try {
      const apiPessoas = await api.get("/pessoas");
      setPessoas(apiPessoas.data.data);
      setFormData({});
    } catch (error) {
      console.error("Erro ao buscar pessoas:", error);
    }
  };

  const getPessoa = async (id) => {
    try {
      const response = await api.get(`/pessoas/${id}`);
      const apiPessoa = response.data.data;
      setPessoa(apiPessoa);
      setFormData({
        nome: apiPessoa.nome,
        email: apiPessoa.email,
        data_nascimento: apiPessoa.data_nascimento,
        idade: apiPessoa.idade,
        cargo: apiPessoa.cargo,
      });
    } catch (error) {
      console.error("Erro ao buscar pessoa:", error);
    }
  };

  const salvarPessoa = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/pessoas`, JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      getPessoas();
      router.push("/pessoas");
      setFormData({});
      setErrors({});
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Erro ao salvar pessoa:", error);
      }
    }
  };

  const atualizarPessoa = async (e) => {
    e.preventDefault();
    try {
      await api.patch(`/pessoas/` + pessoa.id, JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      getPessoas();
      router.push("/pessoas");
      setFormData({});
      setErrors({});
      F;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Erro ao salvar pessoa:", error);
      }
    }
  };

  const deletarPessoa = async (e) => {
    e.preventDefault();
    try {
      await api.delete(`/pessoas/` + pessoa.id);
      getPessoas();
      router.push("/pessoas");
      setFormData({});
      setErrors({});
    } catch (error) {
      console.error("Erro ao deletar pessoa:", error);
    }
  };

  const deletarPessoasSelecionadas = async () => {
    try {
      await Promise.all(
        selectedIds.map(async (id) => {
          console.log(id);
          await api.delete(`/pessoas/` + id);
        })
      );
      setSelectedIds([]);
      getPessoas();
    } catch (error) {
      console.error("Erro ao excluir pessoas:", error);
    }
  };

  return (
    <PessoaContext.Provider
      value={{
        pessoa,
        pessoas,
        formData,
        errors,
        selectedIds,
        selectAll,
        getPessoa,
        getPessoas,
        handleChange,
        salvarPessoa,
        atualizarPessoa,
        deletarPessoa,
        toggleSelectAll,
        toggleSelect,
        deletarPessoasSelecionadas,
      }}
    >
      {children}
    </PessoaContext.Provider>
  );
};
