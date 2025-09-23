"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Para navegação entre páginas
import "./paises.module.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const STORAGE_KEY = "countries";

  const loadCountries = () => {
    const storedCountries = localStorage.getItem(STORAGE_KEY);
    if (storedCountries) {
      setCountries(JSON.parse(storedCountries));
    }
    setLoading(false);
  };

  const saveCountries = (updatedCountries) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCountries));
    setCountries(updatedCountries);
  };

  const createCountry = () => {
    if (!newCountry) return alert("O nome do país não pode estar vazio.");
    const newCountryObj = { id: Date.now(), name: newCountry };
    const updatedCountries = [...countries, newCountryObj];
    saveCountries(updatedCountries);
    setNewCountry("");
  };

  useEffect(() => {
    loadCountries();
  }, []);

  if (loading) return <p>Carregando países...</p>;

  return (
    <div>
      <h1>Países</h1>

      {/* Formulário para adicionar um novo país */}
      <div>
        <input
          type="text"
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
          placeholder="Digite o nome do país"
          className="input-field"
        />
        <button onClick={createCountry} className="btn btn-create">
          Adicionar País
        </button>
      </div>

      <ul>
        {countries.map(({ id, name }) => (
          <li key={id} className="country-item">
            <span>{name}</span>
            <button onClick={() => router.push(`/detalhes/${id}`)} className="btn btn-details">
              Ver Detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}