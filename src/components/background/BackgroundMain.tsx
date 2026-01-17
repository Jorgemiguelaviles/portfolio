import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import defaultBackground from "../../assets/imgs/base-intergalatica.png";
import "../../style/iniciation.css";

interface BackgroundProps {
  data: any;
  zoomEffect?: "zoomOut" | "zoomIn" | "none";
  isLoading: boolean;
  titleText: string;
  handleExploreClick: () => void;
  mainPage: boolean;
  onZoomStart: () => void;
}

const IMAGE_TIMEOUT = 6000;

const Background: React.FC<BackgroundProps> = ({
  data,
  zoomEffect = "none",
  isLoading,
  titleText,
  handleExploreClick,
  mainPage
}) => {
  const [imageReady, setImageReady] = useState(false);
  const [forceStopLoading, setForceStopLoading] = useState(false);

  // Carregamento robusto da imagem
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

  const shouldShowLoader = !forceStopLoading && isLoading && !imageReady;

  return (
    <AnimatePresence mode="wait">
      {mainPage && zoomEffect !== "zoomOut" && (
        <motion.section
          key={zoomEffect}
          className="start"
          style={{
            backgroundImage:
              data?.media_type === "image" && imageReady
                ? `url(${data.hdurl || data.url})`
                : `url(${defaultBackground})`,
          }}
          initial={
            zoomEffect === "zoomIn"
              ? { scale: 10, opacity: 0 }
              : { scale: 1, opacity: 1 }
          }
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 10, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="background-section">
            <div className="gradient-overlay" />
            <div className="text-layer">
              <h1 className="typing-effect">{titleText}</h1>

              {shouldShowLoader && (
                <div className="loader-container">
                  <div className="cosmic-loader" />
                  <p className="loading-text">Sincronizando dados cósmicos…</p>
                </div>
              )}

              {!shouldShowLoader && (zoomEffect === "none" || zoomEffect === "zoomIn") && (
                <div className="button-layer">
                  <button className="custom-button" onClick={handleExploreClick}>
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
