
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Sophia.png"
          alt="Foto de perfil"
          width={250}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
         Seja bem-vindo(a) ao Tripass!
        </h1>
        <h2 className={styles.subtitle}>
          Sophia Ellen dos Santos Balico
        </h2>
        <p className={styles.description}>
          Sou estudante de Desenvolvimento de Sistemas no SENAI e faço parte da turma 2TDS2.
        </p>
        <blockquote className={styles.quote}>
          "A fé é a certeza das coisas que se esperam e a prova das coisas que não se veem." <br />
          <span style={{fontSize: '0.95em', color: '#177ebe'}}>– Hebreus 11:1</span>
        </blockquote>
      </div>
    </div>
  );
}