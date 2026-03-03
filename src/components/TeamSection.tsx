import { motion } from "motion/react";

const team = [
  { realName: "Antonela", nickname: "Carre/Say", role: "Escritora & Supervisadora", image: "https://images.iimg.live/images/radiant-snapshot-9985.webp" },
  { realName: "Sophya", nickname: "Spreen/Mai", role: "Escritora", image: "https://images.iimg.live/images/vibrant-portfolio-2743.webp" },
  { realName: "Estefania", nickname: "Duki/Estefa", role: "Escritora", image: "https://images.iimg.live/images/spectacular-art-2161.webp" },
  { realName: "Victoria", nickname: "Stiffy/Viki", role: "Escritora", image: "https://images.iimg.live/images/vibrant-memory-2697.webp" },
  { realName: "Santino", nickname: "Robleis/Sanvy", role: "Supervisor", image: "https://images.iimg.live/images/brilliant-shot-8545.webp" }
];

export default function TeamSection() {
  return (
    <section id="equipo" className="py-24 bg-lofi-bg/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-white mb-6"
          >
            Sobre Nosotros & El Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Empezamos como 3 amigas queriendo compartir lo que sentíamos... Hoy somos una comunidad en expansión dedicada a acompañarte en cada vibe. Creemos en el poder de las palabras para sanar y conectar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.realName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-lofi-purple rounded-[32px] rotate-6 group-hover:rotate-12 transition-transform opacity-20" />
                <img
                  src={member.image}
                  alt={member.realName}
                  className="w-32 h-32 object-cover rounded-[32px] relative z-10 border-2 border-white/10 group-hover:border-lofi-purple/50 transition-colors"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-lofi-purple rounded-full flex items-center justify-center z-20 shadow-lg border-2 border-lofi-bg">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-1">{member.realName}</h3>
              <p className="text-sm text-lofi-purple font-medium mb-4">{member.nickname}</p>
              
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                {member.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
