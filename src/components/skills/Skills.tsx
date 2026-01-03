import React from "react";
import PainelSkills from "./PainelSkills";
import "../../style/skills/skills.css";
import { softSkills } from "./softskills";
import { hardSkills } from "./hardSkills";
import skillSwitchSound from "../../assets/audio/cliqueButtonSound.mp3";

const SkillsSection: React.FC = () => {

    const playSkillSwitchSound = () => {
    const audio = new Audio(skillSwitchSound);
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };


  return (
    <section className="skills-panel-root">
      

      

      {/* CONTROLE VIA CSS */}
      <input type="radio" name="skills-panel" id="skills-panel-basic" defaultChecked hidden />
      <input type="radio" name="skills-panel" id="skills-panel-soft" hidden />
      <input type="radio" name="skills-panel" id="skills-panel-hard" hidden />

      <div className="skills-panel-stage">

        {/* BOTÕES */}
        <div className="skills-panel-buttons">

          <h1 className="skills-panel-title">Painel de Habilidades</h1>
          
          <label htmlFor="skills-panel-soft" className="skills-panel-button" onClick={playSkillSwitchSound}>
            Soft Skills
          </label>

          <label htmlFor="skills-panel-hard" className="skills-panel-button" onClick={playSkillSwitchSound}>
            Hard Skills
          </label>
        </div>

        {/* CONTEÚDO */}
        <div className="skills-panel-content">

          <div className="skills-panel-soft">
            <PainelSkills items={softSkills} />
          </div>

          <div className="skills-panel-hard">
            <PainelSkills items={hardSkills} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
