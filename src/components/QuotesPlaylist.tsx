import { motion } from "motion/react";
import { Heart, Zap, Coffee, Moon } from "lucide-react";

const quotes = [
  {
    text: "No es que sea antisocial, es que mi energía es selectiva.",
    category: "Chill",
    icon: <Coffee size={18} />,
    color: "bg-lofi-cyan/20 text-lofi-cyan",
    size: "col-span-2 md:col-span-1 row-span-1",
  },
  {
    text: "Aprender a soltar es el primer paso para volver a volar.",
    category: "Motivación",
    icon: <Zap size={18} />,
    color: "bg-lofi-orange/20 text-lofi-orange",
    size: "col-span-2 md:col-span-1 row-span-2",
  },
  {
    text: "Tu paz mental vale más que cualquier explicación que debas dar.",
    category: "Realidad",
    icon: <Moon size={18} />,
    color: "bg-lofi-purple/20 text-lofi-purple",
    size: "col-span-2 row-span-1",
  },
  {
    text: "A veces solo necesitas una playlist y un poco de distancia.",
    category: "Desamor",
    icon: <Heart size={18} />,
    color: "bg-lofi-pink/20 text-lofi-pink",
    size: "col-span-2 md:col-span-1 row-span-1",
  },
];

export default function QuotesPlaylist() {
  return (
    <section id="frases" className="py-24 bg-lofi-bg/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">La Playlist de Frases</h2>
            <p className="text-slate-400 max-w-md">
              Una selección de lo más real que ha pasado por el canal. Desliza para conectar.
            </p>
          </div>
          <div className="flex gap-2">
            {["Todos", "Amor", "Chill", "Motivación"].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium hover:bg-lofi-purple/20 hover:border-lofi-purple/30 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-8 flex flex-col justify-between group cursor-pointer ${quote.size}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-2 rounded-lg ${quote.color}`}>{quote.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                  {quote.category}
                </span>
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-slate-200 leading-relaxed">
                "{quote.text}"
              </p>
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-px bg-lofi-purple" />
                <span className="text-[10px] font-bold text-lofi-purple uppercase tracking-widest">
                  Compartir
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
