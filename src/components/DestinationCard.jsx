import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCalendar } from 'react-icons/fi'
import Reveal from './Reveal.jsx'

export default function DestinationCard({ d, index = 0, aspect = 'aspect-[4/5]' }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <article className="group relative h-full overflow-hidden border border-white/10 bg-brand-950">
        <Link
          to={d.type === 'domestic' ? '/domestic-tours' : '/international-tours'}
          aria-label={`Explore ${d.name}`}
          className={`relative block overflow-hidden ${aspect}`}
        >
          <img
            src={d.image}
            alt={d.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
          />
        </Link>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/35 to-brand-950/5 transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-gold-400/45 bg-brand-950/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300">
              {d.tag}
            </span>
            {d.duration && (
              <span className="inline-flex items-center gap-1 rounded-full bg-cream-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-900">
                <FiCalendar aria-hidden="true" />
                {d.duration}
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl font-medium text-cream-50">{d.name}</h3>
          <p className="mt-1 text-[13px] font-medium text-gold-300">{d.country}</p>

          <p className="mt-2.5 max-h-0 overflow-hidden text-[13px] leading-relaxed text-cream-200/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            {d.description}
          </p>

          <Link
            to={d.type === 'domestic' ? '/domestic-tours' : '/international-tours'}
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300 transition-colors hover:text-gold-200"
          >
            Explore
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}