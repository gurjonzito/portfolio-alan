import hydrogestao from "../assets/hydro.png";
import oportuniza from "../assets/oportuniza.png";
import portfolio from "../assets/portfolio.png";
import spotify from "../assets/spotify.png";
import hydro from "../assets/hydrosite.png";

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
    image: hydrogestao,
    title: "Hydro+ Gestão",
    description:
      "Sistema desktop em WinForms (C#) para gestão de serviços de poços artesianos, incluindo dashboard, cadastro de clientes, OS, relatórios e controle financeiro.",
    tags: ["C#", "WinForms", ".NET", "MySQL"],
    github: "#",
  },
  {
    id: 2,
    image: oportuniza,
    title: "Oportuniza Jovem",
    description:
      "Plataforma web gratuita desenvolvida como projeto de TCC, que organiza vídeos educacionais do YouTube em trilhas de aprendizagem estruturadas para democratizar o acesso à educação.",
    tags: ["React", "TypeScript", "Node.js"],
    github: "#",
    live: "https://oportunizajovem.vercel.app",
  },
  {
    id: 3,
    image: hydro,
    title: "Hydro+ Poços",
    description:
      "Site institucional com 4 páginas desenvolvido em WordPress para empresa de perfuração de poços semi-artesianos.",
    tags: ["WordPress", "Elementor", "Locaweb"],
    live: "#",
  },
  {
    id: 4,
    image: spotify,
    title: "Spotify",
    description:
      "Front-end da tela inicial do Spotify desenvolvido tanto em HTML/CSS quanto em React com JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gurjonzito/spotify-alura",
  },
  {
    id: 5,
    image: portfolio,
    title: "Portfólio Pessoal",
    description:
      "Este próprio portfólio, landing page responsiva com dark/light mode, animações suaves e formulário de contato via EmailJS.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/gurjonzito/portfolio-alan",
    live: "#",
  },
];
