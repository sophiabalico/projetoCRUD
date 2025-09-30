"use client";
import { useState } from "react";
import axios from "axios";
import styles from "./criar.module.css";

export default function CriarPais() {
  const [loading, setLoading] = useState(false);
  const [addedPais, setAddedPais] = useState([]);
  const [form, setForm] = useState({
    abbreviation: "",
    capital: "",
    currency: "",
    name: "",
    phone: "",
    population: "",
    media: {
      flag: "",
      emblem: "",
      orthographic: "",
    },
  });
  const [error, setError] = useState(false);

  const criarNovoPais = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.post(
        "https://api.sampleapis.com/countries/countries",
        {
          abbreviation: form.abbreviation.trim(),
          capital: form.capital.trim(),
          currency: form.currency.trim(),
          name: form.name.trim(),
          phone: form.phone.trim(),
          population: form.population.trim(),
          media: {
            flag: form.media.flag.trim(),
            emblem: form.media.emblem.trim(),
            orthographic: form.media.orthographic.trim(),
          },
        }
      );

      setAddedPais([response.data, ...addedPais]);
      setForm({ abbreviation: "", capital: "", currency: "", name: "", phone: "", population: "", media: { flag: "", emblem: "", orthographic: "" } });
    } catch (error) {
      setError(true);
      console.error("❌ Erro ao criar país:", error);
    } finally {
      setLoading(false);
    }
  };

  const atualizarForm = (e) => {
    const { name, value } = e.target;
    
    // Verificar se é um campo aninhado (media)
    if (name.startsWith('media.')) {
      const mediaField = name.split('.')[1];
      setForm({ 
        ...form, 
        media: { 
          ...form.media, 
          [mediaField]: value 
        } 
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Criar País</h1>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Nome do País</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={atualizarForm}
                placeholder="Nome do País"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Abreviação</label>
              <input
                type="text"
                name="abbreviation"
                value={form.abbreviation}
                onChange={atualizarForm}
                placeholder="Abreviação (ex: BR)"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Capital</label>
              <input
                type="text"
                name="capital"
                value={form.capital}
                onChange={atualizarForm}
                placeholder="Capital"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Moeda</label>
              <input
                type="text"
                name="currency"
                value={form.currency}
                onChange={atualizarForm}
                placeholder="Moeda"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Código do País</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={atualizarForm}
                placeholder="Código do País (+55)"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>População</label>
              <input
                type="number"
                name="population"
                value={form.population}
                onChange={atualizarForm}
                placeholder="População"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.mediaSection}>
            <h3 className={styles.sectionTitle}>Mídia (Opcional)</h3>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>URL da Bandeira</label>
              <input
                type="url"
                name="media.flag"
                value={form.media.flag}
                onChange={atualizarForm}
                placeholder="URL da Bandeira"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>URL do Emblema</label>
              <input
                type="url"
                name="media.emblem"
                value={form.media.emblem}
                onChange={atualizarForm}
                placeholder="URL do Emblema"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>URL do Mapa Ortográfico</label>
              <input
                type="url"
                name="media.orthographic"
                value={form.media.orthographic}
                onChange={atualizarForm}
                placeholder="URL do Mapa Ortográfico"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button
              onClick={criarNovoPais}
              disabled={!form.name.trim() || !form.capital.trim() || loading}
              className={styles.submitButton}
            >
              {loading ? (
                <>
                  <span className={styles.spinner}></span>
                  Criando...
                </>
              ) : (
                "Criar País"
              )}
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className={styles.errorMessage}>
          ❌ Erro ao criar país
        </div>
      )}

      {addedPais.length > 0 && (
        <div className={styles.countriesSection}>
          <h2 className={styles.sectionTitle}>Países Criados ({addedPais.length})</h2>
          <div className={styles.countriesGrid}>
            {addedPais.map((pais) => (
              <div key={pais.id} className={styles.countryCard}>
                <div className={styles.cardHeader}>
                  <h3>{pais.name}</h3>
                  <span className={styles.abbreviation}>{pais.abbreviation}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.infoItem}>
                    <strong>ID:</strong> {pais.id}
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Capital:</strong> {pais.capital}
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Moeda:</strong> {pais.currency}
                  </div>
                  <div className={styles.infoItem}>
                    <strong>Código do País:</strong> {pais.phone}
                  </div>
                  <div className={styles.infoItem}>
                    <strong>População:</strong> {pais.population}
                  </div>
                  {(pais.media?.flag || pais.media?.emblem || pais.media?.orthographic) && (
                    <div className={styles.mediaContainer}>
                      <strong>Mídia:</strong>
                      <div className={styles.mediaImages}>
                        {pais.media?.flag && <img src={pais.media.flag} alt="Bandeira" className={styles.mediaImage} />}
                        {pais.media?.emblem && <img src={pais.media.emblem} alt="Emblema" className={styles.mediaImage} />}
                        {pais.media?.orthographic && <img src={pais.media.orthographic} alt="Mapa Ortográfico" className={styles.mediaImage} />}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}