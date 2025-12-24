import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import HomePageProps from "./rendenization";
import SectionBioSection from "../biografia/SectionBio";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/contentMain.css";

interface ContenteMainProps {
  mainPage: boolean;
}

const ContenteMain: React.FC<ContenteMainProps> = ({ mainPage }) => {
  const controls = useAnimation();
  const [powerOn, setPowerOn] = useState(false);

  useEffect(() => {
    if (!mainPage) {
      // 1️⃣ componente já está montado aqui
      // espera um frame + delay consciente
      const timer = setTimeout(() => {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.9,
            ease: "easeInOut",
          },
        });

        setPowerOn(true);
      }, 12500);

      return () => clearTimeout(timer);
    } else {
      setPowerOn(false);
    }
  }, [mainPage, controls]);

  const handleNext = () => {
    console.log("Próximo painel");
  };

  const handlePrev = () => {
    console.log("Painel anterior");
  };

  const Arrows = (
    <>
      <FaChevronLeft className="nav-arrow left" onClick={handlePrev} />
      <FaChevronRight className="nav-arrow right" onClick={handleNext} />
    </>
  );

  return (
    <AnimatePresence mode="wait">
      {!mainPage && (
        <motion.section
          key="content-main"
          id="new-section"
          className="new-section"
          initial={false}
          animate={controls}
          exit={{
            opacity: 0,
            scale: 0.96,
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          style={{
            opacity: 0,
            scale: 0.96,
          }}
        >
          <div className="ship-screen">
            {!powerOn && <div className="panel-overlay" />}

            <div className={`ship-panel ${powerOn ? "panel-on" : ""}`}>
              <div className="container-main">
                <HomePageProps
                  SectionStartComponent={<SectionBioSection />}
                />
                {Arrows}
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default ContenteMain;
