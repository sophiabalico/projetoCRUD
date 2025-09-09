import axios from "axios";
import CountryDetail from "@/app/components/CountryDetail";
import ErrorToast from "@/app/components/ErrorToast";

import Link from "next/link";
import styles from "../../page.module.css";

export default async function CountryDetailPage({ params }) {
  let country = null;
  let erro = "";

  try {
    const res = await axios.get(`https://api.sampleapis.com/countries/countries/${params.id}`);
    country = res.data;
  } catch {
    erro = "Erro ao carregar detalhes do país!";
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-6 flex flex-col items-center">
      {erro && <ErrorToast message={erro} />}
      {country && <CountryDetail country={country} />}
      <div className="flex gap-8 mt-8">
        <Link href="/paises" className={styles.notFoundButton}>
          🗺️ Voltar à Listagem
        </Link>
        <Link href="/" className={styles.notFoundButton}>
          🌐 Voltar à Home
        </Link>
      </div>
    </main>
  );
}
