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
          <span className={styles.label}>Nome da API:</span>{" "}
          <strong>Countries API</strong>
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
          <span className={styles.label}>Endpoint usado:</span>{" "}
          https://api.sampleapis.com/countries/countries
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Atributos recebidos:</span>{" "}
          <pre className={styles.json}>
            {`{
  "abbreviation": "BR",
  "capital": "Brasilia",
  "currency": "BRL",
  "name": "Brazil",
  "phone": "55",
  "population": 207652865,
  "media": {
    "flag": "https://exampleflagurl.com/brazil.png",
    "emblem": "https://exampleemblemurl.com/brazil.png",
    "orthographic": "https://examplemapurl.com/brazil.png"
  },
  "id": 21
}`}
          </pre>
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Rotas:</span>{" "}
          GET: /paises - Lista todos os países
          <br />
          GET: /paises/{'{id}'} - Detalhes de um país específico
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Descrição:</span> Essa API fornece
          informações sobre países do mundo. Para cada país, são
          disponibilizados dados como nome, sigla, capital, população, moeda,
          código telefônico internacional e imagens (bandeira, emblema e mapa).
          Os dados são ideais para aplicações de consulta, exibição de detalhes
          e comparativos entre países, facilitando a construção de experiências
          ricas e educativas sobre geografia e cultura global.
        </p>
      </div>
    </div>
  );
}
