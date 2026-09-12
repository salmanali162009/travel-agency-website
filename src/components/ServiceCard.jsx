import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal.jsx'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <article className="group relative flex h-full flex-col border border-brand-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/45 hover:shadow-[0_34px_55px_-35px_rgba(7,42,30,0.4)]">
        <span
          className="pointer-events-none absolute right-6 top-6 font-display text-sm italic text-charcoal-200 transition-colors duration-500 group-hover:text-gold-300"
          aria-hidden="true"
        >
          /0{index + 1}
        </span>
        <span className="mb-6 inline-grid h-14 w-14 place-items-center rounded-full border border-gold-500/35 bg-gold-50 text-gold-600 transition-all duration-500 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-brand-950">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-display text-[1.35rem] text-charcoal-900">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">{service.description}</p>
        <Link
          to={service.link}
          className="mt-7 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 transition-colors duration-300 hover:text-gold-700"
        >
          {service.cta}
          <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </article>
    </Reveal>
  )
}