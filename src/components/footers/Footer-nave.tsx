import "../style/footer-nave.css";
import React from "react";
import { motion } from "framer-motion";

interface FooterNaveProps {
  mainPage: boolean;
}

const FooterNave: React.FC<FooterNaveProps> = ({ mainPage }) => {
  return (
    <motion.div
      className="nave-panel-top"
      initial={false}
      animate={
        mainPage
          ? { y: 140, opacity: 0 } // mainPage true → desce e some
          : { y: 0, opacity: 1 }   // mainPage false → sobe e aparece
      }
      transition={{
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // desaceleração pesada (HUD-like)
      }}
    >
      <div className="nave-panel-frame">
        <span className="nave-indicator active" />
        <span className="nave-indicator" />
        <span className="nave-indicator" />

        <nav className="nave-panel-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a
            href="https://www.itau.com.br/carreiras"
            target="_blank"
            rel="noreferrer"
          >
            ITAÚ SYSTEMS
          </a>
        </nav>
      </div>
    </motion.div>
  );
};

export default FooterNave;
