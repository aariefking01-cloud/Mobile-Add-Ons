import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { SHOP, LOGO_IMAGE } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Offers', href: '#offers' },
  { label: 'Accessories', href: '#accessories' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-[0_0_14px_rgba(180,0,0,0.4)]">
                <img src={LOGO_IMAGE} alt="Mobile Add Ons" className="w-full h-full object-contain" />
              </div>
              <span className="font-display text-lg font-semibold">
                Mobile <span className="text-red-500">Add Ons</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
              Anna Nagar's premium destination for mobile cases, tempered glass, and accessories.
              Genuine products, expert fitting, and the best prices.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`https://wa.me/91${SHOP.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
              </a>
              <a
                href={`tel:${SHOP.phoneRaw[0]}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-gold" />
              </a>
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-gold" />
              </span>
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-gold" />
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--text-muted)] hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{SHOP.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{SHOP.phones.join(' · ')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="break-all">{SHOP.emails.join(' · ')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>{SHOP.hours} · All days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {SHOP.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Anna Nagar West · Chennai · {SHOP.hoursShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
