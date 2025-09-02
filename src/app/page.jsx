import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
      <div className={styles.main}>
        <div className={styles.content}>
          <h1>Sophia Ellen dos Santos Balico</h1>
          <p>
           Faço parte do curso de Desenvolvimento de Sistemas no SENAI na turma 2TDS2
          </p>
          <p>
           Frase inspiradora: "A persistência é o caminho do êxito." - Charles Chaplin
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/Sophia.png"
            alt="Foto de perfil"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
  );
}