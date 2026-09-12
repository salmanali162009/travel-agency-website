import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiCheck, FiArrowRight, FiArrowLeft, FiChevronRight } from 'react-icons/fi'
import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import { services } from '../data/services.js'
import { packagesByType, featuredPackages } from '../data/packages.js'
import { destinations } from '../data/destinations.js'
import { faqs } from '../data/faqs.js'
import { testimonials } from '../data/testimonials.js'
import { whatsappLink } from '../data/site.js'
import Hero from '../components/Hero.jsx'
import TripPlanner from '../components/TripPlanner.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import PackageCard from '../components/PackageCard.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import FeaturedCard from '../components/FeaturedCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import FAQ from '../components/FAQ.jsx'
import CTASection from '../components/CTASection.jsx'
import Button from '../components/Button.jsx'

const whyChoose = [
  {
    title: 'Personalized Planning',
    text: 'Travel experiences designed around your requirements.',
  },
  {
    title: 'Complete Travel Support',
    text: 'Assistance from planning to departure.',
  },
  {
    title: 'Comfortable Options',
    text: 'Accommodation and transportation options for different travel needs.',
  },
  {
    title: 'Dedicated Assistance',
    text: 'Responsive support throughout your journey.',
  },
  {
    title: 'Flexible Packages',
    text: 'Choose from ready-made or customized travel plans.',
  },
  {
    title: 'Clear Communication',
    text: 'Simple and transparent travel planning.',
  },
]

const howItWorks = [
  { n: '01', title: 'Choose Your Journey', text: 'Select Umrah, Hajj, international or domestic travel.' },
  { n: '02', title: 'Share Your Requirements', text: 'Tell us your destination, dates and preferences.' },
  { n: '03', title: 'Get Your Quote', text: 'Receive a suitable travel package.' },
  { n: '04', title: 'Travel With Confidence', text: 'Let Golden Trip handle the travel arrangements.' },
]

const umrahPackages = packagesByType('umrah')
const internationalPackages = packagesByType('international').slice(0, 5)

