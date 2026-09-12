import { motion } from 'framer-motion'
import { IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function PageHero({ image, eyebrow, title, subtitle, crumbs }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-950/70 to-brand-950/95" />

      <div className="wrap relative pt-36 sm:pt-44 pb-20 sm:pb-24">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 flex items-center gap-1.5 text-xs font-medium tracking-wider text-cream-200/70"
        >
          <Link to="/" className="transition-colors hover:text-gold-300">
            Home
          </Link>
          <IoChevronForward aria-hidden="true" className="text-cream-200/40" />
          <span className="text-gold-300">{crumbs}</span>
        </motion.nav>

        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-300"
          >
            <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl font-medium leading-[1.1] text-cream-50 sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-cream-200/85 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}