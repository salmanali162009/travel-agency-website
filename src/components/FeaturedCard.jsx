import { Link } from 'react-router-dom'
import { FiMapPin } from 'react-icons/fi'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { prefillFromPackage } from '../utils/quote.js'

export default function FeaturedCard({ pkg, index = 0 }) {
  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <article className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden border border-white/10 bg-brand-950">
        <Link
          to={`/packages/${pkg.slug}`}
          aria-label={`View ${pkg.title}`}
          className="absolute inset-0"
        >
          <img
            src={pkg.image}
            alt={pkg.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-brand-950/10" aria-hidden="true" />

        <div className="relative flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-gold-400/50 bg-brand-950/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300 backdrop-blur-sm">
              {pkg.typeLabel}
            </span>
            <span className="rounded-full bg-cream-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-900">
              {pkg.duration}
            </span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-medium text-cream-50 sm:text-[1.7rem]">{pkg.title}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-cream-200/85">
            <FiMapPin className="text-gold-300" aria-hidden="true" />
            {pkg.destination}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button to={`/packages/${pkg.slug}`} variant="light" size="sm" arrow>
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