import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lofi-purple/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lofi-cyan/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-lofi-purple text-xs font-bold uppercase tracking-widest mb-6"
          >
            Comunidad Chill & Real
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Tu dosis diaria de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lofi-purple via-lofi-pink to-lofi-orange">
              realidad y calma.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
            Frases que entienden lo que sientes, directamente en tu WhatsApp. Únete a la comunidad de{" "}
            <span className="text-white font-medium italic">"ᴀʟᴡᴀʏs 𝘖𝘯𝘭𝘪𝘯𝘦"</span> y mantén la vibra chill.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://whatsapp.com/channel/0029Vb7VkyQA89Mf6WrjPQ0E"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(167, 139, 250, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-lofi-purple text-white rounded-2xl font-bold flex items-center gap-3 transition-shadow"
            >
              Unirme al Canal (Gratis)
              <MessageCircle size={20} />
            </motion.a>
            <motion.a
              href="#frases"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold flex items-center gap-3 transition-all"
            >
              Explorar Frases
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Lofi Animation Placeholder */}
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-lofi-purple/20 to-transparent rounded-[40px] blur-3xl" />
            <div className="relative w-full h-full glass-card overflow-hidden group">
              <img
                src="https://picsum.photos/seed/lofi-chill/800/800"
                alt="Lofi Aesthetic"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lofi-bg via-transparent to-transparent" />
              
              {/* Floating UI elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 glass-card shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">LIVE: Chill Vibes</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 p-4 glass-card max-w-[200px]"
              >
                <p className="text-xs italic font-serif text-slate-200">
                  "A veces el silencio es la mejor respuesta."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
