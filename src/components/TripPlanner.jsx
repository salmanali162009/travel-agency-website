import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoLocationOutline, IoCalendarOutline, IoPeopleOutline } from 'react-icons/io5'
import { FiGlobe } from 'react-icons/fi'
import Button from './Button.jsx'
import { travelTypes } from '../utils/seo.js'

const inputBase =
  'mt-2 w-full rounded-none border-b border-charcoal-200 bg-transparent py-2.5 text-sm text-charcoal-800 placeholder:text-charcoal-300 focus:border-gold-500 focus:outline-none'

function Field({ label, children }) {
  return (
    <label className="block flex-1">
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal-400">{label}</span>
      {children}
      <span className="sr-only"> {label}</span>
    </label>
  )
}

export default function TripPlanner() {
  const [form, setForm] = useState({
    destination: '',
    type: '',
    date: '',
    travelers: '',
  })
  const navigate = useNavigate()

  const set = key => e => setForm(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/contact', {
      state: {
        prefill: {
          destination: form.destination,
          travelType: form.type,
          travelDate: form.date,
          travelers: form.travelers,
        },
      },
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 rounded-md border border-brand-900/10 bg-white p-7 shadow-[0_30px_60px_-25px_rgba(7,42,30,0.45)] lg:flex-row lg:items-end"
      aria-label="Plan your trip"
    >
      <Field icon={IoLocationOutline} label="Where do you want to go?">
        <div className="relative">
          <IoLocationOutline className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gold-600" aria-hidden="true" />
          <input
            type="text"
            value={form.destination}
            onChange={set('destination')}
            placeholder="Makkah, Dubai, Hunza…"
            className={`${inputBase} pl-6`}
            aria-label="Destination"
          />
        </div>
      </Field>

      <Field icon={FiGlobe} label="Travel Type">
        <div className="relative">
          <FiGlobe className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gold-600" aria-hidden="true" />
          <select value={form.type} onChange={set('type')} className={`${inputBase} pl-6`} aria-label="Travel type">
            <option value="">Select type</option>
            {travelTypes.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </Field>

      <Field icon={IoCalendarOutline} label="Departure Date">
        <div className="relative">
          <IoCalendarOutline className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gold-600" aria-hidden="true" />
          <input
            type="date"
            value={form.date}
            onChange={set('date')}
            className={`${inputBase} pl-6`}
            aria-label="Departure date"
          />
        </div>
      </Field>

      <Field icon={IoPeopleOutline} label="Travelers">
        <div className="relative">
          <IoPeopleOutline className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-gold-600" aria-hidden="true" />
          <select value={form.travelers} onChange={set('travelers')} className={`${inputBase} pl-6`} aria-label="Number of travelers">
            <option value="">Select</option>
            <option>1 – 2 Travelers</option>
            <option>3 – 4 Travelers</option>
            <option>5 – 8 Travelers</option>
            <option>9+ Travelers</option>
          </select>
        </div>
      </Field>

      <Button type="submit" size="lg" className="w-full lg:w-auto" arrow>
        Find My Trip
      </Button>
    </form>
  )
}