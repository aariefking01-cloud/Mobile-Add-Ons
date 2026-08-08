import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ACCESSORIES } from '@/lib/constants';
import { SectionHeading } from './Products';
import { SHOP } from '@/lib/constants';

export default function Accessories() {
  return (
    <section id="accessories" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="More In Store"
          title="Accessories Collection"
          subtitle="A wide range of accessories available in store. Visit us or WhatsApp for pricing and availability."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACCESSORIES.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-gold/30 transition-colors"
            >
              <div className="relative aspect-square overflow-hidden bg-black/30">
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide glass-strong text-gold">
                  {a.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold">{a.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                  {a.description}
                </p>
                <a
                  href={`https://wa.me/91${SHOP.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold hover:gap-2.5 transition-all"
                >
                  Enquire on WhatsApp
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
