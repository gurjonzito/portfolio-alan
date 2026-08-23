import { CheckCircle, Loader2, Mail, Send, XCircle } from "lucide-react";
import { useRef, useState } from "react";
import { enviarEmail } from "./data/emailJs";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("loading");

    try {
      const formData = new FormData(formRef.current);

      await enviarEmail({
        nome: formData.get("from_name") as string,
        email: formData.get("from_email") as string,
        assunto: formData.get("subject") as string,
        mensagem: formData.get("message") as string,
      });

      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{ background: "var(--bg-color)" }}
    >
      <div className="section">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="section-label">Contato</span>

            <h2
              className="font-display font-bold text-3xl sm:text-4xl mt-2 mb-3"
              style={{ color: "var(--text-color)" }}
            >
              Vamos <span className="gradient-text">conversar</span>?
            </h2>

            <p
              className="text-base"
              style={{ color: "var(--text-muted)" }}
            >
              Quer colaborar, tirar uma dúvida ou só dizer oi? Me manda uma
              mensagem.
            </p>
          </div>

          {/* Email direto */}
          <a
            href="mailto:alangurjon@gmail.com"
            className="flex items-center gap-3 px-5 py-3 rounded-xl border mb-8 transition-all hover:bg-[var(--accent-glow)] hover:border-[var(--accent)] w-fit mx-auto"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-muted)",
            }}
          >
            <Mail
              size={16}
              style={{ color: "var(--accent)" }}
            />

            <span className="text-sm font-medium">
              Meu e-mail
            </span>
          </a>

          {/* Formulário */}
          <div className="card p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle
                  size={48}
                  style={{ color: "var(--accent)" }}
                />

                <h3
                  className="font-display font-semibold text-xl"
                  style={{ color: "var(--text-color)" }}
                >
                  Mensagem enviada!
                </h3>

                <p style={{ color: "var(--text-muted)" }}>
                  Obrigado pelo contato. Retornarei em breve.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-accent mt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Nome + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--text-color)" }}
                    >
                      Nome
                    </label>

                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="portfolio-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--text-color)" }}
                    >
                      Email
                    </label>

                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="portfolio-input"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: "var(--text-color)" }}
                  >
                    Assunto
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Sobre o que é?"
                    className="portfolio-input"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: "var(--text-color)" }}
                  >
                    Mensagem
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    className="portfolio-input resize-none"
                  />
                </div>

                {/* Erro */}
                {status === "error" && (
                  <div
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      color: "#ef4444",
                      border: "1px solid rgba(239,68,68,0.3)",
                    }}
                  >
                    <XCircle size={16} />

                    <span>
                      Ocorreu um erro. Tente novamente ou envie por email
                      diretamente.
                    </span>
                  </div>
                )}

                {/* Botão */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-accent w-full flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}