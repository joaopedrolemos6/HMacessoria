import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-yellow opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Pare de depender de indicação para{" "}
            <span className="text-primary">crescer.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto font-light">
            Descubra como empresas estão escalando suas vendas com inteligência comercial e tráfego de alta performance.
          </p>
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-5 bg-primary text-primary-foreground font-bold rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-accent text-sm uppercase tracking-widest"
          >
            Quero escalar minha empresa
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
