import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "./data/projects";

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg-subtle)" }}>
      <div className="section">
        <div className="text-center mb-12">
          <span className="section-label">Portfólio</span>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl mt-2"
            style={{ color: "var(--text-color)" }}
          >
            Meus <span className="gradient-text">projetos</span>
          </h2>
          <p
            className="mt-3 max-w-lg mx-auto text-base"
            style={{ color: "var(--text-muted)" }}
          >
            Uma seleção do que tenho construído — de aplicações desktop a
            plataformas web.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.id} className="card flex flex-col">
              {/* Image placeholder / imagem real */}
              <div
                className="h-40 w-full rounded-t-[1.15rem] flex items-center justify-center text-4xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-glow), var(--bg-subtle))",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-[1.15rem]"
                  />
                ) : (
                  <span style={{ color: "var(--accent)", opacity: 0.6 }}>
                    {"</>"}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "var(--text-color)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all hover:bg-[var(--accent-glow)] hover:border-[var(--accent)]"
                      style={{
                        borderColor: "var(--border-color)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <GitBranch size={13} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target={
                        project.live.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all hover:bg-[var(--accent-glow)] hover:border-[var(--accent)]"
                      style={{
                        borderColor: "var(--border-color)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <ExternalLink size={13} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
