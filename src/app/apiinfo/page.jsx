import styles from "./apiinfo.module.css";

export default function ApiInfoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <img src="/icons/globo.png" alt="API" className={styles.apiIcon} />
          Sobre a API
        </h1>
        <p className={styles.text}>
          <span className={styles.label}>Nome da API:</span> <strong>Countries API</strong>
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Documentação oficial:</span>{" "}
          <a
            href="https://sampleapis.com/api-list/countries"
            target="_blank"
            className={styles.link}
          >
            Countries API Documentation
          </a>
        </p>
        <p className={styles.text}>
          <span className={styles.label}>URL base:</span> https://api.sampleapis.com/countries
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Endpoint usado:</span> /paises
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Atributos recebidos:</span>{" "}
          <strong>
            id, name, abbreviation, capital, population, currency, phone,<br/>
            media: &#123; flag, emblem, orthographic &#125;
          </strong>
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Descrição:</span> Essa API fornece informações sobre países do mundo. Para cada país, são disponibilizados dados como nome, sigla, capital, população, moeda, código telefônico internacional e imagens (bandeira, emblema e mapa). Os dados são ideais para aplicações de consulta, exibição de detalhes e comparativos entre países, facilitando a construção de experiências ricas e educativas sobre geografia e cultura global.
        </p>
      </div>
    </div>
  );
}