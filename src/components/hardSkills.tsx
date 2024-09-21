// src/components/hardSkills.tsx

import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaJava, FaLinux, FaDocker } from 'react-icons/fa';
import { DiLaravel } from 'react-icons/di';
import { SiDjango, SiSpringboot, SiAmazon, SiMysql } from 'react-icons/si';
import '../style/hardSkills.css';

const HardSkills: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const icons = [
    { item: <FaHtml5 key="html" />, description: 'HTML5 - Linguagem de marcação usada para estruturar o conteúdo da web.' },
    { item: <FaCss3Alt key="css" />, description: 'CSS3 - Folhas de estilo usadas para estilizar o conteúdo da web.' },
    { item: <FaJs key="js" />, description: 'JavaScript - Linguagem de programação usada para criar comportamento dinâmico em sites.' },
    { item: <FaReact key="react" />, description: 'React - Biblioteca JavaScript para a construção de interfaces de usuário.' },
    { item: <FaPhp key="php" />, description: 'PHP - Linguagem de script usada para desenvolvimento web do lado do servidor.' },
    { item: <DiLaravel key="laravel" />, description: 'Laravel - Framework PHP usado para desenvolvimento de aplicações web.' },
    { item: <FaPython key="python" />, description: 'Python - Linguagem de programação usada em diversas áreas como desenvolvimento web e análise de dados.' },
    { item: <SiDjango key="django" />, description: 'Django - Framework web em Python usado para construção de aplicações rápidas e seguras.' },
    { item: <FaJava key="java" />, description: 'Java - Linguagem de programação usada para desenvolvimento de aplicações robustas.' },
    { item: <SiSpringboot key="springboot" />, description: 'Spring Boot - Framework Java para criação de aplicações backend.' },
    { item: <SiAmazon key="aws" />, description: 'AWS - Plataforma de serviços de computação em nuvem da Amazon.' },
    { item: <SiMysql key="mysql" />, description: 'MySQL - Um dos principais bancos de dados usados para armazenamento de informações.' },
    { item: <FaLinux key="linux" />, description: 'Linux Ubuntu - Uma das principais distribuições de Linux e principal sistema de ambiente.' },
    { item: <FaDocker key="docker" />, description: 'Docker - Plataforma para automação de aplicativos em contêineres.' }
  ];

  return (
    <div className="wheel-container">
      <h1>Hards Skills</h1>
      <div className="wheel">
        
        {icons.map((icon, index) => (
          <div
            className={`wheel-icon ${selectedIndex === index ? 'selected' : ''}`}
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{ cursor: 'pointer' }}
          >
            {icon.item}
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="description">
          <p>{icons[selectedIndex].description}</p>
        </div>
      )}
    </div>
  );
};

export default HardSkills;
