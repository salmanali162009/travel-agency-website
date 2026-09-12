import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
  as = 'h2',
}) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const Heading = as

  return (
    <Reveal className={`mx-auto ${align === 'center' ? 'max-w-2xl' : 'max-w-3xl'} flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${align === 'center' ? 'justify-center' : ''} ${dark ? '!text-gold-400' : ''}`}>
          {eyebrow}
        </span>
      )}
      <Heading className={`h-display ${dark ? '!text-cream-50' : ''}`}>{title}</Heading>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? '!text-cream-200/85' : '!text-charcoal-500'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}