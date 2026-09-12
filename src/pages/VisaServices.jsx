import { FiFileText, FiShield } from 'react-icons/fi'
import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTASection from '../components/CTASection.jsx'

const categories = [
  {
    title: 'Tourist Visa Assistance',
    text: 'Guidance and document support for leisure travel to popular international destinations.',
  },
  {
    title: 'Visit Visa Assistance',
    text: 'Support for travelers visiting family, friends or relatives abroad.',
  },
  {
    title: 'Business Travel Visa Assistance',
    text: 'Application guidance for work-related travel, conferences and business visits.',
  },
  {
    title: 'Family Travel Assistance',
    text: 'Coordinated visa and travel planning for families traveling together.',
  },
]

const process = [
  { n: '01', title: 'Share Your Travel Plan', text: 'Tell us your destination, dates and purpose of travel.' },
  { n: '02', title: 'Receive A Checklist', text: 'We outline the documents, forms and steps that apply to your case.' },
  { n: '03', title: 'Prepare Your Documents', text: 'We review your documents for completeness before submission.' },
  { n: '04', title: 'Track & Guide', text: 'We guide you through the process and keep you informed as it progresses.' },
]

export default function VisaServices() {
  usePageMeta(
    'Visa Assistance Services | Golden Trip Tours & Travels',
    'Visa assistance and application guidance for tourist, visit, business and family travel. Request visa assistance from Golden Trip Tours & Travels.',
  )

  return (
    <>
      <PageHero
        image={IMAGES.airport}
        crumbs="Visa Services"
        eyebrow="Visa Services"
        title="Visa Assistance, Made Simple"
        subtitle="Clear guidance through visa applications for tourism, visits and business travel — so the paperwork feels effortless."
      />

      <section className="wrap py-24 sm:py-32">
        <SectionHeading
          eyebrow="What We Help With"
          title="Visa Assistance & Application Guidance"
          subtitle="We help travelers prepare, structure and submit complete visa applications. Visa decisions rest with the relevant authorities — our role is accurate, careful guidance."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.07} className="h-full">
              <article className="group flex h-full gap-6 border border-brand-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/45">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-500/35 bg-gold-50 text-gold-600 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-brand-950">
                  <FiFileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-charcoal-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{c.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-950">
        <div className="wrap py-24 sm:py-32">
          <SectionHeading
            dark
            eyebrow="The Process"
            title="How Visa Assistance Works"
            subtitle="A simple, guided process from your travel plan to submission."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="group relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-medium text-gold-500/90">{step.n}</span>
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent lg:ml-6 lg:block" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-cream-50">{step.title}</h3>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-cream-200/75">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex gap-5 border border-brand-900/10 bg-white p-7 sm:p-9">
              <FiShield className="mt-1 hidden h-6 w-6 shrink-0 text-gold-600 sm:block" aria-hidden="true" />
              <div>
                <h2 className="font-display text-xl text-charcoal-900">Important Note</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">
                  Golden Trip provides <strong>visa assistance and application guidance</strong>. Approval is
                  always subject to the decision of the respective embassy, consulate or immigration authority.
                  Requirements vary by country, nationality and travel purpose — we confirm the current rules for
                  your specific case.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        image={IMAGES.luggage}
        eyebrow="Need Visa Help?"
        title="Request Visa Assistance"
        text="Tell us your destination and purpose of travel — we'll guide you through what's needed."
      />
    </>
  )
}