import { FiMapPin } from 'react-icons/fi'
import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import { destinations } from '../data/destinations.js'
import { packagesByType } from '../data/packages.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import PackageCard from '../components/PackageCard.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'

export default function DomesticTours() {
  usePageMeta(
    'Domestic Tours in Pakistan | Golden Trip Tours & Travels',
    'Premium domestic tours across Pakistan — Hunza, Skardu, Naran, Swat, Murree and Kashmir, planned with comfort and care.',
  )
  const domestic = destinations.filter(d => d.type === 'domestic')
  const packages = packagesByType('domestic')

  return (
    <>
      <PageHero
        image={IMAGES.skardu}
        crumbs="Domestic Tours"
        eyebrow="Domestic Travel"
        title="Discover The Beauty Closer To Home"
        subtitle="From the Karakoram to the valleys of KPK — premium journeys through Pakistan's most breathtaking landscapes."
      />

      <section className="wrap py-24 sm:py-32">
        <SectionHeading
          eyebrow="Destinations"
          title="Explore Pakistan With Golden Trip"
          subtitle="Each destination is planned with comfortable transport, well-located stays and a pace that fits you."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {domestic.map((d, i) => (
            <DestinationCard key={d.id} d={d} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            eyebrow="Featured Domestic Packages"
            title="Journeys Through The North"
            subtitle="Detailed packages with transport, stays and sightseeing organized for you."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="wrap py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <Reveal>
              <div className="flex gap-6">
                <FiMapPin className="mt-1 h-6 w-6 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <h2 className="font-display text-2xl text-charcoal-900 sm:text-3xl">
                    Practical & Planned For You
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal-500">
                    Northern Pakistan travel depends on road conditions and seasons. Our team confirms routes,
                    weather and the best windows before you travel, and keeps your itinerary flexible where it
                    needs to be.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Button to="/contact" size="lg" arrow>
                  Plan A Domestic Trip
                </Button>
                <Button to="/packages" variant="outline" size="lg" arrow>
                  View All Packages
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        image={IMAGES.hunza}
        eyebrow="Northern Pakistan"
        title="The Mountains Are Calling"
        text="Let us arrange the journey — transport, stays and sightseeing — so you can simply enjoy the views."
      />
    </>
  )
}