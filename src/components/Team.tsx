import { motion } from "framer-motion";

const team = [
  { name: "Rafael Mendes", role: "CEO & Estrategista", initials: "RM" },
  { name: "Ana Ferreira", role: "Head de Tráfego", initials: "AF" },
  { name: "Lucas Costa", role: "Inteligência Comercial", initials: "LC" },
  { name: "Marina Santos", role: "Diretora de Vendas", initials: "MS" },
];

const Team = () => {
  return (
    <section id="equipe" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Equipe</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Quem faz acontecer</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-background border border-foreground/5 text-center cursor-default"
            >
              <div className="w-20 h-20 rounded-full bg-surface-elevated border border-foreground/10 flex items-center justify-center mx-auto mb-6 group-hover:border-primary/30 transition-colors duration-500">
                <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-500">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
