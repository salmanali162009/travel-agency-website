import { motion } from 'framer-motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 26,
  once = true,
  as: Tag = motion.div,
  ...rest
}) {
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}