"use client";
import { createContext, useState } from "react";
import { api } from "../api/api";
import { useRouter } from "next/navigation";

export const PessoaContext = createContext();

export const PessoaProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
    idade: "",
    cargo: "",
  });
  const [pessoas, setPessoas] = useState([]);
  const [pessoa, setPessoa] = useState([]);
  const [erros, setErros] = useState({});
  const router = useRouter();

  function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
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
      setFormData({ ...formData, idade, dataNascimento: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const getPessoas = async () => {
    const apiPessoas = await api.get("/pessoas");
    setPessoas(apiPessoas.data.data);
  };

  const getPessoa = async (id) => {
    const response = await api.get(`/pessoas/${id}`);
    setPessoa(response.data.data);
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
      console.log(formData);
      router.push("/pessoas");
    } catch (e) {
      if (e.response.status === 422) {
        console.log(formData);
        setErros(e.response.data.erros);
      }
    }
  };

  return (
    <PessoaContext.Provider
      value={{
        pessoa,
        pessoas,
        formData,
        getPessoa,
        getPessoas,
        handleChange,
        salvarPessoa,
      }}
    >
      {children}
    </PessoaContext.Provider>
  );
};
