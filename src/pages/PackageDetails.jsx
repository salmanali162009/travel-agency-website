import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiCalendar, FiMoon, FiMapPin, FiChevronRight, FiArrowLeft } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { usePageMeta } from '../utils/seo.js'
import { getPackageById, packages } from '../data/packages.js'
import { whatsappLink } from '../data/site.js'
import { prefillFromPackage } from '../utils/quote.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import PackageCard from '../components/PackageCard.jsx'
import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

function DetailBox({ title, text }) {
  return (
    <div className="border-b border-brand-900/10 py-7 first:pt-0 last:border-b-0 last:pb-0">
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{text}</p>
    </div>
  )
}

export default function PackageDetails() {
  const { slug } = useParams()
  const pkg = getPackageById(slug)

  usePageMeta(
    pkg ? `${pkg.title} | Golden Trip Tours & Travels` : 'Package Not Found | Golden Trip Tours & Travels',
    pkg ? `View details of the ${pkg.title} — ${pkg.destination}, ${pkg.duration}. Request this package for a personalized quotation.` : 'This package could not be found.',
  )

  if (!pkg) {
    return (
      <section className="wrap flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <h1 className="font-display text-3xl text-charcoal-900">Package Not Found</h1>
        <p className="mt-3 max-w-md text-sm text-charcoal-500">
          The package you are looking for may have been renamed or moved.
        </p>
        <Button to="/packages" variant="outline" size="md" className="mt-8" arrow>
          Browse All Packages
        </Button>
      </section>
    )
  }

  const related = packages.filter(p => p.type === pkg.type && p.id !== pkg.id).slice(0, 3)
  const quoteState = { prefill: prefillFromPackage(pkg) }

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div className="absolute inset-0 -z-10">
          <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/85 via-brand-950/70 to-brand-950/95" aria-hidden="true" />

        <div className="wrap pt-36 sm:pt-44 pb-16 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs font-medium tracking-wider text-cream-200/70">
            <Link to="/" className="transition-colors hover:text-gold-300">Home</Link>
            <FiChevronRight className="text-cream-200/40" aria-hidden="true" />
            <Link to="/packages" className="transition-colors hover:text-gold-300">Packages</Link>
            <FiChevronRight className="text-cream-200/40" aria-hidden="true" />
            <span className="text-gold-300">{pkg.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold-400/50 bg-brand-950/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-300 backdrop-blur-sm">
              {pkg.typeLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-900">
              <FiCalendar aria-hidden="true" /> {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-900">
              <FiMoon aria-hidden="true" /> {pkg.nights}
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl">
            {pkg.title}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-gold-300">
            <FiMapPin aria-hidden="true" />
            {pkg.destination}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-200/85 sm:text-lg">{pkg.tagline}</p>
        </div>
      </section>

      {/* Body */}
      <section className="wrap py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <div>
            {/* Overview */}
            <div>
              <h2 className="font-display text-2xl text-charcoal-900 sm:text-3xl">Overview</h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-600">{pkg.overview}</p>
            </div>

            {/* Highlights */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-charcoal-900 sm:text-3xl">Package Highlights</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map(h => (
                  <li key={h} className="flex items-start gap-3 border border-brand-900/10 bg-white p-4 text-sm text-charcoal-600">
                    <FiCheck className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="mt-14 border-t border-brand-900/10">
              <DetailBox title="Accommodation" text={pkg.accommodation} />
              <DetailBox title="Transportation" text={pkg.transportation} />
              <DetailBox title="Flights" text={pkg.flights} />
              <DetailBox title="Visa Assistance" text={pkg.visa} />
              <DetailBox title="Important Information" text={pkg.importantInfo} />
            </div>
          </div>

          {/* Inquiry sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="border border-brand-900/10 bg-white p-7 sm:p-8">
                <span className="eyebrow">Request This Package</span>
                <h3 className="font-display text-2xl text-charcoal-900">{pkg.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-charcoal-400">
                  <FiMapPin aria-hidden="true" className="text-gold-600" />
                  {pkg.destination} · {pkg.duration}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-brand-900/10 pt-6">
                  {pkg.highlights.slice(0, 4).map(h => (
                    <li key={h} className="flex items-start gap-2.5 text-[13px] text-charcoal-600">
                      <FiCheck className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-md bg-cream-100 p-4 text-xs leading-relaxed text-charcoal-500">
                  Prices depend on your dates, hotel category and group size. Send us your preferences and we will
                  prepare a clear, personalized quotation.
                </p>

                <div className="mt-7 flex flex-col gap-3">
                  <Button to="/contact" state={quoteState} size="lg" arrow className="w-full">
                    Request This Package
                  </Button>
                  <Button href={whatsappLink(`Hello Golden Trip, I'm interested in the ${pkg.title} package. Please share details.`)} variant="whatsapp" size="lg" className="w-full">
                    <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                    WhatsApp Us
                  </Button>
                </div>

                <Link
                  to="/packages"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-400 transition-colors hover:text-gold-600"
                >
                  <FiArrowLeft aria-hidden="true" />
                  All Packages
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream-100">
          <div className="wrap py-24 sm:py-28">
            <SectionHeading
              eyebrow="You May Also Like"
              title={`More ${pkg.typeLabel}s`}
              subtitle="Explore similar journeys arranged with the same care."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        image={pkg.image}
        eyebrow="Almost There"
        title={`Ready To Book ${pkg.title}?`}
        text="Share your preferred dates and traveler details — our team will confirm availability and send you a complete proposal."
      />
    </>
  )
}