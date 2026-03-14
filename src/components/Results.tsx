import { motion } from "framer-motion";

const stats = [
  { label: "Crescimento Médio", value: "+312%", sub: "em geração de leads" },
  { label: "Vendas Geradas", value: "R$1.2M", sub: "em 12 meses" },
  { label: "Eficiência Comercial", value: "3x", sub: "mais reuniões qualificadas" },
];

const Results = () => {
  return (
    <section id="resultados" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-yellow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Resultados</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Números que falam por si</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center md:text-left"
            >
              <p className="text-muted-foreground text-xs uppercase tracking-[0.15em] mb-3 font-medium">{s.label}</p>
              <h3 className="text-5xl md:text-6xl font-bold tabular-nums text-primary mb-2">{s.value}</h3>
              <p className="text-foreground/50 font-light">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
