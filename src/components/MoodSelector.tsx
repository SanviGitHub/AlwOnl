import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const moods = [
  { emoji: "😔", label: "Triste", quote: "Está bien no estar bien. Mañana será otro día para intentarlo." },
  { emoji: "😊", label: "Feliz", quote: "Tu energía es contagiosa, no dejes que nadie apague tu brillo hoy." },
  { emoji: "💔", label: "Roto", quote: "Las piezas rotas también pueden formar un mosaico hermoso." },
  { emoji: "🦋", label: "Chill", quote: "Fluye como el agua, nada es tan urgente como tu paz mental." },
];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<typeof moods[0] | null>(null);

  return (
    <section id="mood" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lofi-pink/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-display font-bold text-white mb-4">¿Cómo te sientes hoy?</h2>
        <p className="text-slate-400 mb-12">Selecciona tu mood y deja que Always Online te recomiende algo.</p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {moods.map((mood) => (
            <motion.button
              key={mood.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedMood(mood)}
              className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all ${
                selectedMood?.label === mood.label
                  ? "bg-lofi-purple border-lofi-purple shadow-xl shadow-lofi-purple/20"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <span className="text-3xl md:text-4xl">{mood.emoji}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{mood.label}</span>
            </motion.button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selectedMood ? (
              <motion.div
                key={selectedMood.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="glass-card p-10 relative w-full"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-lofi-purple rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-6">
                  "{selectedMood.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-white/10" />
                  <span className="text-xs font-bold text-lofi-purple uppercase tracking-widest">
                    Recomendación del Team
                  </span>
                  <div className="h-px w-12 bg-white/10" />
                </div>
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="text-slate-400 italic"
              >
                Esperando tu señal...
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
