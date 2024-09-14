import React from 'react';
import Bio from './bio';
import ProjectStart from './projetosStart';
import '../style/contentMain.css';
import video from '../videos/backgorundSpace.mp4'


interface ProjectsProps {
  isRotated: boolean;
  handleRotation: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ isRotated, handleRotation }) => {
  const projects = [
    {
      githubLink: 'https://github.com/seuusuario1',
      videoPath: video,
      title: 'Controll access',
    },
    {
      githubLink: 'https://github.com/seuusuario2',
      videoPath: video,
      title: 'Reembolso',
    },
    {
        githubLink: 'https://github.com/seuusuario2',
        videoPath: video,
        title: 'IOT system',
      },
      {
        githubLink: 'https://github.com/seuusuario2',
        videoPath: video,
        title: 'Alouvre',
      },
      {
        githubLink: 'https://github.com/seuusuario2',
        videoPath: video,
        title: 'RPG java',
      },
      {
        githubLink: 'https://github.com/seuusuario2',
        videoPath: video,
        title: 'Emulador de agenda de médicos',
      },
  ];

  return (
    <div className="projects" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <Bio />
      {projects.map((project, index) => (
        <ProjectStart
          key={index}
          githubLink={project.githubLink}
          videoPath={project.videoPath}
          title={project.title}
        />
      ))}
      <button className="rotate-button" onClick={handleRotation}>
        {isRotated ? 'Mostrar Soft Skills' : 'Mostrar Projetos'}
      </button>
    </div>
  );
};

export default Projects;
