import React from "react";
import '../style/style.css';
import foto from '../assets/imgs/foto.jpg';

const SectionBio: React.FC = () => {
  return (
    <section id="new-section" className="new-section">
      <div className="bio">
        <div>
          <h1 className="typing-effect">Biografia</h1>
        </div>
        <div className="direction">
          <div className="text-container">
            <p>
              Sou Jorge Miguel Aviles de Moura, desenvolvedor full-stack apaixonado por transformar ideias em soluções reais. Com uma abordagem focada em inovação e eficiência, busco sempre entregar o melhor em cada projeto.
            </p>
          </div>
          <img src={foto} alt="Foto de Jorge" className="foto img-container" />
        </div>
      </div>
      <div className="ship" id="ship"></div>
      <div className="skills">
        <div className="softskills">
          <div className="skill-item">
            <h2>Comunicação Assertiva</h2>
            <p>
              Durante minha experiência em vendas, aprendi a importância da comunicação assertiva. É essencial transmitir informações de maneira clara e eficaz, garantindo que a mensagem seja compreendida como pretendido.
            </p>
          </div>
          <div className="skill-item">
            <h2>Proatividade</h2>
            <p>
              Ser proativo é essencial para antecipar problemas e criar soluções antes que se tornem críticos. Esta habilidade me ajudou a identificar oportunidades e a atuar de forma a melhorar continuamente os processos e resultados.
            </p>
          </div>
          <div className="skill-item">
            <h2>Visão de Negócio</h2>
            <p>
              Desenvolvi uma visão de negócio ao compreender que ser um desenvolvedor envolve mais do que resolver problemas técnicos. É crucial entender o impacto que cada linha de código pode ter na vida das pessoas e como isso pode influenciar o cotidiano delas.
            </p>
          </div>
          <div className="skill-item">
            <h2>Empatia</h2>
            <p>
              A empatia é crucial para entender as reais necessidades dos clientes. Ao se colocar no lugar deles, é possível criar soluções mais eficazes e alinhadas com suas expectativas e necessidades.
            </p>
          </div>
          <div className="skill-item">
            <h2>Inteligência Emocional</h2>
            <p>
              Gerenciar a inteligência emocional é fundamental ao lidar com projetos sob pressão. Manter a calma e a clareza emocional afeta diretamente a qualidade das decisões e o bem-estar geral.
            </p>
          </div>
          <div className="skill-item">
            <h2>Resiliência</h2>
            <p>
              Ser resiliente é essencial para enfrentar desafios e superar obstáculos. Essa habilidade permite adaptar-se às mudanças e encontrar soluções criativas em situações de pressão.
            </p>
          </div>
        </div>
        <div className="hardskills">
          {/* Aqui você pode adicionar os componentes que representam suas hard skills */}
        </div>
      </div>
    </section>
  );
};

export default SectionBio;
