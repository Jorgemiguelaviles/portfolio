import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jorgetech from "../../assets/imgs/jorgetech.png";
import "../../style/headers/header-capacete.css";

interface HeaderProps {
  mainPage: boolean;
}

const HeaderCapacete: React.FC<HeaderProps> = ({ mainPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className={`capacete-hud ${!mainPage ? "capacete-exit" : ""}`}
      initial={{ y: 0 }}
      animate={{ y: !mainPage ? -250 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="capacete-container">
        <img src={jorgetech} className="capacete-logo" alt="Logotipo" />

        {/* Desktop / Tablet */}
        <nav className="capacete-controls desktop-only">
          <motion.button
            className="capacete-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open("src/assets/docs/curriculum.pdf", "_blank")
            }
          >
            Currículo
          </motion.button>
        </nav>

        {/* Mobile */}
        <button
          className="capacete-menu-toggle mobile-only"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE EXPANSÍVEL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="capacete-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.button
              className="capacete-button mobile"
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("src/assets/docs/curriculum.pdf", "_blank")
              }
            >
              Currículo
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderCapacete;
