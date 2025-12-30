import { ReactNode } from "react";
import { FaBrain} from "react-icons/fa";


export interface SkillItem {
  titulo: string;
  description: string;
  icon: ReactNode;
}

export const softSkills: SkillItem[] = [
  {
    titulo: "Comunicação Assertiva",
    description: "Transmissão clara e objetiva de ideias.",
    icon: <FaBrain />
  },
  {
    titulo: "Proatividade",
    description: "Antecipação de problemas e soluções.",
    icon: <FaBrain />
  },
  {
    titulo: "Resiliência",
    description: "Adaptação sob pressão.",
    icon: <FaBrain />
  },
  {
    titulo: "Visão Sistêmica",
    description: "Compreensão de sistemas complexos.",
    icon: <FaBrain />
  },
  {
    titulo: "Trabalho em Equipe",
    description: "Colaboração eficiente.",
    icon: <FaBrain />
  },
  {
    titulo: "Pensamento Crítico",
    description: "Avaliação lógica e racional.",
    icon: <FaBrain />
  }
];