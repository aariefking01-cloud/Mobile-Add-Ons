import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Particles } from './AuroraBackground';
import { SHOP } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <Particles count={22} />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.12), transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-wide text-gold/90 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          MOBILE ADD ONS – Premium Mobile Accessories Store
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Style Your Phone
          <br />
          <span className="text-gradient-gold">With Premium Care</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.35, duration: 0.7 }}
          className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed"
        >
          Discover premium cases, tempered glass, and accessories for every device.
          Genuine products, expert fitting, and the best prices in Anna Nagar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.55, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#products"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-black font-medium text-sm hover:glow-gold transition-all"
          >
            View Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#offers"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm hover:border-gold/40 transition-colors"
          >
            Today's Offers
          </a>
          <a
            href={`tel:${SHOP.phones[0]}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm hover:border-gold/40 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            Call
          </a>
          <a
            href={`https://wa.me/91${SHOP.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass text-sm hover:border-gold/40 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.7 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[var(--text-muted)]"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open Daily · {SHOP.hoursShort}
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span>2nd Floor · Opposite Lifestyle · VR Mall</span>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span>Anna Nagar West, Chennai</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <span className="w-1 h-2 rounded-full bg-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
