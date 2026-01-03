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
  onZoomStart: () => void; // 🔑 callback para silenciar o fundo
}

const IMAGE_TIMEOUT = 6000;

const Background: React.FC<BackgroundProps> = ({
  data,
  isZoomOut,
  isLoading,
  titleText,
  handleExploreClick,
  mainPage,
  onZoomStart,
}) => {
  const [imageReady, setImageReady] = useState(false);
  const [forceStopLoading, setForceStopLoading] = useState(false);
  const [zoomTriggered, setZoomTriggered] = useState(false);

  /* ===============================
     CONTROLE ROBUSTO DA IMAGEM
  ============================== */
  useEffect(() => {
    if (!data || data.media_type !== "image") {
      setImageReady(true);
      return;
    }

    const img = new Image();
    const timeout = setTimeout(() => {
      setImageReady(true);
      setForceStopLoading(true);
    }, IMAGE_TIMEOUT);

    img.src = data.hdurl || data.url;

    img.onload = () => {
      clearTimeout(timeout);
      setImageReady(true);
    };

    img.onerror = () => {
      clearTimeout(timeout);
      setImageReady(true);
      setForceStopLoading(true);
    };

    return () => clearTimeout(timeout);
  }, [data]);

  /* ===============================
     DISPARO ÚNICO DO SILÊNCIO
  ============================== */
  useEffect(() => {
    if (isZoomOut && !zoomTriggered) {
      setZoomTriggered(true);
      onZoomStart(); // 🔇 silencia apenas o fundo
    }

    if (!isZoomOut) {
      setZoomTriggered(false); 
    }
  }, [isZoomOut, zoomTriggered, onZoomStart]);

  const shouldShowLoader =
    !forceStopLoading &&
    isLoading &&
    !imageReady;

  return (
    <AnimatePresence>
      {mainPage && (
        <motion.section
          className="start"
          style={{
            backgroundImage:
              data?.media_type === "image" && imageReady
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

              {shouldShowLoader && (
                <div className="loader-container">
                  <div className="cosmic-loader" />
                  <p className="loading-text">
                    Sincronizando dados cósmicos…
                  </p>
                </div>
              )}

              {!shouldShowLoader && !isZoomOut && (
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
