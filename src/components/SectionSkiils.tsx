import React, { useEffect, useState } from 'react';
import '../style/contentMain.css';
import Bio from './bio';
import SkillsSection from './Skills.tsx'
import Projects from './Projects.tsx'
const SectionBioSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleRotation = () => {
    setIsRotated(!isRotated);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Adiciona rolagem suave para o topo
  };

  return (
    <section id="new-section" className={`new-section ${animate ? 'animate' : ''}`}>
      <div className="box">
        <div className={`boxContent ${isRotated ? 'rotate' : ''}`}>
          <SkillsSection isRotated={isRotated} handleRotation={handleRotation} />
          <Projects isRotated={isRotated} handleRotation={handleRotation} />  
        </div>
      </div>
    </section>
  );
};

export default SectionBioSection;
