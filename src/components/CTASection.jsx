import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { whatsappLink } from '../data/site.js'

export default function CTASection({
  image,
  eyebrow = 'Your Journey Awaits',
  title = 'Ready To Plan Your Next Journey?',
  text = 'Tell us where you want to go and let our travel team help you plan the right experience.',
  primaryLabel = 'Plan My Trip',
  primaryTo = '/contact',
  secondaryLabel = 'WhatsApp Us',
  showSecondary = true,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      {image && (
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10"
        >
          <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
        </motion.div>
      )}
      <div className="absolute inset-0 -z-10 bg-brand-950/72" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-brand-950/40" aria-hidden="true" />

      <div className="wrap flex flex-col items-start py-24 sm:py-28 lg:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-gold-300">
              <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
              {eyebrow}
            </span>
            <h2 className="font-display text-3xl font-medium leading-[1.12] text-cream-50 sm:text-5xl">{title}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-200/85 sm:text-lg">{text}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to={primaryTo} size="lg" arrow>
                {primaryLabel}
              </Button>
              {showSecondary && (
                <Button href={whatsappLink()} size="lg" variant="whatsapp" arrow>
                  <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <FiArrowUpRight className="pointer-events-none absolute -bottom-24 -right-24 hidden h-[26rem] w-[26rem] text-cream-50/[0.03] lg:block" aria-hidden="true" />
    </section>
  )
}