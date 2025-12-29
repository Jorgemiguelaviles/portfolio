import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jorgetech from "../../assets/imgs/jorgetech.png";
import "../../style/headers/header-capacete.css";

interface HeaderProps {
  mainPage: boolean;
}

const HeaderCapacete: React.FC<HeaderProps> = ({ mainPage }) => {
  const navigate = useNavigate();

  return (
    <motion.header
      className={`capacete-hud ${!mainPage ? "capacete-exit" : ""}`}
      initial={{ y: 0 }}
      animate={{ y: !mainPage ? -150 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="capacete-container">

        <img
          src={jorgetech}
          className="capacete-logo"
          alt="Logotipo"
        />

        <nav className="capacete-controls">
          <motion.button
            className="capacete-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => navigate("/")}
          >
            Principal
          </motion.button>

          <motion.button
            className="capacete-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => window.open("/curriculum/CV.docx", "_blank")}
          >
            Currículo
          </motion.button>
        </nav>

      </div>
    </motion.header>
  );
};

export default HeaderCapacete;
