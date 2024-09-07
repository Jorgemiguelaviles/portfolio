import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import { Button, Container } from 'react-bootstrap';
import backVideo from '../videos/backgorundSpace.mp4'
import {handleExploreButtonClick} from '../hooks/newSection'

const SectionStart: React.FC = () => {
  return (
    <section className="start">
      <div className="background-section">
        <video className="video" src={backVideo} autoPlay loop muted></video>
        <div className="gradient-overlay"></div>

        <div className="text-layer">
          <h1 className="typing-effect">Jorge Miguel Aviles de Moura</h1>
          <div className="button-layer">
            <Button id="explore-button" className="custom-button" onClick={handleExploreButtonClick} >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionStart;
