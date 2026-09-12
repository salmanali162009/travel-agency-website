import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

export default function FAQ({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div>
      {items.map(faq => {
        const isOpen = openId === faq.id
        return (
          <div key={faq.id} className="border-b border-brand-900/10">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-5 py-6 text-left"
            >
              <span className={`font-display text-lg transition-colors duration-300 ${isOpen ? 'text-gold-700' : 'text-charcoal-900 group-hover:text-gold-700'}`}>
                {faq.q}
              </span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'rotate-45 border-gold-500 bg-gold-500 text-brand-950'
                    : 'border-brand-900/20 text-charcoal-600 group-hover:border-gold-500 group-hover:text-gold-600'
                }`}
                aria-hidden="true"
              >
                <FiPlus className="h-4 w-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-charcoal-500">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}