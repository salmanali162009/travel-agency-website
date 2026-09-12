import { FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import { packagesByType } from '../data/packages.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import PackageCard from '../components/PackageCard.jsx'
import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

const included = [
  { title: 'Accommodation', text: 'Hotels near the Haram in Makkah and Madinah, matched to your comfort and budget.' },
  { title: 'Flights', text: 'Return flight arrangements from your preferred departure city.' },
  { title: 'Transportation', text: 'Airport transfers and organized transport between the holy cities and Ziyarats.' },
  { title: 'Visa Assistance', text: 'Guidance through the Umrah visa process and documentation requirements.' },
  { title: 'Travel Support', text: 'A responsive team to answer questions from planning through departure.' },
]

const values = [
  { title: 'Respectful Planning', text: 'Every itinerary is planned with the sacred nature of the journey in mind.' },
  { title: 'Comfort First', text: 'Accommodation and transport arranged around your ease and pace.' },
  { title: 'Clear Communication', text: 'Inclusions, timelines and documents confirmed in writing before booking.' },
]

export default function Umrah() {
  usePageMeta(
    'Umrah Packages | Golden Trip Tours & Travels',
    'Thoughtfully planned Umrah packages with accommodation near the Haram, flights, transportation and visa assistance. Request a tailored Umrah quotation from Golden Trip.',
  )
  const packages = packagesByType('umrah')

  return (
    <>
      <PageHero
        image={IMAGES.madinahSunrise}
        crumbs="Umrah"
        eyebrow="Umrah Packages"
        title="Make Your Umrah Journey Meaningful"
        subtitle="Thoughtfully planned Umrah packages designed to make your spiritual journey comfortable, organized and stress-free."
      />

      {/* Packages */}
      <section className="wrap py-24 sm:py-32">
        <SectionHeading
          eyebrow="Choose Your Package"
          title="Umrah Packages"
          subtitle="Every package is tailored — share your dates and preferences for a personal quotation. No fixed prices, just clear, customized proposals."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand-950">
        <div className="wrap py-24 sm:py-32">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                dark
                align="left"
                eyebrow="What's Included"
                title="Everything Arranged, Nothing Left To Chance"
                className="lg:sticky lg:top-28"
              />
              <div className="mt-10 flex flex-col gap-4">
                {included.map((f, i) => (
                  <Reveal key={f.title} delay={i * 0.05}>
                    <div className="flex gap-5 border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-gold-500/40">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-500/40 text-gold-400">
                        <FiCheck aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg text-cream-50">{f.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-cream-200/75">{f.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="space-y-14">
              <Reveal>
                <div className="relative overflow-hidden border border-white/10">
                  <img
                    src={IMAGES.kaaba}
                    alt="The Kaaba at Masjid al-Haram in Makkah"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" aria-hidden="true" />
                  <p className="absolute bottom-5 left-6 font-display text-lg text-cream-50">
                    Masjid al-Haram, Makkah
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative overflow-hidden border border-white/10">
                  <img
                    src={IMAGES.madinah}
                    alt="Masjid an-Nabawi in Madinah"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" aria-hidden="true" />
                  <p className="absolute bottom-5 left-6 font-display text-lg text-cream-50">
                    Masjid an-Nabawi, Madinah
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {values.map(v => (
              <div key={v.title} className="bg-brand-900 p-8">
                <h3 className="font-display text-lg text-cream-50">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA row */}
      <section className="wrap py-20 sm:py-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-charcoal-900 sm:text-4xl">
              Ready for a calm, well-arranged Umrah?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500">
              Send us your preferred dates and we will prepare a complete Umrah proposal — accommodation, flights,
              transport and guidance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg" arrow>
              Get Quote
            </Button>
            <Button to="/packages" variant="outline" size="lg" arrow>
              <FiArrowUpRight aria-hidden="true" />
              View All Packages
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        image={IMAGES.kaabaDay}
        eyebrow="Umrah Enquiries"
        title="Talk To Our Umrah Team"
        text="Share your dates and travel preferences — our team will prepare a personalized Umrah proposal for you."
      />
    </>
  )
}