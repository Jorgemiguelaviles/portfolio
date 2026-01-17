import React, { useState, ReactNode } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/skills/PainelSkiils.css";

import skillSwitchSound from "../../assets/audio/cliqueButtonSound.mp3";

export interface SkillItem {
  titulo: string;
  description: string;
  icon: ReactNode;
}

interface PainelSkillsProps {
  items: SkillItem[];
}

const ITEMS_PER_PAGE = 5;
const SWITCH_DELAY = 140;

const PainelSkills: React.FC<PainelSkillsProps> = ({ items }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const start = pageIndex * ITEMS_PER_PAGE;
  const visibleItems = items.slice(start, start + ITEMS_PER_PAGE);
  const selected = items[selectedIndex];

  const playSkillSwitchSound = () => {
    const audio = new Audio(skillSwitchSound);
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };

  const changeSkill = (index: number) => {
    if (index === selectedIndex || isSwitching) return;

    playSkillSwitchSound();
    setIsSwitching(true);

    setTimeout(() => {
      setSelectedIndex(index);
      setIsSwitching(false);
    }, SWITCH_DELAY);
  };

  const goNext = () => {
    if (pageIndex < totalPages - 1) {
      const next = pageIndex + 1;
      setPageIndex(next);
      changeSkill(next * ITEMS_PER_PAGE);
    }
  };

  const goPrev = () => {
    if (pageIndex > 0) {
      const prev = pageIndex - 1;
      setPageIndex(prev);
      changeSkill(prev * ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="painel-skills">
      <div className="skills-carousel">
        <button
          className="nav-arros-skiils left"
          onClick={goPrev}
          disabled={pageIndex === 0 || isSwitching}
          type="button"
          aria-label="Skills anteriores"
        >
          <FaChevronLeft />
        </button>

        {visibleItems.map((skill, i) => {
          const absoluteIndex = start + i;
          const isActive = absoluteIndex === selectedIndex;

          return (
            <button
              key={absoluteIndex}
              className={`skill-icon-button ${isActive ? "active" : ""}`}
              onClick={() => changeSkill(absoluteIndex)}
              disabled={isSwitching}
              type="button"
            >
              {skill.icon}
            </button>
          );
        })}

        <button
          className="nav-arros-skiils right"
          onClick={goNext}
          disabled={pageIndex === totalPages - 1 || isSwitching}
          type="button"
          aria-label="Próximas skills"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={`skill-details ${isSwitching ? "fade-out" : "fade-in"}`}>
        <h2>{selected.titulo}</h2>
        <p>{selected.description}</p>
      </div>
    </div>
  );
};

export default PainelSkills;
