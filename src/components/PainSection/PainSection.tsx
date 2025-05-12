import styles from './PainSection.module.css';

export function PainSection() {
  return (
    <section className={styles.painSection}>
      <div className="container">
        <h2 className={styles.title}>Você já viveu isso?</h2>
        
        <div className={styles.storyBox}>
          <p className={styles.storyText}>
            <span className={styles.highlight}>Juliana</span>, uma professora que sonhava com a 
            estabilidade de uma carreira no serviço público. Por anos, ela estudou dia e noite, 
            enfrentando livros intermináveis e provas desafiadoras. Mas havia um obstáculo que 
            tirava seu sono: a <span className={styles.highlight}>LDB</span>.
          </p>
          <p className={styles.storyText}>
            Apesar de todo o esforço, Juliana se perdia nos detalhes, nas leis e nas questões 
            dos concursos que pareciam enigmas. Cada reprovação era um peso a mais, e ela começou 
            a questionar...
          </p>
          <p className={styles.quote}>
            "Será que esse futuro realmente é para mim?"
          </p>
        </div>

        <p className={styles.empathyText}>
          Se você já se sentiu <span className={styles.highlight}>frustrado</span>, 
          <span className={styles.highlight}> inseguro</span> ou 
          <span className={styles.highlight}> perdido</span> ao tentar entender a LDB, 
          saiba que não está sozinho. Muitos educadores como você enfrentam essa mesma 
          barreira – mas a <span className={styles.highlight}>boa notícia é que existe 
          um caminho para superá-la</span>.
        </p>
      </div>
    </section>
  );
} 