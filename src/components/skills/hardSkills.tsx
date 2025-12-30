import { ReactNode } from "react";
import {  FaReact, FaPython, FaJava, FaDocker, FaLinux, FaAws } from "react-icons/fa";
import { SiAngular, SiDjango, SiSpringboot, SiAmazon,
  SiMysql, SiAmazons3, SiAmazondynamodb,
  SiAmazoncloudwatch, SiTerraform, SiKubernetes,
  SiDatadog, SiOpenai } from "react-icons/si";
import { TbApi, TbBrandAws, TbContainer } from "react-icons/tb";

interface SkillItem {
  titulo: string;
  description: string;
  icon: ReactNode;
}



export const hardSkills: SkillItem[] = [
  {
    titulo: "React",
    icon: <FaReact />,
    description: "Biblioteca JavaScript para construção de interfaces modernas."
  },
  {
    titulo: "Angular",
    icon: <SiAngular />,
    description: "Framework robusto para aplicações SPA de larga escala."
  },
  {
    titulo: "Python",
    icon: <FaPython />,
    description: "Linguagem versátil usada em backend, automação e ciência de dados."
  },
  {
    titulo: "Django",
    icon: <SiDjango />,
    description: "Framework Python para aplicações rápidas, seguras e escaláveis."
  },
  {
    titulo: "Java",
    icon: <FaJava />,
    description: "Linguagem orientada a objetos para sistemas robustos e corporativos."
  },
  {
    titulo: "Spring Boot",
    icon: <SiSpringboot />,
    description: "Framework Java para APIs e microsserviços."
  },
  {
    titulo: "AWS",
    icon: <SiAmazon />,
    description: "Plataforma líder em computação em nuvem."
  },
  {
    titulo: "Amazon Aurora (MySQL)",
    icon: <SiMysql />,
    description: "Banco relacional otimizado pela AWS, altamente performático."
  },
  {
    titulo: "AWS Lambda",
    icon: <TbBrandAws />,
    description: "Execução de código serverless totalmente gerenciado."
  },
  {
    titulo: "API Gateway",
    icon: <TbApi />,
    description: "Gerenciamento e exposição de APIs escaláveis."
  },
  {
    titulo: "Amazon S3",
    icon: <SiAmazons3 />,
    description: "Armazenamento de objetos durável e distribuído."
  },
  {
    titulo: "EC2",
    icon: <FaAws />,
    description: "Máquinas virtuais sob demanda na nuvem."
  },
  {
    titulo: "DynamoDB",
    icon: <SiAmazondynamodb />,
    description: "Banco NoSQL totalmente gerenciado e de baixa latência."
  },
  {
    titulo: "CloudWatch",
    icon: <SiAmazoncloudwatch />,
    description: "Monitoramento, métricas e logs na AWS."
  },
  {
    titulo: "Terraform",
    icon: <SiTerraform />,
    description: "Infraestrutura como código para provisionamento automatizado."
  },
  {
    titulo: "Docker",
    icon: <FaDocker />,
    description: "Contêinerização de aplicações e microsserviços."
  },
  {
    titulo: "Kubernetes",
    icon: <SiKubernetes />,
    description: "Orquestração de contêineres em escala."
  },
  {
    titulo: "Containers",
    icon: <TbContainer />,
    description: "Ambientes isolados e portáveis para execução de serviços."
  },
  {
    titulo: "Datadog",
    icon: <SiDatadog />,
    description: "Observabilidade completa: logs, métricas e alertas."
  },
  {
    titulo: "Linux",
    icon: <FaLinux />,
    description: "Sistema operacional base para servidores e cloud."
  },
  {
    titulo: "Integração com IA",
    icon: <SiOpenai />,
    description: "Uso de modelos de IA para automação e aprimoramento de sistemas."
  }
];