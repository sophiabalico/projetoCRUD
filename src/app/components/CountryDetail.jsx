import Image from "next/image";
import styles from "../paises/paises.module.css";

export default function CountryDetail({ country }) {
  return (
    <section className={styles.detailSection}>
      <div className={styles.detailHeader}>
        {/* Bandeira à esquerda */}
        {country.media?.flag ? (
          <div className={styles.detailFlagBox}>
            <Image
              src={country.media.flag}
              alt={`Bandeira de ${country.name}`}
              width={120}
              height={80}
              className={styles.detailFlag}
            />
            <span className={styles.detailFlagLabel}>Bandeira</span>
          </div>
        ) : <div className={styles.detailFlagBox} />}
        {/* Nome centralizado */}
        <div className={styles.detailNameBox}>
          <h2 className={styles.detailName}>{country.name}</h2>
          <span className={styles.detailAbbr}>({country.abbreviation})</span>
        </div>
        {/* Emblema à direita */}
        {country.media?.emblem ? (
          <div className={styles.detailEmblemBox}>
            <Image
              src={country.media.emblem}
              alt={`Emblema de ${country.name}`}
              width={70}
              height={70}
              className={styles.detailEmblem}
            />
            <span className={styles.detailEmblemLabel}>Emblema</span>
          </div>
        ) : <div className={styles.detailEmblemBox} />}
      </div>
      {/* Containers de informações */}
      <div className={styles.detailInfoList}>
        <div className={styles.detailInfo}><span className={styles.detailLabel}>🏛️ Capital:</span> <span className={styles.detailValue}>{country.capital}</span></div>
        <div className={styles.detailInfo}><span className={styles.detailLabel}>👥 População:</span> <span className={styles.detailValue}>{country.population?.toLocaleString('pt-BR')}</span></div>
        <div className={styles.detailInfo}><span className={styles.detailLabel}>💰 Moeda:</span> <span className={styles.detailValue}>{country.currency}</span></div>
        <div className={styles.detailInfo}><span className={styles.detailLabel}>📞 DDD:</span> <span className={styles.detailValue}>+{country.phone}</span></div>
      </div>
      {/* Mapa */}
      {country.media?.orthographic && (
        <div className={styles.detailMapBox}>
          <Image
            src={country.media.orthographic}
            alt={`Mapa de ${country.name}`}
            width={260}
            height={160}
            className={styles.detailMap}
          />
          <div className={styles.detailMapLabel}>Localização</div>
        </div>
      )}
    </section>
  );
}