import Image from 'next/image';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Domine a <span className="gradient-text">LDB</span> e Conquiste sua Aprovação
            </h1>
            <p className={styles.subtitle}>
              Aprenda de forma eficiente e estratégica a Lei de Diretrizes e Bases da Educação para garantir sua aprovação em concursos públicos.
            </p>
            <button className={styles.cta}>
              Quero Garantir Minha Vaga
            </button>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/hero-image.png"
              alt="Professora estudando a LDB"
              width={500}
              height={500}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 