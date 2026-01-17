import React, { useEffect } from "react";
import fundoImg from "../../assets/imgs/base-intergalatica-fundo.png";
import "../../style/portaFundo/portaFundo.css";
import hyperspaceSound from "../../assets/audio/hiperespaco.mp3";
import * as Tone from "tone";

interface PortaFuturisticaProps {
  rotacao: boolean;
  fundoUrl?: string;
  onConfirm?: () => void;
  backgroundGain?: Tone.Gain | null;
  visible: boolean;
  aberta:boolean;
  setAberta: any;
  rotacionando: boolean;
  setRotacionando: any;
  rotacaoAtual:number;
  setRotacaoAtual:any;
  zoomScale:number;
  setZoomScale:any;
  flashOpacity:number;
  setFlashOpacity:any;
  animando:boolean;
  setAnimando:any
  entradaOpacity:number;
  setEntradaOpacity:any;
  entradaScale:number;
  setEntradaScale:any
  mounted:boolean;
  setMounted:any;





}

const FADE_DURATION = 800; // ms

const PortaFuturistica: React.FC<PortaFuturisticaProps> = ({
  rotacao,
  fundoUrl,
  onConfirm,
  backgroundGain,
  visible,
  mounted,
  setMounted,
  aberta,
  setAberta,
  rotacionando, 
  setRotacionando,
  rotacaoAtual,
  setRotacaoAtual,
  zoomScale,
  setZoomScale,
  flashOpacity,
  setFlashOpacity,
  animando, 
  setAnimando,
  entradaOpacity,
  setEntradaOpacity,
  entradaScale,
  setEntradaScale


}) => {

  



  useEffect(() => {
    if (visible) {
      setMounted(true);

      requestAnimationFrame(() => {
        setEntradaOpacity(1);
        setEntradaScale(1);
      });
    } else {
      setEntradaOpacity(0);
      setEntradaScale(0.95);

      const t = setTimeout(() => {
        setMounted(false);
      }, FADE_DURATION);

      return () => clearTimeout(t);
    }
  }, [visible]);

  useEffect(() => {
    if (!rotacao || !visible) return;

    const motorTimeout = setTimeout(() => setRotacionando(false), 3000);
    const abrirTimeout = setTimeout(() => setAberta(true), 4500);

    return () => {
      clearTimeout(motorTimeout);
      clearTimeout(abrirTimeout);
    };
  }, [rotacao, visible]);

  useEffect(() => {
    if (!rotacionando) return;

    let frame: number;
    let start: number | null = null;

    const animate = (time: number) => {
      if (!start) start = time;
      const elapsed = time - start;
      setRotacaoAtual((elapsed / 1000) * 360 % 360);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [rotacionando]);

  const motorStyle = (lado: "left" | "right"): React.CSSProperties => {
    const offsetX = aberta ? (lado === "left" ? "-1000%" : "1000%") : "0";
    return {
      transform: `translateY(-50%) translateX(${offsetX}) rotate(${rotacaoAtual}deg)`,
      transition: "transform 1s ease-in-out",
    };
  };

  const handleConfirm = () => {
    if (animando) return;
    setAnimando(true);

    const audio = new Audio(hyperspaceSound);
    audio.volume = 0.5;
    audio.play().catch(() => {});

    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 4000));

      if (backgroundGain) {
        const now = Tone.now();
        backgroundGain.gain.cancelScheduledValues(now);
        backgroundGain.gain.linearRampToValueAtTime(0, now + 1.2);
      }

      const duration = 1500;
      const start = performance.now();

      const animate = (t: number) => {
        const progress = Math.min((t - start) / duration, 1);
        setZoomScale(1 + progress * 1.5);
        setFlashOpacity(progress);
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      await new Promise((r) => setTimeout(r, 6000));
      onConfirm?.();
    };

    sequence();
  };

  if (!mounted) return null;

  return (
    <div
      className="portaFut_container"
      style={{
        backgroundImage: `url(${fundoUrl || fundoImg})`,
        opacity: entradaOpacity,
        transform: `scale(${zoomScale * entradaScale})`,
        transition: `opacity ${FADE_DURATION}ms ease, transform 0.2s linear`,
      }}
    >
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

      <div className="portaFut_motor portaFut_motor-left" style={motorStyle("left")} />
      <div className="portaFut_motor portaFut_motor-right" style={motorStyle("right")} />

      <div className={`portaFut_porta portaFut_porta-left ${aberta ? "portaFut_aberta" : ""}`}>
        <div className="portaFut_porta-inner-left" />
      </div>
      <div className={`portaFut_porta portaFut_porta-right ${aberta ? "portaFut_aberta" : ""}`}>
        <div className="portaFut_porta-inner-right" />
      </div>

      {aberta && (
        <button className="portaFut_button" onClick={handleConfirm}>
          Confirmar viagem
        </button>
      )}
    </div>
  );
};

export default PortaFuturistica;
