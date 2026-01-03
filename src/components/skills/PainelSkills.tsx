import React, { useState, ReactNode } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/skills/PainelSkiils.css";

// 🔊 som único para troca de skill
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
const SWITCH_DELAY = 140; // ms — tempo do fade-out

const PainelSkills: React.FC<PainelSkillsProps> = ({ items }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const start = pageIndex * ITEMS_PER_PAGE;
  const visibleItems = items.slice(start, start + ITEMS_PER_PAGE);
  const selected = items[selectedIndex];

  /* ===============================
     SOM DE TROCA DE SKILL
  ============================== */
  const playSkillSwitchSound = () => {
    const audio = new Audio(skillSwitchSound);
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };

  /* ===============================
     TROCA DE SKILL
  ============================== */
  const changeSkill = (index: number) => {
    if (index === selectedIndex || isSwitching) return;

    playSkillSwitchSound(); // 🔊 som centralizado

    setIsSwitching(true);

    setTimeout(() => {
      setSelectedIndex(index);
      setIsSwitching(false);
    }, SWITCH_DELAY);
  };

  const goNext = () => {
    if (pageIndex < totalPages - 1) {
      const nextPage = pageIndex + 1;
      setPageIndex(nextPage);
      changeSkill(nextPage * ITEMS_PER_PAGE);
    }
  };

  const goPrev = () => {
    if (pageIndex > 0) {
      const prevPage = pageIndex - 1;
      setPageIndex(prevPage);
      changeSkill(prevPage * ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="painel-skills">
      {/* ================= CARROSSEL ================= */}
      <div className="skills-carousel">
        <button
          className="nav-arros-skiils"
          onClick={goPrev}
          disabled={pageIndex === 0 || isSwitching}
          type="button"
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
          className="nav-arros-skiils"
          onClick={goNext}
          disabled={pageIndex === totalPages - 1 || isSwitching}
          type="button"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* ================= DETALHES ================= */}
      <div
        className={`skill-details ${
          isSwitching ? "fade-out" : "fade-in"
        }`}
      >
        <h2>{selected.titulo}</h2>
        <p>{selected.description}</p>
      </div>
    </div>
  );
};

export default PainelSkills;
