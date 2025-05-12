import Image from 'next/image'
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { PainSection } from '@/components/PainSection/PainSection';
import { TestimonialsSection } from '@/components/TestimonialsSection/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <section className="solution-section">
        <div className="container solution-container">
          <h2 className="solution-title">A solução definitiva</h2>
          
          <div className="solution-box">
            <p className="solution-text">
              Foi nessa etapa, perto da desistência, que a <span className="solution-name">Ju</span> entrou 
              na <span className="solution-highlight">Imersão em LDB</span>, uma aula profunda ministrada 
              pela <span className="solution-name">Amanda Faraco</span>, especialista em concursos 
              educacionais com anos de experiência e uma didática inconfundível, capaz de fazer até 
              os temas mais complexos parecerem simples.
            </p>
            
            <p className="solution-text">
              E agora, estamos abrindo uma nova turma para esse mesmo treinamento, 
              <span className="solution-highlight"> capaz de mudar o rumo da sua história</span>, 
              acabar com a sequência de reprovações e te levar à essa conquista transformadora.
            </p>
          </div>

          <p className="solution-cta">
            A imersão foi cuidadosamente desenhada para professores e pedagogos como você, 
            que querem dominar a LDB de forma prática e direta. Com a orientação experiente 
            da Amanda, você vai desvendar todos os princípios e aprender a aplicá-los com 
            confiança nas provas que vão mudar sua vida.
          </p>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container benefits-container">
          <div className="benefits-intro">
            <h2 className="benefits-title">Benefícios que vão acelerar sua aprovação</h2>
            <p className="benefits-subtitle">
              Ao se inscrever na Imersão em LDB, você terá em mãos tudo o que precisa para dar um salto na sua preparação:
            </p>
          </div>

          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-image-container">
                <Image
                  src="/images/aulas-praticas.png"
                  alt="Aulas práticas"
                  width={300}
                  height={200}
                  className="benefit-image"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Aulas práticas</h3>
                <p className="benefit-text">
                  Entenda cada princípio da LDB de forma clara e aplicável, destacando-se nesse tema e 
                  garantindo <span className="benefit-highlight">vantagem competitiva</span> sobre seus concorrentes.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-image-container">
                <Image
                  src="/images/recursos-visuais.png"
                  alt="Recursos visuais e resumos"
                  width={300}
                  height={200}
                  className="benefit-image"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Recursos visuais e resumos</h3>
                <p className="benefit-text">
                  Leve seus estudos para outro nível com recursos visuais e resumos práticos que 
                  organizam sua rotina e facilitam a <span className="benefit-highlight">memorização</span>.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-image-container">
                <Image
                  src="/images/guia-bonus.png"
                  alt="Guia de Conhecimentos Pedagógicos"
                  width={300}
                  height={200}
                  className="benefit-image"
                />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Guia de Conhecimentos Pedagógicos</h3>
                <p className="benefit-text">
                  Um <span className="benefit-highlight">bônus especial</span> com os 11 temas mais cobrados em concursos, 
                  100% gratuito para complementar sua preparação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-strip">
        <div className="highlight-strip-container">
          <p className="highlight-strip-text">
            O que vai garantir sua aprovação não é <span className="highlight-strip-emphasis">estudar mais</span>, 
            mas sim <span className="highlight-strip-emphasis">estudar melhor</span>.
          </p>
        </div>
      </section>

      <TestimonialsSection />
    </main>
  )
} 