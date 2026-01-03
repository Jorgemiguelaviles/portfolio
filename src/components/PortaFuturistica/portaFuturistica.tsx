import React, { useEffect, useState } from "react";
import fundoImg from "../../assets/imgs/base-intergalatica-fundo.png";
import "../../style/portaFundo/portaFundo.css";
import hyperspaceSound from "../../assets/audio/hiperespaco.mp3";
import * as Tone from "tone";

interface PortaFuturisticaProps {
  rotacao: boolean;
  fundoUrl?: string;
  onConfirm?: () => void;
  backgroundGain?: Tone.Gain | null;
}

const PortaFuturistica: React.FC<PortaFuturisticaProps> = ({
  rotacao,
  fundoUrl,
  onConfirm,
  backgroundGain,
}) => {
  const [aberta, setAberta] = useState(false);
  const [rotacionando, setRotacionando] = useState(true);
  const [rotacaoAtual, setRotacaoAtual] = useState(0);

  const [zoomScale, setZoomScale] = useState(1);
  const [flashOpacity, setFlashOpacity] = useState(0);
  const [animando, setAnimando] = useState(false);

  useEffect(() => {
    if (!rotacao) return;
    const abrirTimeout = setTimeout(() => setAberta(true), 4500);
    const motorTimeout = setTimeout(() => setRotacionando(false), 3000);
    return () => {
      clearTimeout(abrirTimeout);
      clearTimeout(motorTimeout);
    };
  }, [rotacao]);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const degrees = (elapsed / 1000) * 360;
      setRotacaoAtual(degrees % 360);
      if (rotacionando) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [rotacionando]);

  const motorStyle = (lado: "left" | "right"): React.CSSProperties => {
    const offsetX = aberta ? (lado === "left" ? "-1000%" : "1000%") : "0";
    return {
      transform: `translateY(-50%) translateX(${offsetX}) rotate(${rotacaoAtual}deg)`,
    };
  };

  const handleConfirm = () => {
    if (animando) return; // evita disparos múltiplos
    setAnimando(true);

    // toca som imediatamente
    const audio = new Audio(hyperspaceSound);
    audio.volume = 0.5;
    audio.play().catch(() => {});

    // sequencia do zoom + flash após 4s
    const sequence = async () => {
      await new Promise((res) => setTimeout(res, 4000));

      // silencia fundo se existir
      if (backgroundGain) {
        const now = Tone.now();
        backgroundGain.gain.cancelScheduledValues(now);
        backgroundGain.gain.linearRampToValueAtTime(0, now + 1.2);
      }

      // dispara zoom + flash em 1,5s
      const duration = 1500;
      const startTime = performance.now();

      const animateZoomFlash = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setZoomScale(1 + progress * 1.5);
        setFlashOpacity(progress);

        if (progress < 1) {
          requestAnimationFrame(animateZoomFlash);
        }
      };

      requestAnimationFrame(animateZoomFlash);

      // espera 6s antes de chamar callback final
      await new Promise((res) => setTimeout(res, 6000));

      if (onConfirm) onConfirm();
    };

    sequence();
  };

  return (
    <div
      className={`portaFut_container ${rotacao ? "portaFut_visible" : ""}`}
      style={{
        backgroundImage: `url(${fundoUrl || fundoImg})`,
        transform: `scale(${zoomScale})`,
        transition: "transform 0.05s linear",
      }}
    >
      {/* flash branco */}
      {animando && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: `rgba(255,255,255,${flashOpacity})`,
            pointerEvents: "none",
            zIndex: 10000,
          }}
        />
      )}

      {/* motores */}
      <div className="portaFut_motor portaFut_motor-left" style={motorStyle("left")} />
      <div className="portaFut_motor portaFut_motor-right" style={motorStyle("right")} />

      {/* portas */}
      <div className={`portaFut_porta portaFut_porta-left ${aberta ? "portaFut_aberta" : ""}`}>
        <div className="portaFut_porta-inner-left" />
      </div>
      <div className={`portaFut_porta portaFut_porta-right ${aberta ? "portaFut_aberta" : ""}`}>
        <div className="portaFut_porta-inner-right" />
      </div>

      {/* botão */}
      {aberta && (
        <button className="portaFut_button" onClick={handleConfirm}>
          Confirmar viagem
        </button>
      )}
    </div>
  );
};

export default PortaFuturistica;
