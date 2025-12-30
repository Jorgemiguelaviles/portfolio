import React, { useState, ReactNode } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/skills/PainelSkiils.css";

export interface SkillItem {
  titulo: string;
  description: string;
  icon: ReactNode;
}

interface PainelSkillsProps {
  items: SkillItem[];
}

const ITEMS_PER_PAGE = 5;

const PainelSkills: React.FC<PainelSkillsProps> = ({ items }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const start = pageIndex * ITEMS_PER_PAGE;
  const visibleItems = items.slice(start, start + ITEMS_PER_PAGE);
  const selected = items[selectedIndex];

  const goNext = () => {
    if (pageIndex < totalPages - 1) {
      const nextPage = pageIndex + 1;
      setPageIndex(nextPage);
      setSelectedIndex(nextPage * ITEMS_PER_PAGE);
    }
  };

  const goPrev = () => {
    if (pageIndex > 0) {
      const prevPage = pageIndex - 1;
      setPageIndex(prevPage);
      setSelectedIndex(prevPage * ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="painel-skills">
      <div className="skills-carousel">

        <button
          className="nav-arros-skiils"
          onClick={goPrev}
          disabled={pageIndex === 0}
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
              onClick={() => setSelectedIndex(absoluteIndex)}
              type="button"
            >
              {skill.icon}
            </button>
          );
        })}

        <button
          className="nav-arros-skiils"
          onClick={goNext}
          disabled={pageIndex === totalPages - 1}
          type="button"
        >
          <FaChevronRight />
        </button>

      </div>

      <div className="skill-details">
        <h2>{selected.titulo}</h2>
        <p>{selected.description}</p>
      </div>
    </div>
  );
};

export default PainelSkills;
