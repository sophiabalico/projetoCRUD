import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Sophia.png"
          alt="Foto de perfil"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Sophia Ellen dos Santos Balico</h1>
        <p className={styles.description}>
          Faço parte do curso de Desenvolvimento de Sistemas no SENAI na turma 2TDS2
        </p>
        <p className={styles.quote}>
          Frase inspiradora: "A persistência é o caminho do êxito." - Charles Chaplin
        </p>
      </div>
    </div>
  );
}