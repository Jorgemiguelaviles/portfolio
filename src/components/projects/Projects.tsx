import React from 'react';
import ProjectStart from './ProjetosStart';
import video from '../../videos/backgorundSpace.mp4'
import '../../style/projects/projects.css'



const Projects: React.FC = () => {
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
    <div>
      <div className="video-projects">
        {projects.map((project, index) => (
        <ProjectStart
          key={index}
          githubLink={project.githubLink}
          videoPath={project.videoPath}
          title={project.title}
        />
      ))}
      </div>

    </div>
  );
};

export default Projects;
