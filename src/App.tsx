import { motion } from "motion/react";
import { AlertTriangle, ExternalLink } from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0c0c1d] flex items-center justify-center p-6 selection:bg-red-500/30">
      {/* Film Grain Overlay */}
      <div className="lofi-grain" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl w-full glass-card p-12 text-center relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-lofi-purple/10 rounded-full blur-[80px]" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500 mb-8"
        >
          <AlertTriangle size={40} />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter mb-4">
          ALWAYS <span className="italic font-serif text-lofi-purple">ONLINE</span>
        </h1>
        
        <div className="h-px w-12 bg-white/10 mx-auto mb-6" />

        <p className="text-xl md:text-2xl font-serif italic text-slate-300 mb-10 leading-relaxed">
          Pagina Desactivada por <span className="text-red-400/90">*Incumplimientos de Derechos*</span>
        </p>

        <motion.a
          href="https://sanvyhub.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-all font-medium group"
        >
          Más paginas
          <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            System Status: Offline
          </p>
        </div>
      </motion.div>

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,50,50,0.03),transparent_70%)]" />
      </div>
    </div>
  );
}
