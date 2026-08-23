import {
  SiSharp, SiTypescript, SiJavascript, SiMysql,
  SiHtml5, SiReact, SiVite, SiTailwindcss,
  SiDotnet, SiNodedotjs, SiGithub, SiPostgresql,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { Database } from "lucide-react";
import { VscCode } from "react-icons/vsc";

interface SkillGroup {
  category: string;
  items: { name: string; Icon: React.ElementType }[];
}

const SKILLS: SkillGroup[] = [
  {
    category: "Linguagens",
    items: [
      { name: "C#",         Icon: SiSharp },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "SQL",        Icon: Database },
      { name: "HTML/CSS",   Icon: SiHtml5 },
    ],
  },
  {
    category: "Frameworks & Libs",
    items: [
      { name: "React",          Icon: SiReact },
      { name: "Vite",           Icon: SiVite },
      { name: "Tailwind CSS",   Icon: SiTailwindcss },
      { name: ".NET / WinForms",Icon: SiDotnet },
      { name: "Node.js",        Icon: SiNodedotjs },
    ],
  },
  {
    category: "Ferramentas & Outros",
    items: [
      { name: "Git & GitHub", Icon: SiGithub },
      { name: "MySQL",        Icon: SiMysql },
      { name: "PostgreSQL",   Icon: SiPostgresql },
      { name: "VS Code",      Icon: VscCode },
      { name: "Visual Studio",Icon: DiVisualstudio },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg-color)" }}>
      <div className="section">
        <div className="text-center mb-12">
          <span className="section-label">Habilidades</span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: "var(--text-color)" }}
          >
            Tecnologias que{" "}
            <span className="gradient-text">utilizo</span>
          </h2>
        </div>

        <div className="space-y-10">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map(({ name, Icon }) => (
                  <span key={name} className="skill-badge">
                    <Icon
                      size={16}
                      aria-hidden="true"
                      style={{ color: "var(--accent-color)" }}
                    />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}