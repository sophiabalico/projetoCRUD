import Link from "next/link";
import styles from "../paises/paises.module.css";

export default function CountryCard({ country }) {
  return (
    <div className={styles.card}>
      <img
        src={country.media?.flag}
        alt={country.name}
        className={styles.image}
      />
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#177ebe', margin: '8px 0 2px 0' }}>{country.name}</h2>
      <div className={styles.buttonCenter}>
        <Link
          href={`/paises/${country.id}`}
          className={styles.detailsButton}
        >
          🗺️ Ver mais
        </Link>
      </div>
    </div>
  );
}
