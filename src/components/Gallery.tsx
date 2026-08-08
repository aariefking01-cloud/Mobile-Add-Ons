import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';
import { SectionHeading } from './Products';

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Showcase"
          title="Our Gallery"
          subtitle="A glimpse of the premium accessories we carry in store."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
              onClick={() => setActive(src)}
              className={`group relative overflow-hidden rounded-2xl glass ${
                i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i === 0 ? 'h-full min-h-[200px]' : 'h-40 sm:h-52'
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center p-5 bg-black/85 backdrop-blur-md"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active}
              alt="Gallery preview"
              className="max-w-[90vw] max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
