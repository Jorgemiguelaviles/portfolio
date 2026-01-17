import "../../style/footers/footer-nave.css";
import React from "react";
import { motion } from "framer-motion";

interface FooterNaveProps {
  mainPage: boolean;
}

const FooterNave: React.FC<FooterNaveProps> = ({ mainPage }) => {
  return (
    <motion.footer
      className="nave-panel-top"
      initial={false}
      animate={
        mainPage
          ? { y: 120, opacity: 0 }
          : { y: 0, opacity: 1 }
      }
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="nave-panel-frame">
        <div className="nave-indicators">
          <span className="nave-indicator active" />
          <span className="nave-indicator" />
          <span className="nave-indicator" />
        </div>

        <nav className="nave-panel-links">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Jorgemiguelaviles"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.itau.com.br/carreiras"
            target="_blank"
            rel="noreferrer"
          >
            Itaú Systems
          </a>
        </nav>
      </div>
    </motion.footer>
  );
};

export default FooterNave;
