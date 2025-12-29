// src/components/Header-nave.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jorgetech from "../../assets/imgs/jorgetech.png";
import "../../style/headers/header-nave.css";

interface HeaderNaveProps {
  mainPage: boolean;
}

const HeaderNave: React.FC<HeaderNaveProps> = ({ mainPage }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="nave-hud"
      initial={false}
      animate={
        mainPage
          ? { opacity: 0, y: -120 } // mainPage true → escondido
          : { opacity: 1, y: 0 }    // mainPage false → aparece descendo
      }
      transition={{
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="nave-frame">
        {/* Indicadores do visor */}
        <div className="nave-status">
          <span className="nave-status-dot active" />
          <span className="nave-status-dot" />
          <span className="nave-status-dot" />
        </div>

        {/* Logotipo */}
        <motion.img
          src={jorgetech}
          className="nave-logo"
          alt="Logotipo"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />

        {/* Controles */}
        <nav className="nave-controls">
          <button
            className="nave-button"
            onClick={() => navigate("/")}
          >
            PRINCIPAL
          </button>

          <button
            className="nave-button"
            onClick={() => window.open("/curriculum/CV.docx", "_blank")}
          >
            CURRÍCULO
          </button>
        </nav>
      </div>
    </motion.div>
  );
};

export default HeaderNave;
