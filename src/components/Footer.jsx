import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5'
import { site, whatsappLink } from '../data/site.js'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/umrah', label: 'Umrah' },
  { to: '/hajj', label: 'Hajj' },
  { to: '/international-tours', label: 'International Tours' },
  { to: '/domestic-tours', label: 'Domestic Tours' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { to: '/umrah', label: 'Umrah' },
  { to: '/hajj', label: 'Hajj' },
  { to: '/visa-services', label: 'Visa Assistance' },
  { to: '/contact', label: 'Flights' },
  { to: '/contact', label: 'Hotels' },
  { to: '/contact', label: 'Customized Tours' },
]

const socials = [
  { label: 'Facebook', href: site.social.facebook, icon: FaFacebookF },
  { label: 'Instagram', href: site.social.instagram, icon: FaInstagram },
  { label: 'WhatsApp', href: whatsappLink(), icon: FaWhatsapp },
]

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-cream-200">
      <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="Golden Trip — home">
            <span className="grid h-11 w-11 rotate-45 place-items-center border border-gold-500/70">
              <span className="-rotate-45 font-display text-base font-semibold text-gold-500">GT</span>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold text-cream-50">Golden Trip</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                Tours & Travels
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-200/70">
            Trusted travel planning for Umrah, Hajj and journeys across Pakistan and the world — arranged with
            care, comfort and complete support.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-400"
              >
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Quick Links</h3>
          <ul className="mt-6 space-y-3">
            {quickLinks.map(l => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="inline-block text-sm text-cream-200/75 transition-colors hover:translate-x-0.5 hover:text-gold-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Footer services">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Services</h3>
          <ul className="mt-6 space-y-3">
            {serviceLinks.map(l => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="inline-block text-sm text-cream-200/75 transition-colors hover:translate-x-0.5 hover:text-gold-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Contact</h3>
          <ul className="mt-6 space-y-4 text-sm text-cream-200/75">
            <li className="flex items-start gap-3">
              <IoCallOutline className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`tel:${site.phoneRaw}`} className="transition-colors hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaWhatsapp className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IoMailOutline className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IoLocationOutline className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-cream-200/55 sm:flex-row sm:text-left">
          <p>© 2026 {site.businessName}. All Rights Reserved.</p>
          <p className="max-w-md sm:text-right">Demo concept website — replace placeholder content with live business details before launch.</p>
        </div>
      </div>
    </footer>
  )
}