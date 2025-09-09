import styles from "./appinfo.module.css";

export default function ApiInfoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sobre a API</h1>
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
          <span className={styles.label}>Endpoint usado:</span> /countries
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Atributos recebidos:</span>{" "}
          <strong>id, nome, imagem, descricaoCurta, populacao, area</strong>
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Descrição:</span> Essa API fornece informações sobre
          países, incluindo nome, população, área e outras características.
        </p>
      </div>
    </div>
  );
}