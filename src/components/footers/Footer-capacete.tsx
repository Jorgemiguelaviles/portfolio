import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../style/footers/footer-capacete.css";

interface FooterProps {
  mainPage: boolean;
}

const FooterCapacete: React.FC<FooterProps> = ({ mainPage }) => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <motion.footer
      className={`capacete-footer ${openMobile ? "mobile-open" : ""}`}
      initial={{ y: 0 }}
      animate={{
        y: mainPage ? 0 : 250,
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* HANDLE MOBILE */}
      <button
        className="capacete-handle"
        onClick={() => setOpenMobile((prev) => !prev)}
        aria-label="Abrir menu inferior"
      >
        <span className="capacete-handle-bar" />
        <span className="capacete-handle-bar" />
        <span className="capacete-handle-bar" />
      </button>

      <div className="capacete-estrutura" />

      <motion.div
        className="capacete-painel"
        animate={{
          y: openMobile ? 0 : 200,
          opacity: openMobile ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="capacete-link"
          whileHover={{ scale: 1.1 }}
        >
          LinkedIn
        </motion.a>

        <motion.a
          href="https://github.com/Jorgemiguelaviles"
          target="_blank"
          rel="noopener noreferrer"
          className="capacete-link"
          whileHover={{ scale: 1.1 }}
        >
          GitHub
        </motion.a>

        <motion.a
          href="https://www.itau.com.br/cadevoce"
          target="_blank"
          rel="noopener noreferrer"
          className="capacete-link"
          whileHover={{ scale: 1.1 }}
        >
          Cadê Você · Itaú
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default FooterCapacete;
