"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from './paises.module.css';

const PaisesPage = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://api.sampleapis.com/countries/countries');
				setItems(response.data);
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
			   <h1
				   className={styles.entidadeTitulo + ' ' + styles.tituloLista}
				   style={{
					   fontSize: '2.3rem',
					   fontWeight: 900,
					   color: '#177ebe',
					   letterSpacing: 1,
					   textAlign: 'center',
					   margin: '0 0 32px 0',
					   textShadow: '0 2px 12px #177ebe22',
					   background: 'none',
					   borderRadius: 0,
					   padding: 0,
					   boxShadow: 'none',
				   }}
			   >
				   🌍 Lista de Países
			   </h1>
			   <div
				   className={styles.cardContainer}
				   style={{
					   display: 'grid',
					   gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
					   gap: 'clamp(16px, 4vw, 32px)',
					   width: '100%',
					   maxWidth: 1200,
					   margin: '0 auto',
					   alignItems: 'stretch',
				   }}
			   >
								{items.map((item) => (
									<div key={item.id} className={styles.card} style={{ boxShadow: '0 8px 32px #177ebe22, 0 1.5px 0 #177ebe inset', border: '2px solid #177ebe22', background: 'linear-gradient(135deg, #f4faff 60%, #e3f0fa 100%)' }}>
										<img src={item.media?.flag} alt={item.name} className={styles.image} style={{ border: '2px solid #177ebe33', background: '#fff' }} />
										<h2 style={{ fontSize: 22, fontWeight: 700, color: '#177ebe', margin: '8px 0 2px 0' }}>{item.name}</h2>
										<div className={styles.buttonCenter}>
											<Link href={`/paises/${item.id}`} className={styles.detailsButton}>
												🗺️ Ver mais
											</Link>
										</div>
									</div>
								))}
			</div>
		</div>
	);
};

export default PaisesPage;
