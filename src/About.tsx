import { BookOpen, BriefcaseBusiness, Medal } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <BookOpen size={18} />,
    label: "Formação",
    value: "Sistemas de Informação — UNIFAFIBE",
  },
  {
    icon: <BriefcaseBusiness size={18} />,
    label: "Atuação",
    value: "Desenvolvimento de Software & Freelance",
  },
  {
    icon: <Medal size={18} />,
    label: "Conquista",
    value: "Olimpíada Brasileira de Astronomia e Astronáutica — Ouro e Bronze",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div className="section">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Texto */}
          <div className="flex-1">
            <span className="section-label">Sobre mim</span>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl mt-2 mb-6"
              style={{ color: "var(--text-color)" }}
            >
              Um pouco da minha{" "}
              <span className="gradient-text">trajetória</span>
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Minha trajetória na área de tecnologia começou em 2022, quando iniciei o curso Técnico em Informática. A partir dessa experiência, decidi seguir na área e ingressei no curso de Sistemas de Informação, com conclusão prevista para 2026.
              </p>
              <p>
                Ao longo dessa formação, desenvolvi conhecimentos em desenvolvimento de software e tive contato com diferentes tecnologias e ferramentas, unindo o aprendizado acadêmico à experiência prática por meio de estágio na área de desenvolvimento.
              </p>
              <p>
                Atualmente, busco continuar evoluindo profissionalmente, ampliando meus conhecimentos e adquirindo cada vez mais experiência na área de tecnologia.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex-1 w-full">
            <div className="space-y-4">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="card p-5 flex items-start gap-4"
                >
                  <span
                    className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: "var(--accent-glow)",
                      color: "var(--accent)",
                    }}
                  >
                    {h.icon}
                  </span>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {h.label}
                    </p>
                    <p
                      className="text-sm leading-snug"
                      style={{ color: "var(--text-color)" }}
                    >
                      {h.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