function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex(i => (i + 1) % testimonials.length)
  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <TestimonialCard t={testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-900/15 text-charcoal-600 transition-all hover:border-gold-500 hover:text-gold-600"
        >
          <FiArrowLeft aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Review navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-gold-500' : 'w-2 bg-charcoal-200 hover:bg-charcoal-300'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-900/15 text-charcoal-600 transition-all hover:border-gold-500 hover:text-gold-600"
        >
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  usePageMeta(
    'Golden Trip Tours & Travels | Umrah, Hajj & International Tours',
    'Golden Trip Tours & Travels — thoughtfully planned Umrah, Hajj and international travel packages, visa assistance, flight and hotel booking. Plan your journey with trusted travel experts.',
  )

  return (
    <>
      {/* Hero + floating planner */}
      <Hero />
      <div className="wrap relative z-20 -mt-20 sm:-mt-24">
        <TripPlanner />
      </div>

      {/* Services */}
      <section className="wrap py-24 sm:py-32">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need For Your Journey"
          subtitle="One trusted team for Umrah, Hajj and travel worldwide — planning, bookings and support under one roof."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* Umrah feature */}
      <section className="bg-brand-950">
        <div className="wrap py-24 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <span className="eyebrow !text-gold-400">Umrah Packages</span>
                <h2 className="font-display text-3xl font-medium leading-[1.12] text-cream-50 sm:text-4xl lg:text-5xl">
                  Make Your Umrah Journey Meaningful
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-200/85 sm:text-lg">
                  Thoughtfully planned Umrah packages designed to make your spiritual journey comfortable,
                  organized and stress-free.
                </p>

                <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                  {[
                    'Accommodation near the Haram',
                    'Transportation between holy cities',
                    'Flight arrangements',
                    'Visa assistance & guidance',
                    'Ziyarat tours',
                    'On-ground travel support',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-cream-200/90">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-400">
                        <FiCheck className="h-3 w-3" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button to="/umrah" size="lg" arrow>
                    Explore Umrah Packages
                  </Button>
                  <Button
                    href={whatsappLink('Hello Golden Trip Tours & Travels, I would like to know more about your Umrah packages.')}
                    size="lg"
                    variant="outlineLight"
                    arrow
                  >
                    Talk to an Expert
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute -left-6 -top-6 hidden h-24 w-24 border-l-2 border-t-2 border-gold-500/40 sm:block" aria-hidden="true" />
                <div className="relative ml-auto w-[82%] overflow-hidden border border-white/10">
                  <img
                    src={IMAGES.kaaba}
                    alt="Masjid al-Haram and the Kaaba in Makkah"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-2 w-[44%] overflow-hidden border-[5px] border-brand-950 sm:-left-6">
                  <img
                    src={IMAGES.madinah}
                    alt="Masjid an-Nabawi in Madinah"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 right-2 rounded-full bg-gold-500 px-5 py-3 text-center shadow-lg sm:right-4">
                  <span className="block font-display text-lg font-semibold text-brand-950">Golden Trip</span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-900/80">
                    Umrah Care
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {umrahPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Hajj feature */}
      <section className="bg-white">
        <div className="wrap py-24 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <Reveal className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <img
                  src={IMAGES.madinahMajestic}
                  alt="The Green Dome of Masjid an-Nabawi in Madinah"
                  loading="lazy"
                  className="aspect-[5/6] w-[78%] object-cover"
                />
                <div className="absolute -right-4 -top-4 hidden h-24 w-24 border-r-2 border-t-2 border-gold-500/40 sm:block" aria-hidden="true" />
                <div className="absolute -bottom-8 right-6 w-[40%] overflow-hidden border-[5px] border-white shadow-2xl">
                  <img
                    src={IMAGES.kaabaAerial}
                    alt="Pilgrims around the Kaaba during Hajj"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="eyebrow">Hajj Services</span>
                <h2 className="h-display">Begin Your Hajj Journey With Confidence</h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-500 sm:text-lg">
                  Structured Hajj support — packages, accommodation, transportation, flight arrangements, visa
                  assistance and travel services arranged with care and clarity.
                </p>

                <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                  {[
                    'Hajj packages',
                    'Accommodation in Makkah & Madinah',
                    'Transportation during the season',
                    'Flight arrangements',
                    'Visa assistance & guidance',
                    'Travel support throughout',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-charcoal-600">
                      <FiCheck className="shrink-0 text-gold-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button to="/hajj" size="lg" arrow>
                    Explore Hajj Packages
                  </Button>
                  <Button to="/contact" size="lg" variant="outline" arrow>
                    Request Hajj Quote
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* International destinations */}
      <section className="bg-cream-100">
        <div className="wrap py-24 sm:py-32">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">International Travel</span>
              <h2 className="h-display">Explore The World With Golden Trip</h2>
            </div>
            <Button to="/international-tours" variant="outline" size="md" arrow>
              All International Tours
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
            {destinations
              .filter(d => d.type === 'international')
              .map((d, i) => (
                <DestinationCard key={d.id} d={d} index={i} aspect="aspect-[3/4]" />
              ))}
          </div>
        </div>
      </section>

      {/* International packages */}
      <section className="bg-white">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            eyebrow="Signature Getaways"
            title="Popular International Getaways"
            subtitle="Short escapes and long journeys, each arranged around your comfort and preferences."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {internationalPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/packages" variant="dark" size="lg" arrow>
              View All Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Domestic tours */}
      <section className="bg-cream-100">
        <div className="wrap py-24 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <Reveal>
                <span className="eyebrow">Domestic Tours</span>
                <h2 className="h-display">Discover The Beauty Closer To Home</h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-500 sm:text-lg">
                  From the Karakoram to the valleys of KPK — premium journeys through the landscapes of
                  Pakistan, planned with the same care as our international tours.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {['Hunza', 'Skardu', 'Naran', 'Swat', 'Murree', 'Kashmir'].map(place => (
                    <span
                      key={place}
                      className="rounded-full border border-brand-900/15 bg-white px-4 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:border-gold-500 hover:text-gold-700"
                    >
                      {place}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button to="/domestic-tours" size="lg" arrow>
                    Explore Domestic Tours
                  </Button>
                  <Button to="/contact" size="lg" variant="outline" arrow>
                    Plan Your Trip
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <img
                  src={IMAGES.hunza}
                  alt="Hunza Valley, Gilgit-Baltistan Pakistan"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-md bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
                  <div>
                    <p className="font-display text-lg font-medium text-charcoal-900">Hunza Adventure</p>
                    <p className="text-xs text-charcoal-400">6 Days / 5 Nights</p>
                  </div>
                  <Link
                    to="/packages/hunza-adventure"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600 hover:text-gold-700"
                  >
                    View <FiChevronRight aria-hidden="true" className="text-sm" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            eyebrow="The Golden Trip Difference"
            title="Travel With Confidence"
            subtitle="A travel partner that listens, plans around you and stays with you from the first call to your return home."
          />
          <div className="mt-14 grid gap-px border border-brand-900/10 bg-brand-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06} className="h-full">
                <div className="group flex h-full flex-col bg-white p-8 transition-colors duration-500 hover:bg-cream-100">
                  <span className="text-xs font-semibold tracking-[0.2em] text-gold-500">/0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl text-charcoal-900">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal-500">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-950">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            dark
            eyebrow="How It Works"
            title="Four Simple Steps To Your Journey"
            subtitle="A clear, guided process from your first idea to a fully arranged trip."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {howItWorks.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="group relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-medium text-gold-500/90 transition-colors group-hover:text-gold-400">
                      {step.n}
                    </span>
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent lg:ml-6 lg:block" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-cream-50">{step.title}</h3>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-cream-200/75">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button to="/contact" size="lg" arrow>
              Start Planning With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured experiences */}
      <section className="bg-cream-100">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            eyebrow="Featured Experiences"
            title="Featured Travel Experiences"
            subtitle="A selection of our most loved journeys — spiritual, scenic and unforgettable."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredPackages.map((pkg, i) => (
              <FeaturedCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            eyebrow="Guest Experiences"
            title="What Travelers Say"
            subtitle="Sample reviews shown for this demo — to be replaced with genuine guest experiences."
          />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-100">
        <div className="wrap py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Questions"
                title="Frequently Asked Questions"
                subtitle="Clear answers to the questions travelers ask us most. Don’t see yours? Message us anytime."
                className="lg:sticky lg:top-28"
              />
            </div>
            <div className="border-t border-brand-900/10">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            eyebrow="Find Us"
            title="Visit Our Office"
            subtitle="Come meet our team in person, or use the map to plan your visit."
          />
          <div className="mt-12 overflow-hidden border border-brand-900/10 shadow-[0_20px_60px_-35px_rgba(7,42,30,0.45)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96654.91532071824!2d67.1203248!3d24.9012292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef584cf87f5%3A0xfc8ddda3ac96929b!2sGolden%20Trip%20Tours%20%26%20Travels!5e1!3m2!1sen!2s!4v1789202902827!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Golden Trip Tours & Travels location map"
              className="h-[420px] w-full sm:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        image={IMAGES.ctaBackground}
        eyebrow="Start Today"
        title="Ready To Plan Your Next Journey?"
        text="Tell us where you want to go and let our travel team help you plan the right experience."
      />
    </>
  )
}