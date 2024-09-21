import React from 'react';
import SectionBio from './softsSkillComponents';
import HardSkills from './hardSkills';
import Bio from './bio';
import '../style/contentMain.css';
import Contacts from './Contacts'

interface SkillsSectionProps {
  isRotated: boolean;
  handleRotation: () => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isRotated, handleRotation }) => {
  const skills = [
    {
      titulo: 'Comunicação Assertiva',
      description: 'Durante minha experiência em vendas, aprendi a importância da comunicação assertiva. É essencial transmitir informações de maneira clara e eficaz, garantindo que a mensagem seja compreendida como pretendido.',
    },
    {
      titulo: 'Proatividade',
      description: 'Ser proativo é essencial para antecipar problemas e criar soluções antes que se tornem críticos. Esta habilidade me ajudou a identificar oportunidades e a atuar de forma a melhorar continuamente os processos e resultados.',
    },
    {
      titulo: 'Visão de Negócio',
      description: 'Desenvolvi uma visão de negócio ao compreender que ser um desenvolvedor envolve mais do que resolver problemas técnicos. É crucial entender o impacto que cada linha de código pode ter na vida das pessoas e como isso pode influenciar o cotidiano delas.',
    },
    {
      titulo: 'Empatia',
      description: 'A empatia é crucial para entender as reais necessidades dos clientes. Ao se colocar no lugar deles, é possível criar soluções mais eficazes e alinhadas com suas expectativas e necessidades.',
    },
    {
      titulo: 'Inteligência Emocional',
      description: 'Gerenciar a inteligência emocional é fundamental ao lidar com projetos sob pressão. Manter a calma e a clareza emocional afeta diretamente a qualidade das decisões e o bem-estar geral.',
    },
    {
      titulo: 'Resiliência',
      description: 'Ser resiliente é essencial para enfrentar desafios e superar obstáculos. Essa habilidade permite adaptar-se às mudanças e encontrar soluções criativas em situações de pressão.',
    },
  ];

  return (
    <div className="skills">
      <Bio />
      <h1>Soft Skills</h1>
      <div className="softskills">
        {skills.map((skill, index) => (
          <SectionBio key={index} titulo={skill.titulo} description={skill.description} />
        ))}
      </div>
      <div className="hardskills">
        <HardSkills />
      </div>
      <button className="rotate-button" onClick={handleRotation}>
        {isRotated ? 'Mostrar Soft Skills' : 'Mostrar Projetos'}
      </button>
      <div>
        {<Contacts />}
      </div>
    </div>
  );
};

export default SkillsSection;
