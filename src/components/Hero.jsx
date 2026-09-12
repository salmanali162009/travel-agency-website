import { motion, useScroll, useTransform } from 'framer-motion'
import { IMAGES } from '../data/images.js'
import Button from './Button.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 900], [0, 140])
  const parallaxScale = useTransform(scrollY, [0, 900], [1, 1.1])

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-brand-950">
      {/* Background */}
      <motion.div style={{ y: parallaxY, scale: parallaxScale }} className="absolute inset-0 -z-10">
        <motion.img
          src={IMAGES.hero}
          alt="Golden Trip — world travel and premium journeys"
          initial={{ opacity: 0, scale: 1.14 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/80 via-brand-950/60 to-brand-950/92" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(3,19,12,0.55)_100%)]" aria-hidden="true" />

      {/* Content */}
      <motion.div variants={container} initial="hidden" animate="show" className="wrap relative pb-40 pt-28 sm:pt-32">
        <div className="max-w-3xl">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold-400" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              Trusted Travel Services
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[2.6rem] font-medium leading-[1.08] text-cream-50 sm:text-6xl lg:text-7xl"
          >
            Your Journey Begins With{' '}
            <span className="relative inline-block text-gold-400 italic">
              Golden Trip
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream-200/85 sm:text-lg"
          >
            Discover unforgettable journeys, trusted travel services and carefully designed packages
            for Umrah, Hajj and destinations around the world.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/packages" size="lg" arrow>
              Explore Packages
            </Button>
            <Button to="/contact" size="lg" variant="outlineLight" arrow>
              Talk to an Expert
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium tracking-wide text-cream-200/70">
            <span>Personalized Travel</span>
            <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
            <span>Expert Assistance</span>
            <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
            <span>Complete Support</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block h-10 w-px bg-gradient-to-b from-gold-400/0 via-gold-400/80 to-gold-400/0"
        />
      </motion.div>
    </section>
  )
}