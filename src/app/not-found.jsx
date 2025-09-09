// src/app/not-found.jsx

import Link from "next/link";
import styles from "./page.module.css";

export default function NotFoundPage() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 p-6 gap-10">
      {/* Emojis de viagem */}
      <div className="text-7xl mb-6 animate-bounce">🌍✈️</div>

      {/* Título */}
      <h1 className="text-5xl font-extrabold text-center" style={{ color: '#177ebe' }}>
        Ops...Destino não encontrado!
      </h1>

      {/* Subtítulo */}
      <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
        Parece que você se perdeu na viagem...  
        Esse país não faz parte do nosso mapa. Mas não se preocupe, há muitos outros destinos para explorar!
      </p>

      {/* Botões */}
  <div className="flex gap-8 mt-8">
        <Link
          href="/"
          className={styles.notFoundButton}
        >
          🌐 Voltar à Home
        </Link>

        <Link
          href="/entidade"
          className={styles.notFoundButton}
        >
          🗺️ Explorar Países
        </Link>
      </div>
    </div>
  );
}
