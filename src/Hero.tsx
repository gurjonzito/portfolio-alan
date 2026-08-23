import { ArrowDown, GitBranch, Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Substitua pela URL da sua foto ou importe de /src/assets/
const PROFILE_IMG = "/src/assets/perfil.jpg";

const SOCIAL = [
  {
    icon: <GitBranch size={20} />,
    href: "https://github.com/gurjonzito",
    label: "GitHub",
  },
  {
    icon: <LinkedinIcon />,
    href: "https://linkedin.com/in/alangurjon",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={20} />,
    href: "#contact",
    label: "Email",
  },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-color)" }}
    >
      {/* Orbs decorativos */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="section w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left animate-fade-up">
            <span className="section-label">Desenvolvedor</span>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mt-2 mb-4">
              Olá, eu sou o{" "}
              <span className="gradient-text">Alan</span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              Estudante de{" "}
              <strong style={{ color: "var(--text-color)" }}>
                Sistemas de Informação
              </strong>{" "}
              e{" "}
              <strong style={{ color: "var(--text-color)" }}>
                Desenvolvedor Full-Stack
              </strong>{" "}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <button className="btn-accent" onClick={scrollToProjects}>
                Ver projetos
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl border font-display font-semibold text-sm transition-all hover:bg-[var(--accent-glow)] hover:border-[var(--accent)]"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-color)",
                }}
              >
                Entrar em contato
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-3 justify-center md:justify-start">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:bg-[var(--accent-glow)] hover:border-[var(--accent)] hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--text-muted)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div
            className="flex-shrink-0 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div
              className="profile-ring"
              style={{ width: "220px", height: "220px" }}
            >
              <img
                src={PROFILE_IMG}
                alt="Foto de perfil de Alan"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: "var(--text-muted)" }}
            aria-label="Rolar para baixo"
          >
            <span className="text-xs font-medium">Rolar</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}