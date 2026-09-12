import { useState } from 'react'
import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import { packages } from '../data/packages.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PackageCard from '../components/PackageCard.jsx'
import CTASection from '../components/CTASection.jsx'

const filters = [
  { id: 'all', label: 'All Packages' },
  { id: 'umrah', label: 'Umrah' },
  { id: 'hajj', label: 'Hajj' },
  { id: 'international', label: 'International' },
  { id: 'domestic', label: 'Domestic' },
]

export default function Packages() {
  usePageMeta(
    'Travel Packages | Golden Trip Tours & Travels',
    'Browse Umrah, Hajj, international and domestic travel packages from Golden Trip Tours & Travels. Request a quote for a tailored package.',
  )
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? packages : packages.filter(p => p.type === filter)

  return (
    <>
      <PageHero
        image={IMAGES.hotel}
        crumbs="Packages"
        eyebrow="Travel Packages"
        title="Find The Right Journey For You"
        subtitle="Umrah, Hajj, international getaways and domestic adventures — each package tailored with a personal quotation."
      />

      <section className="wrap py-24 sm:py-32">
        <SectionHeading
          eyebrow="Browse"
          title="All Travel Packages"
          subtitle="Use the filters to explore by travel type. No fixed prices online — every package receives a clear, customized quotation."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter packages">
          {filters.map(f => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                filter === f.id
                  ? 'bg-brand-900 text-gold-300'
                  : 'border border-brand-900/15 bg-white text-charcoal-600 hover:border-gold-500 hover:text-gold-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm text-charcoal-400">No packages in this category yet.</p>
        )}
      </section>

      <CTASection
        image={IMAGES.beach}
        eyebrow="Something Custom?"
        title="Don't See What You Need?"
        text="Tell us your destination and dates — we'll shape a package around exactly what you're looking for."
      />
    </>
  )
}