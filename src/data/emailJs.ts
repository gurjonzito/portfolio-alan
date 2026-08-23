import emailjs from "@emailjs/browser";

interface EmailData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export async function enviarEmail(data: EmailData) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: data.nome,
      email: data.email,
      subject: data.assunto,
      message: data.mensagem,
      reply_to: data.email,
    },
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }
  );
}