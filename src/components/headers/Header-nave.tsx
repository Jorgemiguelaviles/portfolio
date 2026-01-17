// src/components/headers/Header-nave.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jorgetech from "../../assets/imgs/jorgetech.png";
import "../../style/headers/header-nave.css";
import skillSwitchSound from "../../assets/audio/openDoor.mp3";

interface HeaderNaveProps {
  mainPage: boolean;
  setMainPage: any;
  setRotacao: any;
  setVisible: any;
}

const HeaderNave: React.FC<HeaderNaveProps> = ({
  mainPage,
  setMainPage,
  setRotacao,
  setVisible,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const playSkillSwitchSound = () => {
    const audio = new Audio(skillSwitchSound);
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };

  const goToMain = () => {
    playSkillSwitchSound();
    setMainPage(true);
    setRotacao(true);
    setVisible(true);
    setMenuOpen(false);
  };

  return (
    <motion.div
      className="nave-hud"
      initial={{ opacity: 0, y: -120 }}
      animate={{ opacity: mainPage ? 0 : 1, y: mainPage ? -120 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nave-frame">
        {/* Indicadores */}
        <div className="nave-status">
          <span className="nave-status-dot active" />
          <span className="nave-status-dot" />
          <span className="nave-status-dot" />
        </div>

        {/* Logo */}
        <motion.img
          src={jorgetech}
          className="nave-logo"
          alt="Logotipo"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: mainPage ? 0 : 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Desktop / Tablet */}
        <nav className="nave-controls desktop-only">
          <button className="nave-button" onClick={goToMain}>
            PRINCIPAL
          </button>

          <button
            className="nave-button"
            onClick={() =>
              window.open("src/assets/docs/curriculum.pdf", "_blank")
            }
          >
            CURRÍCULO
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nave-menu-toggle mobile-only"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nave-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button className="nave-button mobile" onClick={goToMain}>
              PRINCIPAL
            </button>

            <button
              className="nave-button mobile"
              onClick={() =>
                window.open("src/assets/docs/curriculum.pdf", "_blank")
              }
            >
              CURRÍCULO
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderNave;
