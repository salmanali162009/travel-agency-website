import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { IoClose, IoMenu, IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa6'
import { site, whatsappLink } from '../data/site.js'
import Button from './Button.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/umrah', label: 'Umrah' },
  { to: '/hajj', label: 'Hajj' },
  { to: '/international-tours', label: 'International Tours' },
  { to: '/domestic-tours', label: 'Domestic Tours' },
  { to: '/visa-services', label: 'Visa Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function MobileMenu({ dark = false }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className={`grid h-11 w-11 place-items-center rounded-full transition-colors xl:hidden ${
          dark ? 'text-brand-900 hover:bg-brand-900/5' : 'text-cream-50 hover:bg-white/10'
        }`}
      >
        <IoMenu className="h-6 w-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-950 xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="wrap flex h-20 items-center justify-between">
              <Link to="/" className="flex items-center gap-3" aria-label="Golden Trip — home" onClick={() => setOpen(false)}>
                <span className="grid h-10 w-10 rotate-45 place-items-center border border-gold-500/70">
                  <span className="-rotate-45 font-display text-sm font-semibold text-gold-500">GT</span>
                </span>
                <span className="block font-display text-lg font-semibold text-cream-50">Golden Trip</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="grid h-11 w-11 place-items-center rounded-full text-cream-50 hover:bg-white/10"
              >
                <IoClose className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="wrap mt-6 flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl transition-colors ${
                        isActive ? 'text-gold-400' : 'text-cream-100 hover:text-gold-300'
                      }`
                    }
                  >
                    {l.label}
                    <span className="text-xs font-sans tracking-widest text-white/30" aria-hidden="true">
                      0{i + 1}
                    </span>
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.55 }}
                className="mt-10 flex flex-col gap-5"
              >
                <Button to="/contact" size="lg" onClick={() => setOpen(false)}>
                  Plan Your Trip
                </Button>
                <div className="flex flex-col gap-3 text-sm text-cream-200/80">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold-300">
                    <FaWhatsapp className="text-gold-400" aria-hidden="true" /> {site.phone}
                  </a>
                  <a href={`tel:${site.phoneRaw}`} className="flex items-center gap-3 hover:text-gold-300">
                    <IoCallOutline className="text-gold-400" aria-hidden="true" /> {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold-300">
                    <IoMailOutline className="text-gold-400" aria-hidden="true" /> {site.email}
                  </a>
                  <span className="flex items-center gap-3">
                    <IoLocationOutline className="text-gold-400" aria-hidden="true" /> {site.location}
                  </span>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled

  const linkCls = active =>
    `relative py-1 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold-500 after:transition-all after:duration-300 ${
      active
        ? 'text-gold-500 after:w-full'
        : solid
          ? 'text-charcoal-600 hover:text-brand-900 after:w-0 hover:after:w-full'
          : 'text-cream-100/90 hover:text-white after:w-0 hover:after:w-full'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`transition-all duration-500 ${
          solid
            ? 'border-b border-brand-900/10 bg-cream-50/95 shadow-[0_10px_30px_-20px_rgba(22,26,24,0.35)] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className={`wrap flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Golden Trip — home">
            <span className="grid h-10 w-10 rotate-45 place-items-center border border-gold-500/70">
              <span className="-rotate-45 font-display text-sm font-semibold text-gold-500">GT</span>
            </span>
            <span className="leading-tight">
              <span className={`block font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${solid ? 'text-brand-900' : 'text-cream-50'}`}>
                Golden Trip
              </span>
              <span className={`block text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${solid ? 'text-gold-600' : 'text-gold-300'}`}>
                Tours & Travels
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden items-center gap-6 2xl:gap-8 xl:flex">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => linkCls(isActive)}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <Button to="/contact" size="md">
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile trigger + menu (keyed by pathname so navigation remounts & closes it) */}
          <MobileMenu key={pathname} dark={solid} />
        </div>
      </div>
    </header>
  )
}