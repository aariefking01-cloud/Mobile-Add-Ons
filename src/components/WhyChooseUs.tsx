import { motion } from 'framer-motion';
import {
  ShieldCheck, Tag, Wrench, LayoutGrid, Zap, Heart, MapPin, Clock,
  type LucideIcon,
} from 'lucide-react';
import { FEATURES, BRANDS } from '@/lib/constants';
import { SectionHeading } from './Products';

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck, Tag, Wrench, LayoutGrid, Zap, Heart, MapPin, Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Mobile Add Ons"
          title="The Premium Difference"
          subtitle="Every visit is built around quality, trust, and a genuinely premium experience."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 hover:border-gold/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass rounded-3xl p-8 sm:p-10"
        >
          <div className="text-center">
            <span className="text-xs tracking-[0.25em] uppercase text-gold/80">Brands We Carry</span>
            <h3 className="mt-3 font-display text-2xl font-bold">Trusted by the best</h3>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {BRANDS.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="font-display text-lg sm:text-xl font-semibold text-[var(--text-muted)] hover:text-gold transition-colors cursor-default"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
