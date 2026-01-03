import { ReactNode } from "react";
import {
  FaBrain,
  FaBullseye,
  FaUsers,
  FaCrown,
  FaSyncAlt,
  FaSearch
} from "react-icons/fa";

export interface SkillItem {
  titulo: string;
  description: string;
  icon: ReactNode;
}

export const softSkills: SkillItem[] = [
  {
    titulo: "Comunicação Assertiva",
    description:
      "Capacidade de expressar ideias de forma clara, estruturada e objetiva, reduzindo ruídos, alinhando expectativas e facilitando a tomada de decisão em equipe.",
    icon: <FaBrain />
  },
  {
    titulo: "Concentração Profunda",
    description:
      "Foco sustentado em tarefas complexas, permitindo análise detalhada, resolução de problemas e alta qualidade técnica mesmo em ambientes dinâmicos.",
    icon: <FaBullseye />
  },
  {
    titulo: "Liderança Técnica",
    description:
      "Habilidade de orientar pessoas e processos com base em lógica, responsabilidade e visão sistêmica, promovendo organização e eficiência coletiva.",
    icon: <FaCrown />
  },
  {
    titulo: "Colaboração Multidisciplinar",
    description:
      "Atuação integrada com profissionais de diferentes áreas, traduzindo necessidades técnicas e de negócio em soluções coesas e viáveis.",
    icon: <FaUsers />
  },
  {
    titulo: "Resiliência Cognitiva",
    description:
      "Capacidade de manter clareza mental e desempenho sob pressão, adaptando estratégias diante de falhas, mudanças e cenários adversos.",
    icon: <FaSyncAlt />
  },
  {
    titulo: "Pensamento Crítico",
    description:
      "Análise racional de problemas, questionamento de premissas e tomada de decisões fundamentadas em lógica, dados e evidências.",
    icon: <FaSearch />
  }
];
