import React from "react";
import { motion } from "framer-motion";
import "../../style/footers/footer-capacete.css";

interface FooterProps {
  mainPage: boolean;
}

const FooterCapacete: React.FC<FooterProps> = ({ mainPage }) => {
  return (
    <motion.footer
      className="capacete-footer"
      initial={{ y: 0 }}                 // começa visível
      animate={{ y: mainPage ? 0 : 150 }} // true = esconde | false = mostra
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="capacete-estrutura" />

      <div className="capacete-painel">
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
      </div>
    </motion.footer>
  );
};

export default FooterCapacete;
