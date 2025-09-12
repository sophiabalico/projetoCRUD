import axios from "axios";
import CountryDetail from "../../components/CountryDetail/CountryDetail";
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
    <>
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          background: "linear-gradient(90deg, #f0f4f8, #d9e8fc), url('/images/mapa-mundi.png') center center/cover no-repeat",
          opacity: 0.18,
          pointerEvents: 'none',
        }} />
        <main className="min-h-screen p-6 flex flex-col items-center" style={{ position: 'relative', zIndex: 1 }}>
          {erro && <ErrorToast message={erro} />}
          <div style={{ height: 48 }} />
          {country && <CountryDetail country={country} />}
          <div style={{ height: 20 }} />
          <div className="flex gap-8 mt-8">
            <Link href="/paises" className={styles.notFoundButton}>
              🗺️ Voltar à Lista
            </Link>
            <Link href="/" className={styles.notFoundButton}>
              🌐 Voltar à Home
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
