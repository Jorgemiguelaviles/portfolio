import React, { useState, useRef } from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';
import '../style/projetosStart.css';

interface ProjectStartProps {
  githubLink: string;
  videoPath: string;
  title: string;
}

const ProjectStart: React.FC<ProjectStartProps> = ({ githubLink, videoPath, title }) => {
  const [iconsVisible, setIconsVisible] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIconsVisible(false);
    setVideoPlaying(true);
    videoRef.current?.play();
  };

  const handleVideoEnded = () => {
    setVideoPlaying(false);
    setIconsVisible(true);
  };

  return (
    <div className="project-container">
      <h2 className="project-title">{title}</h2>
      {iconsVisible && (
        <div className="icon-container">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" size={40} />
          </a>
          <FaPlay
            className="icon"
            size={40}
            onClick={handlePlayClick}
          />
        </div>
      )}
      <video
        ref={videoRef}
        className="video"
        style={{ opacity: videoPlaying ? 1 : 0, background: `url(${videoPath})` }}
        src={videoPath}
        onEnded={handleVideoEnded}
        muted
        playsInline
      />
    </div>
  );
};

export default ProjectStart;
