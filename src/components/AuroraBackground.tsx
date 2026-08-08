import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#07070b]" />
      <div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] animate-aurora"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.18), transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] animate-aurora"
        style={{ background: 'radial-gradient(circle, rgba(56,109,245,0.12), transparent 70%)', animationDelay: '4s' }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[35vw] h-[35vw] rounded-full blur-[100px] animate-aurora"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08), transparent 70%)', animationDelay: '8s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}

export function Particles({ count = 18 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.span
          key={i}
          className="absolute block w-1 h-1 rounded-full bg-gold/30"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
