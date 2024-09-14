document.addEventListener('DOMContentLoaded', () => {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('olá, seja bem-vindo ao meu portfólio');
        
        function configureVoice() {
            const voices = speechSynthesis.getVoices();
            const robotVoice = voices.find(voice => voice.name.includes('Google') || voice.name.includes('Microsoft'));

            if (robotVoice) {
                utterance.voice = robotVoice;
            }

            utterance.pitch = 0.5;
            utterance.rate = 0.7;
        }

        if (speechSynthesis.getVoices().length > 0) {
            configureVoice();
            window.speechSynthesis.speak(utterance);
        } else {
            speechSynthesis.onvoiceschanged = () => {
                configureVoice();
                window.speechSynthesis.speak(utterance);
            };
        }
    } else {
        console.log('Web Speech API não é suportada neste navegador.');
    }
});
