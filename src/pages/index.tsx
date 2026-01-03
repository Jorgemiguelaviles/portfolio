import React, { useState } from "react";
import { useDailyApod } from "../hooks/useDailyApod";
import AudioPermissionModal from "../components/permissions/modalPermission";
import Background from "../components/background/BackgroundMain";
import * as Tone from "tone";
import hyperspaceSound from "../assets/audio/hiperespaco.mp3";
import HeaderCapacete from "../components/headers/Header-capacete";
import FooterCapacete from "../components/footers/Footer-capacete";
import HeaderNave from "../components/headers/Header-nave";
import FooterNave from "../components/footers/Footer-nave";
import ContenteMain from "../components/conteentMain";
import fundoImg from "../assets/imgs/base-intergalatica-fundo.png";
import pageTransitionSound from "../assets/audio/trocaDeCapacete.mp3";
import PortaFuturistica from "../components/PortaFuturistica/portaFuturistica";

const SectionStart: React.FC = () => {
  const { data, error } = useDailyApod();

  const [isZoomOut, setIsZoomOut] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState<boolean | null>(null);
  const [backgroundGain, setBackgroundGain] = useState<Tone.Gain | null>(null);

  const [transicao, setTransicao] = useState(true);
  const [mainPage, setMainPage] = useState(true);
  const [rotacao, setRotacao] = useState(false);

  const [pageTransitionSoundPlayed, setPageTransitionSoundPlayed] = useState(false);

  const isLoading = !data && !error;
  const titleText = isLoading
    ? "Inicializando protocolo de exploração interestelar…"
    : data?.title || "Exploração além do horizonte conhecido";

  /* ===============================
     SOM AMBIENTE (FUNDO)
  ============================== */
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

  /* ===============================
     SILENCIAR APENAS O FUNDO
  ============================== */
  const fadeOutBackgroundSound = () => {
    if (!backgroundGain) return;
    const now = Tone.now();
    backgroundGain.gain.cancelScheduledValues(now);
    backgroundGain.gain.linearRampToValueAtTime(0, now + 1.2);
  };

  /* ===============================
     SOM DE HIPERESPAÇO
  ============================== */
  const playHyperspaceSound = async () => {
    const audio = new Audio(hyperspaceSound);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  /* ===============================
     SOM DE TRANSIÇÃO DE PÁGINA
  ============================== */
  const playPageTransitionSound = () => {
    if (pageTransitionSoundPlayed) return;
    const audio = new Audio(pageTransitionSound);
    audio.volume = 0.6;
    audio.play().catch(() => {});
    setPageTransitionSoundPlayed(true);
  };

  const denyAudio = () => setAudioUnlocked(false);

  /* ===============================
     AÇÃO PRINCIPAL
  ============================== */
  const handleExploreClick = async () => {
    fadeOutBackgroundSound();
    await playHyperspaceSound();

    setTimeout(() => setIsZoomOut(true), 4000);

    setTimeout(() => {
      setIsZoomOut(false);
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
      <HeaderNave
        mainPage={mainPage}
        setMainPage={setMainPage}
        setRotacao={setRotacao}
      />

      <Background
        data={data}
        isZoomOut={isZoomOut}
        isLoading={isLoading}
        titleText={titleText}
        handleExploreClick={handleExploreClick}
        mainPage={transicao}
        onZoomStart={fadeOutBackgroundSound}
      />

      <ContenteMain mainPage={transicao} rotacao={rotacao} />

      {!transicao && (
        <PortaFuturistica
          rotacao={rotacao}
          fundoUrl={fundoImg}
          backgroundGain={backgroundGain} // para silenciar fundo
          onConfirm={() => {
            console.log('testando')
          }}
        />
      )}

      <FooterCapacete mainPage={transicao} />
      <FooterNave mainPage={mainPage} />
    </>
  );
};

export default SectionStart;
