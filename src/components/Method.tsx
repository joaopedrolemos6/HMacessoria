import { motion } from "framer-motion";

const pillars = [
  {
    title: "Inteligência Comercial",
    desc: "Mapeamento de ICP, análise de dados e prospecção cirúrgica para encontrar os clientes certos.",
    icon: "◆",
  },
  {
    title: "Aquisição Previsível",
    desc: "Canais de tração configurados para gerar demanda qualificada 24 horas por dia, 7 dias por semana.",
    icon: "◈",
  },
  {
    title: "Estrutura de Vendas",
    desc: "Playbooks, processos e scripts que transformam leads em receita real e recorrente.",
    icon: "▣",
  },
  {
    title: "Escala com Tráfego",
    desc: "Otimização algorítmica e mídia paga de alta performance para maximizar o ROI.",
    icon: "◉",
  },
];

const Method = () => {
  return (
    <section id="método" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Metodologia</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">O Método Nexus</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-surface border border-foreground/5 relative overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-primary text-2xl mb-6 block">{p.icon}</span>
              <span className="text-primary/40 font-mono text-xs mb-4 block">0{i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
