import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LOGO_IMAGE } from '@/lib/constants';

export default function Splash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#07070b]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Aurora glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full blur-[150px] animate-aurora"
            style={{ background: 'radial-gradient(circle, rgba(180,0,0,0.22), transparent 65%)' }}
          />

          <motion.div
            initial={{ scale: 0.65, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Pulsing rings behind logo */}
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute w-56 h-56 rounded-full border border-red-700/30"
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-44 h-44 rounded-full border border-red-600/20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />

              {/* Logo circle — red bg to match the logo seamlessly */}
              <motion.div
                className="relative w-36 h-36 rounded-full overflow-hidden"
                style={{ boxShadow: '0 0 50px rgba(180,0,0,0.5), 0 0 100px rgba(180,0,0,0.2)' }}
                initial={{ rotate: -6 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={LOGO_IMAGE}
                  alt="Mobile Add Ons"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            {/* Brand name */}
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
            >
              Mobile <span className="text-red-500">Add Ons</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-2 text-xs tracking-[0.35em] uppercase text-white/40"
            >
              Premium Accessories
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-12 w-40 h-[2px] bg-white/5 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-transparent via-red-600 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
