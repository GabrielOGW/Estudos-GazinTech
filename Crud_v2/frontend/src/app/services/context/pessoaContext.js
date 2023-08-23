"use client";
import { createContext, useState } from "react";
import { api } from "../api/api";
import { useRouter } from "next/navigation";
import axios from "axios";

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
  const router = useRouter();

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
      limparForm();
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

  const deletarPessoa = async (id) => {
    try {
      axios.delete(`/pessoas/` + id);
      getPessoas();
    } catch (error) {
      console.error("Erro ao deletar pessoa:", error);
    }
  };

  return (
    <PessoaContext.Provider
      value={{
        pessoa,
        pessoas,
        formData,
        errors,
        getPessoa,
        getPessoas,
        handleChange,
        salvarPessoa,
        atualizarPessoa,
        deletarPessoa,
      }}
    >
      {children}
    </PessoaContext.Provider>
  );
};
