import React, { useState, useEffect } from "react";
import { useDailyApod } from '../hooks/useDailyApod';
import AudioPermissionModal from '../components/permissions/modalPermission';
import Background from '../components/background/BackgroundMain';
import * as Tone from "tone";
import hyperspaceSound from '../../assets/audio/hiperespaco.mp3';
import HeaderCapacete from '../components/headers/Header-capacete';
import FooterCapacete from '../components/footers/Footer-capacete';
import HeaderNave from '../components/headers/Header-nave';
import FooterNave from '../components/footers/Footer-nave';
import ContenteMain from "../components/conteentMain";

const SectionStart: React.FC = () => {
  const { data, error } = useDailyApod();
  const [isZoomOut, setIsZoomOut] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState<boolean | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  
  // Novo estado de transição
  const [transicao, setTransicao] = useState(true); // Transição começa imediatamente
  const [mainPage, setMainPage] = useState(true); // Controle do estado de mainPage
  
  const isLoading = !data && !error;
  const titleText = isLoading
    ? 'Inicializando protocolo de exploração interestelar…'
    : data?.title || 'Exploração além do horizonte conhecido';

  const setCookie = (name: string, value: string, days = 365) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const getCookie = (name: string) => {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='))?.split('=')[1];
  };

  useEffect(() => {
    const permission = getCookie('audioPermission');
    if (permission === 'granted') {
      setAudioUnlocked(true);
    } else if (permission === 'denied') {
      setAudioUnlocked(false);
    } else {
      setAudioUnlocked(null);
    }
  }, []);

  const unlockAudio = async () => {
    await Tone.start();
    const masterGain = new Tone.Gain(0).toDestination();
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
    setCookie("audioPermission", "granted");
  };

  const playHyperspaceSound = async () => {
    const hyperspaceAudio = new Audio(hyperspaceSound);
    hyperspaceAudio.loop = false;
    hyperspaceAudio.volume = 0.5;
    hyperspaceAudio.play().catch(() => {});
    return hyperspaceAudio;
  };

  const stopBackgroundSound = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
  };

  const denyAudio = () => {
    setAudioUnlocked(false);
    setCookie('audioPermission', 'denied');
  };

  const handleExploreClick = async () => {
    stopBackgroundSound();
    await playHyperspaceSound();

    setTimeout(() => {
      setIsZoomOut(true); // Começa o zoom-out
    }, 4000);

    setTimeout(() => {
      setIsZoomOut(false); // Finaliza o zoom-out
      setTransicao(false); // Inicia a transição imediatamente

      // Aguardar 7 segundos antes de alterar o mainPage para true
      setTimeout(() => {
        setMainPage(false); // Define mainPage como true após 7 segundos de espera
      }, 7000); // 7 segundos de delay
    }, 6000);
  };

  

  return (
    <>
      <AudioPermissionModal
        visible={audioUnlocked === null}
        onConfirm={unlockAudio}
        onClose={denyAudio}
      />
      
      {/* Header do site */}
      <HeaderCapacete mainPage={transicao} />
      <HeaderNave mainPage={mainPage} />
    
      
      {/* Componente do fundo com animações */}
      <Background
        data={data}
        isZoomOut={isZoomOut}
        isLoading={isLoading}
        titleText={titleText}
        handleExploreClick={handleExploreClick}
        mainPage={transicao}
      />
      <ContenteMain  mainPage={transicao}/>
      {/* Footer do site */}
      <FooterCapacete mainPage={transicao} />
      <FooterNave mainPage={mainPage} />
    </>
  );
};

export default SectionStart;
