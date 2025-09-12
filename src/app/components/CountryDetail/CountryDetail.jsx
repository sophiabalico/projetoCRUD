import Image from "next/image";
import styles from "./CountryDetail.module.css";

export default function CountryDetail({ country }) {
  return (
    <div className={styles.bgMapaMundi}>
      <section className={styles.detailSection}>
      <div className={styles.detailHeader}>
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
        ) : (
          <div className={styles.detailFlagBox} style={{
            width: 120,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f0f4f8',
            color: '#177ebe',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: '1rem',
            border: '1.5px dashed #177ebe55',
            textAlign: 'center'
          }}>
            Bandeira não disponível
          </div>
        )}
        <div className={styles.detailNameBox}>
          <h2 className={styles.detailName}>{country.name}</h2>
          <span className={styles.detailAbbr}>({country.abbreviation})</span>
        </div>
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
        ) : (
          <div className={styles.detailEmblemBox} style={{
            width: 70,
            height: 70,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f0f4f8',
            color: '#177ebe',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: '0.95rem',
            border: '1.5px dashed #177ebe55',
            textAlign: 'center'
          }}>
            Emblema não disponível
          </div>
        )}
      </div>

      {/* Containers de informações */}
      <div className={styles.detailInfoList}>
        <div className={styles.detailInfo}>
          <span className={styles.detailLabel}>🏛️ Capital:</span>
          <span className={styles.detailValue}>
            {country.capital ? country.capital : <span style={{ color: '#b0b0b0', fontStyle: 'italic' }}>Capital não informada</span>}
          </span>
        </div>
        <div className={styles.detailInfo}>
          <span className={styles.detailLabel}>👥 População:</span>
          <span className={styles.detailValue}>
            {country.population ? country.population.toLocaleString('pt-BR') : <span style={{ color: '#b0b0b0', fontStyle: 'italic' }}>População não informada</span>}
          </span>
        </div>
        <div className={styles.detailInfo}>
          <span className={styles.detailLabel}>💰 Moeda:</span>
          <span className={styles.detailValue}>
            {country.currency ? country.currency : <span style={{ color: '#b0b0b0', fontStyle: 'italic' }}>Moeda não informada</span>}
          </span>
        </div>
        <div className={styles.detailInfo}>
          <span className={styles.detailLabel}>📞 DDD:</span>
          <span className={styles.detailValue}>
            {country.phone ? `+${country.phone}` : <span style={{ color: '#b0b0b0', fontStyle: 'italic' }}>DDD não informado</span>}
          </span>
        </div>
      </div>
      
      {/* Mapa */}
      {country.media?.orthographic ? (
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
      ) : (
        <div className={styles.detailMapBox} style={{
          width: 260,
          height: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f4f8',
          color: '#177ebe',
          borderRadius: 14,
          fontWeight: 600,
          fontSize: '1.05rem',
          border: '1.5px dashed #177ebe55',
          textAlign: 'center',
          marginTop: 18,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <span style={{ width: '100%', textAlign: 'center' }}>Localização não disponível</span>
        </div>
      )}
      </section>
    </div>
  );
}