import { ReactNode } from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaDocker,
  FaLinux,
  FaAws
} from "react-icons/fa";

import {
  SiAngular,
  SiDjango,
  SiSpringboot,
  SiAmazon,
  SiMysql,
  SiAmazons3,
  SiAmazondynamodb,
  SiAmazoncloudwatch,
  SiTerraform,
  SiKubernetes,
  SiDatadog,
  SiOpenai
} from "react-icons/si";

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
    description:
      "Biblioteca para construção de interfaces reativas, performáticas e escaláveis, com foco em componentização, estado previsível e experiência do usuário."
  },
  {
    titulo: "Angular",
    icon: <SiAngular />,
    description:
      "Framework completo para aplicações SPA corporativas, com arquitetura robusta, injeção de dependência e forte padronização."
  },
  {
    titulo: "Python",
    icon: <FaPython />,
    description:
      "Linguagem multiparadigma utilizada em backend, automação, processamento de dados e integração com serviços e APIs."
  },
  {
    titulo: "Django",
    icon: <SiDjango />,
    description:
      "Framework backend em Python voltado para desenvolvimento rápido, seguro e organizado, com ORM poderoso e boas práticas nativas."
  },
  {
    titulo: "Java",
    icon: <FaJava />,
    description:
      "Linguagem orientada a objetos amplamente utilizada em sistemas críticos, financeiros e corporativos de alta confiabilidade."
  },
  {
    titulo: "Spring Boot",
    icon: <SiSpringboot />,
    description:
      "Framework Java para criação de APIs REST e microsserviços, com configuração simplificada, segurança e integração com ecossistema Spring."
  },
  {
    titulo: "AWS (Cloud Computing)",
    icon: <SiAmazon />,
    description:
      "Plataforma líder em computação em nuvem, utilizada para arquiteturas escaláveis, resilientes e de alta disponibilidade."
  },
  {
    titulo: "Amazon Aurora (MySQL)",
    icon: <SiMysql />,
    description:
      "Banco de dados relacional gerenciado pela AWS, otimizado para alta performance, escalabilidade automática e alta disponibilidade."
  },
  {
    titulo: "AWS Lambda",
    icon: <TbBrandAws />,
    description:
      "Execução de código serverless sob demanda, permitindo arquiteturas orientadas a eventos com redução de custos operacionais."
  },
  {
    titulo: "API Gateway",
    icon: <TbApi />,
    description:
      "Gerenciamento, versionamento e exposição segura de APIs REST e HTTP em ambientes distribuídos."
  },
  {
    titulo: "Amazon S3",
    icon: <SiAmazons3 />,
    description:
      "Serviço de armazenamento de objetos altamente durável, escalável e integrado a pipelines de dados e aplicações cloud."
  },
  {
    titulo: "Amazon EC2",
    icon: <FaAws />,
    description:
      "Infraestrutura de máquinas virtuais sob demanda, permitindo controle total do ambiente de execução em nuvem."
  },
  {
    titulo: "Amazon DynamoDB",
    icon: <SiAmazondynamodb />,
    description:
      "Banco NoSQL totalmente gerenciado, com baixa latência, escalabilidade automática e foco em aplicações de alta performance."
  },
  {
    titulo: "Amazon CloudWatch",
    icon: <SiAmazoncloudwatch />,
    description:
      "Monitoramento de métricas, logs e eventos para observabilidade e diagnóstico de sistemas em produção."
  },
  {
    titulo: "Terraform",
    icon: <SiTerraform />,
    description:
      "Infraestrutura como código (IaC) para provisionamento consistente, versionado e automatizado de ambientes cloud."
  },
  {
    titulo: "Docker",
    icon: <FaDocker />,
    description:
      "Contêinerização de aplicações para padronizar ambientes, facilitar deploys e reduzir problemas de dependência."
  },
  {
    titulo: "Kubernetes",
    icon: <SiKubernetes />,
    description:
      "Orquestração de contêineres para gerenciamento, escalabilidade e resiliência de aplicações distribuídas."
  },
  {
    titulo: "Containers",
    icon: <TbContainer />,
    description:
      "Isolamento e empacotamento de aplicações com foco em portabilidade, segurança e consistência entre ambientes."
  },
  {
    titulo: "Datadog",
    icon: <SiDatadog />,
    description:
      "Plataforma de observabilidade para monitoramento completo de infraestrutura, aplicações e experiências do usuário."
  },
  {
    titulo: "Linux",
    icon: <FaLinux />,
    description:
      "Sistema operacional base para servidores, cloud e containers, com foco em estabilidade, segurança e performance."
  },
  {
    titulo: "Integração com IA",
    icon: <SiOpenai />,
    description:
      "Uso de modelos de inteligência artificial para automação, análise de dados, otimização de processos e sistemas inteligentes."
  }
];
