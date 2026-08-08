import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SHOP, LOGO_IMAGE } from '@/lib/constants';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Offers', href: '#offers' },
  { label: 'Accessories', href: '#accessories' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 shadow-[0_0_12px_rgba(180,0,0,0.4)]">
            <img src={LOGO_IMAGE} alt="Mobile Add Ons" className="w-full h-full object-contain" />
          </div>
          <span className="font-display text-base font-semibold tracking-tight">
            Mobile <span className="text-red-500">Add Ons</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors group"
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-6" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SHOP.phoneRaw[0]}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:border-gold/40 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold" />
            Call
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex items-center justify-center glass rounded-lg"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-strong border-t border-white/5"
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${SHOP.phoneRaw[0]}`}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gold text-black text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
