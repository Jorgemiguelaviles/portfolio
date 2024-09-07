// useSpeechSynthesis.ts
import { useEffect } from 'react';

const useSpeechSynthesis = (text: string) => {
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1;
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
    } else {
      console.log('Web Speech API não é suportada neste navegador.');
    }
    
  }, [text]);
}

export default useSpeechSynthesis;
