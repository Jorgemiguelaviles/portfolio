import React from 'react';
import '../../style/skills/skills.css';

const SkillsSection: React.FC = () => {
  return (
    <section className="skills">

      <h1>Painel de Habilidades</h1>

      {/* CONTROLE DE ESTADO VIA CSS */}
      <input type="radio" name="skills" id="basic" defaultChecked hidden />
      <input type="radio" name="skills" id="soft" hidden />
      <input type="radio" name="skills" id="hard" hidden />

      {/* PAINEL DE BOTÕES */}
      <div className="skills-panel-buttons">
        <label htmlFor="soft" className="panel-button">
          Soft Skills
        </label>

        <label htmlFor="hard" className="panel-button">
          Hard Skills
        </label>
      </div>

      {/* CONTEÚDO */}
      <div className="skills-content">

        <div className="skills-soft">
          {/* <SectionBio /> */}
          <p>Conteúdo de Soft Skills</p>
        </div>

        <div className="skills-hard">
          {/* <HardSkills /> */}
          <p>Conteúdo de Hard Skills</p>
        </div>

      </div>

    </section>
  );
};

export default SkillsSection;
