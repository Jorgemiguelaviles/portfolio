import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/iniciation.css';
import backVideo from '../videos/backgorundSpace.mp4';
import { useNavigate } from 'react-router-dom';

const SectionStart: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/content'); // Navega para a página ContenteMain
  };

  return (
    <section className="start">
      <div className="background-section">
        <video className="video" src={backVideo} autoPlay loop muted></video>
        <div className="gradient-overlay"></div>

        <div className="text-layer">
          <h1 className="typing-effect">Jorge Miguel Aviles de Moura</h1>
          <div className="button-layer">
            <button 
              id="explore-button" 
              className="custom-button" 
              onClick={handleExploreClick}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionStart;
