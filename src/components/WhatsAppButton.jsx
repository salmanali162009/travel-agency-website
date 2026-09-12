import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappLink } from '../data/site.js'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Golden Trip on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#23B35A] text-white shadow-[0_12px_30px_-8px_rgba(35,179,90,0.65)] transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#23B35A]/30 [animation-duration:2.4s]" aria-hidden="true" />
      <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
    </motion.a>
  )
}