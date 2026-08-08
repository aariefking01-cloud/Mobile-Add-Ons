import { motion } from 'framer-motion';
import { Tag, Sparkles, Gift, Wrench } from 'lucide-react';
import { OFFERS } from '@/lib/constants';
import { SectionHeading } from './Products';

const ICONS = [Tag, Sparkles, Gift, Wrench];

export default function Offers() {
  return (
    <section id="offers" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.06), transparent 60%)' }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Limited Time"
          title="Today's Offers"
          subtitle="Save big on premium accessories. Offers refresh regularly — visit us today."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFERS.map((o, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative glass rounded-2xl p-6 overflow-hidden group hover:border-gold/30 transition-colors"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-gold text-black">
                      {o.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">{o.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
