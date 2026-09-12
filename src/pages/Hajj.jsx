import { FiCheck, FiShield } from 'react-icons/fi'
import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import { packagesByType } from '../data/packages.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import PackageCard from '../components/PackageCard.jsx'
import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

const pillars = [
  { title: 'Hajj Packages', text: 'Structured packages covering the essentials of the Hajj journey.' },
  { title: 'Accommodation', text: 'Hotel stays in Makkah and Madinah arranged for the pilgrimage season.' },
  { title: 'Transportation', text: 'Organized movement between holy sites, aligned with the pilgrimage schedule.' },
  { title: 'Flight Arrangements', text: 'Return flights coordinated with the Hajj travel window.' },
  { title: 'Visa Assistance', text: 'Guidance through the official Hajj visa process each season.' },
  { title: 'Travel Support', text: 'A responsive team alongside you from planning to departure.' },
]

export default function Hajj() {
  usePageMeta(
    'Hajj Packages | Golden Trip Tours & Travels',
    'Structured Hajj packages covering accommodation, transportation, flights and visa assistance. Request a Hajj quotation from Golden Trip Tours & Travels.',
  )
  const packages = packagesByType('hajj')

  return (
    <>
      <PageHero
        image={IMAGES.kaabaAerial}
        crumbs="Hajj"
        eyebrow="Hajj Services"
        title="Begin Your Hajj Journey With Confidence"
        subtitle="Hajj packages, accommodation, transportation, flight arrangements, visa assistance and travel support — organized with care and clarity."
      />

      {/* Packages */}
      <section className="wrap py-24 sm:py-32">
        <SectionHeading
          eyebrow="Choose Your Package"
          title="Hajj Packages"
          subtitle="Hajj arrangements are finalized in line with the official procedures and quota announced each season. Request a quotation for current availability and details."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            eyebrow="How We Support You"
            title="The Pillars Of Our Hajj Service"
            subtitle="Each element of your journey is planned and coordinated by one team."
          />
          <div className="mt-14 grid gap-px border border-brand-900/10 bg-brand-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.05} className="h-full">
                <div className="flex h-full flex-col bg-cream-50 p-8 transition-colors duration-500 hover:bg-white">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-900 text-gold-400">
                    <FiCheck aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-charcoal-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency note */}
      <section className="wrap py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex gap-5 border border-gold-500/35 bg-gold-50 p-7 sm:p-9">
              <FiShield className="mt-1 hidden h-6 w-6 shrink-0 text-gold-600 sm:block" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl text-charcoal-900">Transparent Hajj Information</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Hajj is governed by official rules, quota and procedures set by the relevant authorities each
                  season. We do not make unsupported claims about approvals, partnerships or certification. Our
                  team shares only accurate, up-to-date information and guides you through the official process
                  for your specific season and package.
                </p>
                <div className="mt-6">
                  <Button to="/contact" size="lg" arrow>
                    Request Hajj Quote
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        image={IMAGES.madinah}
        eyebrow="Hajj Enquiries"
        title="Plan Your Hajj With A Trusted Team"
        text="Contact us for current information, package options and the official requirements for your planned season."
      />
    </>
  )
}