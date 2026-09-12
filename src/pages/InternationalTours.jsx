import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import { destinations } from '../data/destinations.js'
import { packagesByType } from '../data/packages.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import PackageCard from '../components/PackageCard.jsx'
import CTASection from '../components/CTASection.jsx'

export default function InternationalTours() {
  usePageMeta(
    'International Tours & Packages | Golden Trip Tours & Travels',
    'Explore Dubai, Turkey, Malaysia, Azerbaijan, Maldives, Switzerland, Italy, the UK and more with well-planned international packages from Golden Trip Tours & Travels.',
  )
  const international = destinations.filter(d => d.type === 'international')
  const packages = packagesByType('international')

  return (
    <>
      <PageHero
        image={IMAGES.switzerland}
        crumbs="International Tours"
        eyebrow="International Travel"
        title="Explore The World With Golden Trip"
        subtitle="A curated selection of destinations and packages — each one planned around your dates, comfort and interests."
      />

      <section className="wrap py-24 sm:py-32">
        <SectionHeading
          eyebrow="Destinations"
          title="Destinations We Travel To"
          subtitle="Popular destinations today, with the flexibility to plan any destination of your choice."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
          {international.map((d, i) => (
            <DestinationCard key={d.id} d={d} index={i} aspect="aspect-[3/4]" />
          ))}
        </div>
      </section>

      <section className="bg-brand-950">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            dark
            eyebrow="Signature Packages"
            title="Popular International Getaways"
            subtitle="Ready-to-plan journeys with clear inclusions — request a quote and we tailor the details for you."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        image={IMAGES.maldives}
        eyebrow="Custom Journeys"
        title="Dream Destination Not Listed?"
        text="Share your dream itinerary with us — if it can be traveled, we can help you plan it."
      />
    </>
  )
}