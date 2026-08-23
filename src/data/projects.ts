export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    image: "../assets/hydro.png",
    title: "Hydro+ Gestão",
    description:
      "Sistema desktop em WinForms (C#) para gestão de serviços de poços artesianos, incluindo dashboard, cadastro de clientes, OS, relatórios e controle financeiro.",
    tags: ["C#", "WinForms", ".NET", "MySQL"],
    github: "#",
  },
  {
    id: 2,
    image: "../assets/oportuniza.png",
    title: "Oportuniza Jovem",
    description:
      "Plataforma web gratuita desenvolvida como projeto de TCC, que organiza vídeos educacionais do YouTube em trilhas de aprendizagem estruturadas para democratizar o acesso à educação.",
    tags: ["React", "TypeScript", "Node.js"],
    github: "#",
    live: "https://oportunizajovem.vercel.app",
  },
  {
    id: 3,
    image: "../assets/portfolio.png",
    title: "Portfólio Pessoal",
    description:
      "Este próprio portfólio, landing page responsiva com dark/light mode, animações suaves e formulário de contato via EmailJS.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];
