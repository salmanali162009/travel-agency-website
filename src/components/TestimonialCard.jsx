import { FaStar } from 'react-icons/fa6'
import Reveal from './Reveal.jsx'

const Stars = () => (
  <div className="flex items-center gap-1 text-gold-500" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="h-3.5 w-3.5" aria-hidden="true" />
    ))}
  </div>
)

export default function TestimonialCard({ t, index = 0 }) {
  const initials = (t.name || 'GT')
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <Reveal delay={index * 0.07} className="h-full">
      <figure className="relative flex h-full flex-col border border-brand-900/10 bg-white p-8">
        <span
          className="pointer-events-none absolute right-7 top-4 font-display text-7xl leading-none text-gold-200"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div className="flex items-center justify-between">
          <Stars />
          {t.sample && (
            <span className="rounded-full bg-gold-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
              Sample
            </span>
          )}
        </div>

        <blockquote className="relative mt-6 flex-1 font-display text-[1.05rem] italic leading-relaxed text-charcoal-700">
          {t.quote}
        </blockquote>

        <figcaption className="mt-8 flex items-center gap-4 border-t border-brand-900/10 pt-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-900 font-display text-sm font-semibold text-gold-300">
            {initials}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-charcoal-900">{t.name}</p>
            <p className="text-xs text-charcoal-400">{t.location}</p>
          </div>
          <span className="ml-auto rounded-full border border-brand-900/10 bg-cream-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal-500">
            {t.travelType}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  )
}