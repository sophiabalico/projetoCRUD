"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './entidade.module.css';
// Remover uso incorreto de Image()

const EntidadePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Substitua pela URL da sua API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/countries/countries');
        setItems(response.data); // Ajuste conforme o formato da resposta da API
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingBox}>
        <span className={styles.loadingSpinner}></span>
        <span className={styles.loadingText}>Carregando países...</span>
      </div>
    );
  }

  // Filtra países pelo nome
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.entidadeTitulo}>Lista de Países 🌍</h1>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="🔎 Buscar país..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.cardContainer}>
        {filteredItems.length === 0 ? (
          <p style={{width: '100%', textAlign: 'center', color: '#888', fontWeight: 500, fontSize: '1.1rem', marginTop: '32px'}}>Nenhum país encontrado.</p>
        ) : (
          filteredItems.map((item) => (
            <div key={item.id} className={styles.card}>
              {item.media?.flag && (
                <img src={item.media.flag} alt={item.name} className={styles.image} />
              )}
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <div className={styles.buttonRight} style={{ justifyContent: 'center', marginTop: 8 }}>
                <Link href={`/paises/${item.id}`} className={styles.detailsButton}>
                  🗺️ Ver mais
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EntidadePage;