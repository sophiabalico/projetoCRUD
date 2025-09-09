"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './entidade.module.css';
// Remover uso incorreto de Image()

const EntidadePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
    return <p>Carregando países...</p>;
  }

  return (
    <div className={styles.container}>
  <h1 className={styles.entidadeTitulo}>Lista de Países</h1>
      <div className={styles.cardContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.media?.flag} alt={item.name} className={styles.image} />
            <h2>{item.name}</h2>
            <p>{item.capital}</p>
                  <div className={styles.buttonRight}>
                    <Link href={`/paises/${item.id}`} className={styles.detailsButton}>
                      Ver mais
                    </Link>
                  </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntidadePage;