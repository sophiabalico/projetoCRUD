// src/app/not-found.jsx


import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFoundPage() {

  return (
    <div className={styles.container}>
      {/* Emojis de viagem */}
  <div style={{ fontSize: '4.5rem', marginBottom: '1.5rem', animation: 'bounce 1.5s infinite' }}>🌍✈️</div>

      {/* Título */}
      <h1 style={{ fontSize: '3rem', fontWeight: 800, textAlign: 'center', color: '#177ebe' }}>
        Ops...Destino não encontrado!
      </h1>

      {/* Subtítulo */}
      <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: '#444', textAlign: 'center', maxWidth: '32rem' }}>
        Parece que você se perdeu na viagem...<br />
        Esse país não faz parte do nosso mapa. Mas não se preocupe, há muitos outros destinos para explorar!
      </p>

      {/* Botões */}
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <Link href="/" className={styles.notFoundButton}>
          🌐 Voltar à Home
        </Link>
        <Link href="/entidade" className={styles.notFoundButton}>
          🗺️ Explorar Países
        </Link>
      </div>
    </div>
  );
}
