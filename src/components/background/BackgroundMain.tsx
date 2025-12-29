import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import defaultBackground from "../../assets/imgs/base-intergalatica.png";
import "../../style/iniciation.css";

interface BackgroundProps {
  data: any;
  isZoomOut: boolean;
  isLoading: boolean;
  titleText: string;
  handleExploreClick: () => void;
  mainPage: boolean;
}

const Background: React.FC<BackgroundProps> = ({
  data,
  isZoomOut,
  isLoading,
  titleText,
  handleExploreClick,
  mainPage,
}) => {
  const [visible, setVisible] = useState(true);

  console.log('visible',visible)
  console.log('mainPage',mainPage)

  useEffect(() => {
    if (mainPage) {
      setVisible(true);
    }
  }, [mainPage]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setVisible(false);
      }}
    >
      {visible && mainPage && (
        <motion.section
          className="start"
          style={{
            backgroundImage:
              data?.media_type === "image"
                ? `url(${data.hdurl || data.url})`
                : `url(${defaultBackground})`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={
            isZoomOut
              ? { scale: 10, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: isZoomOut ? 5.7 : 0.8,
            ease: "easeInOut",
          }}
        >
          <div className="background-section">
            <div className="gradient-overlay" />

            <div className="text-layer">
              <h1 className="typing-effect">{titleText}</h1>

              {isLoading && (
                <div className="loader-container">
                  <div className="cosmic-loader" />
                  <p className="loading-text">
                    Sincronizando dados cósmicos…
                  </p>
                </div>
              )}

              {!isLoading && !isZoomOut && (
                <div className="button-layer">
                  <button
                    className="custom-button"
                    onClick={handleExploreClick}
                  >
                    Explorar
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Background;
