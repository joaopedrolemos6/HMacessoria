import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow-yellow opacity-50 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: ease as any }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="inline-block px-5 py-2 mb-8 border border-primary/20 rounded-full text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-primary/5"
          >
            Inteligência Comercial de Elite
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-balance text-foreground">
            Transformamos indicação em{" "}
            <span className="text-primary">máquinas</span> de vendas.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light text-pretty"
          >
            Através de inteligência comercial, dados proprietários e tráfego de alta performance,
            criamos estruturas de vendas previsíveis e escaláveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 glow-accent text-sm uppercase tracking-wider"
            >
              Falar com especialista
            </button>
            <button
              onClick={() => document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 bg-surface border border-foreground/10 text-foreground font-bold rounded-sm hover:bg-surface-elevated transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Ver resultados
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
