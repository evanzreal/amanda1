import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  'IMG_9116.jpg',
  'IMG_9115.PNG',
  'IMG_8771.jpg',
  'IMG_8246.jpg',
  'IMG_7741.jpg',
  'IMG_7460 (1).jpg',
  'IMG_7399 (1).jpg',
  'IMG_7265.jpg',
  'IMG_7174.jpg',
  'IMG_7173.jpg',
  'IMG_7172.jpg',
  'IMG_6914.jpg',
  'IMG_3518.jpg',
  'IMG_3500.jpg',
  'IMG_3204.jpg'
];

export function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.title}>Você pode ser o próximo!</h2>
        
        <div className={styles.grid}>
          {testimonials.map((image, index) => (
            <div key={image} className={styles.testimonialItem}>
              <Image
                src={`/images/depoimentos/${image}`}
                alt={`Depoimento de aluno aprovado ${index + 1}`}
                width={800}
                height={1000}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 