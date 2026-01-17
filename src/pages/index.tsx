import React, { useState } from "react";
import { useDailyApod } from "../hooks/useDailyApod";
import AudioPermissionModal from "../components/permissions/modalPermission";
import Background from "../components/background/BackgroundMain";
import * as Tone from "tone";
import hyperspaceSound from "../assets/audio/hiperespaco.mp3";
import pageTransitionSound from "../assets/audio/trocaDeCapacete.mp3";

import HeaderCapacete from "../components/headers/Header-capacete";
import FooterCapacete from "../components/footers/Footer-capacete";
import HeaderNave from "../components/headers/Header-nave";
import FooterNave from "../components/footers/Footer-nave";
import ContenteMain from "../components/conteentMain";
import PortaFuturistica from "../components/PortaFuturistica/portaFuturistica";

import fundoImg from "../assets/imgs/base-intergalatica-fundo.png";

const SectionStart: React.FC = () => {
  const { data, error } = useDailyApod();

  // Estados de controle
  const [zoomEffect, setZoomEffect] = useState<"zoomOut" | "zoomIn" | "none">("none");
  const [audioUnlocked, setAudioUnlocked] = useState<boolean | null>(null);
  const [backgroundGain, setBackgroundGain] = useState<Tone.Gain | null>(null);
  const [transicao, setTransicao] = useState(true);
  const [mainPage, setMainPage] = useState(true);
  const [rotacao, setRotacao] = useState(false);
  const [pageTransitionSoundPlayed, setPageTransitionSoundPlayed] = useState(false);
  const [visible, setVisible] = useState(false)

  const [mounted, setMounted] = useState(false);
      const [aberta, setAberta] = useState(false);
    const [rotacionando, setRotacionando] = useState(true);
    const [rotacaoAtual, setRotacaoAtual] = useState(0);
  
    const [zoomScale, setZoomScale] = useState(1);
    const [flashOpacity, setFlashOpacity] = useState(0);
    const [animando, setAnimando] = useState(false);
  
    const [entradaOpacity, setEntradaOpacity] = useState(0);
    const [entradaScale, setEntradaScale] = useState(0.95);

    const isLoading = !data && !error;
  const titleText = isLoading
    ? "Inicializando protocolo de exploração interestelar…"
    : data?.title || "Exploração além do horizonte conhecido";

  const unlockAudio = async () => {
    await Tone.start();
    const masterGain = new Tone.Gain(0).toDestination();
    setBackgroundGain(masterGain);

    const noise = new Tone.Noise("pink").start();
    const filter = new Tone.Filter({ type: "lowpass", frequency: 800, rolloff: -24 });
    const reverb = new Tone.Reverb({ decay: 12, wet: 0.6 });

    noise.connect(filter);
    filter.connect(reverb);
    reverb.connect(masterGain);

    const lfo = new Tone.LFO({ frequency: 0.03, min: 300, max: 1200 }).start();
    lfo.connect(filter.frequency);

    const now = Tone.now();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.35, now + 10);

    setAudioUnlocked(true);
  };
  const denyAudio = () => setAudioUnlocked(false);
  const fadeOutBackgroundSound = () => {
    if (!backgroundGain) return;
    const now = Tone.now();
    backgroundGain.gain.cancelScheduledValues(now);
    backgroundGain.gain.linearRampToValueAtTime(0, now + 1.2);
  };
  const playHyperspaceSound = () => {
    const audio = new Audio(hyperspaceSound);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };
  const playPageTransitionSound = () => {
    if (pageTransitionSoundPlayed) return;
    const audio = new Audio(pageTransitionSound);
    audio.volume = 0.6;
    audio.play().catch(() => {});
    setPageTransitionSoundPlayed(true);
  };

  const triggerZoomOutEffect = () => {
    setZoomEffect("zoomOut");
    setTimeout(() => setZoomEffect("none"), 5700); 
  };

  const handleExploreClick = async () => {
    fadeOutBackgroundSound();
    playHyperspaceSound();

    setTimeout(() => setZoomEffect("zoomOut"), 4000);
    setTimeout(() => {
      setZoomEffect("none");
      setTransicao(false);
      setTimeout(() => {
        playPageTransitionSound();
        setMainPage(false);
      }, 7000);
    }, 6000);
  };

  return (
    <>
      <AudioPermissionModal
        visible={audioUnlocked === null}
        onConfirm={unlockAudio}
        onClose={denyAudio}
      />

      <HeaderCapacete mainPage={transicao} />
      <HeaderNave mainPage={mainPage} setMainPage={setMainPage} setRotacao={setRotacao} setVisible={setVisible} />

      <Background
        data={data}
        zoomEffect={zoomEffect}
        isLoading={isLoading}
        titleText={titleText}
        handleExploreClick={handleExploreClick}
        mainPage={transicao}
        onZoomStart={fadeOutBackgroundSound}
      />

      <ContenteMain mainPage={transicao} rotacao={rotacao} />

        <PortaFuturistica  
        mounted={mounted}
        setMounted={setMounted}
        aberta={aberta}
        setAberta={setAberta}
        rotacionando={rotacionando}
        setRotacionando={setRotacionando}
        rotacaoAtual={rotacaoAtual}
        setRotacaoAtual={setRotacaoAtual}
        zoomScale={zoomScale}
        setZoomScale={setZoomScale}
        flashOpacity={flashOpacity}
        setFlashOpacity={setFlashOpacity}
        animando={animando}
        setAnimando={setAnimando}
        entradaOpacity={entradaOpacity}
        setEntradaOpacity={setEntradaOpacity} 
        rotacao={rotacao} 
        visible={visible}
        entradaScale={entradaScale}
        setEntradaScale={setEntradaScale}
        fundoUrl={fundoImg}
        backgroundGain={backgroundGain}
         onConfirm={() => {
  if (animando) return;

  setAnimando(true);

  // =========================
  // FASE 1 — Fechamento imediato
  // =========================
  setRotacionando(false);
  setRotacao(false);
  setZoomEffect("zoomOut");
  setVisible(false);

  // Som de transição
  if (audioUnlocked) {
    const audio = new Audio(hyperspaceSound);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }

  // =========================
  // FASE 2 — Reset da porta
  // =========================
  setTimeout(() => {
    setAberta(false);
    setRotacaoAtual(0);

    setZoomScale(1);
    setFlashOpacity(0);

    setEntradaOpacity(0);
    setEntradaScale(0.95);

    setMounted(false);
  }, 600);

  // =========================
  // FASE 3 — Retorno visual ao início
  // =========================
  setTimeout(() => {
    setZoomEffect("zoomIn");

    setTransicao(true);
    setMainPage(true);

    setRotacionando(true);
    setPageTransitionSoundPlayed(false);

    setAnimando(false);
  }, 2000);
}}
        />

      <FooterCapacete mainPage={transicao} />
      <FooterNave mainPage={mainPage} />
    </>
  );
};

export default SectionStart;
