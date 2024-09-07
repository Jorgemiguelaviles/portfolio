import React from 'react';
import HomePage from './pages/main/index';
import SectionStart from './components/SectionStart'
import SectionBio from './components/SectionSkiils'
import useSpeechSynthesis from './hooks/vozRobotizada';
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet"></link>
function App() {
  

  return (
    <>
      <HomePage />
      <SectionStart />
      <SectionBio />
    </>
  );
}

export default App;
