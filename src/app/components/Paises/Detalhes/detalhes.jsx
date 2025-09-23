"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // Para navegação e parâmetros
import "./paises.module.css";

export default function CountryDetails() {
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const router = useRouter();
  const { id } = useParams(); // Obtém o ID do país da URL
  const STORAGE_KEY = "countries";

  const loadCountries = () => {
    const storedCountries = localStorage.getItem(STORAGE_KEY);
    if (storedCountries) {
      const parsedCountries = JSON.parse(storedCountries);
      setCountries(parsedCountries);
      const selectedCountry = parsedCountries.find((c) => c.id === parseInt(id));
      setCountry(selectedCountry);
    }
  };

  const saveCountries = (updatedCountries) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCountries));
    setCountries(updatedCountries);
  };

  const updateCountry = (newName) => {
    if (!newName) return alert("O nome do país não pode estar vazio.");
    const updatedCountries = countries.map((c) =>
      c.id === country.id ? { ...c, name: newName } : c
    );
    saveCountries(updatedCountries);
    setCountry({ ...country, name: newName });
  };

  const deleteCountry = () => {
    const updatedCountries = countries.filter((c) => c.id !== country.id);
    saveCountries(updatedCountries);
    router.push("/"); // Redireciona para a página principal
  };

  useEffect(() => {
    loadCountries();
  }, []);

  if (!country) return <p>Carregando detalhes do país...</p>;

  return (
    <div>
      <h1>Detalhes do País</h1>
      <p>Nome: {country.name}</p>
      <button
        onClick={() => updateCountry(prompt("Novo nome do país:", country.name))}
        className="btn btn-edit"
      >
        Editar
      </button>
      <button onClick={deleteCountry} className="btn btn-delete">
        Deletar
      </button>
    </div>
  );
}