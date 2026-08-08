import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Star, Send, Loader2, CheckCircle2, MessageSquarePlus, X } from 'lucide-react';
import { supabase, type Review } from '@/lib/supabase';
import { SectionHeading } from './Products';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('id, name, rating, message, created_at')
      .order('created_at', { ascending: false });
    if (!error && data) setReviews(data as Review[]);
    setLoading(false);
  }

  const avg =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : '5.0';

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.05), transparent 60%)' }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Customer Love"
          title="Real Reviews"
          subtitle="See what our customers say — and share your own experience."
        />

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 glass rounded-2xl px-6 py-4">
            <span className="font-display text-4xl font-bold text-gradient-gold">{avg}</span>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className={`w-4 h-4 ${
                      n <= Math.round(Number(avg)) ? 'fill-gold text-gold' : 'text-white/15'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[var(--text-muted)]">{reviews.length} reviews</span>
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-black text-sm font-medium hover:glow-gold transition-all"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Write a Review
          </button>
        </div>

        {loading ? (
          <div className="mt-14 flex justify-center">
            <Loader2 className="w-7 h-7 text-gold animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <p className="mt-14 text-center text-[var(--text-muted)]">Be the first to leave a review!</p>
        ) : (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className="glass rounded-2xl p-6 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                      <span className="font-display text-sm font-semibold text-gold">
                        {r.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{r.name}</h4>
                      <span className="text-[11px] text-[var(--text-muted)]">
                        {formatDate(r.created_at)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className={`w-3.5 h-3.5 ${
                          n <= r.rating ? 'fill-gold text-gold' : 'text-white/15'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed">{r.message}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {showForm && (
          <ReviewForm
            onClose={() => setShowForm(false)}
            onSubmitted={() => {
              setShowForm(false);
              loadReviews();
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ReviewForm({
  onClose,
  onSubmitted,
}: {
  onClose: () => void;
  onSubmitted: () => void;
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'done'>('idle');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Please enter your name and review.');
      return;
    }
    setStatus('loading');
    setError('');
    const { error: err } = await supabase.from('reviews').insert({
      name: name.trim().slice(0, 80),
      rating,
      message: message.trim().slice(0, 1000),
    });
    if (err) {
      setStatus('error');
      setError('Could not submit your review. Please try again.');
      return;
    }
    setStatus('done');
    setTimeout(onSubmitted, 1200);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center p-5 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full glass-strong rounded-3xl p-7"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {status === 'done' ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-14 h-14 text-gold mx-auto" />
            <h3 className="mt-4 font-display text-xl font-bold">Thank you!</h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">Your review is now live.</p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3 className="font-display text-xl font-bold">Share your experience</h3>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Your review appears instantly for everyone.</p>

            <div className="mt-6">
              <label className="text-xs text-[var(--text-muted)]">Your name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                placeholder="e.g. Arun Kumar"
                className="mt-1.5 w-full px-4 py-3 rounded-xl glass text-sm outline-none focus:border-gold/40 transition-colors"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs text-[var(--text-muted)]">Your rating</label>
              <div className="mt-1.5 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(n)}
                  >
                    <Star
                      className={`w-7 h-7 transition-colors ${
                        n <= (hover || rating) ? 'fill-gold text-gold' : 'text-white/20'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs text-[var(--text-muted)]">Your review</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                rows={4}
                placeholder="Tell us about your experience..."
                className="mt-1.5 w-full px-4 py-3 rounded-xl glass text-sm outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>

            {error && <p className="mt-3 text-xs text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold text-black text-sm font-medium disabled:opacity-60 hover:glow-gold transition-all"
            >
              {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Review
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}
