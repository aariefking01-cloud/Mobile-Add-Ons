import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Copy, Check } from 'lucide-react';
import { SHOP } from '@/lib/constants';
import { SectionHeading } from './Products';

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(text: string, key: string) {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.05), transparent 60%)' }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="Get in Touch"
          subtitle="We'd love to see you. Drop by, call, or message us on WhatsApp."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 sm:col-span-2"
          >
            <InfoCard icon={MapPin} title="Our Location">
              <p className="font-medium">{SHOP.name}</p>
              <p className="text-[var(--text-muted)]">{SHOP.floor}</p>
              <p className="text-[var(--text-muted)]">{SHOP.landmark}</p>
              <p className="text-[var(--text-muted)]">{SHOP.address}</p>
              <button
                onClick={() => copy(SHOP.fullAddress, 'addr')}
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold hover:underline"
              >
                {copied === 'addr' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied === 'addr' ? 'Copied' : 'Copy address'}
              </button>
            </InfoCard>

            <InfoCard icon={Clock} title="Shop Hours">
              <p className="font-medium">{SHOP.hours}</p>
              <p className="text-[var(--text-muted)]">Open all days of the week</p>
            </InfoCard>

            <InfoCard icon={Phone} title="Phone">
              <div className="flex flex-wrap gap-2 mt-1">
                {SHOP.phones.map((p, i) => (
                  <div key={p} className="flex items-center gap-2">
                    <a href={`tel:${SHOP.phoneRaw[i]}`} className="font-medium hover:text-gold transition-colors">
                      {p}
                    </a>
                    <button
                      onClick={() => copy(p, `phone-${p}`)}
                      className="text-[var(--text-muted)] hover:text-gold transition-colors"
                    >
                      {copied === `phone-${p}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard icon={Mail} title="Email">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {SHOP.emails.map((e) => (
                  <div key={e} className="flex items-center gap-2">
                    <a href={`mailto:${e}`} className="font-medium hover:text-gold transition-colors break-all">
                      {e}
                    </a>
                    <button
                      onClick={() => copy(e, `email-${e}`)}
                      className="text-[var(--text-muted)] hover:text-gold transition-colors"
                    >
                      {copied === `email-${e}` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                ))}
              </div>
            </InfoCard>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={`tel:${SHOP.phoneRaw[0]}`}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gold text-black text-sm font-medium hover:glow-gold transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/91${SHOP.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full glass text-sm hover:border-gold/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-gold/30 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
          <Icon className="w-4.5 h-4.5 text-gold" />
        </div>
        <h3 className="font-display text-base font-semibold">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed pl-1">{children}</div>
    </div>
  );
}
