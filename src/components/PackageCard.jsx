import { Link } from 'react-router-dom'
import { FiCheck, FiMapPin } from 'react-icons/fi'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { prefillFromPackage } from '../utils/quote.js'

export default function PackageCard({ pkg, index = 0 }) {
  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden border border-brand-900/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/45 hover:shadow-[0_38px_60px_-40px_rgba(7,42,30,0.45)]">
        <Link
          to={`/packages/${pkg.slug}`}
          className="relative block aspect-[4/3] overflow-hidden bg-brand-100"
          aria-label={`View ${pkg.title}`}
        >
          <img
            src={pkg.image}
            alt={pkg.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900">
            {pkg.duration}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-brand-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
            {pkg.typeLabel}
          </span>
          <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-cream-100/90">
            <FiMapPin aria-hidden="true" className="text-gold-300" />
            {pkg.destination}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-medium text-charcoal-900">{pkg.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{pkg.short}</p>

          <ul className="mt-5 space-y-2">
            {pkg.highlights.slice(0, 3).map(h => (
              <li key={h} className="flex items-start gap-2.5 text-[13px] text-charcoal-600">
                <FiCheck aria-hidden="true" className="mt-0.5 shrink-0 text-gold-600" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            <Button to={`/packages/${pkg.slug}`} variant="outline" size="sm" arrow>
              View Details
            </Button>
            <Button to="/contact" state={{ prefill: prefillFromPackage(pkg) }} size="sm">
              Get Quote
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}