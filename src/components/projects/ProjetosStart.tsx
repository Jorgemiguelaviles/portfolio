import React, { useState, useRef } from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';
import '../../style/projects/projetosStart.css';

interface ProjectStartProps {
  githubLink: string;
  videoPath: string;
  title: string;
}

const ProjectStart: React.FC<ProjectStartProps> = ({ githubLink, videoPath, title }) => {
  const [iconsVisible, setIconsVisible] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const [openingDoor, setOpeningDoor] = useState(false);
  const [closingDoor, setClosingDoor] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIconsVisible(false);

    // abre porta
    setOpeningDoor(true);

    setTimeout(() => {
      setVideoPlaying(true);
      videoRef.current?.play();
    }, 900);
  };

  const handleVideoEnded = () => {
    setVideoPlaying(false);

    // fecha porta
    setClosingDoor(true);

    setTimeout(() => {
      setOpeningDoor(false);
      setClosingDoor(false);
      setIconsVisible(true);
    }, 900);
  };

  return (
    <div
      className={`project-container 
        ${openingDoor ? "opening-door" : ""} 
        ${closingDoor ? "closing-door" : ""}
      `}
    >
      <h2 className="project-title">{title}</h2>

      {iconsVisible && (
        <div className="icon-container">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" size={40} />
          </a>
          <FaPlay className="icon" size={40} onClick={handlePlayClick} />
        </div>
      )}

      <video
        ref={videoRef}
        className={`video ${videoPlaying ? "visible" : ""}`}
        src={videoPath}
        onEnded={handleVideoEnded}
        muted
        playsInline
      />
    </div>
  );
};

export default ProjectStart;
