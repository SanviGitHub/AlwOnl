import Header from "./components/Header";
import Hero from "./components/Hero";
import QuotesPlaylist from "./components/QuotesPlaylist";
import MoodSelector from "./components/MoodSelector";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-lofi-purple/30">
      {/* Film Grain Overlay */}
      <div className="lofi-grain" />
      
      {/* Lofi Rain Effect */}
      <div className="lofi-rain">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.5 + Math.random() * 1.5}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-lofi-purple z-50 origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <TeamSection />
        <QuotesPlaylist />
        <MoodSelector />
      </main>

      <Footer />

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.05),transparent_70%)]" />
      </div>
    </div>
  );
}
