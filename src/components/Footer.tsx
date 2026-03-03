import { MessageCircle, Instagram, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const WHATSAPP_URL = "https://whatsapp.com/channel/0029Vb7VkyQA89Mf6WrjPQ0E";

  return (
    <footer className="py-12 border-t border-white/5 bg-lofi-bg/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <span className="text-2xl font-display font-bold tracking-tighter text-white block mb-2">
              ᴀʟᴡᴀʏs <span className="italic font-serif text-lofi-purple">𝘖𝘯𝘭𝘪𝘯𝘦</span>
            </span>
            <p className="text-sm text-slate-500">Tu refugio digital en cada scroll.</p>
          </div>

          <div className="flex gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-lofi-purple/10 border border-lofi-purple/30 flex items-center gap-3 text-lofi-purple hover:bg-lofi-purple hover:text-white transition-all font-bold"
            >
              <MessageCircle size={20} />
              Canal de WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 flex items-center gap-2">
            Hecho con <Heart size={10} className="text-lofi-purple fill-lofi-purple" /> por el team de ᴀʟᴡᴀʏs 𝘖𝘯𝘭𝘪𝘯𝘦.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
            Mantente Chill © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
