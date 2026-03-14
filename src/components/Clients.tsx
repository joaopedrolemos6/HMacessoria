import { motion } from "framer-motion";

const clients = [
  "TechVentures", "ScaleUp", "DataCore", "CloudNine",
  "Infinitum", "VelocityAI", "Quantum", "NovaStar",
];

const Clients = () => {
  return (
    <section id="clientes" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Clientes</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Quem confia na Nexus</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="h-24 rounded-xl bg-surface border border-foreground/5 flex items-center justify-center group cursor-default"
            >
              <span className="text-lg font-bold text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
