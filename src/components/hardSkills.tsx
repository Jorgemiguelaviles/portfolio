// src/components/hardSkills.tsx

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaJava } from 'react-icons/fa';
import { DiLaravel } from 'react-icons/di';
import { SiDjango, SiSpringboot, SiAmazon } from 'react-icons/si';
import '../style/style.css'; // Importar o CSS para a animação

const HardSkills: React.FC = () => {
  // Definição dos ícones
  const icons = [
    <FaHtml5 key="html" />,
    <FaCss3Alt key="css" />,
    <FaJs key="js" />,
    <FaReact key="react" />,
    <FaPhp key="php" />,
    <DiLaravel key="laravel" />,
    <FaPython key="python" />,
    <SiDjango key="django" />,
    <FaJava key="java" />,
    <SiSpringboot key="springboot" />,
    <SiAmazon key="aws" />
  ];

  return (
    <div className="wheel-container">
      <div className="wheel">
        {icons.map((icon, index) => (
          <div className="wheel-icon" key={index}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;
