import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCTS, type Product } from '@/lib/constants';
import { SHOP } from '@/lib/constants';

export default function Products() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Collection"
          title="Featured Products"
          subtitle="Hand-picked accessories with genuine quality and premium finish."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(p)}
              className="group relative glass rounded-2xl overflow-hidden hover:border-gold/30 transition-colors text-left w-full"
            >
              <div className="relative aspect-square overflow-hidden bg-black/30">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide bg-gold text-black">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gold">{p.price}</span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs">
                    View
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProductModal product={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-5 bg-black/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto no-scrollbar glass-strong rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass-strong flex items-center justify-center hover:border-gold/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="aspect-square bg-black/40">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 sm:p-7 flex flex-col justify-center">
          <span className="text-xs tracking-wide text-gold/80 uppercase">{product.tag}</span>
          <h3 className="mt-2 font-display text-2xl font-bold">{product.name}</h3>
          <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{product.description}</p>
          <div className="mt-5 text-3xl font-bold text-gradient-gold">{product.price}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/91${SHOP.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-black text-sm font-medium"
            >
              <ShoppingBag className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${SHOP.phoneRaw[0]}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm hover:border-gold/40 transition-colors"
            >
              Call to Order
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Genuine product · Free fitting · In-store pickup
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-2xl mx-auto"
    >
      <span className="text-xs tracking-[0.25em] uppercase text-gold/80">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
