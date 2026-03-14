import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Contato</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Pronto para a escala?</h2>
          <p className="text-muted-foreground font-light">
            Preencha os dados abaixo e nossa equipe estratégica entrará em contato.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Nome</label>
              <input
                type="text"
                required
                className="w-full bg-background border border-foreground/10 p-4 rounded-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-sm"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Telefone</label>
              <input
                type="tel"
                required
                className="w-full bg-background border border-foreground/10 p-4 rounded-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-sm"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Email</label>
              <input
                type="email"
                required
                className="w-full bg-background border border-foreground/10 p-4 rounded-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-sm"
                placeholder="email@empresa.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Nicho</label>
              <input
                type="text"
                className="w-full bg-background border border-foreground/10 p-4 rounded-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-sm"
                placeholder="Ex: SaaS, Consultoria, E-commerce"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Mensagem</label>
            <textarea
              rows={4}
              className="w-full bg-background border border-foreground/10 p-4 rounded-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-sm resize-none"
              placeholder="Conte-nos sobre seu desafio atual"
            />
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-primary text-primary-foreground font-black uppercase tracking-[0.15em] text-sm hover:brightness-110 transition-all duration-300 rounded-sm glow-accent"
          >
            {submitted ? "✓ Enviado com sucesso!" : "Enviar Proposta Estratégica"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
