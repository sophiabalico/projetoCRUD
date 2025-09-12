import Link from "next/link";
import styles from "./CountryCard.module.css";

export default function CountryCard({ country }) {
  return (
    <div className={styles.card}>
      <img
        src={country.media?.flag}
        alt={country.name}
        className={styles.image}
      />
      <h2 className={styles.cardTitle}>{country.name}</h2>
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
