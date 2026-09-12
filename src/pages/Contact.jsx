import { useLocation } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { usePageMeta } from '../utils/seo.js'
import { site, whatsappLink } from '../data/site.js'
import { IMAGES } from '../data/images.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Reveal from '../components/Reveal.jsx'

const channels = [
  {
    icon: FiPhone,
    label: 'Call Us',
    value: site.phone,
    href: `tel:${site.phoneRaw}`,
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: site.whatsapp,
    href: whatsappLink('Hello Golden Trip, I would like to discuss a travel plan.'),
  },
  {
    icon: FiMail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
]

export default function Contact() {
  usePageMeta(
    'Contact Golden Trip Tours & Travels',
    'Request a quotation for Umrah, Hajj, international or domestic travel. Contact Golden Trip Tours & Travels by phone, WhatsApp, email or the quote form.',
  )
  const { state } = useLocation()
  const prefill = state?.prefill ?? null

  return (
    <>
      <PageHero
        image={IMAGES.beach}
        crumbs="Contact"
        eyebrow="Get In Touch"
        title="Request Your Travel Quote"
        subtitle="No fixed prices online — tell us your plan and we'll prepare a clear, personalized quotation for you."
      />

      <section className="wrap py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Contact" title="Talk To Our Team" align="left" />
              <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal-500">
                Prefer to reach out directly? Call, WhatsApp or email us and we will get back to you as soon as
                possible.
              </p>

              <div className="mt-9 flex flex-col gap-4">
                {channels.map(c => {
                  const Icon = c.icon
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 border border-brand-900/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/50"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-500/35 bg-gold-50 text-gold-600 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-brand-950">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal-400">
                          {c.label}
                        </span>
                        <span className="mt-1 block truncate font-display text-lg text-charcoal-900 group-hover:text-gold-700">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  )
                })}
                <div className="flex items-start gap-5 border border-brand-900/10 bg-cream-100 p-5">
                  <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal-400">
                      Location
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-charcoal-600">{site.location}</span>
                  </span>
                </div>
              </div>

              <div className="mt-9 rounded-md bg-brand-900 p-6">
                <p className="font-display text-lg text-cream-50">Response Times</p>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/80">
                  We normally respond to quotes and questions the same working day. Urgent or last-minute requests
                  are best sent via WhatsApp or phone call.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-brand-900/10 bg-white p-7 sm:p-10">
              <SectionHeading eyebrow="Free Quotation" title="Send Your Travel Details" align="left" />
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-charcoal-500">
                Fill in what you can — we will follow up with availability, options and a clear, no-obligation
                quotation.
              </p>
              <div className="mt-8">
                <ContactForm prefill={prefill} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap pb-16 sm:pb-20">
          <SectionHeading eyebrow="Find Us" title="Our Location" subtitle="Drop by our office, or use the map below to plan your visit." />
          <div className="mt-10 overflow-hidden border border-brand-900/10 shadow-[0_20px_60px_-35px_rgba(7,42,30,0.45)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96654.91532071824!2d67.1203248!3d24.9012292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ef584cf87f5%3A0xfc8ddda3ac96929b!2sGolden%20Trip%20Tours%20%26%20Travels!5e1!3m2!1sen!2s!4v1789202902827!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Golden Trip Tours &amp; Travels location map"
              className="h-[420px] w-full sm:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-950">
        <div className="wrap py-16 sm:py-20">
          <div className="grid items-center gap-8 rounded-md bg-cream-100 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <h2 className="font-display text-2xl text-charcoal-900 sm:text-3xl">Fastest For Umrah &amp; Hajj Bookings</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal-500">
                Umrah and Hajj availability changes quickly. For the fastest response on these bookings, reach us on
                WhatsApp or by phone directly — we will confirm current availability and options right away.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappLink('Hello Golden Trip, I need urgent assistance with an Umrah / Hajj booking.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#1fb958]"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                WhatsApp Now
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-md bg-brand-900 px-6 py-3.5 text-sm font-bold text-gold-300 transition-colors duration-300 hover:bg-brand-800"
              >
                <FiPhone className="h-4 w-4" aria-hidden="true" />
                Call Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}