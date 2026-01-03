import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/conteentMain/contentMain.css";

import Projects from "../projects/Projects";
import SkillsSection from "../skills/Skills";
import SectionBioSection from "../biografia/SectionBio";

// sons
import panelPowerOnSound from "../../assets/audio/telaInicial.mp3";
import panelSwitchSound from "../../assets/audio/changeScreenSound.mp3"; // 🔊 som das setas

interface ContenteMainProps {
  mainPage: boolean;
  rotacao: boolean;
}

const PANELS = ["skills", "bio", "projects"] as const;
type PanelType = typeof PANELS[number];

const ContenteMain: React.FC<ContenteMainProps> = ({ mainPage, rotacao }) => {
  const controls = useAnimation();

  const [powerOn, setPowerOn] = useState(false);
  const [painel, setPainel] = useState<PanelType>("bio");
  const [switching, setSwitching] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);

  const panelIndex = PANELS.indexOf(painel);

  const showLeftArrow = painel !== "skills";
  const showRightArrow = painel !== "projects";

  /* ===============================
     SOM DAS SETAS
  ============================== */
  const playPanelSwitchSound = () => {
    const audio = new Audio(panelSwitchSound);
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };

  /* ===============================
     ENTRADA DO PAINEL
  ============================== */
  useEffect(() => {
    if (!mainPage) {
      const entryTimer = setTimeout(() => {
        // 🔊 SOM DE LIGAÇÃO DO PAINEL
        if (!soundPlayed) {
          const audio = new Audio(panelPowerOnSound);
          audio.volume = 0.6;
          audio.play().catch(() => {});
          setSoundPlayed(true);
        }

        // 🎬 ANIMAÇÃO PRINCIPAL (+2s)
        setTimeout(async () => {
          await controls.start({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.9, ease: "easeInOut" },
          });

          setPowerOn(true);
        }, 2000);
      }, 10500);

      return () => clearTimeout(entryTimer);
    } else {
      setPowerOn(false);
      setSoundPlayed(false);
    }
  }, [mainPage, controls, soundPlayed]);

  /* ===============================
     TROCA DE PAINEL (COM SOM)
  ============================== */
  const switchPanel = (next: PanelType) => {
    if (switching) return;

    playPanelSwitchSound(); // 🔊 som sempre que troca

    setSwitching(true);

    setTimeout(() => {
      setPainel(next);
    }, 500);

    setTimeout(() => {
      setSwitching(false);
    }, 1000);
  };

  const handleNext = () => {
    if (panelIndex < PANELS.length - 1) {
      switchPanel(PANELS[panelIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (panelIndex > 0) {
      switchPanel(PANELS[panelIndex - 1]);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {(!mainPage && !rotacao) && (
        <motion.section
          className="new-section"
          animate={controls}
          exit={{
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          style={{ opacity: 0, scale: 0.96 }}
        >
          <div className="ship-screen">
            {!powerOn && <div className="panel-overlay" />}

            <div
              className={`
                ship-panel
                panel-on
                panel-${painel}
                ${switching ? "panel-switch" : ""}
              `}
            >
              <div className="container-main">
                <div className="panel-content bio">
                  <SectionBioSection />
                </div>

                <div className="panel-content skills">
                  <SkillsSection />
                </div>

                <div className="panel-content projects">
                  <Projects />
                </div>

                {showLeftArrow && (
                  <FaChevronLeft
                    className="nav-arrow left"
                    onClick={handlePrev}
                  />
                )}

                {showRightArrow && (
                  <FaChevronRight
                    className="nav-arrow right"
                    onClick={handleNext}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ContenteMain;
