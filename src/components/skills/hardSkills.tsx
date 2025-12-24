// src/components/hardSkills.tsx

import React, { useState } from 'react';
// Frontend
import { FaReact } from 'react-icons/fa';
import { SiAngular } from 'react-icons/si';

// Linguagens e Backend
import { FaPython, FaJava } from 'react-icons/fa';
import { SiDjango, SiSpringboot } from 'react-icons/si';

// AWS e Cloud
import { SiAmazon, SiAmazoncloudwatch, SiAmazondynamodb, SiAmazons3 } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbBrandAws, TbApi } from 'react-icons/tb';

// Databases
import { SiMysql } from 'react-icons/si';

// Infraestrutura e Containers
import { FaDocker } from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import { TbContainer } from 'react-icons/tb';

// Observabilidade
import { SiDatadog } from 'react-icons/si';

// Sistema operacional
import { FaLinux } from 'react-icons/fa';

// Inteligência Artificial
import { SiOpenai } from 'react-icons/si';

import '../style/hardSkills.css';

const HardSkills: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

const icons = [
  // Frontend
  { item: <FaReact key="react" />, 
    description: 'React — Biblioteca JavaScript para construção de interfaces modernas.' },

  { item: <SiAngular key="angular" />, 
    description: 'Angular — Framework robusto para aplicações SPA de larga escala.' },

  // Backend e linguagens
  { item: <FaPython key="python" />, 
    description: 'Python — Linguagem versátil usada em backend, automação e ciência de dados.' },

  { item: <SiDjango key="django" />, 
    description: 'Django — Framework Python para aplicações rápidas, seguras e escaláveis.' },

  { item: <FaJava key="java" />, 
    description: 'Java — Linguagem orientada a objetos para sistemas robustos e corporativos.' },

  { item: <SiSpringboot key="springboot" />, 
    description: 'Spring Boot — Framework Java para APIs e microsserviços.' },

  // Cloud / AWS
  { item: <SiAmazon key="aws" />, 
    description: 'AWS — Plataforma líder em computação em nuvem, serviços escaláveis e distribuídos.' },

  { item: <SiMysql key="aurora" />, 
    description: 'Amazon Aurora (MySQL) — Banco relacional otimizado pela AWS, altamente performático.' },

  { item: <TbBrandAws key="lambda" />, 
    description: 'AWS Lambda — Execução de código serverless totalmente gerenciado.' },

  { item: <TbApi key="apigateway" />, 
    description: 'API Gateway — Porta de entrada para APIs escaláveis e seguras na AWS.' },

  { item: <SiAmazons3 key="s3" />, 
    description: 'Amazon S3 — Armazenamento de objetos durável, escalável e distribuído.' },

  { item: <FaAws key="ec2" />, 
    description: 'EC2 — Máquinas virtuais na nuvem para deploy e computação sob demanda.' },

  { item: <SiAmazondynamodb key="dynamodb" />, 
    description: 'DynamoDB — Banco NoSQL totalmente gerenciado e extremamente rápido.' },

  { item: <SiAmazoncloudwatch key="cloudwatch" />, 
    description: 'CloudWatch — Monitoramento, logs, métricas e alarmes na AWS.' },

  // Infra como código
  { item: <SiTerraform key="terraform" />, 
    description: 'Terraform — Infraestrutura como código multi-cloud para provisionamento automatizado.' },

  // Contêineres e orquestração
  { item: <FaDocker key="docker" />, 
    description: 'Docker — Contêinerização de aplicações e microsserviços.' },

  { item: <SiKubernetes key="k8s" />, 
    description: 'Kubernetes — Orquestração de contêineres em escala.' },

  { item: <TbContainer key="containers" />, 
    description: 'Containers — Ambientes isolados e portáveis para execução de serviços.' },

  // Observabilidade
  { item: <SiDatadog key="datadog" />, 
    description: 'Datadog — Observabilidade completa: logs, métricas, traces e alertas.' },

  // Sistemas / ambiente
  { item: <FaLinux key="linux" />, 
    description: 'Linux — Sistema operacional base para servidores, ambientes cloud e containers.' },

  // IA / integrações
  { item: <SiOpenai key="ia" />, 
    description: 'Integração com IA — Uso de modelos avançados para automação, análise e aprimoramento de sistemas.' }
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
