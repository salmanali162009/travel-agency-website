import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import Button from './Button.jsx'
import { travelTypes } from '../utils/seo.js'

const fieldCls =
  'mt-2 w-full rounded-md border border-charcoal-200 bg-cream-50 px-4 py-3 text-sm text-charcoal-800 transition-colors placeholder:text-charcoal-300 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20'

function Label({ children }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal-400">{children}</span>
  )
}

export default function ContactForm({ prefill }) {
  const data = prefill ?? {}
  const [values, setValues] = useState({
    name: data.name || '',
    email: '',
    phone: '',
    travelType: data.travelType || '',
    destination: data.destination || '',
    travelDate: data.travelDate || '',
    travelers: '',
    message:
      data.message ||
      (data.packageName ? `I'm interested in the ${data.packageName}. Please share details.` : ''),
  })
  const [submitted, setSubmitted] = useState(false)

  const set = key => e => setValues(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex h-full flex-col items-center justify-center border border-brand-900/10 bg-white p-10 text-center sm:p-14"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-700">
          <FiCheckCircle className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-2xl text-charcoal-900">Request Received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-500">
          Thank you, {values.name || 'traveler'}. This demo form has captured your request. Connect it to your
          email or CRM so inquiries reach the Golden Trip team.
        </p>
        <Button variant="outline" size="md" className="mt-8" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-brand-900/10 bg-white p-7 sm:p-10"
      aria-label="Quote request form"
    >
      <h3 className="font-display text-2xl text-charcoal-900">Request a Quote</h3>
      {data.packageName && (
        <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold text-gold-700">
          Planning for: {data.packageName}
        </p>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <Label>Full Name</Label>
          <input type="text" required value={values.name} onChange={set('name')} placeholder="Your full name" className={fieldCls} autoComplete="name" />
        </label>

        <label className="block">
          <Label>Email</Label>
          <input type="email" required value={values.email} onChange={set('email')} placeholder="you@email.com" className={fieldCls} autoComplete="email" />
        </label>

        <label className="block">
          <Label>Phone / WhatsApp</Label>
          <input type="tel" value={values.phone} onChange={set('phone')} placeholder="+92 3XX XXXXXXX" className={fieldCls} autoComplete="tel" />
        </label>

        <label className="block">
          <Label>Travel Type</Label>
          <select value={values.travelType} onChange={set('travelType')} className={fieldCls}>
            <option value="">Select travel type</option>
            {travelTypes.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <Label>Destination</Label>
          <input type="text" value={values.destination} onChange={set('destination')} placeholder="Where would you like to go?" className={fieldCls} />
        </label>

        <label className="block">
          <Label>Travel Date</Label>
          <input type="date" value={values.travelDate} onChange={set('travelDate')} className={fieldCls} />
        </label>

        <label className="block sm:col-span-2">
          <Label>Number of Travelers</Label>
          <select value={values.travelers} onChange={set('travelers')} className={fieldCls}>
            <option value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8+</option>
          </select>
        </label>

        <label className="block sm:col-span-2">
          <Label>Message</Label>
          <textarea
            rows={4}
            value={values.message}
            onChange={set('message')}
            placeholder="Tell us about your travel plans or ask anything…"
            className={`${fieldCls} resize-y`}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" arrow>
          Request a Quote
        </Button>
        <p className="text-xs leading-relaxed text-charcoal-300">
          No payment is required to request a quote. We respond with a clear, tailored proposal.
        </p>
      </div>
    </form>
  )
}