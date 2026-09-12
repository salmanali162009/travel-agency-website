import { FiCompass, FiHeart, FiShield, FiUsers, FiCheck } from 'react-icons/fi'
import { usePageMeta } from '../utils/seo.js'
import { IMAGES } from '../data/images.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTASection from '../components/CTASection.jsx'

const pillars = [
  {
    icon: FiShield,
    title: 'Trusted Guidance',
    text: 'We are clear about what we do — and equally clear about what depends on third parties like airlines, embassies or authorities.',
  },
  {
    icon: FiHeart,
    title: 'Care In Every Detail',
    text: 'From paperwork to pickup times, we sweat the small things so your journey feels effortless.',
  },
  {
    icon: FiCompass,
    title: 'Travel That Fits You',
    text: 'Every traveler is different. Packages are shaped around your dates, budget and comfort — not a fixed script.',
  },
  {
    icon: FiUsers,
    title: 'Responsive Support',
    text: 'A consistent point of contact from planning through your return — before, during and after travel.',
  },
]

const promises = [
  'Transparent, quote-based pricing with clear inclusions',
  'Honest advice — including when a plan can be improved',
  'Assistance with flights, ground transport, stays and visas',
  'Well-located hotels matched to your budget and group size',
  'Proofreading and guidance for every document you submit',
  'Respectful, professional service throughout your journey',
]

export default function About() {
  usePageMeta(
    'About Golden Trip Tours & Travels',
    'Golden Trip Tours & Travels plans Umrah, Hajj, international and domestic journeys built on transparency, honest guidance and attention to detail.',
  )

  return (
    <>
      <PageHero
        image={IMAGES.mountains}
        crumbs="About Us"
        eyebrow="About Golden Trip"
        title="A Travel Company Built On Honesty"
        subtitle="We plan journeys people remember — with straightforward advice, real answers and careful attention to every detail."
      />

      {/* Story */}
      <section className="wrap py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Journeys Planned With Integrity"
                align="left"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal-600">
                <p>
                  <strong className="text-charcoal-900">Golden Trip Tours & Travels</strong> helps travelers plan
                  trips that are meaningful, comfortable and stress-free — from sacred journeys to Umrah and Hajj,
                  to international getaways and adventures across Pakistan.
                </p>
                <p>
                  What sets us apart is how we work. We give honest answers, we show every inclusion clearly, and
                  we never sell an experience we would not recommend to our own families. Before anything is
                  booked, you receive a complete picture — of your itinerary, your costs and everything that
                  depends on others, like airlines or consulates.
                </p>
                <p>
                  Our goal is simple: for you to travel with confidence and return with good memories.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold-500/60 sm:-left-6 sm:-top-6" aria-hidden="true" />
              <img
                src={IMAGES.attabad}
                alt="A scenic mountain valley with a turquoise lake"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -bottom-5 right-4 hidden items-center gap-4 bg-brand-900 px-7 py-5 sm:flex">
                <span className="font-display text-4xl font-medium text-gold-300">GT</span>
                <span className="max-w-[180px] text-xs uppercase tracking-[0.18em] text-cream-200/85">
                  Travel with clarity & confidence
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white">
        <div className="wrap py-20 sm:py-28">
          <SectionHeading
            eyebrow="Why Golden Trip"
            title="The Principles Behind Every Journey"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.08} className="h-full">
                  <article className="group h-full border border-brand-900/10 bg-cream-50/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-white">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold-500/35 bg-gold-50 text-gold-600 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-brand-950">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg text-charcoal-900">{p.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-charcoal-500">{p.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* What you can expect */}
      <section className="bg-brand-950">
        <div className="wrap py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <div>
                <SectionHeading
                  dark
                  eyebrow="The Golden Trip Standard"
                  title="What You Can Expect"
                  align="left"
                />
                <p className="mt-5 max-w-md text-base leading-relaxed text-cream-200/80">
                  Whether you are traveling for worship, leisure or business, these are the standards we hold
                  ourselves to on every trip we plan.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <img src={IMAGES.aboutDesktop} alt="" className="h-24 w-40 object-cover" aria-hidden="true" />
                  <img src={IMAGES.kashmir} alt="" className="h-24 w-40 object-cover" aria-hidden="true" />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {promises.map((p, i) => (
                <Reveal key={p} delay={i * 0.06}>
                  <div className="flex h-full items-start gap-3 border border-cream-50/15 bg-brand-900/40 p-5">
                    <FiCheck className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-cream-100/90">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        image={IMAGES.cappadocia}
        eyebrow="Let's Plan Together"
        title="Your Next Journey Starts Here"
        text={`Speak with our team today — no pressure, just honest advice about your next trip.`}
      />
    </>
  )
}